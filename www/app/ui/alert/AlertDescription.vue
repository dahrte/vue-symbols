<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p data-slot="alert-description" :class="cn('text-content-base relative col-start-2 row-start-2', props.class)">
    <slot />
  </p>
</template>
