<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div data-slot="empty-description" :class="cn('text-content-subtle text-sm/relaxed', props.class)">
    <slot />
  </div>
</template>
