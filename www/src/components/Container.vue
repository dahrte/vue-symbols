<script lang="ts">
import type { HTMLAttributes } from 'vue'

interface ContainerProps {
  class?: HTMLAttributes['class']
  render?: keyof HTMLElementTagNameMap
}
</script>

<script setup lang="ts">
import { cn } from '@/utils'

const props = withDefaults(defineProps<ContainerProps>(), {
  render: 'div',
})
</script>

<template>
  <component
    :is="render"
    :class="
      cn(
        'border-border-base relative mx-auto px-5 md:max-w-[calc(100vw-2rem)] md:border-x 2xl:max-w-360 dark:border-mauve-700',
        props.class,
      )
    "
  >
    <slot />
  </component>
</template>
