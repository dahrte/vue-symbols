<script setup lang="ts">
import { Copy01Icon, Tick01Icon } from '@hugeicons/core-free-icons'
import { Bun, NPM, PNPM, Yarn } from '@vue-symbols/icons/files'

const commands: { package: string; command: string }[] = [
  {
    package: 'npm',
    command: 'npm i',
  },
  {
    package: 'pnpm',
    command: 'pnpm add',
  },
  {
    package: 'bun',
    command: 'bun add',
  },
  {
    package: 'yarn',
    command: 'yarn add',
  },
]

const pkgmIcons: Record<string, Component> = {
  npm: NPM,
  pnpm: PNPM,
  bun: Bun,
  yarn: Yarn,
}

const packageManager = shallowRef<(typeof commands)[number]>(commands[1]!)

const { toast } = useToast()

async function handleCopyCommand(command: string, pkgm: string) {
  await navigator.clipboard.writeText(`${command} @vue-symbols/icons`)

  toast({
    title: `Copied ${pkgm} command to clipboard`,
    variant: 'success',
    icon: Tick01Icon,
  })
}
</script>

<template>
  <div class="w-full">
    <ButtonGroup class="mx-auto">
      <ButtonGroup>
        <Select v-model="packageManager">
          <SelectTrigger>
            <component :is="pkgmIcons[packageManager.package]" />
          </SelectTrigger>

          <SelectContent align="start" class="z-50">
            <SelectGroup>
              <SelectItem v-for="command in commands" :key="command.package" :value="command">
                <component :is="pkgmIcons[command.package]" />
                <SelectItemText>{{ command.package }}</SelectItemText>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button
          variant="secondary"
          class="text-content-subtle"
          @click="handleCopyCommand(packageManager.command, packageManager.package)"
        >
          {{ packageManager.command }} @vue-symbols/icons
          <Icon :icon="Copy01Icon" />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  </div>
</template>
