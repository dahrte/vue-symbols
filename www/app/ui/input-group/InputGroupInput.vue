<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'

import type { InputProps } from '../input/variants'

interface InputGroupInputProps extends InputProps {
  type?: InputHTMLAttributes['type']
}

const props = withDefaults(defineProps<InputGroupInputProps>(), {
  type: 'text',
})

const model = defineModel<string>()
</script>

<template>
  <Input
    v-bind="props"
    v-model="model"
    data-slot="input-group-control"
    :class="cn('-my-px rounded-none focus-visible:ring-0', props.class)"
  />
</template>
