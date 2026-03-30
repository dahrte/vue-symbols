<script setup lang="ts">
import { SelectItemText } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

interface SelectItemTextProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<SelectItemTextProps>()
</script>

<template>
  <div data-slot="select-item-text" :class="cn('text-content-strong text-sm/5', props.class)">
    <SelectItemText>
      <slot />
    </SelectItemText>
  </div>
</template>
