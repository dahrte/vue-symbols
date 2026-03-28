<script setup lang="ts">
import { Download01Icon } from '@hugeicons/core-free-icons'
import { inject, type Ref } from 'vue'

import { Button } from '@/ui/button'
import { Icon } from '@/ui/misc'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip'

const props = defineProps<{
  name: string
}>()

const iconRef = inject<Ref<HTMLElement | null>>('IconRef')

function toKebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

function download() {
  if (!iconRef || !iconRef.value) {
    console.log('Error downloading icon')
    return
  }

  const el = (iconRef.value as any).$el as HTMLElement
  const svg = el.cloneNode(true) as HTMLElement
  svg.removeAttribute('class')

  const blob = new Blob([svg.outerHTML], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${toKebabCase(props.name)}.svg`
  a.click()

  URL.revokeObjectURL(url)
}
</script>

<template>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button icon size="sm" variant="ghost" @click="download">
        <Icon :icon="Download01Icon" />
      </Button>
    </TooltipTrigger>

    <TooltipContent>
      <span>Download SVG</span>
    </TooltipContent>
  </Tooltip>
</template>
