import { useState } from "react";
import "./Slider23.scss";

const DEFAULT_ITEMS = [
  { title: "Object One", image: "/images/slider-23-01.webp" },
  { title: "Object Two", image: "/images/slider-23-02.webp" },
  { title: "Object Three", image: "/images/slider-23-03.webp" },
];

function Slider23({ items = DEFAULT_ITEMS }) {
  const safeItems = Array.isArray(items) ? items : [];
  const [active, setActive] = useState(0);

  if (!safeItems.length) return null;

  return (
    <section className="sb-slider-23">
      <div className="sb-slider-23__list">
        {safeItems.map((item, index) => (
          <button
            key={item.title + index}
            type="button"
            className={index === active ? "is-active" : ""}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.title}</strong>
            <b>↗</b>
          </button>
        ))}
      </div>

      <div className="sb-slider-23__preview">
        <img
          src={safeItems[active].image}
          alt={safeItems[active].title}
        />
      </div>
    </section>
  );
}

export default Slider23;