<script setup lang="ts">
import { useQueryStore } from '@/composables/useQueryStore'
import { Slider } from '@/ui/slider'

const MIN_SIZE = 20
const MAX_SIZE = 70

const { size } = useQueryStore()
</script>

<template>
  <div class="flex flex-col justify-center py-4 md:py-0 md:pl-5">
    <div class="text-content-subtle flex items-center justify-between">
      <p class="text-xs font-medium uppercase">Size</p>
      <span class="font-mono text-xs tabular-nums">{{ size[0] }}px</span>
    </div>

    <Slider v-model="size" :min="MIN_SIZE" :max="MAX_SIZE" />
  </div>
</template>
