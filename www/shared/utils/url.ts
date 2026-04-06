import type { LocationQueryValue } from 'vue-router'

export function normalizeSearchParam(query?: LocationQueryValue | LocationQueryValue[]): string {
  if (!query) return ''
  if (typeof query === 'string') return query

  return normalizeSearchParam(query[0])
}
