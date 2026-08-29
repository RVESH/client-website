import { useRef } from "react";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "./Slider.scss";

export default function Slider({
  slides = [],
}) {
  const trackRef = useRef(null);

  if (!slides.length) {
    return null;
  }

  const move = (direction) => {
    const track =
      trackRef.current;

    if (!track) {
      return;
    }

    const amount =
      Math.min(
        track.clientWidth * 0.72,
        500
      );

    track.scrollBy({
      left:
        direction === "next"
          ? amount
          : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="store-slider">

      <div className="store-slider__heading">

        <div>
          <span className="eyebrow">
            NOVA EDIT
          </span>

          <h2 className="section-title">
            A closer look.
          </h2>
        </div>

        <div className="store-slider__controls">
          <button
            type="button"
            onClick={() =>
              move("previous")
            }
            aria-label="Previous"
          >
            <ArrowLeft
              size={17}
              strokeWidth={1.6}
            />
          </button>

          <button
            type="button"
            onClick={() =>
              move("next")
            }
            aria-label="Next"
          >
            <ArrowRight
              size={17}
              strokeWidth={1.6}
            />
          </button>
        </div>

      </div>

      <div
        ref={trackRef}
        className="store-slider__track"
      >
        {slides.map((slide) => (
          <article
            key={slide.id}
            className="store-slider__slide"
          >
            <div className="store-slider__image">
              <img
                src={slide.image}
                alt={slide.alt}
                loading="lazy"
              />
            </div>

            <div className="store-slider__body">
              <span>
                {slide.eyebrow}
              </span>

              <h3>
                {slide.title}
              </h3>

              <p>
                {slide.text}
              </p>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}