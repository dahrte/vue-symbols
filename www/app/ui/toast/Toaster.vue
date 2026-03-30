<script setup lang="ts">
import { reactiveOmit, reactivePick } from '@vueuse/core'
import { ToastProvider, type ToastProviderProps, ToastViewport, useForwardProps } from 'reka-ui'
import { computed, ref, type HTMLAttributes } from 'vue'

import { useToast } from '@/composables/useToast'

import Toast from './Toast.vue'
import { type ToasterVariants, toasterVariants } from './variants'

interface ToasterProps extends Omit<ToastProviderProps, 'swipeDirection'> {
  expand?: boolean
  class?: HTMLAttributes['class']
  position?: ToasterVariants['position']
}

const props = withDefaults(defineProps<ToasterProps>(), {
  expand: true,
  duration: 5000,
  swipeThreshold: 50,
  position: 'bottom-right',
})

const forwarded = useForwardProps(reactivePick(props, 'duration', 'label', 'swipeThreshold'))

const { toasts, remove } = useToast()

const swipeDirection = computed(() => {
  switch (props.position) {
    case 'top-center':
      return 'up'
    case 'top-right':
    case 'bottom-right':
      return 'right'
    case 'bottom-center':
      return 'down'
    case 'top-left':
    case 'bottom-left':
      return 'left'
  }
})

const hovered = ref(false)
const refs = ref<{ height: number }[]>([])
const height = computed(() => refs.value.reduce((acc, { height }) => acc + height + 16, 0))

function getOffset(index: number) {
  return refs.value.slice(index + 1).reduce((acc, { height }) => acc + height + 16, 0)
}
</script>

<template>
  <ToastProvider v-bind="forwarded" :swipeDirection="swipeDirection">
    <Toast
      ref="refs"
      v-bind="reactiveOmit(toast, 'id')"
      v-for="(toast, index) in toasts"
      :key="toast.id"
      :style="{
        '--index': index - toasts.length + toasts.length,
        '--offset': getOffset(index),
        '--translate': 'calc(var(--offset) * var(--translate-factor))',
        '--transform': 'translateY(var(--translate))',
      }"
      :class="toasterVariants({ position, swipeDirection }).root()"
      @update:open="remove(toast.id)"
    />
    <ToastViewport
      :style="{
        '--height': `${height}px`,
        '--translate-factor': position?.startsWith('top') ? '1px' : '-1px',
      }"
      :class="toasterVariants({ position, swipeDirection }).viewport()"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
    />
  </ToastProvider>
</template>
