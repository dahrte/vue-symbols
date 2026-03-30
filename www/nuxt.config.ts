import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    rootAttrs: {
      class: 'flex min-h-screen flex-col',
    },
  },
  colorMode: {
    classSuffix: '',
    dataValue: 'theme',
    disableTransition: true,
    storageKey: 'theme',
  },
  compatibilityDate: '2026-01-14',
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/ui',
      pathPrefix: false,
      extensions: ['vue'],
    },
  ],
  css: ['~/assets/css/global.css'],
  devServer: {
    port: 5999,
  },
  devtools: {
    enabled: true,
  },
  experimental: {
    typedPages: true,
  },
  modules: ['@nuxtjs/color-mode', '@vueuse/nuxt'],
  vite: {
    optimizeDeps: {
      include: [
        '@hugeicons/core-free-icons',
        '@hugeicons/vue',
        'clsx',
        'reka-ui',
        'tailwind-merge',
        'tailwind-variants',
      ],
    },
    plugins: [tailwindcss()],
  },
})
