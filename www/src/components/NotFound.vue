<script setup lang="ts">
import { ComponentIcon, CryingIcon } from '@hugeicons/core-free-icons'

import { useQueryStore } from '@/composables/useQueryStore'
import { buttonVariants } from '@/ui/button/variants'
import { EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/ui/empty'
import Empty from '@/ui/empty/Empty.vue'
import { Icon } from '@/ui/misc'

const { searchQuery } = useQueryStore()
</script>

<template>
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Icon :icon="CryingIcon" class="size-10" />
      </EmptyMedia>

      <EmptyTitle>Not Found</EmptyTitle>

      <EmptyDescription>No icons match your search for “{{ searchQuery }}”.</EmptyDescription>
    </EmptyHeader>

    <EmptyContent>
      <RouterLink to="/" :class="buttonVariants({ variant: 'secondary' })">
        <Icon :icon="ComponentIcon" aria-hidden="true" />
        See all file icons
      </RouterLink>
    </EmptyContent>
  </Empty>
</template>
