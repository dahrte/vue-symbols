import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'
import type { HTMLAttributes } from 'vue'

export const buttonVariants = tv({
  base: [
    'relative inline-flex shrink-0 items-center justify-center rounded-[10px] border border-transparent bg-clip-border font-medium whitespace-nowrap transition-all outline-none select-none',
    'will-change-transform active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:will-change-transform [&_svg:not([class*="size-"])]:size-4',
  ],
  variants: {
    variant: {
      primary: [
        'bg-primary text-primary-content hover:bg-primary/90',
        'focus-visible:border-ring/50 focus-visible:ring-3 focus-visible:ring-ring/20 dark:focus-visible:ring-ring/40',
      ],
      secondary: [
        'border-border-control text-content-strong hover:bg-surface-hover hover:text-content-strong',
        'focus-visible:border-ring/50 focus-visible:ring-3 focus-visible:ring-ring/20',
      ],
      soft: [
        'bg-surface-strong/50 text-content-base hover:bg-surface-strong/40 hover:text-content-strong dark:bg-neutral-800',
        'focus-visible:border-ring/50 focus-visible:ring-3 focus-visible:ring-ring/20',
      ],
      ghost: [
        'border-transparent text-content-base hover:bg-surface-hover hover:text-content-strong',
        'focus-visible:border-ring/50 focus-visible:ring-3 focus-visible:ring-ring/20',
      ],
      destructive: [
        'bg-destructive text-white hover:bg-destructive/90',
        'focus-visible:border-destructive/50 focus-visible:ring-3 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
      ],
    },
    size: {
      '2xs': 'h-6 gap-1 px-1.5 py-1 text-xs/4',
      xs: 'h-7 gap-1 px-2 py-1 text-sm/5',
      sm: 'h-8 gap-1 p-1.5 px-2.5 text-sm/5',
      md: 'h-9 gap-1.5 px-3 py-2 text-sm/5',
      lg: 'h-10 gap-1.5 px-3.5 py-2.5 text-sm/5',
    },
    icon: {
      true: 'p-0',
      false: '',
    },
  },
  compoundVariants: [
    {
      icon: true,
      size: '2xs',
      class: 'size-6',
    },
    {
      icon: true,
      size: 'xs',
      class: 'size-7',
    },
    {
      icon: true,
      size: 'sm',
      class: 'size-8',
    },
    {
      icon: true,
      size: 'md',
      class: 'size-9',
    },
    {
      icon: true,
      size: 'lg',
      class: 'size-10',
    },
  ],
  defaultVariants: {
    size: 'md',
    icon: false,
    variant: 'primary',
  },
})

export type ButtonVariants = VariantProps<typeof buttonVariants>

export interface ButtonProps extends PrimitiveProps {
  icon?: boolean
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  variant?: ButtonVariants['variant']
}
