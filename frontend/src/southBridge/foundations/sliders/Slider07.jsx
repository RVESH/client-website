import { useEffect, useState } from "react";
import "./Slider07.scss";

const DEFAULT_ITEMS = [
  { title: "Chapter One", text: "Beginning", image: "/images/slider-07-01.webp" },
  { title: "Chapter Two", text: "Movement", image: "/images/slider-07-02.webp" },
  { title: "Chapter Three", text: "Perspective", image: "/images/slider-07-03.webp" },
];

function Slider07({
  items = DEFAULT_ITEMS,
  interval = 4000,
}) {
  const safeItems = Array.isArray(items) ? items : [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeItems.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % safeItems.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, safeItems.length]);

  if (!safeItems.length) return null;

  return (
    <section className="sb-slider-07">
      <div className="sb-slider-07__side">
        {safeItems.map((item, itemIndex) => (
          <button
            key={item.title + itemIndex}
            type="button"
            className={itemIndex === index ? "is-active" : ""}
            onClick={() => setIndex(itemIndex)}
          >
            <span>{String(itemIndex + 1).padStart(2, "0")}</span>
            <strong>{item.title}</strong>
          </button>
        ))}
      </div>

      <div className="sb-slider-07__visual">
        <img
          src={safeItems[index].image}
          alt={safeItems[index].title}
        />
        <div>
          <span>{safeItems[index].text}</span>
          <h2>{safeItems[index].title}</h2>
        </div>
      </div>
    </section>
  );
}

export default Slider07;