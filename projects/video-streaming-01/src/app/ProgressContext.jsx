import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ProgressContext = createContext(null);
const STORAGE_KEY = "aperture:progress";

function readInitial() {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(readInitial);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Storage may be unavailable — progress simply won't persist.
    }
  }, [progress]);

  const value = useMemo(
    () => ({
      progress,
      // percent: 0-100. Anything past 95% is treated as finished and cleared,
      // so completed titles drop out of Continue Watching naturally.
      setPercent: (id, percent) =>
        setProgress((prev) => {
          if (percent >= 95) {
            const next = { ...prev };
            delete next[id];
            return next;
          }
          return { ...prev, [id]: Math.max(0, Math.round(percent)) };
        }),
      getPercent: (id) => progress[id] || 0,
    }),
    [progress]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
