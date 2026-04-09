<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectItem, type SelectItemProps as _SelectItemProps, useForwardProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

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
        'flex items-center gap-2 rounded-md px-2.5 py-1.5 outline-none select-none data-highlighted:bg-surface-hover',
        '[&_svg]:size-4 [&_svg]:text-icon-subtle',
        props.class,
      )
    "
  >
    <slot />
  </SelectItem>
</template>
