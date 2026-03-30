import { tv, type VariantProps } from 'tailwind-variants'

export const emptyMediaVariants = tv({
  base: 'flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0',
  variants: {
    variant: {
      default: 'bg-transparent',
      icon: 'flex size-10 shrink-0 items-center justify-center rounded-lg text-icon-subtle [&_svg:not([class*="size-"])]:size-6',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type EmptyMediaVariants = VariantProps<typeof emptyMediaVariants>

export interface EmptyMediaProps {
  class?: any
  variant?: EmptyMediaVariants['variant']
}
