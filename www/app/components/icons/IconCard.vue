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
  <Card class="flex h-52.5 flex-col">
    <CardHeader class="px-2">
      <p class="text-sm">{{ title }}</p>
    </CardHeader>

    <CardBody class="flex h-full flex-col p-1">
      <div class="flex flex-1 items-center justify-center">
        <img :src="path" :alt="title" loading="lazy" decoding="async" :width="size" :height="size" />
      </div>

      <div class="flex items-center justify-center gap-1">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button icon size="sm" variant="ghost">
              <Icon :icon="Copy01Icon" aria-hidden="true" />
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

        <Button icon size="sm" variant="ghost" title="Download SVG" @click="handleDownload">
          <Icon :icon="Download01Icon" />
        </Button>
      </div>
    </CardBody>
  </Card>
</template>
