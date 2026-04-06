import { tv, type VariantProps } from 'tailwind-variants'
import type { HTMLAttributes } from 'vue'

export const inputVariants = tv({
  base: [
    'block w-full rounded-[10px] border border-border-control bg-surface-base text-sm/5 text-content-strong transition-all file:text-sm/5 file:font-medium placeholder:text-content-subtle',
    'focus-visible:border-ring/50 focus-visible:ring-3 focus-visible:ring-ring/20 focus-visible:outline-none',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
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

export type InputVariants = VariantProps<typeof inputVariants>

export interface InputProps {
  disabled?: boolean
  placeholder?: string
  size?: InputVariants['size']
  class?: HTMLAttributes['class']
}
