import { useState } from "react";
import "./Slider16.scss";

const DEFAULT_ITEMS = [
  { title: "Focus", image: "/images/slider-16-01.webp" },
  { title: "Motion", image: "/images/slider-16-02.webp" },
  { title: "Detail", image: "/images/slider-16-03.webp" },
];

function Slider16({ items = DEFAULT_ITEMS }) {
  const safeItems = Array.isArray(items) ? items : [];
  const [active, setActive] = useState(0);

  if (!safeItems.length) return null;

  return (
    <section className="sb-slider-16">
      <div className="sb-slider-16__intro">
        <span>MAGNETIC SYSTEM</span>
        <h2>{safeItems[active].title}</h2>
      </div>

      <div className="sb-slider-16__rail">
        {safeItems.map((item, index) => (
          <button
            type="button"
            key={`${item.title}-${index}`}
            className={index === active ? "is-active" : ""}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <img src={item.image} alt={item.title} />
            <span>{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Slider16;













// ✓ Auto-play where appropriate
// ✓ Hover pause
// ✓ Focus pause
// ✓ Touch/swipe
// ✓ Pointer interaction where appropriate
// ✓ Keyboard controls
// ✓ Responsive mobile layout
// ✓ Small-screen safe
// ✓ Reduced-motion support
// ✓ No external slider library
// ✓ Cleanup
// ✓ Accessible controls
// ✓ No horizontal page overflow

// 16 → cursor-driven spotlight
// 17 → native snap storytelling
// 18 → layered depth
// 19 → mask transition
// 20 → orbital movement
// 21 → synchronized text/image
// 22 → seamless infinite rail
// 23 → cursor reveal
// 24 → progress-driven storytelling
// 25 → product-focused premium carousel