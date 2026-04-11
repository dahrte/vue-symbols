<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <div
    data-slot="card-content"
    :class="
      cn(
        'relative mx-1 rounded-[10px] border border-border-base bg-surface-base p-3 shadow-md shadow-black/3 dark:bg-surface-subtle',
        'group-not-has-data-[slot=card-footer]/card:mb-1 group-not-has-data-[slot=card-header]/card:mt-1',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
