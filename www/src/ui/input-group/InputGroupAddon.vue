<script setup lang="ts">
import { cn } from '@/utils'

import { inputGroupAddonVariants, type InputGroupAddonProps } from './variants'

const props = withDefaults(defineProps<InputGroupAddonProps>(), {
  align: 'inline-start',
})

function handleMouseDown(e: MouseEvent) {
  // If the click comes from an internal button, do not interfere.
  if ((e.target as HTMLElement).closest('button')) return

  e.preventDefault()

  const parent = (e.currentTarget as HTMLElement).parentElement
  const input = parent?.querySelector<HTMLInputElement | HTMLTextAreaElement>('input, textarea')

  if (input && !parent?.querySelector('input:focus, textarea:focus')) {
    input.focus()
  }
}
</script>

<template>
  <div
    role="group"
    data-slot="input-group-addon"
    :data-align="align"
    :class="cn(inputGroupAddonVariants({ align }), props.class)"
    @mousedown="handleMouseDown"
  >
    <slot />
  </div>
</template>
