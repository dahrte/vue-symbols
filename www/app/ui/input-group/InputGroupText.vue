<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn('text-content-muted flex items-center gap-2 text-sm/5', props.class)">
    <slot />
  </span>
</template>
