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
  bodyAttrs: {
    class: 'bg-surface-base font-mono antialiased',
  },
})

useSeoMeta({
  title: 'Vue Symbols',
  description: 'Symbols VSCode Icons Theme by Miguel Solorio, for Vue.',
  ogTitle: 'Vue-Symbols',
  ogDescription: 'Symbols VSCode Icons Theme by Miguel Solorio, for Vue.',
  // ogImage: '[og:image]',
  // ogUrl: '[og:url]',
  // twitterTitle: '[twitter:title]',
  // twitterDescription: '[twitter:description]',
  // twitterImage: '[twitter:image]',
  // twitterCard: 'summary'
})
</script>

<template>
  <TooltipProvider>
    <Header />

    <Container class="w-full px-0">
      <PatternDivider class="h-8 w-full border-b" />
    </Container>

    <Navbar />

    <NuxtPage />

    <Container class="w-full px-0">
      <PatternDivider class="h-8 w-full border-t" />
    </Container>

    <Footer />
  </TooltipProvider>

  <Toaster position="bottom-center" />
</template>
