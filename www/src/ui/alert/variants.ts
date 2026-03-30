import { tv, type VariantProps } from 'tailwind-variants'
import type { HTMLAttributes } from 'vue'

export const alertVariants = tv({
  base: [
    'relative grid w-full grid-cols-[auto_1fr] items-start gap-y-2 overflow-hidden rounded-xl border bg-surface-base py-2 pr-3 pl-2.5 text-sm has-data-[slot=description]:py-3',
    '[&>svg]:relative [&>svg]:mr-2 [&>svg]:h-lh [&>svg]:shrink-0 [&>svg]:justify-self-start',
  ],
  variants: {
    variant: {
      information:
        'border-border-base *:data-[slot=alert-background]:from-neutral-100/90 dark:*:data-[slot=alert-background]:from-neutral-500/5 [&>svg]:text-neutral-500 [&>svg]:dark:text-neutral-400',
      success:
        'border-border-base *:data-[slot=alert-background]:from-green-100/30 *:data-[slot=alert-background]:text-green-100 dark:*:data-[slot=alert-background]:from-green-500/5 [&>svg]:text-green-500 [&>svg]:dark:text-green-400',
      warning:
        'border-border-base *:data-[slot=alert-background]:from-orange-100/30 dark:*:data-[slot=alert-background]:from-orange-500/5 [&>svg]:text-orange-500 [&>svg]:dark:text-orange-400',
      destructive:
        'border-border-base *:data-[slot=alert-background]:from-red-100/30 *:data-[slot=alert-pattern]:text-red-200! dark:*:data-[slot=alert-background]:from-red-500/5 [&>svg]:text-red-500 [&>svg]:dark:text-red-400',
    },
  },
  defaultVariants: {
    variant: 'information',
  },
})

export type AlertVariants = VariantProps<typeof alertVariants>

export interface AlertProps {
  class?: HTMLAttributes['class']
  variant?: AlertVariants['variant']
}
