<script setup lang="ts">
const MIN_SIZE = 20
const MAX_SIZE = 70
const DEFAULT_SIZE = 40

const { model: sizeQuery } = useGlobalSize(MIN_SIZE, MAX_SIZE, DEFAULT_SIZE)
</script>

<template>
  <div class="flex flex-col justify-center py-4 md:py-0 md:pl-5">
    <div class="text-content-subtle flex items-center justify-between">
      <p class="text-xs font-medium uppercase">Size</p>
      <span class="font-mono text-xs tabular-nums">{{ sizeQuery[0] }}px</span>
    </div>

    <Slider v-model="sizeQuery" :min="MIN_SIZE" :max="MAX_SIZE" />
  </div>
</template>
