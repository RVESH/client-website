import { useEffect, useRef, useState } from "react";
import "./Slider02.scss";

const DEFAULT_ITEMS = [
  {
    id: "01",
    title: "Quiet Morning",
    image: "/images/slider-02-01.webp",
  },
  {
    id: "02",
    title: "Selected Detail",
    image: "/images/slider-02-02.webp",
  },
  {
    id: "03",
    title: "After Hours",
    image: "/images/slider-02-03.webp",
  },
];

function Slider02({
  items = DEFAULT_ITEMS,
  interval = 3600,
  pauseOnHover = true,
}) {
  const safeItems = Array.isArray(items) ? items : [];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchRef = useRef(0);

  useEffect(() => {
    if (safeItems.length < 2 || paused) return undefined;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % safeItems.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, paused, safeItems.length]);

  if (!safeItems.length) return null;

  const current = safeItems[index];

  const next = () =>
    setIndex((value) => (value + 1) % safeItems.length);

  const previous = () =>
    setIndex(
      (value) => (value - 1 + safeItems.length) % safeItems.length
    );

  return (
    <section
      className="sb-slider-02"
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      onTouchStart={(event) => {
        touchRef.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        const endX = event.changedTouches[0].clientX;
        const delta = touchRef.current - endX;

        if (Math.abs(delta) > 45) {
          delta > 0 ? next() : previous();
        }
      }}
      aria-label="Featured collection"
    >
      <div className="sb-slider-02__image">
        <img
          src={current.image}
          alt={current.title}
        />
      </div>

      <div className="sb-slider-02__overlay" />

      <div className="sb-slider-02__content">
        <span>{current.id} / {safeItems.length}</span>
        <h2>{current.title}</h2>

        <div className="sb-slider-02__controls">
          <button type="button" onClick={previous} aria-label="Previous">
            ←
          </button>

          <button type="button" onClick={next} aria-label="Next">
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Slider02;