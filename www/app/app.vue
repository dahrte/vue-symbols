<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'icon', href: '/favicon-32x32.png' },
    { rel: 'icon', href: '/favicon-16x16.png' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  ],
})

useSeoMeta({
  title: 'Vue Symbols',
  description: 'Symbols VSCode Icons Theme by Miguel Solorio, for Vue.',
  ogTitle: 'Vue-Symbols',
  ogDescription: 'Symbols VSCode Icons Theme by Miguel Solorio, for Vue.',
  ogImage: '/og.png',
  ogUrl: 'https://vue-symbols.dev',
  twitterTitle: 'Vue-Symbols',
  twitterDescription: 'Symbols VSCode Icons Theme by Miguel Solorio, for Vue.',
  twitterImage: '/og.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <TooltipProvider>
    <Header />

    <Container class="w-full px-0">
      <PatternDivider class="h-8 w-full border-b" />
    </Container>

    <Topbar />

    <NuxtPage />

    <Container class="w-full px-0">
      <PatternDivider class="h-8 w-full border-t" />
    </Container>

    <Footer />
  </TooltipProvider>

  <Toaster position="bottom-center" />
</template>
