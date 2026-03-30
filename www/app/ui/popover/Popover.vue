<script setup lang="ts">
import { PopoverRoot, type PopoverRootEmits, type PopoverRootProps, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<PopoverRootProps>()
const emits = defineEmits<PopoverRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <PopoverRoot v-bind="forwarded" v-slot="slotProps" data-slot="popover">
    <slot v-bind="slotProps" />
  </PopoverRoot>
</template>
