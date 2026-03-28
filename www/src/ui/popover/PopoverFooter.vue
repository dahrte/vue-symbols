<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

interface PopoverFooterProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<PopoverFooterProps>()
</script>

<template>
  <div data-slot="popover-footer" :class="cn('border-border-base grid w-full border-t p-5', props.class)">
    <slot />
  </div>
</template>
