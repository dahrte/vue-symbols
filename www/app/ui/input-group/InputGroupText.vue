<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn('flex items-center gap-2 text-sm/5 text-content-muted', props.class)">
    <slot />
  </span>
</template>
