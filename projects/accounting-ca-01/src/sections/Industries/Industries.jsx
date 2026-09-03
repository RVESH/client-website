import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "../../data/site";
import "./Industries.scss";

const AUTOPLAY_MS = 3800;

export default function Industries() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const items = site.industries.items;

  const goTo = useCallback(
    (i) => {
      const next = (i + items.length) % items.length;
      setIndex(next);
    },
    [items.length]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Autoplay, paused on hover/focus and respecting reduced motion.
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || prefersReduced) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, items.length]);

  // Keep the active card scrolled into view — scroll only the track
  // horizontally, never the document (scrollIntoView would do both).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index];
    if (!card) return;
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const offset = cardRect.left - trackRect.left + track.scrollLeft;
    track.scrollTo({ left: offset, behavior: "smooth" });
  }, [index]);

  // Touch/swipe support.
  const touchStartX = useRef(null);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 40) prev();
    else if (delta < -40) next();
    touchStartX.current = null;
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  return (
    <section className="section industries">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Sector experience</span>
            <h2 className="section-head__title">{site.industries.heading}</h2>
          </div>
          <p className="section-head__desc">{site.industries.desc}</p>
        </div>
      </div>

      <div
        className="industries__slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="container industries__slider-head">
          <button
            type="button"
            className="industries__arrow"
            onClick={prev}
            aria-label="Previous industry"
          >
            <ChevronLeft size={18} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            className="industries__arrow"
            onClick={next}
            aria-label="Next industry"
          >
            <ChevronRight size={18} strokeWidth={1.75} />
          </button>
        </div>

        <div
          className="industries__track"
          ref={trackRef}
          role="listbox"
          aria-label="Industries served"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {items.map((item, i) => (
            <div
              className={`industries__card ${i === index ? "is-active" : ""}`}
              key={item}
              role="option"
              aria-selected={i === index}
            >
              <span className="industries__card-number">{String(i + 1).padStart(2, "0")}</span>
              <span className="industries__card-name">{item}</span>
            </div>
          ))}
        </div>

        <div className="container industries__dots" role="tablist" aria-label="Slide position">
          {items.map((item, i) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${item}`}
              className={`industries__dot ${i === index ? "is-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
