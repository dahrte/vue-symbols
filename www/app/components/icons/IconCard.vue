<script lang="ts">
interface CardProps {
  title: string
  path: string
  size: number
  type: 'files' | 'folders'
}
</script>

<script setup lang="ts">
import { CodeIcon, Copy01Icon, Download01Icon, Svg01Icon, Tick01Icon } from '@hugeicons/core-free-icons'

const props = defineProps<CardProps>()

const { toast } = useToast()

async function handleCopyImport() {
  await navigator.clipboard.writeText(`import { ${props.title} } from '@vue-symbols/icons/${props.type}'`)

  toast({
    title: 'Copied import to clipboard',
    variant: 'success',
    icon: Tick01Icon,
  })
}

async function handleCopySvg() {
  const res = await $fetch<Blob>(props.path)
  const svg = await res.text()

  await navigator.clipboard.writeText(svg)

  toast({
    title: 'Copied SVG to clipboard',
    variant: 'success',
    icon: Tick01Icon,
  })
}

async function handleDownload() {
  const res = await $fetch<Blob>(props.path)
  const blob = new Blob([res], { type: 'image/svg+xml' })

  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = `${props.title}.svg`
  a.click()

  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="-mt-px -ml-px flex h-49 flex-col items-center border border-border-base">
    <div class="flex flex-1 items-center justify-center">
      <img :src="path" :alt="title" loading="lazy" decoding="async" :width="size" :height="size" />
    </div>

    <div class="w-full py-2 text-center">
      <p class="text-sm">{{ title }}</p>
    </div>

    <div class="flex w-full flex-wrap gap-1 border-t border-border-base p-1">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button size="sm" variant="ghost" class="flex-1">
            <Icon :icon="Copy01Icon" aria-hidden="true" />
            Copy
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem @select="handleCopyImport">
            <Icon :icon="CodeIcon" aria-hidden="true" />
            <span>Copy import</span>
          </DropdownMenuItem>

          <DropdownMenuItem @select="handleCopySvg">
            <Icon :icon="Svg01Icon" aria-hidden="true" />
            <span>Copy SVG</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button size="sm" variant="ghost" class="flex-1" @click="handleDownload">
        <Icon :icon="Download01Icon" />
        Download
      </Button>
    </div>
  </div>
</template>
