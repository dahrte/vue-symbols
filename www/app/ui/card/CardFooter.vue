<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <div data-slot="card-footer" :class="cn('relative px-1 py-1', props.class)">
    <slot />
  </div>
</template>
