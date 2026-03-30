import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'
import type { HTMLAttributes } from 'vue'

export const buttonGroupVariants = tv({
  base: 'relative flex w-fit items-stretch rounded-[10px] *:focus-visible:relative *:focus-visible:z-10 has-[>[data-slot=button-group]]:gap-2',
  variants: {
    orientation: {
      horizontal: [
        '[&>*:not(:first-child)]:border-l-0 [&>*:not(:first-child):not([data-slot=button-group])]:rounded-l-none [&>*:not(:last-child):not([data-slot=button-group])]:rounded-r-none',
        '[&>*:first-child:not([data-slot=button-group])]:rounded-l-[inherit] [&>*:last-child:not([data-slot=button-group])]:rounded-r-[inherit]',
        // Input specific
        '*:data-[slot=control]:w-full [&>[data-slot=control]:not(:first-child)>input]:rounded-l-none [&>[data-slot=control]:not(:first-child)>input]:border-l-0 [&>[data-slot=control]:not(:last-child)>input]:rounded-r-none',
      ],
      vertical:
        'flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>

export interface ButtonGroupProps extends PrimitiveProps {
  class?: HTMLAttributes['class']
  orientation?: ButtonGroupVariants['orientation']
}
