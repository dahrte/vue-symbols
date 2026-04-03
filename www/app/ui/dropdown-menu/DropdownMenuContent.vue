<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  DropdownMenuContent,
  type DropdownMenuContentEmits,
  DropdownMenuPortal,
  type DropdownMenuContentProps as _DropdownMenuContentProps,
  useForwardPropsEmits,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface DropdownMenuContentProps extends _DropdownMenuContentProps {
  class?: HTMLAttributes['class']
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DropdownMenuContentProps>(), {
  align: 'start',
  sideOffset: 5,
})
const emits = defineEmits<DropdownMenuContentEmits>()

const forwarded = useForwardPropsEmits(reactiveOmit(props, 'class'), emits)
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuContent
      v-bind="forwarded"
      data-slot="dropdown-menu-content"
      :class="
        cn(
          'bg-surface-base ring-border-base z-50 grid w-max grid-cols-[auto_1fr_auto] items-center rounded-[10px] p-1 shadow-xs ring outline-none',
          'data-[state=open]:animate-in data-[state=open]:zoom-in-95 origin-(--reka-dropdown-menu-content-transform-origin)',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          props.class,
        )
      "
    >
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
