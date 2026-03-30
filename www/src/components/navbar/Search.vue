<script setup lang="ts">
import { Search01Icon } from '@hugeicons/core-free-icons'

import { useQueryStore } from '@/composables/useQueryStore'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/ui/input-group'
import { Icon } from '@/ui/misc'

interface SearchProps {
  placeholder?: string
}

defineProps<SearchProps>()

const { searchQuery } = useQueryStore()
</script>

<template>
  <InputGroup class="border-transparent bg-transparent">
    <InputGroupInput v-model="searchQuery" :placeholder class="py-4" />

    <InputGroupAddon class="pl-0">
      <Icon :icon="Search01Icon" />
    </InputGroupAddon>
  </InputGroup>
</template>
