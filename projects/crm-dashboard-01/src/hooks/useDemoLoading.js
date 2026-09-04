import { useEffect, useState } from 'react'

/**
 * Simulates a brief loading period so the UI can demonstrate skeleton
 * states on first mount, without any real backend or API call.
 */
export default function useDemoLoading(delay = 650) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return loading
}
