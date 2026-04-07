const SIZE_DEBOUNCE_MS = 300

export function useGlobalSize(min: number, max: number, defaultSize: number) {
  const route = useRoute()
  const router = useRouter()

  // Internal state
  const sizeQuery = useState<string>('size-query', () => normalizeSearchParam(route.query.size))

  // Clear search input when navigating to a page that doesn't use the query parameter.
  watch(
    () => route.query.size,
    (queryValue) => {
      const value = normalizeSearchParam(queryValue)

      if (!value) sizeQuery.value = ''
      if (!sizeQuery.value) sizeQuery.value = value
    },
  )

  // Updates URL
  const updateURLQuery = useDebounceFn((value: string) => {
    router.replace({
      query: {
        ...route.query,
        size: value === String(defaultSize) ? undefined : value,
      },
    })
  }, SIZE_DEBOUNCE_MS)

  const validateSize = (size: number) => {
    if (isNaN(size) || size < min) return [defaultSize]
    if (size > max) return [max]
    return [size]
  }

  const sizeQueryValue = computed({
    get: () => {
      const size = Number(sizeQuery.value)
      return validateSize(size || defaultSize)
    },
    set: (value: number[]) => {
      sizeQuery.value = String(value[0])

      updateURLQuery(String(value[0]))
    },
  })

  return {
    model: sizeQueryValue,
  }
}
