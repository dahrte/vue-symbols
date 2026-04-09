<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectValue, useForwardProps, type SelectValueProps as _SelectValueProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface SelectValueProps extends _SelectValueProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<SelectValueProps>()

const forwarded = useForwardProps(reactiveOmit(props, 'class'))
</script>

<template>
  <div
    data-slot="select-value"
    :class="
      cn('text-start text-sm/5 text-content-strong select-none *:data-placeholder:text-content-muted', props.class)
    "
  >
    <SelectValue v-bind="forwarded">
      <slot />
    </SelectValue>
  </div>
</template>
