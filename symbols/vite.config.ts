import vue from 'unplugin-vue/rolldown'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: {
    deps: {
      neverBundle: ['vue'],
    },
    dts: {
      vue: true,
    },
    entry: {
      'files/index': 'src/files.ts',
      'folders/index': 'src/folders.ts',
      index: 'src/index.ts',
    },
    exports: {
      devExports: true,
    },
    platform: 'neutral',
    plugins: [vue({ isProduction: true })],
    treeshake: true,
  },
})
