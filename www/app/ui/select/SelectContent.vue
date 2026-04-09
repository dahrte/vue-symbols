<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  SelectContent,
  type SelectContentEmits,
  SelectPortal,
  SelectViewport,
  type SelectContentProps as _SelectContentProps,
  useForwardPropsEmits,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface SelectContentProps extends _SelectContentProps {
  class?: HTMLAttributes['class']
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SelectContentProps>(), {
  align: 'center',
  sideOffset: 5,
  position: 'popper',
})
const emits = defineEmits<SelectContentEmits>()

const forwarded = useForwardPropsEmits(reactiveOmit(props, 'class'), emits)
</script>

<template>
  <SelectPortal>
    <SelectContent
      v-bind="forwarded"
      data-slot="select-content"
      :class="
        cn(
          'min-w-(--reka-select-trigger-width) rounded-[10px] border border-border-base bg-surface-base p-1 shadow-xs',
          'origin-(--reka-select-content-transform-origin) data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          props.class,
        )
      "
    >
      <SelectViewport>
        <slot />
      </SelectViewport>
    </SelectContent>
  </SelectPortal>
</template>
