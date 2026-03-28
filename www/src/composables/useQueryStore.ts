import { refDebounced } from '@vueuse/core'
import { useRouteQuery } from '@vueuse/router'
import { computed } from 'vue'

const DEFAULT_SIZE = 45

export const useQueryStore = () => {
  const searchQuery = useRouteQuery('q', '', { transform: (value) => (value == null ? '' : String(value)) })
  const searchQueryDebounced = refDebounced(searchQuery, 200)

  const sizeQuery = useRouteQuery('size', DEFAULT_SIZE, { transform: (value) => [Number(value)] })

  const size = computed(() => {
    const first = sizeQuery.value[0]
    return Number.isFinite(first) ? first : DEFAULT_SIZE
  })

  return {
    searchQuery,
    searchQueryDebounced,
    sizeQuery,
    size,
  }
}
