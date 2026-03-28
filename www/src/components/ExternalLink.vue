<script lang="ts">
import type { HTMLAttributes } from 'vue'

interface ExternalLinkProps {
  to?: string
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { cn } from '@/utils'

const props = defineProps<ExternalLinkProps>()
</script>

<template>
  <a :href="to" target="_blank" :class="cn(props.class)">
    <slot />
  </a>
</template>
