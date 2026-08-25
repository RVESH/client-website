import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import "./Slider01.scss";

/*
 * SOUTHBRIDGE FOUNDATION — SLIDER 01
 * Minimal Auto Marquee
 *
 * Features:
 * - Continuous auto movement
 * - Pause on hover
 * - Pause on focus
 * - Previous / Next controls
 * - Touch / pointer drag
 * - Keyboard navigation
 * - Responsive
 * - Reduced-motion support
 * - No external dependency
 *
 * Website integration:
 *
 * <Slider01
 *   items={[
 *     { title: "Item One", image: "/images/one.webp" },
 *     { title: "Item Two", image: "/images/two.webp" },
 *   ]}
 * />
 */

const DEFAULT_ITEMS = [
  {
    id: "01",
    title: "Seasonal Collection",
    image: "/images/slider-01.webp",
  },
  {
    id: "02",
    title: "Signature Experience",
    image: "/images/slider-02.webp",
  },
  {
    id: "03",
    title: "Selected Details",
    image: "/images/slider-03.webp",
  },
  {
    id: "04",
    title: "Made With Intention",
    image: "/images/slider-04.webp",
  },
];

function Slider01({
  items = DEFAULT_ITEMS,
  autoPlay = true,
  speed = 0.35,
  gap = 24,
  showControls = true,
  ariaLabel = "Featured content",
}) {
  const trackRef = useRef(null);
  const frameRef = useRef(null);
  const lastTimeRef = useRef(null);
  const positionRef = useRef(0);

  const pointerRef = useRef({
    active: false,
    startX: 0,
    startPosition: 0,
  });

  const [paused, setPaused] = useState(false);

  const safeItems = Array.isArray(items) ? items : [];

  const scrollToPosition = useCallback((position) => {
    const track = trackRef.current;

    if (!track) return;

    positionRef.current = position;

    track.style.transform = `translate3d(${-position}px, 0, 0)`;
  }, []);

  const move = useCallback(
    (direction) => {
      const track = trackRef.current;

      if (!track || safeItems.length === 0) return;

      const firstItem = track.children[0];

      if (!firstItem) return;

      const itemWidth =
        firstItem.getBoundingClientRect().width + gap;

      const maxPosition = Math.max(
        0,
        track.scrollWidth / 2 - track.parentElement.offsetWidth
      );

      let nextPosition =
        positionRef.current +
        direction * itemWidth;

      if (nextPosition < 0) {
        nextPosition = maxPosition;
      }

      if (nextPosition > maxPosition) {
        nextPosition = 0;
      }

      scrollToPosition(nextPosition);
    },
    [gap, safeItems.length, scrollToPosition]
  );

  useEffect(() => {
    const track = trackRef.current;

    if (!track || safeItems.length < 2 || !autoPlay) {
      return undefined;
    }

    let reducedMotion = false;

    try {
      reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    } catch {
      reducedMotion = false;
    }

    if (reducedMotion) {
      return undefined;
    }

    const animate = (time) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!paused && !pointerRef.current.active) {
        const maxPosition = Math.max(
          0,
          track.scrollWidth / 2 -
            track.parentElement.offsetWidth
        );

        positionRef.current +=
          (speed * delta) / 16.67;

        if (positionRef.current >= maxPosition) {
          positionRef.current = 0;
        }

        track.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
      }

      frameRef.current =
        window.requestAnimationFrame(animate);
    };

    frameRef.current =
      window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = null;
      lastTimeRef.current = null;
    };
  }, [
    autoPlay,
    paused,
    safeItems.length,
    speed,
  ]);

  const handlePointerDown = (event) => {
    const track = trackRef.current;

    if (!track) return;

    pointerRef.current = {
      active: true,
      startX: event.clientX,
      startPosition: positionRef.current,
    };

    setPaused(true);

    track.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!pointerRef.current.active) return;

    const track = trackRef.current;

    if (!track) return;

    const difference =
      event.clientX -
      pointerRef.current.startX;

    const nextPosition = Math.max(
      0,
      pointerRef.current.startPosition - difference
    );

    positionRef.current = nextPosition;

    track.style.transform =
      `translate3d(${-nextPosition}px, 0, 0)`;
  };

  const handlePointerUp = () => {
    pointerRef.current.active = false;
    setPaused(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }
  };

  if (safeItems.length === 0) {
    return null;
  }

  /*
   * Duplicate items create the seamless marquee loop.
   */
  const renderedItems = [
    ...safeItems,
    ...safeItems,
  ];

  return (
    <section
      className="sb-slider-01"
      aria-label={ariaLabel}
    >
      <div
        className="sb-slider-01__viewport"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div
          ref={trackRef}
          className="sb-slider-01__track"
          style={{
            gap: `${gap}px`,
          }}
        >
          {renderedItems.map((item, index) => (
            <article
              className="sb-slider-01__item"
              key={`${item.id ?? index}-${index}`}
            >
              <div className="sb-slider-01__image">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title || ""}
                    draggable="false"
                    loading={
                      index < 2
                        ? "eager"
                        : "lazy"
                    }
                  />
                )}
              </div>

              <div className="sb-slider-01__meta">
                <span>
                  {item.id ??
                    String(index + 1).padStart(
                      2,
                      "0"
                    )}
                </span>

                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      {showControls && (
        <div
          className="sb-slider-01__controls"
          aria-label="Slider controls"
        >
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous slide"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}

export default Slider01;