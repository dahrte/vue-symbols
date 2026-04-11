<script setup lang="ts">
import { getAllIcons } from '~~/lib/icons'

const route = useRoute()
const type = route.params.type

if (type && type !== 'folders') {
  throw createError({
    status: 404,
    statusText: 'Page Not Found',
    message: 'This page could not be found.',
  })
}

const rawIcons = getAllIcons(type === 'folders' ? 'folders' : 'files')

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
      <IconGrid :icons="filtered" :query-input="searchQuery" />
    </Container>
  </main>
</template>
