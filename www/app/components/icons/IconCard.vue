<script lang="ts">
interface CardProps {
  title: string
  path: string
  size?: number
}
</script>

<script setup lang="ts">
import { CodeIcon, Copy01Icon, Download01Icon, Svg01Icon, Tick01Icon } from '@hugeicons/core-free-icons'

const props = defineProps<CardProps>()

const route = useRoute()
const { toast } = useToast()

async function copyImport() {
  const type = route.name === 'index' ? 'files' : 'folders'

  await navigator.clipboard.writeText(`import { ${props.title} } from '@vue-symbols/icons/${type}'`)

  toast({
    title: 'Copied import to clipboard',
    variant: 'success',
    icon: Tick01Icon,
  })
}

async function handleCopySvg(path: string) {
  const res = await $fetch<Blob>(path)
  const svg = await res.text()

  await navigator.clipboard.writeText(svg)

  toast({
    title: 'Copied SVG to clipboard',
    variant: 'success',
    icon: Tick01Icon,
  })
}

async function handleDownload(path: string) {
  const res = await $fetch<Blob>(path)
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
  <div class="border-border-base -mt-px -ml-px flex h-49 flex-col items-center border">
    <div class="flex flex-1 items-center justify-center">
      <img :src="path" :alt="title" loading="lazy" decoding="async" :width="size" :height="size" />
    </div>

    <div class="w-full py-2 text-center">
      <p class="text-sm">{{ title }}</p>
    </div>

    <div class="border-border-base flex w-full gap-2 border-t p-1">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button size="sm" variant="ghost" class="flex-1">
            <Icon :icon="Copy01Icon" aria-hidden="true" />
            Copy
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem @select="copyImport">
            <Icon :icon="CodeIcon" aria-hidden="true" />
            <span>Copy import</span>
          </DropdownMenuItem>

          <DropdownMenuItem @select="handleCopySvg(path)">
            <Icon :icon="Svg01Icon" aria-hidden="true" />
            <span>Copy SVG</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button icon size="sm" variant="ghost" @click="handleDownload(path)">
        <Icon :icon="Download01Icon" />
      </Button>
    </div>
  </div>
</template>
