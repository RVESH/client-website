import { useEffect, useState } from "react";

import Preloader01 from "./Preloader01";
import Preloader02 from "./Preloader02";
import Preloader03 from "./Preloader03";
import Preloader04 from "./Preloader04";
import Preloader05 from "./Preloader05";
import Preloader06 from "./Preloader06";
import Preloader07 from "./Preloader07";
import Preloader08 from "./Preloader08";
import Preloader09 from "./Preloader09";
import Preloader10 from "./Preloader10";
import Preloader11 from "./Preloader11";
import Preloader12 from "./Preloader12";

import "./style.scss";

/*
 * SOUTHBRIDGE PRELOADER FOUNDATION
 *
 * PURPOSE
 * -------
 * Showcase and preview 12 reusable preloader designs.
 *
 * FOUNDATION VARIANTS
 * -------------------
 * 01 → Minimal Line
 * 02 → Percentage Counter
 * 03 → Logo Reveal
 * 04 → Split Screen
 * 05 → Editorial Typography
 * 06 → Circular Progress
 * 07 → Grid System
 * 08 → Image Reveal
 * 09 → Luxury Fade
 * 10 → Dark Tech
 * 11 → Soft Gradient
 * 12 → Cinematic Transition
 *
 * IMPORTANT
 * ---------
 * These foundation preloaders are VISUAL COMPONENTS.
 *
 * They accept:
 * - open
 * - progress
 *
 * They do NOT control:
 * - timers
 * - application loading
 * - route loading
 * - image loading
 * - font loading
 * - completion state
 *
 * The standalone website App.js controls the real loading lifecycle.
 */

const variants = [
  {
    id: 1,
    title: "Minimal Line",
    description: "Clean and understated loading state.",
    Component: Preloader01,
  },
  {
    id: 2,
    title: "Percentage Counter",
    description: "Typography-led percentage loader.",
    Component: Preloader02,
  },
  {
    id: 3,
    title: "Logo Reveal",
    description: "Brand-forward loading screen.",
    Component: Preloader03,
  },
  {
    id: 4,
    title: "Split Screen",
    description: "Editorial split composition.",
    Component: Preloader04,
  },
  {
    id: 5,
    title: "Editorial",
    description: "Large typography and restrained detail.",
    Component: Preloader05,
  },
  {
    id: 6,
    title: "Circular",
    description: "Focused progress indicator.",
    Component: Preloader06,
  },
  {
    id: 7,
    title: "Grid System",
    description: "Technical product / digital aesthetic.",
    Component: Preloader07,
  },
  {
    id: 8,
    title: "Image Reveal",
    description: "Visual-first hospitality and portfolio loader.",
    Component: Preloader08,
  },
  {
    id: 9,
    title: "Luxury Fade",
    description: "Refined editorial presentation.",
    Component: Preloader09,
  },
  {
    id: 10,
    title: "Dark Tech",
    description: "System-style loading experience.",
    Component: Preloader10,
  },
  {
    id: 11,
    title: "Soft Gradient",
    description: "Friendly modern gradient treatment.",
    Component: Preloader11,
  },
  {
    id: 12,
    title: "Cinematic",
    description: "High-impact visual transition.",
    Component: Preloader12,
  },
];

const PREVIEW_DURATION = 1800;
const CLOSE_DELAY = 280;

function Preloader() {
  const [activeId, setActiveId] = useState(null);
  const [progress, setProgress] = useState(0);

  const openPreview = (id) => {
    setProgress(0);
    setActiveId(id);
  };

  const closePreview = () => {
    setActiveId(null);
    setProgress(0);
  };

  useEffect(() => {
    if (activeId === null) {
      return undefined;
    }

    const startedAt = performance.now();
    let frameId = null;
    let closeTimer = null;

    const animate = (currentTime) => {
      const elapsed = currentTime - startedAt;

      const nextProgress = Math.min(
        100,
        Math.round(
          (elapsed / PREVIEW_DURATION) * 100
        )
      );

      setProgress(nextProgress);

      if (nextProgress >= 100) {
        closeTimer = window.setTimeout(
          closePreview,
          CLOSE_DELAY
        );

        return;
      }

      frameId = window.requestAnimationFrame(
        animate
      );
    };

    frameId = window.requestAnimationFrame(
      animate
    );

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      if (closeTimer !== null) {
        window.clearTimeout(closeTimer);
      }
    };
  }, [activeId]);

  useEffect(() => {
    if (activeId === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closePreview();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [activeId]);

  const ActiveComponent =
    activeId !== null
      ? variants[activeId - 1]?.Component
      : null;

  return (
    <div className="preloader_foundation">
      <div className="preloader_foundation__intro">
        <span>LOADING SYSTEMS</span>

        <h1>Preloader Foundations</h1>

        <p>
          Twelve distinct loading experiences for modern
          commercial websites and digital products.
        </p>
      </div>

      <div className="preloader_foundation__grid">
        {variants.map((item) => (
          <button
            key={item.id}
            type="button"
            className="preloader_foundation__card"
            onClick={() => openPreview(item.id)}
            aria-label={`Preview ${item.title} preloader`}
          >
            <span>
              {String(item.id).padStart(2, "0")}
            </span>

            <div>
              <h2>{item.title}</h2>

              <p>{item.description}</p>
            </div>

            <b>Preview ↗</b>
          </button>
        ))}
      </div>

      {ActiveComponent && (
        <ActiveComponent
          open={true}
          progress={progress}
        />
      )}
    </div>
  );
}

export {
  Preloader01,
  Preloader02,
  Preloader03,
  Preloader04,
  Preloader05,
  Preloader06,
  Preloader07,
  Preloader08,
  Preloader09,
  Preloader10,
  Preloader11,
  Preloader12,
};

export default Preloader;