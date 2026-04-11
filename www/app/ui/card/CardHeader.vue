<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <div data-slot="card-header" :class="cn('relative px-1 py-2', props.class)">
    <slot />
  </div>
</template>
