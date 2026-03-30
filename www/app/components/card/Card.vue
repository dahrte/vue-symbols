<script lang="ts">
interface CardProps {
  name: string
  size: number
  icon: Component
  type: 'files' | 'folders'
}
</script>

<script setup lang="ts">
const props = defineProps<CardProps>()

const iconRef = useTemplateRef<HTMLElement>('iconRef')

provide('IconRef', iconRef)
</script>

<template>
  <div
    class="border-border-base -mt-px -ml-px flex flex-col items-center gap-3 border p-6"
    :style="{ '--size': `${size}px` }"
  >
    <component ref="iconRef" :is="icon" class="size-(--size)" />

    <p class="text-sm">{{ name }}</p>

    <div class="flex gap-1">
      <Copy :name :type />
      <Download :name />
    </div>
  </div>
</template>
