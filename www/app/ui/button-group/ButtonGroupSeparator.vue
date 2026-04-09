<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Separator, useForwardProps, type SeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface ButtonGroupSeparator extends SeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<ButtonGroupSeparator>()

const forwarded = useForwardProps(reactiveOmit(props, ['class']))
</script>

<template>
  <Separator
    v-bind="forwarded"
    data-slot="button-group-separator"
    :class="
      cn(
        'relative self-stretch bg-border-base data-[orientation=horizontal]:w-px data-[orientation=vertical]:h-px',
        props.class,
      )
    "
  />
</template>
