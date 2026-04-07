<script setup lang="ts">
import { Files01Icon, Folder01Icon } from '@hugeicons/core-free-icons'

const appRoutes = [
  {
    title: 'Files',
    href: '/',
    icon: Files01Icon,
  },
  {
    title: 'Folders',
    href: '/folders',
    icon: Folder01Icon,
  },
]

const route = useRoute()
</script>

<template>
  <nav class="bg-surface-base/70 sticky top-0 z-10 supports-backdrop-filter:backdrop-blur-lg">
    <Container class="border-b">
      <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_14rem]">
        <Search placeholder="Search icons..." class="min-w-0" />

        <div class="relative">
          <ul class="flex">
            <li
              v-for="ap in appRoutes"
              :key="ap.title"
              class="border-border-base flex-1 md:border-l md:last:border-r dark:border-mauve-700"
            >
              <NuxtLink
                :to="{ path: ap.href, query: route.query }"
                activeClass="text-content-strong!"
                class="text-content-subtle flex items-center justify-center gap-2 px-5 py-4 text-sm whitespace-nowrap"
                :style="route.path === ap.href ? 'anchor-name: --active-tab' : undefined"
              >
                <Icon :icon="ap.icon" />
                {{ ap.title }}
              </NuxtLink>
            </li>
          </ul>

          <div
            aria-hidden="true"
            class="absolute bottom-0 h-0.5 bg-white"
            style="
              position-anchor: --active-tab;
              left: anchor(left);
              width: anchor-size(width);
              transition:
                left 150ms ease,
                width 150ms ease;
            "
          />
        </div>

        <Size />
      </div>
    </Container>
  </nav>
</template>
