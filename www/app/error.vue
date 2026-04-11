<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const status = computed(() => props.error.status || 500)
const statusText = computed(() => {
  if (props.error.statusText) return props.error.statusText

  switch (status.value) {
    case 401:
      return 'Unauthorized'
    case 404:
      return 'Page Not Found'
    case 500:
      return 'Internal Server Error'
    case 503:
      return 'Service Unavailable'
    default:
      return 'Something went wrong'
  }
})

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="flex min-h-screen flex-col bg-surface-base">
    <Container class="w-full px-0">
      <PatternDivider class="h-8 w-full border-b" />
    </Container>

    <main class="flex flex-1 text-center">
      <Container class="flex w-full flex-1 flex-col items-center justify-center">
        <p class="mb-4 font-mono text-8xl font-medium text-content-subtle sm:text-9xl">
          {{ status }}
        </p>

        <h1 class="mb-4 font-mono text-2xl font-medium sm:text-3xl">
          {{ statusText }}
        </h1>

        <p v-if="error.message && error.message !== statusText" class="mb-8 max-w-md text-base text-content-muted">
          {{ error.message }}
        </p>

        <Button size="lg" class="font-mono" @click="handleError">Go back home</Button>
      </Container>
    </main>

    <Container class="w-full px-0">
      <PatternDivider class="h-8 w-full border-t" />
    </Container>

    <Footer />
  </div>
</template>
