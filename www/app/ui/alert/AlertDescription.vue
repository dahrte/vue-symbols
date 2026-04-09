<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p data-slot="alert-description" :class="cn('relative col-start-2 row-start-2 text-content-base', props.class)">
    <slot />
  </p>
</template>
