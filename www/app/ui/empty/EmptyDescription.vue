<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div data-slot="empty-description" :class="cn('text-sm/relaxed text-content-subtle', props.class)">
    <slot />
  </div>
</template>
