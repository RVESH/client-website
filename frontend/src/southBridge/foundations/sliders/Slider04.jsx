import { useEffect, useState } from "react";
import "./Slider04.scss";

const DEFAULT_ITEMS = [
  {
    title: "After Dark",
    image: "/images/slider-04-01.webp",
  },
  {
    title: "The Arrival",
    image: "/images/slider-04-02.webp",
  },
  {
    title: "Late Hours",
    image: "/images/slider-04-03.webp",
  },
];

function Slider04({
  items = DEFAULT_ITEMS,
  interval = 4500,
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
      className="sb-slider-04"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Cinematic slider"
    >
      {safeItems.map((item, itemIndex) => (
        <div
          key={item.title + itemIndex}
          className={`sb-slider-04__slide ${
            itemIndex === index ? "is-active" : ""
          }`}
        >
          <img src={item.image} alt={item.title} />
        </div>
      ))}

      <div className="sb-slider-04__content">
        <span>04 / CINEMATIC</span>
        <h2>{safeItems[index].title}</h2>
      </div>

      <div className="sb-slider-04__controls">
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

export default Slider04;