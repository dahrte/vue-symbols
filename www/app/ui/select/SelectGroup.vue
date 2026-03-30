<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectGroup, type SelectGroupProps as _SelectGroupProps, useForwardProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface SelectGroupProps extends _SelectGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<SelectGroupProps>()

const forwarded = useForwardProps(reactiveOmit(props, 'class'))
</script>

<template>
  <SelectGroup v-bind="forwarded" data-slot="select-group" :class="cn('flex flex-col items-stretch', props.class)">
    <slot />
  </SelectGroup>
</template>
