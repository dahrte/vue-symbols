<script setup lang="ts">
import { emptyMediaVariants, type EmptyMediaProps } from './variants'

const props = withDefaults(defineProps<EmptyMediaProps>(), {
  variant: 'default',
})
</script>

<template>
  <div data-slot="empty-media" :data-variant="variant" :class="cn(emptyMediaVariants({ variant }), props.class)">
    <slot />
  </div>
</template>
