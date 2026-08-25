import { useState } from "react";
import "./Slider08.scss";

const DEFAULT_ITEMS = [
  { title: "Form", number: "01", image: "/images/slider-08-01.webp" },
  { title: "Texture", number: "02", image: "/images/slider-08-02.webp" },
  { title: "Balance", number: "03", image: "/images/slider-08-03.webp" },
];

function Slider08({ items = DEFAULT_ITEMS }) {
  const safeItems = Array.isArray(items) ? items : [];
  const [index, setIndex] = useState(0);

  if (!safeItems.length) return null;

  return (
    <section className="sb-slider-08">
      <div className="sb-slider-08__glow" />

      <div className="sb-slider-08__cards">
        {safeItems.map((item, itemIndex) => {
          const offset =
            (itemIndex - index + safeItems.length) %
            safeItems.length;

          return (
            <article
              key={item.title + itemIndex}
              className={`sb-slider-08__card ${
                offset === 0 ? "is-active" : ""
              }`}
              style={{
                "--offset": offset,
              }}
            >
              <img src={item.image} alt={item.title} />

              <div>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          );
        })}
      </div>

      <div className="sb-slider-08__controls">
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

export default Slider08;