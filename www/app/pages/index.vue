<script setup lang="ts">
import { getAllIcons, searchIcons } from '~~/lib/icons'

const icons = getAllIcons('files')

const { model: searchQuery } = useGlobalSearch()

const filtered = computed(() => searchIcons(icons, searchQuery.value))
</script>

<template>
  <main class="-mb-px flex flex-1 flex-col">
    <Container render="section" class="flex w-full flex-1">
      <PatternDivider class="relative -ml-5 min-h-full w-5 border-r" />

      <IconGrid :icons="filtered" :query-input="searchQuery" />

      <PatternDivider class="relative -mr-5 min-h-full w-5 border-l" />
    </Container>
  </main>
</template>
