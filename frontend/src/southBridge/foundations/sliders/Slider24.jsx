import { useEffect, useState } from "react";
import "./Slider24.scss";

const DEFAULT_ITEMS = [
  { title: "Discover", detail: "01", image: "/images/slider-24-01.webp" },
  { title: "Create", detail: "02", image: "/images/slider-24-02.webp" },
  { title: "Refine", detail: "03", image: "/images/slider-24-03.webp" },
  { title: "Deliver", detail: "04", image: "/images/slider-24-04.webp" },
];

function Slider24({
  items = DEFAULT_ITEMS,
  interval = 4000,
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
      className="sb-slider-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="sb-slider-24__top">
        <span>PROCESS</span>

        <span>
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(safeItems.length).padStart(2, "0")}
        </span>
      </div>

      <div className="sb-slider-24__content">
        <div className="sb-slider-24__copy">
          <span>{safeItems[index].detail}</span>
          <h2>{safeItems[index].title}</h2>
        </div>

        <div className="sb-slider-24__image">
          <img
            src={safeItems[index].image}
            alt={safeItems[index].title}
          />
        </div>
      </div>

      <div className="sb-slider-24__progress">
        {safeItems.map((item, itemIndex) => (
          <button
            type="button"
            key={item.detail}
            className={itemIndex === index ? "is-active" : ""}
            onClick={() => setIndex(itemIndex)}
            aria-label={`Go to ${item.title}`}
          >
            <span />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Slider24;