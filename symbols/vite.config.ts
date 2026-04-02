import { defineConfig } from 'vite-plus'

export default defineConfig({
  run: {
    tasks: {
      'build:components': {
        command: 'node scripts/build-components.ts',
      },
      build: {
        command: 'vp pack',
        dependsOn: ['build:components'],
      },
    },
  },
  pack: {
    deps: {
      neverBundle: ['vue'],
    },
    dts: true,
    entry: {
      'files/index': 'src/files.ts',
      'folders/index': 'src/folders.ts',
      index: 'src/index.ts',
    },
    exports: {
      devExports: true,
    },
    platform: 'neutral',
    treeshake: true,
  },
})
