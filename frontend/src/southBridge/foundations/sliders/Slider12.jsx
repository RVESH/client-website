import { useEffect, useState } from "react";
import "./Slider12.scss";

const DEFAULT_ITEMS = [
  { label: "SYSTEM 01", title: "Signal", image: "/images/slider-12-01.webp" },
  { label: "SYSTEM 02", title: "Vector", image: "/images/slider-12-02.webp" },
  { label: "SYSTEM 03", title: "Core", image: "/images/slider-12-03.webp" },
];

function Slider12({
  items = DEFAULT_ITEMS,
  interval = 3200,
}) {
  const safeItems = Array.isArray(items) ? items : [];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (safeItems.length < 2 || paused) return undefined;

    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % safeItems.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, paused, safeItems.length]);

  if (!safeItems.length) return null;

  return (
    <section
      className="sb-slider-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="sb-slider-12__scanline" />

      <div className="sb-slider-12__visual">
        <img
          src={safeItems[index].image}
          alt={safeItems[index].title}
        />
      </div>

      <div className="sb-slider-12__hud">
        <span>{safeItems[index].label}</span>

        <h2>{safeItems[index].title}</h2>

        <div className="sb-slider-12__controls">
          <button
            type="button"
            onClick={() =>
              setIndex(
                (value) =>
                  (value - 1 + safeItems.length) %
                  safeItems.length
              )
            }
            aria-label="Previous"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() =>
              setIndex(
                (value) =>
                  (value + 1) % safeItems.length
              )
            }
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Slider12;