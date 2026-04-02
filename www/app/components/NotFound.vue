<script setup lang="ts">
import { ComponentIcon, CryingIcon } from '@hugeicons/core-free-icons'

import { buttonVariants } from '@/ui/button/variants'

const { searchDebounced } = useQueryStore()
</script>

<template>
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Icon :icon="CryingIcon" class="size-10" />
      </EmptyMedia>

      <EmptyTitle>Not Found</EmptyTitle>

      <EmptyDescription class="wrap-anywhere">No icons match your search for “{{ searchDebounced }}”.</EmptyDescription>
    </EmptyHeader>

    <EmptyContent>
      <NuxtLink to="/" :class="buttonVariants({ variant: 'secondary' })">
        <Icon :icon="ComponentIcon" aria-hidden="true" />
        See all file icons
      </NuxtLink>
    </EmptyContent>
  </Empty>
</template>
