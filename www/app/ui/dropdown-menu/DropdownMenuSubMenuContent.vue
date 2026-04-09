<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import type { DropdownMenuSubContentEmits, DropdownMenuSubContentProps } from 'reka-ui'
import { DropdownMenuPortal, DropdownMenuSubContent, useForwardPropsEmits } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface DropdownMenuSubMenuContentProps extends DropdownMenuSubContentProps {
  class?: HTMLAttributes['class']
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DropdownMenuSubMenuContentProps>(), {
  alignOffset: -5,
  sideOffset: 4,
})
const emits = defineEmits<DropdownMenuSubContentEmits>()

const forwarded = useForwardPropsEmits(reactiveOmit(props, 'class'), emits)
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuSubContent
      v-bind="forwarded"
      data-slot="dropdown-menu-sub-content"
      :class="
        cn(
          'z-50 ml-1 grid w-max origin-(--reka-dropdown-menu-content-transform-origin) grid-cols-[auto_1fr_auto] items-center rounded-[10px] border border-border-base bg-surface-base p-1 shadow-xs outline-none',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          props.class,
        )
      "
    >
      <slot />
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</template>
