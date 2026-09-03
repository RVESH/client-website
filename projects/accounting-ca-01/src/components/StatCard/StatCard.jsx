import { useEffect, useRef, useState } from "react";
import "./StatCard.scss";

export default function StatCard({ value, suffix = "", label, index = 0 }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (prefersReduced) {
            setCount(value);
            observer.disconnect();
            return;
          }

          const duration = 1200;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="stat-card" ref={ref} style={{ transitionDelay: `${index * 60}ms` }}>
      <p className="stat-card__value">
        {count}
        {suffix}
      </p>
      <p className="stat-card__label">{label}</p>
    </div>
  );
}
