import { useRef, useState } from "react";
import "./Slider11.scss";

const DEFAULT_ITEMS = [
  { title: "Frame 01", image: "/images/slider-11-01.webp" },
  { title: "Frame 02", image: "/images/slider-11-02.webp" },
  { title: "Frame 03", image: "/images/slider-11-03.webp" },
  { title: "Frame 04", image: "/images/slider-11-04.webp" },
];

function Slider11({ items = DEFAULT_ITEMS }) {
  const safeItems = Array.isArray(items) ? items : [];
  const viewportRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  if (!safeItems.length) return null;

  const scroll = (direction) => {
    viewportRef.current?.scrollBy({
      left: direction * viewportRef.current.clientWidth * 0.65,
      behavior: "smooth",
    });
  };

  return (
    <section className="sb-slider-11">
      <div
        ref={viewportRef}
        className={`sb-slider-11__viewport ${
          dragging ? "is-dragging" : ""
        }`}
        onMouseDown={() => setDragging(true)}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onTouchStart={() => setDragging(true)}
        onTouchEnd={() => setDragging(false)}
      >
        <div className="sb-slider-11__track">
          {safeItems.map((item, index) => (
            <article key={item.title + index}>
              <img src={item.image} alt={item.title} />
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="sb-slider-11__controls">
        <button type="button" onClick={() => scroll(-1)}>
          ←
        </button>

        <button type="button" onClick={() => scroll(1)}>
          →
        </button>
      </div>
    </section>
  );
}

export default Slider11;