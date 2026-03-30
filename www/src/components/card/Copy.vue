<script setup lang="ts">
import { CancelCircleIcon, CodeIcon, Copy01Icon, Svg01Icon, Tick01Icon } from '@hugeicons/core-free-icons'
import { useClipboard } from '@vueuse/core'
import { inject, ref, type Ref } from 'vue'

import { useToast } from '@/composables/useToast'
import { Button } from '@/ui/button'
import { Icon } from '@/ui/misc'
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover'

const props = defineProps<{
  name: string
  type: 'files' | 'folders'
}>()

const iconRef = inject<Ref<HTMLElement | null>>('IconRef')

const { copy } = useClipboard()
const { toast } = useToast()

const copiedImport = ref(false)
const copiedSvg = ref(false)

function copyImport() {
  const statement = `import { ${props.name} } from '@vue-symbols/icons/${props.type}'`

  copy(statement)
  copiedImport.value = true

  toast({
    title: 'Copied import to clipboard',
    variant: 'success',
    icon: Tick01Icon,
  })

  copiedImport.value = false
}

async function copySvg() {
  if (!iconRef || !iconRef.value) {
    toast({
      title: 'Error copying icon',
      variant: 'destructive',
      icon: CancelCircleIcon,
    })
    return
  }

  const el = (iconRef.value as any).$el as HTMLElement
  const svg = el.cloneNode(true) as HTMLElement
  svg.removeAttribute('class')

  await copy(svg.outerHTML)
  copiedSvg.value = true

  toast({
    title: 'Copied SVG to clipboard',
    variant: 'success',
    icon: Tick01Icon,
  })

  copiedSvg.value = false
}
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button icon size="sm" variant="ghost">
        <Icon :icon="Copy01Icon" aria-hidden="true" />
      </Button>
    </PopoverTrigger>

    <PopoverContent side="bottom" class="flex flex-col gap-2">
      <Button variant="secondary" class="justify-start gap-2" @click="copyImport">
        <Icon :icon="CodeIcon" aria-hidden="true" />
        Copy import
      </Button>

      <Button variant="secondary" class="justify-start gap-2" @click="copySvg">
        <Icon :icon="Svg01Icon" aria-hidden="true" />
        Copy SVG
      </Button>
    </PopoverContent>
  </Popover>
</template>
