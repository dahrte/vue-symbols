import FileIconsData from '../data/file_icons.json'
import FolderIconsData from '../data/folder_icons.json'

export interface IconEntry {
  title: string
  path: string
}

const fileIcons = FileIconsData as IconEntry[]
const folderIcons = FolderIconsData as IconEntry[]

export function getAllIcons(category: 'files' | 'folders'): IconEntry[] {
  return category === 'files' ? fileIcons : folderIcons
}

export function searchIcons(icons: IconEntry[], query: string): IconEntry[] {
  const lowerQuery = query.toLowerCase()
  return icons.filter((icon) => icon.title.toLowerCase().includes(lowerQuery))
}
