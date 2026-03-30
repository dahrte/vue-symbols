<script setup lang="ts">
const { size } = useQueryStore()
const { isReady, filteredIcons } = useIcons('folders')
</script>

<template>
  <main class="-mb-px flex flex-1 flex-col">
    <Container render="section" class="flex w-full flex-1">
      <PatternDivider class="relative -ml-5 min-h-full w-5 border-r" />

      <div v-if="!isReady" class="flex flex-1 items-center justify-center">
        <Loading />
      </div>

      <NotFound v-else-if="!filteredIcons.length" />

      <Grid v-else>
        <Card
          v-for="icon in filteredIcons"
          :key="icon.name"
          :icon="icon.icon"
          :name="icon.name"
          :size="size[0]!"
          type="folders"
        />
      </Grid>

      <PatternDivider class="relative -mr-5 min-h-full w-5 border-l" />
    </Container>
  </main>
</template>
