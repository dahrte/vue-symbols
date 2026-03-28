<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div data-slot="empty-title" :class="cn('text-content-strong text-lg/7 font-medium', props.class)">
    <slot />
  </div>
</template>
