<script setup lang="ts">
import { inputGroupButtonVariants, type InputGroupButtonProps } from './variants'

const props = withDefaults(defineProps<InputGroupButtonProps>(), {
  size: 'lg',
  icon: false,
  variant: 'ghost',
})
</script>

<template>
  <Button v-bind="props" :class="cn(inputGroupButtonVariants({ size, icon }), props.class)">
    <slot />
  </Button>
</template>
