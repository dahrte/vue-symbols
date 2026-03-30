<script setup lang="ts">
import { Tick02Icon } from '@hugeicons/core-free-icons'
import { reactiveOmit } from '@vueuse/core'
import {
  SelectItemIndicator,
  type SelectItemIndicatorProps as _SelectItemIndicatorProps,
  useForwardProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { cn } from '@/utils'

import { Icon } from '../misc'

interface SelectItemIndicatorProps extends _SelectItemIndicatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<SelectItemIndicatorProps>()

const forwarded = useForwardProps(reactiveOmit(props, 'class'))
</script>

<template>
  <SelectItemIndicator
    v-bind="forwarded"
    data-slot="select-indicator"
    :class="cn(`[&_svg]:text-icon-base! ml-auto size-4 [&_svg:not([class*='size-'])]:size-4`, props.class)"
  >
    <Icon :icon="Tick02Icon" />
  </SelectItemIndicator>
</template>
