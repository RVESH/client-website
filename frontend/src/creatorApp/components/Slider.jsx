import { useState } from "react";
import "./Slider.scss";

const Slider = ({ items, renderItem, title }) => {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx(i => Math.max(0, i - 1));
  const next = () => setIdx(i => Math.min(items.length - 1, i + 1));

  return (
    <div className="creator-slider">
      {title && <h2 className="creator-slider__title">{title}</h2>}
      <div className="creator-slider__track">
        <button className="creator-slider__arrow" onClick={prev} disabled={idx === 0}>‹</button>
        <div className="creator-slider__item">{renderItem(items[idx], idx)}</div>
        <button className="creator-slider__arrow" onClick={next} disabled={idx === items.length - 1}>›</button>
      </div>
      <div className="creator-slider__dots">
        {items.map((_, i) => (
          <span key={i} className={`dot${i === idx ? " dot--active" : ""}`} onClick={() => setIdx(i)} />
        ))}
      </div>
    </div>
  );
};

export default Slider;