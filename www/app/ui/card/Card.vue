<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <div
    data-slot="card"
    :class="
      cn(
        'group/card overflow-hidden rounded-[14px] border border-border-base bg-surface-subtle bg-size-[10px_10px] dark:bg-surface-base',
        'bg-[repeating-linear-gradient(315deg,--alpha(var(--border-base)/50%)_0,--alpha(var(--border-base)/50%)_1px,transparent_0,transparent_50%)]',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
