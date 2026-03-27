import { defineConfig } from 'vite-plus'

export default defineConfig({
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
    rules: {
      'no-console': 'off',
      'no-debugger': 'warn',
      'no-unused-vars': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'typescript/consistent-type-imports': 'error',
      'typescript/no-import-type-side-effects': 'warn',
      'typescript/no-unused-vars': 'off',
    },
    plugins: ['vue'],
  },
  fmt: {
    printWidth: 120,
    semi: false,
    singleQuote: true,
    sortImports: {
      order: 'asc',
    },
    sortPackageJson: true,
    sortTailwindcss: {
      attributes: [':class', 'class'],
    },
  },
  staged: {
    '*.{js,jsx,mjs,ts,tsx,vue}': 'vp check --fix',
    '*.{json,jsonc}': 'vp fmt --write',
  },
})
