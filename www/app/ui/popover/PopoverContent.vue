<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  PopoverContent,
  type PopoverContentEmits,
  PopoverPortal,
  type PopoverContentProps as _PopoverContentProps,
  useForwardPropsEmits,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface PopoverContentProps extends _PopoverContentProps {
  class?: HTMLAttributes['class']
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<PopoverContentProps>(), {
  align: 'center',
  sideOffset: 10,
})
const emits = defineEmits<PopoverContentEmits>()

const forwarded = useForwardPropsEmits(reactiveOmit(props, 'class'), emits)
</script>

<template>
  <PopoverPortal>
    <PopoverContent
      v-bind="forwarded"
      data-slot="popover-content"
      :class="
        cn(
          'border-border-base bg-surface-base rounded-[14px] border p-3 shadow-xs',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 origin-(--reka-popover-content-transform-origin)',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          props.class,
        )
      "
    >
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>
