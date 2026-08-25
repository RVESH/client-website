import { useEffect, useState } from "react";
import "./Slider09.scss";

const DEFAULT_ITEMS = [
  { title: "Maison", image: "/images/slider-09-01.webp" },
  { title: "Atelier", image: "/images/slider-09-02.webp" },
  { title: "Collection", image: "/images/slider-09-03.webp" },
];

function Slider09({
  items = DEFAULT_ITEMS,
  interval = 5000,
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
      className="sb-slider-09"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {safeItems.map((item, itemIndex) => (
        <img
          key={item.title + itemIndex}
          className={itemIndex === index ? "is-active" : ""}
          src={item.image}
          alt=""
        />
      ))}

      <div className="sb-slider-09__content">
        <span>09 / SELECTED</span>
        <h2>{safeItems[index].title}</h2>

        <div className="sb-slider-09__progress">
          {safeItems.map((_, itemIndex) => (
            <button
              key={itemIndex}
              type="button"
              className={itemIndex === index ? "is-active" : ""}
              onClick={() => setIndex(itemIndex)}
              aria-label={`Go to slide ${itemIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Slider09;