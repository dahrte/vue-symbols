<script setup lang="ts">
import Header from '@/components/Header.vue'
import { TooltipProvider } from '@/ui/tooltip'

<template>
  <TooltipProvider>
    <Header />
    <RouterView />
  </TooltipProvider>
</template>
