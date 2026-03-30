import type { ToastRootProps } from 'reka-ui'
import type { FunctionalComponent, VNode } from 'vue'

import type { AlertVariants } from '../alert/variants'

export interface ToastProps extends Pick<ToastRootProps, 'defaultOpen' | 'open' | 'type' | 'duration'> {
  title?: string
  description?: string | VNode | (() => VNode)
  icon?: VNode | (() => VNode) | FunctionalComponent | object
  variant?: AlertVariants['variant']
}
