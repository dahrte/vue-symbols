<script lang="ts">
import type { IconEntry } from '~~/lib/icons'

interface IconGridProps {
  icons: IconEntry[]
  queryInput: string
}
</script>

<script setup lang="ts">
const props = defineProps<IconGridProps>()
</script>

<template>
  <NotFound v-if="!icons.length" :query-input="queryInput" />

  <div v-else class="-mr-px grid h-fit w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
    <IconCard v-for="icon in icons" :key="icon.title" :title="icon.title" :path="icon.path" :size="45" />
  </div>
</template>
