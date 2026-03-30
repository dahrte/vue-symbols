const DEFAULT_SIZE = 45

export const useQueryStore = () => {
  const search = useRouteQuery('q', '', {
    mode: 'replace',
  })

  const searchDebounced = refDebounced(search, 200)

  const sizeQuery = useRouteQuery('size', DEFAULT_SIZE, {
    mode: 'replace',
    transform: (value) => (Number.isFinite(Number(value)) ? Number(value) : DEFAULT_SIZE),
  })

  const size = ref([sizeQuery.value])

  const updateSizeQuery = useDebounceFn((val: number) => {
    sizeQuery.value = val
  }, 300)

  watch(size, (val) => updateSizeQuery(val[0]!))
  watch(sizeQuery, (val) => {
    if (size.value[0] !== val) size.value = [val]
  })

  return {
    size,
    search,
    searchDebounced,
  }
}
