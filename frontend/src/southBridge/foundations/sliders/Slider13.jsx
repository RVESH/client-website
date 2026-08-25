import { useState } from "react";
import "./Slider13.scss";

const DEFAULT_ITEMS = [
  { title: "01", image: "/images/slider-13-01.webp" },
  { title: "02", image: "/images/slider-13-02.webp" },
  { title: "03", image: "/images/slider-13-03.webp" },
  { title: "04", image: "/images/slider-13-04.webp" },
];

function Slider13({ items = DEFAULT_ITEMS }) {
  const safeItems = Array.isArray(items) ? items : [];
  const [index, setIndex] = useState(0);

  if (!safeItems.length) return null;

  return (
    <section className="sb-slider-13">
      <div className="sb-slider-13__grid">
        {safeItems.map((item, itemIndex) => (
          <button
            type="button"
            key={item.title + itemIndex}
            className={itemIndex === index ? "is-active" : ""}
            onClick={() => setIndex(itemIndex)}
          >
            <img src={item.image} alt={item.title} />
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      <div className="sb-slider-13__detail">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <strong>{safeItems[index].title}</strong>
      </div>
    </section>
  );
}

export default Slider13;