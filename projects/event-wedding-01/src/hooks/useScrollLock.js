import { useEffect } from 'react'

export default function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined
    document.body.classList.add('scroll-locked')
    return () => {
      document.body.classList.remove('scroll-locked')
    }
  }, [locked])
}
