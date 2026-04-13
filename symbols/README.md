<div align="center">

<a href="https://vue-symbols.dev">
<img src="https://raw.githubusercontent.com/dahrte/vue-symbols/main/www/public/og.png" alt="Vue-Symbols Screenshot" />
</a>

<b style="font-size: 2em;">@vue-symbols/icons</b>

<a href="#-getting-started">Getting Started</a>
<span>|</span>
<a href="#️-utilities">Utilities</a>
<span>|</span>
<a href="#-license">License</a>
<span>|</span>
<a href="https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols">VSCode Theme</a>

[![Vite+](https://npmx.dev/api/registry/badge/name/vite-plus?color=41b883&value=Vite%2B&label=Built+with)](https://viteplus.dev/)
[![npm version](https://npmx.dev/api/registry/badge/version/@vue-symbols/icons?color=41b883)](https://npmx.dev/package/@vue-symbols/icons)
[![License](https://npmx.dev/api/registry/badge/license/@vue-symbols/icons?color=41b883)](https://github.com/dahrte/vue-symbols/blob/main/LICENSE)

</div>

## Introduction

**@vue-symbols/icons** is a library for Vue 3 with the icons of the VSCode theme [**Symbols**](https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols) created by [Miguel Solorio (@miguelsolorio)](https://github.com/miguelsolorio):

- 📦 **+300** files & folders icons.
- ☁️ Render-function components — **SSR-safe** out of the box.
- 🍃 **Lightweight** & **tree-shakable** ESM.
- 💙 Built with **TypeScript** — types bundled.
- 🚀 **SVG optimized** (no `width` / `height` baked in, scales freely).

## Getting Started

> @vue-symbols/icons requires **Vue >=3.3.0**.

### Install

```bash
# with vite+:
vp add @vue-symbols/icons

# with pnpm:
pnpm add @vue-symbols/icons

# with npm:
npm install @vue-symbols/icons

# with yarn:
yarn add @vue-symbols/icons

# with bun:
bun add @vue-symbols/icons
```

### Usage

**Using file and folder icons:**

```vue
<script setup lang="ts">
import { Astro, FolderBlue } from "@vue-symbols/icons";
</script>

<template>
  <Astro :width="128" :height="128" />
  <FolderBlue :width="128" :height="128" />
</template>
```

**Only file icons:**

```vue
<script setup lang="ts">
import { Astro, Docker } from "@vue-symbols/icons/files";
</script>

<template>
  <Astro :width="128" :height="128" />
  <Docker :width="128" :height="128" />
</template>
```

**Only folder icons:**

```vue
<script setup lang="ts">
import { FolderApp, FolderConfig } from "@vue-symbols/icons/folders";
</script>

<template>
  <FolderConfig :width="128" :height="128" />
  <FolderApp :width="128" :height="128" />
</template>
```

> ✍️ Change the name of the icon:

```vue
<script setup lang="ts">
import { Bun as BunIcon } from "@vue-symbols/icons";
</script>

<template>
  <BunIcon :width="128" :height="128" />
</template>
```

> 🎨 Style with classes — every icon's root `<svg>` forwards `attrs`, so `class`, `style`, and any standard SVG attribute work as expected:

```vue
<template>
  <Vue class="size-12 text-teal-500" />
  <FolderSrc style="color: var(--accent)" />
</template>
```

## Utilities

### `FileIcon`

Get the file icon component for a given file name or extension.

**`FileIcon`** component:

```vue
<script setup lang="ts">
import { FileIcon } from "@vue-symbols/icons";
</script>

<template>
  <FileIcon filename="example.ts" />
</template>
```

**Resolution order**:

1. **Exact filename match** — e.g. `package.json`, `tsconfig.json`, `vite.config.ts`. The full list lives in [`src/utils/file-names.ts`](./src/utils/file-names.ts).
2. **Longest compound extension first** — e.g. `app.component.ts` resolves to the Angular component icon (via `component.ts`) before falling back to `ts`. The full list lives in [`src/utils/file-extensions.ts`](./src/utils/file-extensions.ts).
3. **Fallback** — if nothing matches, the generic `Document` icon is rendered.

**Options**:

- `filename` (`string`, required): The name of the file (e.g., `"example.ts"`, `"index.html"`, `"package.json"`).

```vue
<FileIcon filename="package.json" />
```

- Forwarded SVG attributes — `class`, `style`, `width`, `height`, etc. are passed straight through to the underlying icon's `<svg>`.

```vue
<FileIcon filename="myfile.ts" :width="48" :height="48" />
```

### `FolderIcon`

Get the folder icon component for a given folder name.

**`FolderIcon`** component:

```vue
<script setup lang="ts">
import { FolderIcon } from "@vue-symbols/icons";
</script>

<template>
  <FolderIcon foldername="node_modules" />
</template>
```

**Resolution order**:

1. **Exact folder name match** — e.g. `src`, `node_modules`, `dist`. The full list lives in [`src/utils/folder-names.ts`](./src/utils/folder-names.ts).
2. **Fallback** — if nothing matches, the generic `Folder` icon is rendered.

**Options**:

- `foldername` (`string`, required): The name of the folder (e.g., `"src"`, `"config"`).

```vue
<FolderIcon foldername="src" />
```

- Forwarded SVG attributes — `class`, `style`, `width`, `height`, etc.

```vue
<FolderIcon foldername="app" :width="48" :height="48" />
```

### Types

Prop types are exported alongside the components:

```ts
import type { FileIconProps, FolderIconProps } from "@vue-symbols/icons";

const file: FileIconProps = { filename: "vite.config.ts" };
const folder: FolderIconProps = { foldername: "src" };
```

### Subpath exports

| Import path                  | What you get                                   |
| ---------------------------- | ---------------------------------------------- |
| `@vue-symbols/icons`         | `FileIcon`, `FolderIcon`, and their prop types |
| `@vue-symbols/icons/files`   | All file icon components                       |
| `@vue-symbols/icons/folders` | All folder icon components                     |

## Contribute

1. Fork the repository and clone it.

2. Install dependencies with Vite+:

```bash
# Install the dependencies:
vp install
```

3. Regenerate components and run the build:

```bash
vp run build:components   # Regenerate components from the SVG sources
vp run build              # Full build (build:components + vp pack)
vp dev                    # Watch mode
vp check                  # Format, lint, and type-check
```

## License

[MIT License](./LICENSE).
