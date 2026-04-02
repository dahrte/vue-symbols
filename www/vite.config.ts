import { defineConfig } from 'vite-plus'

export default defineConfig({
  run: {
    tasks: {
      build: {
        command: 'nuxi build',
        dependsOn: ['@vue-symbols/icons#build'],
      },
    },
  },
})
