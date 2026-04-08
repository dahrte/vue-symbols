<script setup lang="ts">
const { model: sizeQuery, min, max } = useGlobalSize()
</script>

<template>
  <div class="flex h-full flex-1 flex-col justify-center py-4 md:px-5 md:py-0">
    <div class="text-content-subtle flex items-center justify-between">
      <p class="text-xs font-medium uppercase">Size</p>
      <span class="font-mono text-xs tabular-nums">{{ sizeQuery[0] }}px</span>
    </div>

    <Slider v-model="sizeQuery" :min="min" :max="max" />
  </div>
</template>
