<script setup lang="ts">
import { Search01Icon } from '@hugeicons/core-free-icons'

interface SearchProps {
  placeholder?: string
}

defineProps<SearchProps>()

const { search } = useQueryStore()
</script>

<template>
  <InputGroup class="border-transparent bg-transparent">
    <InputGroupInput v-model="search" :placeholder class="py-4" />

    <InputGroupAddon class="pl-0">
      <Icon :icon="Search01Icon" />
    </InputGroupAddon>
  </InputGroup>
</template>
