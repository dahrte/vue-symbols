<script setup lang="ts">
import Container from '@/components/Container.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import PatternDivider from '@/components/PatternDivider.vue'
import { TooltipProvider } from '@/ui/tooltip'

<template>
  <TooltipProvider>
    <Header />

    <Container class="w-full px-0">
      <PatternDivider class="h-8 w-full border-b" />
    </Container>

    <RouterView />

    <Container class="w-full px-0">
      <PatternDivider class="h-8 w-full border-t" />
    </Container>

    <Footer />
  </TooltipProvider>
</template>
