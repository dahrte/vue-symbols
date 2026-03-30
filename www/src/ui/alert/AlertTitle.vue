<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h3
    data-slot="alert-title"
    :class="cn('text-content-strong relative col-start-2 row-start-1 font-medium', props.class)"
  >
    <slot />
  </h3>
</template>
