import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import images from "../../data/images";

import "./SalonSlider.scss";

const slides = [
  {
    image: images.gallery[0],
    eyebrow: "THE STUDIO",
    title: "A space made for unhurried beauty.",
  },
  {
    image: images.gallery[1],
    eyebrow: "CRAFT",
    title: "Thoughtful work, beautifully finished.",
  },
  {
    image: images.gallery[2],
    eyebrow: "THE EXPERIENCE",
    title: "Quiet moments. Considered details.",
  },
  {
    image: images.gallery[3],
    eyebrow: "THE TEAM",
    title: "People who care about the work.",
  },
];

export default function SalonSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () =>
    setActive(
      (value) => (value + 1) % slides.length
    );

  const previous = () =>
    setActive(
      (value) =>
        (value - 1 + slides.length) %
        slides.length
    );

  useEffect(() => {
    if (paused) return undefined;

    const timer = setInterval(next, 4500);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="salon-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Studio highlights"
    >
      <div className="salon-slider__viewport">

        <div
          className="salon-slider__track"
          style={{
            transform:
              `translateX(-${active * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <article
              className="salon-slider__slide"
              key={slide.image}
            >
              <img
                src={slide.image}
                alt={slide.title}
              />

              <div className="salon-slider__caption">
                <span>
                  {slide.eyebrow}
                </span>

                <h3>
                  {slide.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="salon-slider__controls">

          <button
            type="button"
            onClick={previous}
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="salon-slider__dots">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                className={
                  index === active
                    ? "is-active"
                    : ""
                }
                onClick={() => setActive(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>

        </div>
      </div>
    </section>
  );
}
