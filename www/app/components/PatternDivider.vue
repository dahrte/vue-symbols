<script lang="ts">
import type { HTMLAttributes } from 'vue'

interface PatternDividerProps {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { cn } from '@/utils'

const props = defineProps<PatternDividerProps>()
</script>

<template>
  <div
    :class="
      cn(
        'border-border-base bg-[repeating-linear-gradient(315deg,--alpha(var(--border-base)/50%)_0,--alpha(var(--border-base)/50%)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px]',
        props.class,
      )
    "
  ></div>
</template>
