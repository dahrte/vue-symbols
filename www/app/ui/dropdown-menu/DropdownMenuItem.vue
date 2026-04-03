<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  DropdownMenuItem,
  type DropdownMenuItemEmits,
  type DropdownMenuItemProps as _DropdownMenuItemProps,
  useForwardPropsEmits,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface DropdownMenuItemProps extends _DropdownMenuItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<DropdownMenuItemProps>()
const emits = defineEmits<DropdownMenuItemEmits>()

const forwarded = useForwardPropsEmits(reactiveOmit(props, 'class'), emits)
</script>

<template>
  <DropdownMenuItem
    v-bind="forwarded"
    data-slot="dropdown-menu-item"
    :class="
      cn(
        [
          'text-content-strong data-highlighted:bg-surface-hover col-span-full grid grid-cols-subgrid items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-sm/5 outline-none select-none *:data-[slot=label]:col-start-2',
          `[&_svg]:text-icon-subtle [&_svg]:row-start-1 [&_svg:not([class*='size-'])]:size-4 [&>svg]:first:col-start-1 [&>svg]:last:col-start-4`,
        ],
        props.class,
      )
    "
  >
    <slot />
  </DropdownMenuItem>
</template>
