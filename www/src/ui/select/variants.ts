import type { SelectTriggerProps as _SelectTriggerProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'
import type { HTMLAttributes } from 'vue'

export const selectTriggerVariants = tv({
  base: [
    'group relative flex w-fit items-center gap-2 rounded-[10px] border border-border-control bg-surface-base transition-all outline-none',
    'focus-visible:border-ring/50 focus-visible:ring-3 focus-visible:ring-ring/20 focus-visible:outline-none',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
    '[&>svg]:size-4 [&>svg]:text-icon-subtle',
  ],
  variants: {
    size: {
      sm: 'h-8 px-3 py-1.5',
      lg: 'h-9 px-3 py-2',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})

export type SelectTriggerVariants = VariantProps<typeof selectTriggerVariants>

export interface SelectTriggerProps extends _SelectTriggerProps {
  class?: HTMLAttributes['class']
  size?: SelectTriggerVariants['size']
}
