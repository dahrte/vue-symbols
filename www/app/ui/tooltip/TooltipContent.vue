<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  TooltipContent,
  type TooltipContentEmits,
  TooltipPortal,
  type TooltipContentProps as _TooltipContentProps,
  useForwardPropsEmits,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface TooltipContentProps extends _TooltipContentProps {
  class?: HTMLAttributes['class']
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TooltipContentProps>(), {
  sideOffset: 5,
  align: 'center',
})
const emits = defineEmits<TooltipContentEmits>()

const forwarded = useForwardPropsEmits(reactiveOmit(props, 'class'), emits)
</script>

<template>
  <TooltipPortal>
    <TooltipContent
      v-bind="{ ...$attrs, ...forwarded }"
      data-slot="tooltip-content"
      :class="
        cn(
          'z-50 inline-flex w-fit items-center rounded-[10px] border border-border-strong/30 bg-surface-hover px-2 py-1 text-xs font-medium text-balance text-primary select-none',
          'data-[state=delayed-open]:animate-in data-[state=delayed-open]:zoom-in-95',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          props.class,
        )
      "
    >
      <slot />
    </TooltipContent>
  </TooltipPortal>
</template>
