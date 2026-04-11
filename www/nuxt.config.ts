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
    preference: 'dark',
    storage: 'cookie',
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
  fonts: {
    families: [
      {
        name: 'Geist Mono',
        preload: true,
        src: '/fonts/GeistMono.woff2',
        style: 'normal',
        weights: ['100 900'],
      },
      {
        name: 'GeistPixelSquare',
        preload: true,
        src: '/fonts/GeistPixel-Square.woff2',
        style: 'normal',
        weights: ['400'],
      },
    ],
  },
  modules: ['@nuxtjs/color-mode', '@nuxt/fonts', '@vueuse/nuxt'],
  vite: {
    optimizeDeps: {
      include: [
        '@hugeicons/core-free-icons',
        '@hugeicons/vue',
        'clsx',
        'fast-npm-meta',
        'reka-ui',
        'tailwind-merge',
        'tailwind-variants',
      ],
    },
    plugins: [tailwindcss()],
  },
})
