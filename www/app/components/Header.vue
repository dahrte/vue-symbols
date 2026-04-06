<script setup lang="ts">
import { LinkSquare01Icon } from '@hugeicons/core-free-icons'
import { NPM, GitHub } from '@vue-symbols/icons/files'

import Figma from '@/components/misc/Figma.vue'
import VSCode from '@/components/misc/VSCode.vue'
import { buttonVariants } from '@/ui/button/variants'

const links = [
  {
    title: 'v1.0.0',
    href: 'https://npmx.dev/package/@vue-symbols/icons',
    icon: NPM,
  },
  {
    title: 'Docs',
    href: 'https://github.com/dahrte/vue-symbols',
    icon: GitHub,
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
          <NuxtLink to="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 80 80" class="size-14" aria-hidden="true">
              <title>Vue Symbols Logo</title>
              <circle cx="40" cy="40" r="40" fill="#000" />
              <path fill="#2563EB" d="M61.433 51.345a9.076 9.076 0 11-18.152 0 9.076 9.076 0 0118.152 0z" />
              <path
                fill="#0D9488"
                d="M18.567 24.117a4.538 4.538 0 014.538-4.538h9.076a4.538 4.538 0 014.538 4.538v9.076a4.538 4.538 0 01-4.538 4.538h-9.076a4.538 4.538 0 01-4.538-4.538v-9.076z"
              />
              <path fill="#22D3EE" d="M27.643 43.485l9.076 15.72H18.567l9.076-15.72z" />
              <path
                fill="#C084FC"
                d="M48.455 22.295c1.34-3.622 6.463-3.622 7.803 0a4.16 4.16 0 002.458 2.458c3.622 1.34 3.622 6.463 0 7.804a4.16 4.16 0 00-2.458 2.457c-1.34 3.622-6.463 3.622-7.803 0a4.16 4.16 0 00-2.458-2.457c-3.622-1.34-3.622-6.464 0-7.804a4.16 4.16 0 002.458-2.458z"
              />
            </svg>
          </NuxtLink>

          <div class="flex flex-col items-center gap-4">
            <h1 class="font-sans text-3xl font-semibold tracking-tight lg:text-5xl">Vue-Symbols</h1>

            <span class="text-content-base text-center text-sm text-balance md:text-base">
              Beautifully designed file and folder icons to enhance your Vue projects.
            </span>
          </div>

          <div class="-mx-2 max-w-[calc(100%+1rem)] overflow-x-auto">
            <ul class="flex w-max gap-2 px-2 pb-2">
              <li v-for="link in links">
                <NuxtLink :to="link.href" :class="buttonVariants({ variant: 'secondary' })">
                  <component :is="link.icon" />
                  {{ link.title }}
                  <Icon :icon="LinkSquare01Icon" />
                </NuxtLink>
              </li>
            </ul>
          </div>

          <InstallCommand />
        </div>
      </div>
    </Container>
  </header>
</template>
