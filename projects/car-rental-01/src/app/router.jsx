import { createContext, useContext, useState, useEffect, useCallback } from 'react'

/**
 * A minimal client-side router built on the native History API.
 * No external routing library — this project intentionally avoids
 * adding dependencies beyond the standard Vite + React scaffold.
 *
 * Supports: real URL paths, browser back/forward (popstate), scroll
 * reset on navigation, and a `navigate()` function for programmatic
 * routing (e.g. after submitting the booking widget).
 */

const RouterContext = createContext(null)

export function RouterProvider({ children }) {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  const navigate = useCallback((to) => {
    if (to === window.location.pathname) return
    window.history.pushState({}, '', to)
    setPath(to)
  }, [])

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  const ctx = useContext(RouterContext)
  if (!ctx) {
    throw new Error('useRouter must be used within a RouterProvider')
  }
  return ctx
}
