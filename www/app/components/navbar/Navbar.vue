<script setup lang="ts">
import { Files01Icon, Folder01Icon, Moon02Icon, Sun03Icon } from '@hugeicons/core-free-icons'

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
const colorMode = useColorMode()

function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <nav class="sticky top-0 z-10 bg-surface-base/70 supports-backdrop-filter:backdrop-blur-lg">
    <Container class="border-b">
      <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_14rem]">
        <Search placeholder="Search icons..." />

        <div class="relative">
          <ul class="flex">
            <li
              v-for="ap in appRoutes"
              :key="ap.title"
              class="flex-1 border-border-base md:border-l md:last:border-r dark:border-mauve-700"
            >
              <NuxtLink
                :to="{ path: ap.href, query: route.query }"
                activeClass="text-content-strong!"
                class="flex items-center justify-center gap-2 px-5 py-4 text-sm whitespace-nowrap text-content-subtle"
                :style="route.path === ap.href ? 'anchor-name: --active-tab' : undefined"
              >
                <Icon :icon="ap.icon" />
                {{ ap.title }}
              </NuxtLink>
            </li>
          </ul>

          <div
            aria-hidden="true"
            class="absolute bottom-0 h-0.5 bg-neutral-950 dark:bg-white"
            style="
              position-anchor: --active-tab;
              left: anchor(left);
              width: anchor-size(width);
              transition:
                left 150ms ease,
                width 150ms ease;
            "
          ></div>
        </div>

        <div class="flex items-center gap-5 md:gap-0">
          <Size />

          <div
            class="flex h-full items-center justify-center border-border-base md:border-l md:pl-5 dark:border-mauve-700"
          >
            <Button icon variant="ghost" aria-label="Toggle theme" @click="toggleTheme">
              <Icon
                v-if="$colorMode.preference === 'dark'"
                :icon="Moon02Icon"
                class="animate-in duration-200 zoom-in-50"
              />
              <Icon v-else :icon="Sun03Icon" class="animate-in duration-200 zoom-in-50" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </nav>
</template>
