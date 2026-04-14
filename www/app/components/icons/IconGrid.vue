<script lang="ts">
import type { IconEntry } from '~~/lib/icons'

interface IconGridProps {
  icons: IconEntry[]
  queryInput: string
}
</script>

<script setup lang="ts">
const props = defineProps<IconGridProps>()

const route = useRoute()
const { model: sizeQuery } = useGlobalSize()

const size = computed(() => sizeQuery.value[0]!)
</script>

<template>
  <NotFound v-if="!icons.length" :query-input="queryInput" />

  <div v-else class="grid h-fit w-full grid-cols-2 gap-2 py-5 sm:grid-cols-4 sm:gap-3 lg:grid-cols-5 xl:grid-cols-6">
    <IconCard
      v-for="icon in icons"
      :key="icon.path"
      :title="icon.title"
      :path="icon.path"
      :size="size"
      :type="route.params.type === 'folders' ? 'folders' : 'files'"
    />
  </div>
</template>
