import { useEffect, useState } from "react";
import "./Slider03.scss";

const DEFAULT_ITEMS = [
  {
    id: "01",
    eyebrow: "STORY 01",
    title: "Crafted with intention.",
    description: "A slower, editorial approach to presenting selected work.",
    image: "/images/slider-03-01.webp",
  },
  {
    id: "02",
    eyebrow: "STORY 02",
    title: "Built around detail.",
    description: "Balanced typography and imagery for premium storytelling.",
    image: "/images/slider-03-02.webp",
  },
];

function Slider03({
  items = DEFAULT_ITEMS,
  interval = 5000,
}) {
  const safeItems = Array.isArray(items) ? items : [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeItems.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % safeItems.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, safeItems.length]);

  if (!safeItems.length) return null;

  const current = safeItems[index];

  return (
    <section className="sb-slider-03" aria-label="Editorial stories">
      <div className="sb-slider-03__copy">
        <span>{current.eyebrow}</span>
        <h2>{current.title}</h2>
        <p>{current.description}</p>

        <div className="sb-slider-03__nav">
          <button
            type="button"
            onClick={() =>
              setIndex((value) =>
                (value - 1 + safeItems.length) % safeItems.length
              )
            }
            aria-label="Previous story"
          >
            ←
          </button>

          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(safeItems.length).padStart(2, "0")}
          </span>

          <button
            type="button"
            onClick={() =>
              setIndex((value) => (value + 1) % safeItems.length)
            }
            aria-label="Next story"
          >
            →
          </button>
        </div>
      </div>

      <div className="sb-slider-03__image">
        <img src={current.image} alt={current.title} />
      </div>
    </section>
  );
}

export default Slider03;