<script setup lang="ts">
import { cn } from '@/utils'

import { type InputProps, inputVariants } from './variants'

const props = defineProps<InputProps>()

const model = defineModel<string | number>()
model.value = props.defaultValue
</script>

<template>
  <input
    v-bind="$attrs"
    v-model="model"
    data-slot="control"
    :placeholder
    :disabled
    :class="cn(inputVariants({ size }), props.class)"
  />
</template>
