#!/usr/bin/env zx

/**
 * build-components.ts
 *
 * Reads SVG files from www/public/icons/files and www/public/icons/folders,
 * then generates Vue 3 render-function components using defineComponent() + h().
 *
 * Output layout:
 *   src/runtime/files/{Name}.ts    — one component per file icon
 *   src/runtime/folders/{Name}.ts  — one component per folder icon
 *   src/files.ts                   — barrel re-export of all file icons
 *   src/folders.ts                 — barrel re-export of all folder icons
 *
 * Run with:
 *   node scripts/build-components.ts
 */

import { readdirSync, readFileSync, existsSync, rmSync, mkdirSync, writeFileSync } from 'node:fs'
import { resolve, join, basename } from 'node:path'

import { $ } from 'zx'

const _dirname = import.meta.dirname

const REPO_ROOT = join(_dirname, '../..')
const ICONS_PUBLIC = join(REPO_ROOT, 'www/public/icons')
const COMPONENTS_DIR = join(REPO_ROOT, 'symbols/src/runtime')
const BARRELS_DIR = join(REPO_ROOT, 'symbols/src')

const HEADER = `// @vue-symbols/icons\n// Auto-generated. Do not edit.\n`

interface SVGNode {
  tag: string
  attributes: Record<string, string>
  children: SVGNode[]
}

function parseSVG(xml: string) {
  let pointer = 0

  function skipWhitespace() {
    // Any equivalent whitespace
    while (pointer < xml.length && /\s/.test(xml[pointer])) pointer++
  }

  function parseAttributeValue(): string {
    pointer++ // Skip opening quote

    let value = ''
    while (pointer < xml.length && xml[pointer] !== '"') {
      value += xml[pointer]
      pointer++
    }

    pointer++ // Skip closing quote

    return value
  }

  function parseTag(): SVGNode | null {
    skipWhitespace()

    if (pointer >= xml.length || xml[pointer] !== '<') return null

    // Skip comments / processing instructions / doctype
    if (xml.startsWith('<!--', pointer)) {
      pointer = xml.indexOf('-->', pointer) + 3
      return parseTag()
    }

    if (xml.startsWith('<?', pointer)) {
      pointer = xml.indexOf('?>', pointer) + 2
      return parseTag()
    }

    if (xml.startsWith('<!', pointer)) {
      pointer = xml.indexOf('>', pointer) + 1
      return parseTag()
    }

    pointer++ // Skip "<"
    skipWhitespace()

    // Start extracting the tag name. It ends when any equivalent whitespace or ">" is found.
    let tag = ''
    while (pointer < xml.length && !/[\s/>]/.test(xml[pointer])) {
      tag += xml[pointer]
      pointer++
    }

    // Start extracting the attributes
    const attributes: Record<string, string> = {}
    while (pointer < xml.length) {
      skipWhitespace()

      if (xml[pointer] === '/' || xml[pointer] === '>') break

      let attributeName = ''
      // It ends when any equivalent whitespace, "=", "/" or ">" is found.
      while (pointer < xml.length && !/[\s=/>]/.test(xml[pointer])) {
        attributeName += xml[pointer]
        pointer++
      }

      skipWhitespace()

      if (xml[pointer] === '=') {
        pointer++ // Skip "=" to start extracting the attribute value
        skipWhitespace()

        attributes[attributeName] = parseAttributeValue()
      } else {
        attributes[attributeName] = ''
      }
    }

    // Self closing tag
    if (xml[pointer] === '/') {
      pointer += 2 // Skip "/>"

      return { tag, attributes, children: [] }
    }

    pointer++ // Skip ">"

    // Start parsing children
    const children: SVGNode[] = []
    while (pointer < xml.length) {
      skipWhitespace()

      if (xml.startsWith(`</${tag}>`, pointer)) {
        pointer = xml.indexOf('>', pointer) + 1
        break
      }

      if (xml[pointer] === '<') {
        const child = parseTag()
        if (child) children.push(child)
      } else {
        while (pointer < xml.length && xml[pointer] !== '<') pointer++
      }
    }

    return { tag, attributes, children }
  }

  const root = parseTag()
  if (!root) throw new Error('Failed to parse SVG file.')

  return root
}

// ---------------------------------------------------------------------------
// Component generation — convert SVGNode tree into h() call source code.
// ---------------------------------------------------------------------------

// Attributes to drop from the root <svg> element.
const SVG_DROP_ATTR = new Set(['width', 'height'])

function escapeStr(s: string): string {
  // Replace “\” with “\\” and “‘” with “\’”
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function attributesToVNodeProps(attributes: Record<string, string>, root: boolean): string {
  const entries = Object.entries(attributes).filter(([key]) => !(root && SVG_DROP_ATTR.has(key)))
  if (!entries.length) return '{}'

  const parts = entries.map(([key, value]) => {
    // kebab-case key need quoting
    const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `'${key}'`
    return `${safeKey}: '${escapeStr(value)}'`
  })

  return root ? `{ ${parts.join(', ')}, ...attrs }` : `{ ${parts.join(', ')} }`
}

function nodeToVDOM(node: SVGNode, root: boolean): string {
  const attributes = attributesToVNodeProps(node.attributes, root)

  if (node.children.length === 0) {
    return `h('${node.tag}', ${attributes})`
  }

  const children = node.children.map((c) => nodeToVDOM(c, false))

  return [`h('${node.tag}', ${attributes}, [`, children.join(',\n'), '])'].join('\n')
}

function generateComponent(name: string, node: SVGNode) {
  const content = nodeToVDOM(node, true)

  return [
    HEADER,
    `import { defineComponent, h } from 'vue'`,
    '',
    'export default defineComponent({',
    `  name: '${name}',`,
    '  setup(_, { attrs }) {',
    `    return () => ${content.trim()}`,
    '  },',
    '})',
    '',
  ].join('\n')
}

// ---------------------------------------------------------------------------
// Read icons, write components & barrel files.
// ---------------------------------------------------------------------------

function processIcons(category: 'files' | 'folders') {
  const iconsPath = join(ICONS_PUBLIC, category)
  const outPath = join(COMPONENTS_DIR, category)

  // Clean & recreate output directory
  if (existsSync(outPath)) rmSync(outPath, { recursive: true })
  mkdirSync(outPath, { recursive: true })

  const svgFiles = readdirSync(iconsPath)
    .filter((f) => f.endsWith('.svg'))
    .sort()

  const exports: { name: string; path: string }[] = []

  for (const file of svgFiles) {
    const name = basename(file, '.svg')
    const fileContent = readFileSync(join(iconsPath, file), 'utf-8')
    const tree = parseSVG(fileContent)
    const component = generateComponent(name, tree)

    writeFileSync(join(outPath, `${name}.ts`), component, 'utf-8')

    exports.push({ name, path: `./runtime/${category}/${name}` })
  }

  // Write barrel files
  const barrelLines = [HEADER, ...exports.map((e) => `export { default as ${e.name} } from '${e.path}'`), '']
  writeFileSync(join(BARRELS_DIR, `${category}.ts`), barrelLines.join('\n'), 'utf-8')

  console.log(`🗸 Created ${exports.length} ${category} components.`)
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  processIcons('files')
  processIcons('folders')

  const paths = ['src/runtime/files', 'src/runtime/folders', 'src/files.ts', 'src/folders.ts']

  console.log('Formatting...')
  await $`vp fmt ${paths} --write`

  console.log('Done!')
}

await main()
