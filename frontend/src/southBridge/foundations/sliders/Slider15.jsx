import { useEffect, useState } from "react";
import "./Slider15.scss";

const DEFAULT_ITEMS = [
  {
    eyebrow: "SCENE 01",
    title: "A Different Perspective",
    image: "/images/slider-15-01.webp",
  },
  {
    eyebrow: "SCENE 02",
    title: "Movement In Detail",
    image: "/images/slider-15-02.webp",
  },
  {
    eyebrow: "SCENE 03",
    title: "The Space Between",
    image: "/images/slider-15-03.webp",
  },
];

function Slider15({
  items = DEFAULT_ITEMS,
  interval = 4800,
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
      className="sb-slider-15"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {safeItems.map((item, itemIndex) => (
        <div
          key={item.title + itemIndex}
          className={`sb-slider-15__slide ${
            itemIndex === index ? "is-active" : ""
          }`}
        >
          <div className="sb-slider-15__image">
            <img
              src={item.image}
              alt={item.title}
            />
          </div>

          <div className="sb-slider-15__copy">
            <span>{item.eyebrow}</span>
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}

      <div className="sb-slider-15__controls">
        <button
          type="button"
          onClick={() =>
            setIndex(
              (value) =>
                (value - 1 + safeItems.length) % safeItems.length
            )
          }
          aria-label="Previous"
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
          aria-label="Next"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default Slider15;