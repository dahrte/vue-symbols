<script setup lang="ts">
import { LinkSquare01Icon } from '@hugeicons/core-free-icons'
import { Npm, Github } from '@vue-symbols/icons/files'

import Container from '@/components/Container.vue'
import ExternalLink from '@/components/ExternalLink.vue'
import Figma from '@/components/icons/Figma.vue'
import VSCode from '@/components/icons/VSCode.vue'
import Logo from '@/components/Logo.vue'
import { buttonVariants } from '@/ui/button/variants'
import Icon from '@/ui/misc/Icon.vue'

const links = [
  {
    title: 'v1.0.0',
    href: 'https://npmx.dev/package/@vue-symbols/icons',
    icon: Npm,
  },
  {
    title: 'Docs',
    href: 'https://github.com/dahrte/vue-symbols',
    icon: Github,
  },
  {
    title: 'Figma',
    href: 'https://www.figma.com/file/HYLMyRbIdSbIJQlqnd9pSN/Symbols---File-Icons?type=design&node-id=20537-804&t=F5YRpTBiNwKqtOsT-0',
    icon: Figma,
  },
  {
    title: 'VS Code',
    href: 'https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols',
    icon: VSCode,
  },
]
</script>

<template>
  <header>
    <Container class="border-b py-10">
      <div class="flex">
        <div class="flex w-full flex-col items-center justify-center gap-4">
          <Logo class="size-14" />

          <div class="flex flex-col items-center gap-4">
            <RouterLink to="/" class="font-sans text-3xl font-semibold tracking-tight lg:text-5xl">
              Vue-Symbols
            </RouterLink>

            <span class="text-content-base text-sm text-balance md:text-base">
              Beautifully designed file and folder icons to enhance your Vue projects.
            </span>
          </div>

          <div class="-mx-2 max-w-[calc(100%+1rem)] overflow-x-auto">
            <ul class="flex w-max gap-2 px-2 pb-2">
              <li v-for="link in links">
                <ExternalLink :to="link.href" :class="buttonVariants({ variant: 'secondary' })">
                  <component :is="link.icon" />
                  {{ link.title }}
                  <Icon :icon="LinkSquare01Icon" />
                </ExternalLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>
