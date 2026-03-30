import { ref } from 'vue'

import type { ToastProps } from '@/ui/toast/Toast'

export interface Toast extends ToastProps {
  id: string
}

const TOASTS_LIMIT = 1
const DESTRUCTION_DELAY = 300

const state = ref<Toast[]>([])
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

function toast(toast: Partial<Toast>): Toast {
  const body: Toast = {
    id: Date.now().toString(),
    open: true,
    ...toast,
  }

  const index = state.value.findIndex((t: Toast) => t.id === body.id)
  if (index === -1) {
    state.value.push(body)
  }

  state.value = state.value.slice(-TOASTS_LIMIT)

  return body
}

function remove(id: string): void {
  if (!toastTimeouts.has(id)) {
    state.value = state.value.map((t) => (t.id === id ? { ...t, open: false } : t))

    // Timer to remove the toast after animation
    const timeout = setTimeout(() => {
      state.value = state.value.filter((t) => t.id !== id)
      toastTimeouts.delete(id)
    }, DESTRUCTION_DELAY)

    toastTimeouts.set(id, timeout)
  }
}

export function useToast() {
  return {
    toasts: state,
    toast,
    remove,
  }
}
