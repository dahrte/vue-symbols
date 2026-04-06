<script setup lang="ts">
import { type InputProps, inputVariants } from './variants'

const props = defineProps<InputProps>()

const model = defineModel<string>()
</script>

<template>
  <input
    v-bind="$attrs"
    v-model="model"
    data-slot="control"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="cn(inputVariants({ size }), props.class)"
  />
</template>
