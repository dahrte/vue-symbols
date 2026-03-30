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
        'border-border-base bg-[repeating-linear-gradient(315deg,--alpha(var(--color-mauve-700)/35%)_0,--alpha(var(--color-mauve-700)/35%)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] dark:border-mauve-700',
        props.class,
      )
    "
  ></div>
</template>
