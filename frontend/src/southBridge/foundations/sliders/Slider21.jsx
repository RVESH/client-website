import { useEffect, useState } from "react";
import "./Slider21.scss";

const DEFAULT_ITEMS = [
  {
    title: "Architecture",
    text: "Form meets function.",
    image: "/images/slider-21-01.webp",
  },
  {
    title: "Hospitality",
    text: "Designed around people.",
    image: "/images/slider-21-02.webp",
  },
  {
    title: "Experience",
    text: "Details create memory.",
    image: "/images/slider-21-03.webp",
  },
];

function Slider21({
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

  return (
    <section
      className="sb-slider-21"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="sb-slider-21__numbers">
        {safeItems.map((item, itemIndex) => (
          <button
            key={item.title + itemIndex}
            type="button"
            className={itemIndex === index ? "is-active" : ""}
            onClick={() => setIndex(itemIndex)}
          >
            {String(itemIndex + 1).padStart(2, "0")}
          </button>
        ))}
      </div>

      <div className="sb-slider-21__copy">
        <span>SELECTED / {safeItems[index].title}</span>
        <h2>{safeItems[index].text}</h2>
      </div>

      <div className="sb-slider-21__image">
        <img
          src={safeItems[index].image}
          alt={safeItems[index].title}
        />
      </div>
    </section>
  );
}

export default Slider21;