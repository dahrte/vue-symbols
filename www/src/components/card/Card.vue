<script lang="ts">
import Copy from '@/components/card/Copy.vue'
import Download from '@/components/card/Download.vue'
import type { Icons } from '@/data/svgs'

interface CardProps extends Icons {
  size: number
  type: 'files' | 'folders'
}
</script>

<script setup lang="ts">
import { provide, useTemplateRef } from 'vue'

const props = defineProps<CardProps>()

const iconRef = useTemplateRef<HTMLElement>('iconRef')

provide('IconRef', iconRef)
</script>

<template>
  <div
    class="border-border-base -mt-px -ml-px flex flex-col items-center gap-3 border p-6"
    :style="{ '--size': `${size}px` }"
  >
    <component ref="iconRef" :is="icon" class="size-(--size)" />

    <p class="text-sm">{{ name }}</p>

    <div class="flex gap-1">
      <Copy :name :type />
      <Download :name />
    </div>
  </div>
</template>
