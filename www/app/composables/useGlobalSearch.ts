const SEARCH_DEBOUNCE_MS = 300

export function useGlobalSearch() {
  const route = useRoute()
  const router = useRouter()

  // Internal state
  const searchQuery = useState<string>('search-query', () => normalizeSearchParam(route.query.q))

  // Clear search input when navigating to a page that doesn't use the query parameter.
  watch(
    () => route.query.q,
    (queryValue) => {
      const value = normalizeSearchParam(queryValue)

      if (!value) searchQuery.value = ''
      if (!searchQuery.value) searchQuery.value = value
    },
  )

  // Updates URL
  const updateURLQuery = useDebounceFn((value: string) => {
    router.replace({
      query: {
        ...route.query,
        q: value || undefined,
      },
    })
  }, SEARCH_DEBOUNCE_MS)

  const searchQueryValue = computed({
    get: () => searchQuery.value,
    set: (value: string) => {
      searchQuery.value = value

      updateURLQuery(value)
    },
  })

  return {
    model: searchQueryValue,
  }
}
