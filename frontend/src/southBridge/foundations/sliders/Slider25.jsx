import { useEffect, useState } from "react";
import "./Slider25.scss";

const DEFAULT_ITEMS = [
  {
    category: "COLLECTION 01",
    title: "Essential Form",
    description: "Designed for everyday presence.",
    image: "/images/slider-25-01.webp",
  },
  {
    category: "COLLECTION 02",
    title: "Quiet Volume",
    description: "A refined expression of utility.",
    image: "/images/slider-25-02.webp",
  },
  {
    category: "COLLECTION 03",
    title: "Pure Structure",
    description: "Precision in every surface.",
    image: "/images/slider-25-03.webp",
  },
];

function Slider25({
  items = DEFAULT_ITEMS,
  interval = 4200,
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

  const current = safeItems[index];

  const move = (direction) => {
    setIndex(
      (value) =>
        (value + direction + safeItems.length) %
        safeItems.length
    );
  };

  return (
    <section
      className="sb-slider-25"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="sb-slider-25__copy">
        <span>{current.category}</span>

        <h2>{current.title}</h2>

        <p>{current.description}</p>

        <div className="sb-slider-25__actions">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous product"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next product"
          >
            →
          </button>
        </div>
      </div>

      <div className="sb-slider-25__product">
        <div className="sb-slider-25__product-image">
          <img src={current.image} alt={current.title} />
        </div>

        <span className="sb-slider-25__index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}

export default Slider25;