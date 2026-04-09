<script setup lang="ts">
import { getAllIcons } from '~~/lib/icons'

definePageMeta({
  validate(route) {
    const _type = route.params.type
    if (_type && _type !== 'folders') return false
    return true
  },
})

const route = useRoute()
const type = route.params.type
const iconType = type === 'folders' ? 'folders' : 'files'

const rawIcons = getAllIcons(iconType)

const icons = rawIcons.map((icon) => ({
  ...icon,
  _t: icon.title.toLocaleLowerCase(),
}))

const { model: searchQuery } = useGlobalSearch()
const debouncedQuery = refDebounced(searchQuery, 100)

const filtered = computed(() => {
  const q = debouncedQuery.value.toLocaleLowerCase()
  if (!q) return icons

  return icons.filter((icon) => icon._t.includes(q))
})
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
