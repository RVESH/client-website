import { useState } from "react";
import "./Slider10.scss";

const DEFAULT_ITEMS = [
  { title: "Perspective One", image: "/images/slider-10-01.webp" },
  { title: "Perspective Two", image: "/images/slider-10-02.webp" },
  { title: "Perspective Three", image: "/images/slider-10-03.webp" },
];

function Slider10({ items = DEFAULT_ITEMS }) {
  const safeItems = Array.isArray(items) ? items : [];
  const [index, setIndex] = useState(0);

  if (!safeItems.length) return null;

  return (
    <section className="sb-slider-10" aria-label="Perspective slider">
      <div className="sb-slider-10__stage">
        {safeItems.map((item, itemIndex) => {
          const difference = itemIndex - index;

          return (
            <article
              key={item.title + itemIndex}
              className={
                difference === 0 ? "is-active" : ""
              }
              style={{
                "--difference": difference,
              }}
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </article>
          );
        })}
      </div>

      <div className="sb-slider-10__controls">
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

export default Slider10;