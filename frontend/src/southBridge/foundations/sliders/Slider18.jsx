import { useState } from "react";
import "./Slider18.scss";

const DEFAULT_ITEMS = [
  { title: "Layer One", image: "/images/slider-18-01.webp" },
  { title: "Layer Two", image: "/images/slider-18-02.webp" },
  { title: "Layer Three", image: "/images/slider-18-03.webp" },
  { title: "Layer Four", image: "/images/slider-18-04.webp" },
];

function Slider18({ items = DEFAULT_ITEMS }) {
  const safeItems = Array.isArray(items) ? items : [];
  const [index, setIndex] = useState(0);

  if (!safeItems.length) return null;

  const next = () =>
    setIndex((value) => (value + 1) % safeItems.length);

  return (
    <section className="sb-slider-18">
      <div className="sb-slider-18__deck">
        {safeItems.map((item, itemIndex) => {
          const offset =
            (itemIndex - index + safeItems.length) %
            safeItems.length;

          return (
            <article
              key={`${item.title}-${itemIndex}`}
              style={{ "--offset": offset }}
              className={offset === 0 ? "is-current" : ""}
              onClick={offset === 0 ? next : undefined}
            >
              <img src={item.image} alt={item.title} />
              <div>
                <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          );
        })}
      </div>

      <button
        type="button"
        className="sb-slider-18__next"
        onClick={next}
        aria-label="Next slide"
      >
        Next ↗
      </button>
    </section>
  );
}

export default Slider18;