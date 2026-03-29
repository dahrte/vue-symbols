import { computed, defineComponent, h } from 'vue'

import { Folder } from '../folders'
import { folderNames } from './folder-names'

export interface FolderIconProps {
  foldername: string
}

export default defineComponent({
  name: 'FolderIcon',
  props: {
    foldername: { type: String, required: true },
  },
  setup(props) {
    const icon = computed(() => {
      const name = props.foldername.toLowerCase()

      // Check folder name match
      const byName = folderNames[name]
      if (byName) return byName

      return Folder
    })

    return () => h(icon.value)
  },
})
