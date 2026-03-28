<script setup lang="ts">
import { computed, onMounted, ref, shallowRef } from 'vue'

import Card from '@/components/card/Card.vue'
import Container from '@/components/Container.vue'
import Grid from '@/components/Grid.vue'
import Loading from '@/components/Loading.vue'
import NotFound from '@/components/NotFound.vue'
import PatternDivider from '@/components/PatternDivider.vue'
import { useQueryStore } from '@/composables/useQueryStore'
import type { Icons } from '@/data/svgs'

const { size, searchQueryDebounced } = useQueryStore()

const icons = shallowRef<Icons[]>([])
const loading = ref(true)

onMounted(async () => {
  const module = await import('@vue-symbols/icons/folders')
  icons.value = Object.entries(module).map(([name, icon]) => ({ name, icon }))
  loading.value = false
})

const filteredFolders = computed(() =>
  icons.value.filter((icon) => icon.name.toLocaleLowerCase().includes(searchQueryDebounced.value.toLocaleLowerCase())),
)
</script>

<template>
  <main class="-mb-px flex flex-1 flex-col">
    <Container render="section" class="flex w-full flex-1">
      <PatternDivider class="relative -ml-5 min-h-full w-5 border-r" />

      <div v-if="loading" class="flex flex-1 items-center justify-center">
        <Loading />
      </div>

      <NotFound v-else-if="!filteredFolders.length" />

      <Grid v-else>
        <Card
          v-for="icon in filteredFolders"
          :key="icon.name"
          :icon="icon.icon"
          :name="icon.name"
          :size
          type="folders"
        />
      </Grid>

      <PatternDivider class="relative -mr-5 min-h-full w-5 border-l" />
    </Container>
  </main>
</template>
