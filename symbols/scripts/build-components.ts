/**
 * build-components.ts
 *
 * Reads SVG files from icons/files and icons/folders, then generates
 * Vue 3 render-function components using defineComponent() + h().
 *
 * Output layout:
 *   src/files/{Name}.ts    — one component per file icon
 *   src/folders/{Name}.ts  — one component per folder icon
 *   src/files.ts           — barrel re-export of all file icons
 *   src/folders.ts         — barrel re-export of all folder icons
 *
 * Run with:
 *   node scripts/build-components.ts
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync, existsSync } from 'node:fs'
import { join, basename, resolve } from 'node:path'

const ROOT = resolve(import.meta.dirname, '..')
const ICONS_DIR = join(ROOT, 'icons')
const SRC_DIR = join(ROOT, 'src')

const HEADER = `// @vue-symbols/icons\n// Auto-generated. Do not edit.\n`

// ---------------------------------------------------------------------------
// SVG parser — minimal recursive-descent parser for well-formed SVG
// ---------------------------------------------------------------------------

interface SvgNode {
  tag: string
  attrs: Record<string, string>
  children: SvgNode[]
}

function parseSvg(xml: string): SvgNode {
  let pos = 0

  function skipWhitespace() {
    while (pos < xml.length && /\s/.test(xml[pos]!)) pos++
  }

  function parseAttrValue(): string {
    const quote = xml[pos]!
    pos++ // skip opening quote
    let value = ''
    while (pos < xml.length && xml[pos] !== quote) {
      value += xml[pos]
      pos++
    }
    pos++ // skip closing quote
    return value
  }

  function parseTag(): SvgNode | null {
    skipWhitespace()
    if (pos >= xml.length || xml[pos] !== '<') return null
    // skip comments / processing instructions / doctype
    if (xml.startsWith('<!--', pos)) {
      pos = xml.indexOf('-->', pos) + 3
      return parseTag()
    }
    if (xml.startsWith('<?', pos)) {
      pos = xml.indexOf('?>', pos) + 2
      return parseTag()
    }
    if (xml.startsWith('<!', pos)) {
      pos = xml.indexOf('>', pos) + 1
      return parseTag()
    }

    pos++ // skip '<'
    skipWhitespace()

    // read tag name
    let tag = ''
    while (pos < xml.length && !/[\s/>]/.test(xml[pos]!)) {
      tag += xml[pos]
      pos++
    }

    // read attributes
    const attrs: Record<string, string> = {}
    while (pos < xml.length) {
      skipWhitespace()
      if (xml[pos] === '/' || xml[pos] === '>') break
      let attrName = ''
      while (pos < xml.length && !/[\s=/>]/.test(xml[pos]!)) {
        attrName += xml[pos]
        pos++
      }
      skipWhitespace()
      if (xml[pos] === '=') {
        pos++ // skip '='
        skipWhitespace()
        attrs[attrName] = parseAttrValue()
      } else {
        attrs[attrName] = ''
      }
    }

    // self-closing?
    if (xml[pos] === '/') {
      pos++ // skip '/'
      pos++ // skip '>'
      return { tag, attrs, children: [] }
    }
    pos++ // skip '>'

    // parse children
    const children: SvgNode[] = []
    while (pos < xml.length) {
      skipWhitespace()
      if (xml.startsWith(`</${tag}`, pos)) {
        pos = xml.indexOf('>', pos) + 1
        break
      }
      if (xml[pos] === '<') {
        const child = parseTag()
        if (child) children.push(child)
      } else {
        // skip text content
        while (pos < xml.length && xml[pos] !== '<') pos++
      }
    }

    return { tag, attrs, children }
  }

  const root = parseTag()
  if (!root) throw new Error('Failed to parse SVG')
  return root
}

// ---------------------------------------------------------------------------
// Code generation — convert SvgNode tree into h() call source code
// ---------------------------------------------------------------------------

// Attributes to drop from the root <svg> element
const SVG_ROOT_DROP = new Set(['width', 'height'])

function escapeStr(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function attrsToSource(attrs: Record<string, string>, isRoot: boolean): string {
  const entries = Object.entries(attrs).filter(([key]) => !(isRoot && SVG_ROOT_DROP.has(key)))
  if (entries.length === 0) return '{}'

  const parts = entries.map(([key, value]) => {
    // Keys with hyphens need quoting
    const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `'${key}'`
    return `${safeKey}: '${escapeStr(value)}'`
  })
  return `{ ${parts.join(', ')} }`
}

function nodeToSource(node: SvgNode, indent: string, isRoot: boolean): string {
  const attrsStr = attrsToSource(node.attrs, isRoot)

  if (node.children.length === 0) {
    return `${indent}h('${node.tag}', ${attrsStr})`
  }

  const childIndent = indent + '  '
  const childSources = node.children.map((c) => nodeToSource(c, childIndent, false))

  return [`${indent}h('${node.tag}', ${attrsStr}, [`, childSources.join(',\n'), `${indent}])`].join('\n')
}

function generateComponent(name: string, svgNode: SvgNode): string {
  const body = nodeToSource(svgNode, '    ', true)

  return [
    HEADER,
    `import { defineComponent, h } from 'vue'`,
    '',
    'export default defineComponent({',
    `  name: '${name}',`,
    '  render() {',
    `    return ${body.trimStart()}`,
    '  },',
    '})',
    '',
  ].join('\n')
}

// ---------------------------------------------------------------------------
// File I/O — read icons, write components & barrel files
// ---------------------------------------------------------------------------

function processCategory(category: 'files' | 'folders') {
  const iconsPath = join(ICONS_DIR, category)
  const outPath = join(SRC_DIR, category)

  // Clean & recreate output directory
  if (existsSync(outPath)) rmSync(outPath, { recursive: true })
  mkdirSync(outPath, { recursive: true })

  const svgFiles = readdirSync(iconsPath)
    .filter((f) => f.endsWith('.svg'))
    .sort()

  const exports: { name: string; path: string }[] = []

  for (const file of svgFiles) {
    const name = basename(file, '.svg')
    const svgContent = readFileSync(join(iconsPath, file), 'utf-8')
    const svgTree = parseSvg(svgContent)
    const componentSource = generateComponent(name, svgTree)

    const outFile = join(outPath, `${name}.ts`)
    writeFileSync(outFile, componentSource, 'utf-8')

    exports.push({ name, path: `./${category}/${name}` })
  }

  // Write barrel file
  const barrelLines = [HEADER, ...exports.map((e) => `export { default as ${e.name} } from '${e.path}'`), '']
  writeFileSync(join(SRC_DIR, `${category}.ts`), barrelLines.join('\n'), 'utf-8')

  console.log(`✓ ${category}: ${exports.length} components`)
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

processCategory('files')
processCategory('folders')
console.log('Done.')
