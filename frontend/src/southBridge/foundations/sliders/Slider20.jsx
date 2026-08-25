import { useState } from "react";
import "./Slider20.scss";

const DEFAULT_ITEMS = [
  { title: "Orbit One", image: "/images/slider-20-01.webp" },
  { title: "Orbit Two", image: "/images/slider-20-02.webp" },
  { title: "Orbit Three", image: "/images/slider-20-03.webp" },
  { title: "Orbit Four", image: "/images/slider-20-04.webp" },
];

function Slider20({ items = DEFAULT_ITEMS }) {
  const safeItems = Array.isArray(items) ? items : [];
  const [index, setIndex] = useState(0);

  if (!safeItems.length) return null;

  const next = () =>
    setIndex((value) => (value + 1) % safeItems.length);

  return (
    <section className="sb-slider-20">
      <div className="sb-slider-20__orbit">
        {safeItems.map((item, itemIndex) => {
          const angle =
            ((itemIndex - index + safeItems.length) %
              safeItems.length) *
            (360 / safeItems.length);

          return (
            <button
              type="button"
              key={item.title + itemIndex}
              className={itemIndex === index ? "is-active" : ""}
              style={{ "--angle": `${angle}deg` }}
              onClick={() => setIndex(itemIndex)}
            >
              <img src={item.image} alt={item.title} />
            </button>
          );
        })}
      </div>

      <div className="sb-slider-20__center">
        <span>ORBIT</span>
        <h2>{safeItems[index].title}</h2>

        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
        >
          Continue →
        </button>
      </div>
    </section>
  );
}

export default Slider20;