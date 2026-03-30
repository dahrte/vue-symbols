<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectItem, type SelectItemProps as _SelectItemProps, useForwardProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

interface SelectItemProps extends _SelectItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<SelectItemProps>()

const forwarded = useForwardProps(reactiveOmit(props, 'class'))
</script>

<template>
  <SelectItem
    v-bind="forwarded"
    data-slot="select-item"
    :class="
      cn(
        'data-highlighted:bg-surface-hover flex items-center gap-2 rounded-md px-2.5 py-1.5 outline-none select-none',
        '[&_svg]:text-icon-subtle [&_svg]:size-4',
        props.class,
      )
    "
  >
    <slot />
  </SelectItem>
</template>
