<script lang="ts">
interface SearchProps {
  placeholder?: string
}
</script>

<script setup lang="ts">
import { Search01Icon } from '@hugeicons/core-free-icons'

defineProps<SearchProps>()

const { model } = useGlobalSearch()
</script>

<template>
  <InputGroup class="border-transparent bg-transparent">
    <InputGroupInput type="search" v-model="model" name="q" no-correct :placeholder="placeholder" class="py-4" />

    <InputGroupAddon class="pl-0">
      <Icon :icon="Search01Icon" />
    </InputGroupAddon>
  </InputGroup>
</template>
