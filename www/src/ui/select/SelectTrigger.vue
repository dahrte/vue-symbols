<script setup lang="ts">
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import { reactiveOmit } from '@vueuse/core'
import { SelectIcon, SelectTrigger, useForwardProps } from 'reka-ui'

import { cn } from '@/utils'

import { Icon } from '../misc'
import { type SelectTriggerProps, selectTriggerVariants } from './variants'

const props = defineProps<SelectTriggerProps>()

const forwarded = useForwardProps(reactiveOmit(props, ['class', 'size']))
</script>

<template>
  <SelectTrigger
    v-bind="forwarded"
    data-slot="select-trigger"
    :class="cn(selectTriggerVariants({ size }), props.class)"
  >
    <slot />

    <SelectIcon as-child>
      <Icon
        :icon="ArrowDown01Icon"
        class="text-icon-subtle! ml-auto size-4 transition-transform duration-150 ease-in group-data-[state=open]:rotate-180"
      />
    </SelectIcon>
  </SelectTrigger>
</template>
