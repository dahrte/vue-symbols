import { tv, type VariantProps } from 'tailwind-variants'
import type { HTMLAttributes } from 'vue'

import type { ButtonProps } from '../button/variants'

export const inputGroupAddonVariants = tv({
  base: 'flex shrink-0 cursor-text items-center justify-center self-stretch text-sm/5 font-medium text-content-subtle select-none [&_svg:not([class*="size-"])]:size-4',
  variants: {
    align: {
      'inline-start': 'order-first pl-3 has-[>button]:pl-1.5',
      'inline-end': 'order-last pr-3 has-[>button]:pr-1.5',
      'block-start': 'order-first w-full justify-start px-3 pt-2 pb-2',
      'block-end': 'order-last w-full justify-start px-3 pt-2 pb-2',
    },
  },
  defaultVariants: {
    align: 'inline-start',
  },
})

export type InputGroupAddonVariants = VariantProps<typeof inputGroupAddonVariants>

export interface InputGroupAddonProps {
  class?: any
  align?: InputGroupAddonVariants['align']
}

export const inputGroupButtonVariants = tv({
  base: 'rounded-md text-content-subtle',
  variants: {
    size: {
      sm: 'h-6',
      lg: 'h-7',
    },
    icon: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      icon: true,
      class: 'size-5.5',
    },
    {
      size: 'lg',
      icon: true,
      class: 'size-6',
    },
  ],
  defaultVariants: {
    size: 'lg',
    icon: false,
  },
})

export type InputGroupButtonVariants = VariantProps<typeof inputGroupButtonVariants>

export interface InputGroupButtonProps extends Omit<ButtonProps, 'size'> {
  class?: HTMLAttributes['class']
  size?: InputGroupButtonVariants['size']
}
