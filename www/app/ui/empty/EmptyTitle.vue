<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div data-slot="empty-title" :class="cn('text-lg/7 font-medium text-content-strong', props.class)">
    <slot />
  </div>
</template>
