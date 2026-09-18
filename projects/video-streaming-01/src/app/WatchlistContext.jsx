import { createContext, useContext, useEffect, useMemo, useState } from "react";

const WatchlistContext = createContext(null);
const STORAGE_KEY = "aperture:watchlist";

function readInitial() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function WatchlistProvider({ children }) {
  const [ids, setIds] = useState(readInitial);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {
      // Storage may be unavailable (private browsing, quota) — fail silently,
      // the watchlist simply won't persist across reloads in that case.
    }
  }, [ids]);

  const value = useMemo(
    () => ({
      ids,
      has: (id) => ids.includes(id),
      toggle: (id) =>
        setIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
      remove: (id) => setIds((prev) => prev.filter((x) => x !== id)),
    }),
    [ids]
  );

  return <WatchlistContext.Provider value={value}>{children}</WatchlistContext.Provider>;
}

export function useWatchlist() {
  const ctx = useContext(WatchlistContext);
  if (!ctx) throw new Error("useWatchlist must be used within WatchlistProvider");
  return ctx;
}
