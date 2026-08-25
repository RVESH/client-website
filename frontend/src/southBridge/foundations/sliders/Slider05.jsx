import { useState } from "react";
import "./Slider05.scss";

const DEFAULT_ITEMS = [
  { title: "One", text: "Selected experience", image: "/images/slider-05-01.webp" },
  { title: "Two", text: "Refined presentation", image: "/images/slider-05-02.webp" },
  { title: "Three", text: "Distinct character", image: "/images/slider-05-03.webp" },
  { title: "Four", text: "Modern expression", image: "/images/slider-05-04.webp" },
];

function Slider05({ items = DEFAULT_ITEMS }) {
  const [index, setIndex] = useState(0);
  const safeItems = Array.isArray(items) ? items : [];

  if (!safeItems.length) return null;

  const move = (direction) => {
    setIndex(
      (value) =>
        (value + direction + safeItems.length) % safeItems.length
    );
  };

  return (
    <section className="sb-slider-05" aria-label="Card slider">
      <div className="sb-slider-05__track">
        {safeItems.map((item, itemIndex) => (
          <article
            key={item.title + itemIndex}
            className={`sb-slider-05__card ${
              itemIndex === index ? "is-active" : ""
            }`}
          >
            <img src={item.image} alt={item.title} />
            <div>
              <span>{String(itemIndex + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="sb-slider-05__controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous">
          ←
        </button>

        <button type="button" onClick={() => move(1)} aria-label="Next">
          →
        </button>
      </div>
    </section>
  );
}

export default Slider05;