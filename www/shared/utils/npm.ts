import { getLatestVersion } from 'fast-npm-meta'

export async function fetchLatestVersion(name: string): Promise<string | null> {
  try {
    const meta = await getLatestVersion(name)
    return meta.version
  } catch {
    return null
  }
}
