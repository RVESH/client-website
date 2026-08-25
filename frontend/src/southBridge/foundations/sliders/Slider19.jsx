import { useState } from "react";
import "./Slider19.scss";

const DEFAULT_ITEMS = [
  { eyebrow: "01 / FORM", title: "Beyond the expected.", image: "/images/slider-19-01.webp" },
  { eyebrow: "02 / SPACE", title: "Quietly expressive.", image: "/images/slider-19-02.webp" },
  { eyebrow: "03 / DETAIL", title: "Made to linger.", image: "/images/slider-19-03.webp" },
];

function Slider19({ items = DEFAULT_ITEMS }) {
  const safeItems = Array.isArray(items) ? items : [];
  const [index, setIndex] = useState(0);

  if (!safeItems.length) return null;

  return (
    <section className="sb-slider-19">
      <div className="sb-slider-19__copy">
        <span>{safeItems[index].eyebrow}</span>
        <h2 key={safeItems[index].title}>
          {safeItems[index].title}
        </h2>

        <div className="sb-slider-19__dots">
          {safeItems.map((item, itemIndex) => (
            <button
              key={item.title + itemIndex}
              type="button"
              className={itemIndex === index ? "is-active" : ""}
              onClick={() => setIndex(itemIndex)}
              aria-label={`Show slide ${itemIndex + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="sb-slider-19__image">
        {safeItems.map((item, itemIndex) => (
          <img
            key={item.title + itemIndex}
            className={itemIndex === index ? "is-active" : ""}
            src={item.image}
            alt=""
          />
        ))}
      </div>
    </section>
  );
}

export default Slider19;