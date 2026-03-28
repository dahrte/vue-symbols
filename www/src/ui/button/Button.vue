<script setup lang="ts">
import { Primitive } from 'reka-ui'

import { cn } from '@/utils'

import { type ButtonProps, buttonVariants } from './variants'

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  icon: false,
})
</script>

<template>
  <Primitive :as :as-child data-slot="button" :class="cn(buttonVariants({ variant, size, icon }), props.class)">
    <slot />
  </Primitive>
</template>
