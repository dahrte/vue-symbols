<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  SliderRange,
  SliderRoot,
  type SliderRootEmits,
  type SliderRootProps,
  SliderThumb,
  SliderTrack,
  useForwardPropsEmits,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface SliderProps extends SliderRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<SliderProps>()
const emits = defineEmits<SliderRootEmits>()

const forwarded = useForwardPropsEmits(reactiveOmit(props, 'class'), emits)
</script>

<template>
  <SliderRoot
    v-bind="forwarded"
    data-slot="slider"
    :class="cn('relative flex h-5 w-full touch-none items-center select-none', props.class)"
  >
    <SliderTrack class="bg-surface-strong relative h-1.5 grow rounded-full">
      <SliderRange class="bg-accent absolute h-full rounded-full" />
    </SliderTrack>

    <SliderThumb
      v-for="(_, key) in modelValue"
      :key
      :class="[
        'border-border-control relative flex size-4 items-center justify-center rounded-full border bg-white outline-none',
        'focus-visible:border-ring/50 focus-visible:ring-ring/20 dark:focus-visible:ring-ring/40 focus-visible:ring-3',
      ]"
    />
  </SliderRoot>
</template>
