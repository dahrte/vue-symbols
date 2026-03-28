<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { TooltipProvider } from '@/ui/tooltip'

<template>
  <TooltipProvider>
    <Header />
    <RouterView />
    <Footer />
  </TooltipProvider>
</template>
