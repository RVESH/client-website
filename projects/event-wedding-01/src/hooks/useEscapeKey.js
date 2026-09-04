import { useEffect } from 'react'

export default function useEscapeKey(handler, active = true) {
  useEffect(() => {
    if (!active) return undefined
    const listener = (e) => {
      if (e.key === 'Escape') handler()
    }
    document.addEventListener('keydown', listener)
    return () => document.removeEventListener('keydown', listener)
  }, [handler, active])
}
