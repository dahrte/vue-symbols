import { refDebounced, useDebounceFn } from '@vueuse/core'
import { useRouteQuery } from '@vueuse/router'
import { ref, watch } from 'vue'

const DEFAULT_SIZE = 45

export const useQueryStore = () => {
  const searchQuery = useRouteQuery('q', '', { transform: (value) => (value == null ? '' : String(value)) })
  const searchQueryDebounced = refDebounced(searchQuery, 200)

  const sizeQuery = useRouteQuery('size', DEFAULT_SIZE, {
    transform: (value) => {
      const n = Number(value)
      return Number.isFinite(n) ? [n] : [DEFAULT_SIZE]
    },
  })

  const size = ref<number[]>(sizeQuery.value)

  watch(sizeQuery, (v) => {
    size.value = v
  })

  const updateSizeQuery = useDebounceFn((val: number[]) => {
    sizeQuery.value = val
  }, 300)

  watch(size, (val) => {
    updateSizeQuery(val)
  })

  return {
    searchQuery,
    searchQueryDebounced,
    size,
  }
}
