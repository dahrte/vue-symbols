<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

interface InputGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<InputGroupProps>()
</script>

<template>
  <div
    role="group"
    data-slot="input-group"
    :class="
      cn(
        'border-border-control bg-surface-base relative flex items-center overflow-hidden rounded-[10px] border transition-all',
        // Variants based on alignment.
        'has-[>[data-align=inline-start]]:*:data-[slot=input-group-control]:pl-2',
        'has-[>[data-align=inline-end]]:*:data-[slot=input-group-control]:pr-2',
        'has-[>[data-align*=block]]:h-auto has-[>[data-align*=block]]:flex-col',
        'has-[>[data-align*=inline]]:*:data-[slot=input-group-control]:h-full',
        '*:data-[slot=input-group-control]:border-0 *:data-[slot=input-group-control]:dark:bg-transparent',
        // Focus state
        // 'has-[input:focus-visible]:border-ring/50 has-[input:focus-visible]:ring-ring/20 has-[input:focus-visible]:ring-3',
        // 'has-[textarea:focus-visible]:border-ring/50 has-[textarea:focus-visible]:ring-ring/20 has-[textarea:focus-visible]:ring-3',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
