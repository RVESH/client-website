import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "./FeaturedSlider.scss";

const AUTO_PLAY_DELAY = 4200;
const SWIPE_THRESHOLD = 45;

const FeaturedSlider = ({ websites = [], onSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDocumentHidden, setIsDocumentHidden] = useState(false);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  /*
   * Only render entries that have a resolved image.
   * Websites.jsx is responsible for resolving JSON imageKey values.
   */
  const slides = useMemo(
    () =>
      Array.isArray(websites)
        ? websites.filter((website) => website?.image)
        : [],
    [websites]
  );

  const slideCount = slides.length;

  /*
   * Keep the active index valid whenever the source collection changes.
   */
  useEffect(() => {
    if (slideCount === 0) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex((current) => {
      if (current < 0 || current >= slideCount) {
        return 0;
      }

      return current;
    });
  }, [slideCount]);

  /*
   * Stop autoplay when the browser tab is hidden.
   * This avoids unnecessary timers and unexpected slide changes.
   */
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsDocumentHidden(document.hidden);
    };

    handleVisibilityChange();

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  /*
   * Respect the user's reduced-motion preference.
   */
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const goToSlide = useCallback(
    (index) => {
      if (!slideCount) {
        return;
      }

      const nextIndex =
        ((index % slideCount) + slideCount) % slideCount;

      setActiveIndex(nextIndex);
    },
    [slideCount]
  );

  const goToNext = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const goToPrevious = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  /*
   * Autoplay.
   *
   * It pauses while:
   * - the user hovers the slider
   * - the user focuses an interactive element inside it
   * - a touch gesture is in progress
   * - the tab is hidden
   * - reduced motion is requested
   */
  useEffect(() => {
    if (
      slideCount <= 1 ||
      isPaused ||
      isDocumentHidden ||
      prefersReducedMotion
    ) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, AUTO_PLAY_DELAY);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    isDocumentHidden,
    isPaused,
    prefersReducedMotion,
    slideCount,
  ]);

  /*
   * Keyboard navigation when the slider itself is focused.
   */
  const handleKeyDown = useCallback(
    (event) => {
      if (slideCount <= 1) {
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevious();
      }
    },
    [goToNext, goToPrevious, slideCount]
  );

  const handleTouchStart = useCallback((event) => {
    touchStartX.current =
      event.changedTouches?.[0]?.clientX ?? null;

    touchEndX.current = null;
    setIsPaused(true);
  }, []);

  const handleTouchMove = useCallback((event) => {
    touchEndX.current =
      event.changedTouches?.[0]?.clientX ?? null;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const start = touchStartX.current;
    const end = touchEndX.current;

    if (
      typeof start !== "number" ||
      typeof end !== "number"
    ) {
      touchStartX.current = null;
      touchEndX.current = null;
      setIsPaused(false);
      return;
    }

    const distance = start - end;

    if (Math.abs(distance) >= SWIPE_THRESHOLD) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  }, [goToNext, goToPrevious]);

  /*
   * Never resume autoplay when focus is moving between controls
   * inside this slider. Resume only after focus has fully left it.
   */
  const handleFocus = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleBlur = useCallback((event) => {
    const nextFocusedElement = event.relatedTarget;

    if (
      nextFocusedElement &&
      event.currentTarget.contains(nextFocusedElement)
    ) {
      return;
    }

    setIsPaused(false);
  }, []);

  if (!slideCount) {
    return (
      <section
        className="featured-slider featured-slider--empty"
        aria-label="Featured websites"
      >
        <div className="featured-slider__empty">
          <span>FEATURED WEBSITES</span>

          <strong>
            Website previews are coming in.
          </strong>

          <p>
            Add website screenshots to the catalog and they
            will automatically appear here.
          </p>
        </div>
      </section>
    );
  }

  const activeWebsite = slides[activeIndex];

  if (!activeWebsite) {
    return null;
  }

  return (
    <section
      className="featured-slider"
      aria-label="Featured websites"
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <div className="featured-slider__top">
        <div className="featured-slider__heading">
          <span className="featured-slider__eyebrow">
            FEATURED WEBSITE
          </span>

          <h3>
            A closer look at
            <span> what&apos;s ready.</span>
          </h3>
        </div>

        <div className="featured-slider__controls">
          <button
            type="button"
            className="featured-slider__arrow"
            onClick={goToPrevious}
            aria-label="Previous featured website"
            disabled={slideCount <= 1}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M19 12H5" />
              <path d="M11 18 5 12l6-6" />
            </svg>
          </button>

          <div
            className="featured-slider__counter"
            aria-live="polite"
            aria-atomic="true"
          >
            <strong>
              {String(activeIndex + 1).padStart(2, "0")}
            </strong>

            <span>
              /
              {String(slideCount).padStart(2, "0")}
            </span>
          </div>

          <button
            type="button"
            className="featured-slider__arrow"
            onClick={goToNext}
            aria-label="Next featured website"
            disabled={slideCount <= 1}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="featured-slider__stage"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          className="featured-slider__image-button"
          onClick={() => onSelect?.(activeWebsite)}
          aria-label={`View ${activeWebsite.name} details`}
        >
          <div className="featured-slider__image-wrap">
            {slides.map((website, index) => {
              const isActive = index === activeIndex;

              return (
                <img
                  key={website.id || `slide-${index}`}
                  className={`featured-slider__image${
                    isActive ? " is-active" : ""
                  }`}
                  src={website.image}
                  alt={`${website.name} website preview`}
                  loading={index === activeIndex ? "eager" : "lazy"}
                  decoding="async"
                  draggable="false"
                  aria-hidden={!isActive}
                />
              );
            })}

            <span
              className="featured-slider__image-overlay"
              aria-hidden="true"
            />

            <span className="featured-slider__view-label">
              <span>VIEW PROJECT</span>
              <b aria-hidden="true">↗</b>
            </span>
          </div>
        </button>

        <div
          className="featured-slider__side-note"
          aria-hidden="true"
        >
          <span>CLICK TO EXPLORE</span>
          <i />
        </div>
      </div>

      <div className="featured-slider__bottom">
        <div className="featured-slider__project">
          <span>{activeWebsite.category || "Website"}</span>

          <strong>
            {activeWebsite.name || "Untitled Website"}
          </strong>
        </div>

        <div
          className="featured-slider__dots"
          role="tablist"
          aria-label="Featured website slides"
        >
          {slides.map((website, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={website.id || `dot-${index}`}
                type="button"
                role="tab"
                className={isActive ? "is-active" : ""}
                onClick={() => goToSlide(index)}
                aria-label={`Show ${website.name || "website"} `}
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
              >
                <span />
              </button>
            );
          })}
        </div>

        <div className="featured-slider__status">
          <i
            className={
              isPaused || isDocumentHidden
                ? "is-paused"
                : ""
            }
          />

          <span>
            {isPaused || isDocumentHidden
              ? "PAUSED"
              : prefersReducedMotion
                ? "STATIC"
                : "AUTO PLAY"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSlider;