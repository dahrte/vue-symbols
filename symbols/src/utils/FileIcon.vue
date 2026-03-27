<script lang="ts">
export interface FileIconProps {
  filename: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import { Document } from '../files'
import { fileExtensions } from './file-extensions'
import { fileNames } from './file-names'

const props = defineProps<FileIconProps>()

const icon = computed(() => {
  const name = props.filename.toLowerCase()

  // 1. Check exact filename match
  const byName = fileNames[name]
  if (byName) return byName

  // 2. Check file extensions (longest compound extension first)
  const parts = name.split('.')
  for (let i = 1; i < parts.length; i++) {
    const ext = parts.slice(i).join('.')
    const byExt = fileExtensions[ext]
    if (byExt) return byExt
  }

  return Document
})
</script>

<template>
  <component :is="icon" />
</template>
