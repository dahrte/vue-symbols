<script lang="ts">
export interface FolderIconProps {
  foldername: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import { Folder } from '../folders'
import { folderNames } from './folder-names'

const props = defineProps<FolderIconProps>()

const icon = computed(() => {
  const name = props.foldername.toLowerCase()

  // Check folder name match
  const byName = folderNames[name]
  if (byName) return byName

  return Folder
})
</script>

<template>
  <component :is="icon" />
</template>
