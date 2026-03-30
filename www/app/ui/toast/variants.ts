import { tv, type VariantProps } from 'tailwind-variants'

export const toasterVariants = tv({
  slots: {
    root: 'pointer-events-auto z-(--index) w-full transform-(--transform) transition-[transform,translate] duration-300 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[swipe=move]:transition-none',
    viewport:
      'fixed z-50 flex h-(--height) w-full flex-col justify-end gap-4 px-2 focus:outline-none sm:max-w-sm sm:px-3.5',
  },
  variants: {
    position: {
      'top-left': {
        viewport: 'left-0',
      },
      'top-center': {
        viewport: 'left-1/2 -translate-x-1/2 transform',
      },
      'top-right': {
        viewport: 'right-0',
      },
      'bottom-left': {
        viewport: 'left-0',
      },
      'bottom-center': {
        viewport: 'left-1/2 -translate-x-1/2 transform',
      },
      'bottom-right': {
        viewport: 'right-0',
      },
    },
    swipeDirection: {
      up: {},
      right: {
        root: 'data-[swipe=end]:animate-out data-[swipe=end]:slide-out-to-bottom-0 data-[swipe=end]:slide-out-to-right',
      },
      down: {},
      left: {
        root: 'data-[swipe=end]:animate-out data-[swipe=end]:slide-out-to-bottom-0 data-[swipe=end]:slide-out-to-left',
      },
    },
  },
  compoundVariants: [
    {
      position: ['top-left', 'top-center', 'top-right'],
      class: {
        root: 'top-0 data-[state=closed]:slide-out-to-top data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top',
        viewport: 'top-5 flex-col-reverse',
      },
    },
    {
      position: ['bottom-left', 'bottom-center', 'bottom-right'],
      class: {
        root: 'bottom-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom',
        viewport: 'bottom-5',
      },
    },
    {
      swipeDirection: ['up', 'down'],
      class: {
        root: 'data-[swipe=cancel]:translate-y-0 data-[swipe=end]:translate-y-(--reka-toast-swipe-end-y) data-[swipe=move]:translate-y-(--reka-toast-swipe-move-y)',
      },
    },
    {
      swipeDirection: ['left', 'right'],
      class: {
        root: 'data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-(--reka-toast-swipe-end-x) data-[swipe=move]:translate-x-(--reka-toast-swipe-move-x)',
      },
    },
  ],
})

export type ToasterVariants = VariantProps<typeof toasterVariants>
