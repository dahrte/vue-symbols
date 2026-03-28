import * as FileSymbols from '@vue-symbols/icons/files'
import * as FolderSymbols from '@vue-symbols/icons/folders'
import type { Component } from 'vue'

export type Icons = {
  name: string
  icon: Component
}

export const FileIcons: Icons[] = Object.entries(FileSymbols).map(([name, icon]) => ({
  name,
  icon,
}))

export const FolderIcons: Icons[] = Object.entries(FolderSymbols).map(([name, icon]) => ({
  name,
  icon,
}))

export const TOTAL_FILE_ICONS = FileIcons.length
export const TOTAL_FOLDER_ICONS = FolderIcons.length
