<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h3
    data-slot="alert-title"
    :class="cn('relative col-start-2 row-start-1 font-medium text-content-strong', props.class)"
  >
    <slot />
  </h3>
</template>
