<template>
  <footer>
    <Container render="section" class="border-t py-5">
      <div class="flex justify-between">
        <NuxtLink
          to="https://www.miguelsolorio.com/"
          class="text-content-subtle hover:text-content-strong flex items-center gap-2 text-sm"
        >
          <span class="hidden md:block">Icons crafted by</span>
          <img
            src="https://avatars.githubusercontent.com/miguelsolorio?v=4&s=40"
            alt="Miguel Solorio"
            class="size-6 rounded-full"
          />
          <span>Miguel Solorio</span>
        </NuxtLink>

        <NuxtLink
          to="https://dahrte.me/"
          class="text-content-subtle hover:text-content-strong flex items-center gap-2 text-sm"
        >
          <span class="hidden md:block">Developed by</span>
          <img
            src="https://avatars.githubusercontent.com/dahrte?v=4&s=40"
            alt="Miguel Solorio"
            class="size-6 rounded-full"
          />
          <span>Dahrte</span>
        </NuxtLink>
      </div>
    </Container>
  </footer>
</template>
