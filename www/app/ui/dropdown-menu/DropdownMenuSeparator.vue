<script setup lang="ts">
import { DropdownMenuSeparator } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface DropdownMenuSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<DropdownMenuSeparatorProps>()
</script>

<template>
  <DropdownMenuSeparator
    data-slot="dropdown-menu-separator"
    :class="cn('bg-border-base col-span-full -mx-1 my-1 h-px', props.class)"
  />
</template>
