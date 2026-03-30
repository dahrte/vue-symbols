<script setup lang="ts">
import { type AlertProps, alertVariants } from './variants'

const props = defineProps<AlertProps>()
</script>

<template>
  <div data-slot="alert" :class="cn(alertVariants({ variant }), props.class)">
    <div data-slot="alert-background" class="absolute inset-0 bg-linear-to-r from-5% via-transparent via-30%"></div>
    <slot />
  </div>
</template>
