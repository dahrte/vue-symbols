const DEFAULT_SIZE = 45

function replaceQuery(
  router: ReturnType<typeof useRouter>,
  route: ReturnType<typeof useRoute>,
  params: Record<string, string | undefined>,
) {
  const query = { ...route.query }
  for (const [key, value] of Object.entries(params)) {
    if (value) {
      query[key] = value
    } else {
      delete query[key]
    }
  }

  router.replace({ query })
}

export const useQueryStore = () => {
  const route = useRoute()
  const router = useRouter()

  const search = useState('query-search', () => (route.query.q as string) ?? '')
  const searchDebounced = refDebounced(search, 200)

  const initialSize = (() => {
    const v = Number(route.query.size)
    return Number.isFinite(v) ? v : DEFAULT_SIZE
  })()

  const size = useState<number[]>('query-size', () => [initialSize])

  if (import.meta.client) {
    watch(search, (val) => {
      replaceQuery(router, route, { q: val || undefined })
    })

    const updateSizeQuery = useDebounceFn((val: number) => {
      replaceQuery(router, route, { size: val !== DEFAULT_SIZE ? String(val) : undefined })
    }, 300)

    watch(size, (val) => updateSizeQuery(val[0]!))
  }

  return {
    size,
    search,
    searchDebounced,
  }
}
