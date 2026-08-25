import { useEffect, useState } from "react";
import "./Slider14.scss";

const DEFAULT_ITEMS = [
  { title: "View One", image: "/images/slider-14-01.webp" },
  { title: "View Two", image: "/images/slider-14-02.webp" },
  { title: "View Three", image: "/images/slider-14-03.webp" },
];

function Slider14({
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
      className="sb-slider-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="sb-slider-14__main">
        <img
          src={safeItems[index].image}
          alt={safeItems[index].title}
        />

        <div>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h2>{safeItems[index].title}</h2>
        </div>
      </div>

      <div className="sb-slider-14__thumbs">
        {safeItems.map((item, itemIndex) => (
          <button
            type="button"
            key={item.title + itemIndex}
            className={
              itemIndex === index ? "is-active" : ""
            }
            onClick={() => setIndex(itemIndex)}
            aria-label={`Show ${item.title}`}
          >
            <img
              src={item.image}
              alt=""
            />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Slider14;