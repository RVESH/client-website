import { useEffect, useRef } from "react";
import "./Slider06.scss";

const DEFAULT_ITEMS = [
  { title: "Object 01", price: "$120", image: "/images/slider-06-01.webp" },
  { title: "Object 02", price: "$180", image: "/images/slider-06-02.webp" },
  { title: "Object 03", price: "$240", image: "/images/slider-06-03.webp" },
  { title: "Object 04", price: "$320", image: "/images/slider-06-04.webp" },
];

function Slider06({ items = DEFAULT_ITEMS, autoPlay = true }) {
  const railRef = useRef(null);
  const safeItems = Array.isArray(items) ? items : [];

  useEffect(() => {
    if (!autoPlay || !railRef.current || safeItems.length < 2) {
      return undefined;
    }

    const rail = railRef.current;

    const timer = window.setInterval(() => {
      const amount = rail.clientWidth * 0.55;
      rail.scrollBy({
        left: amount,
        behavior: "smooth",
      });

      if (
        rail.scrollLeft + rail.clientWidth >=
        rail.scrollWidth - 20
      ) {
        window.setTimeout(() => {
          rail.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }, 550);
      }
    }, 3300);

    return () => window.clearInterval(timer);
  }, [autoPlay, safeItems.length]);

  if (!safeItems.length) return null;

  return (
    <section className="sb-slider-06" aria-label="Product rail">
      <div ref={railRef} className="sb-slider-06__rail">
        {safeItems.map((item, index) => (
          <article key={item.title + index}>
            <div className="sb-slider-06__image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="sb-slider-06__meta">
              <h3>{item.title}</h3>
              <span>{item.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Slider06;