<script setup lang="ts">
import { reactivePick } from '@vueuse/core'
import { ToastDescription, ToastRoot, type ToastRootEmits, ToastTitle, useForwardPropsEmits } from 'reka-ui'
import { isVNode, onMounted, ref, useTemplateRef } from 'vue'

import type { ToastProps } from './Toast'

const props = defineProps<ToastProps>()
const emits = defineEmits<ToastRootEmits>()

const rootProps = useForwardPropsEmits(reactivePick(props, 'defaultOpen', 'open', 'duration', 'type'), emits)

const el = useTemplateRef('el')
const height = ref(0)

onMounted(() => {
  if (!el.value) return

  setTimeout(() => {
    height.value = el.value?.$el.getBoundingClientRect()?.height
  }, 0)
})

defineExpose({
  height,
})
</script>

<template>
  <ToastRoot ref="el" v-bind="rootProps" :style="{ '--height': height }">
    <Alert :variant="variant" class="shadow-sm">
      <Icon v-if="icon" :icon data-slot="icon" />

      <ToastTitle as-child>
        <AlertTitle>
          {{ props.title }}
        </AlertTitle>
      </ToastTitle>

      <ToastDescription as-child v-if="description">
        <AlertDescription v-if="isVNode(description)">
          <component :is="description" />
        </AlertDescription>

        <AlertDescription v-else>
          {{ description }}
        </AlertDescription>
      </ToastDescription>
    </Alert>
  </ToastRoot>
</template>
