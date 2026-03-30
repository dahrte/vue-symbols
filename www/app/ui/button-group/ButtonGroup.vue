<script setup lang="ts">
import { buttonGroupVariants, type ButtonGroupProps } from './variants'

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  orientation: 'horizontal',
})
</script>

<template>
  <div
    role="group"
    data-slot="button-group"
    :data-orientation="orientation"
    :class="cn(buttonGroupVariants({ orientation }), props.class)"
  >
    <slot />
  </div>
</template>
