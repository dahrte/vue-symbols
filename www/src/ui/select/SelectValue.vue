<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectValue, useForwardProps, type SelectValueProps as _SelectValueProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

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
      cn('text-content-strong *:data-placeholder:text-content-muted text-start text-sm/5 select-none', props.class)
    "
  >
    <SelectValue v-bind="forwarded">
      <slot />
    </SelectValue>
  </div>
</template>
