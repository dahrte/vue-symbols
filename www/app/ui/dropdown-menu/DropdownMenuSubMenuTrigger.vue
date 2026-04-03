<script setup lang="ts">
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { reactiveOmit } from '@vueuse/core'
import type { DropdownMenuSubTriggerProps } from 'reka-ui'
import { DropdownMenuSubTrigger, useForwardProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface DropdownMenuSubMenuTriggerProps extends DropdownMenuSubTriggerProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<DropdownMenuSubMenuTriggerProps>()

const forwarded = useForwardProps(reactiveOmit(props, 'class'))
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwarded"
    data-slot="dropdown-menu-sub-trigger"
    :class="
      cn(
        'text-content-strong col-span-full grid grid-cols-subgrid items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-sm/5 outline-none select-none',
        'data-highlighted:bg-surface-hover data-[state=open]:bg-surface-hover *:data-[slot=label]:col-start-2',
        `[&_svg]:text-icon-subtle [&_svg]:row-start-1 [&_svg:not([class*='size-'])]:size-4 [&>svg]:first:col-start-1 [&>svg]:last:col-start-4`,
        props.class,
      )
    "
  >
    <slot />
    <Icon :icon="ArrowRight01Icon" aria-hidden="true" />
  </DropdownMenuSubTrigger>
</template>
