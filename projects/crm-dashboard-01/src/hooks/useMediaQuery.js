import { useEffect, useState } from 'react'

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const handler = (e) => setMatches(e.matches)
    setMatches(mql.matches)

    if (mql.addEventListener) {
      mql.addEventListener('change', handler)
      return () => mql.removeEventListener('change', handler)
    }
    // Safari < 14 fallback
    mql.addListener(handler)
    return () => mql.removeListener(handler)
  }, [query])

  return matches
}
