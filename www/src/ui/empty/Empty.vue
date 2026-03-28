<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="empty"
    :class="
      cn('flex flex-1 flex-col items-center justify-center gap-6 rounded-lg p-6 text-balance md:p-12', props.class)
    "
  >
    <slot />
  </div>
</template>
