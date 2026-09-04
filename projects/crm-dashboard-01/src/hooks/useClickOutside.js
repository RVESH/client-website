import { useEffect } from 'react'

export default function useClickOutside(refs, handler, active = true) {
  useEffect(() => {
    if (!active) return undefined

    const listener = (event) => {
      const list = Array.isArray(refs) ? refs : [refs]
      const clickedInside = list.some(
        (ref) => ref.current && ref.current.contains(event.target)
      )
      if (!clickedInside) handler(event)
    }

    document.addEventListener('mousedown', listener)
    return () => document.removeEventListener('mousedown', listener)
  }, [refs, handler, active])
}
