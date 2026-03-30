type IconType = 'files' | 'folders'

export const useIcons = (type: IconType) => {
  const { searchDebounced } = useQueryStore()

  const { data: icons, pending } = useAsyncData(
    `icons-${type}`,
    async () => {
      const module =
        type === 'files' ? await import('@vue-symbols/icons/files') : await import('@vue-symbols/icons/folders')

      return Object.entries(module).map(([name, icon]) => ({
        name,
        icon,
      }))
    },
    { server: false },
  )

  const isReady = computed(() => !pending.value && !!icons.value)

  const total = computed(() => icons.value?.length ?? 0)

  const filteredIcons = computed(() => {
    if (!icons.value) return []

    const query = searchDebounced.value.toLowerCase()

    return query ? icons.value.filter((icon) => icon.name.toLowerCase().includes(query)) : icons.value
  })

  return {
    icons,
    isReady,
    total,
    filteredIcons,
  }
}
