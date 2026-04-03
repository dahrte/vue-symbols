<script setup lang="ts">
import { DropdownMenuGroup, type DropdownMenuGroupProps } from 'reka-ui'

const props = defineProps<DropdownMenuGroupProps>()
</script>

<template>
  <DropdownMenuGroup
    v-bind="props"
    data-slot="dropdown-menu-group"
    class="col-span-full grid grid-cols-[auto_1fr_auto]"
  >
    <slot />
  </DropdownMenuGroup>
</template>
