import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import "./Row.scss";

export default function Row({ eyebrow, title, desc, viewAllTo, children }) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollLeft(track.scrollLeft > 4);
    setCanScrollRight(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const track = trackRef.current;
    if (!track) return undefined;
    track.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      track.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollBy = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    // Scroll the track element directly (never the document) so this can
    // never hijack page scroll the way scrollIntoView can on off-screen items.
    const amount = track.clientWidth * 0.85 * dir;
    track.scrollTo({ left: track.scrollLeft + amount, behavior: "smooth" });
  };

  return (
    <div className="row">
      <div className="container row__head">
        <SectionHeading eyebrow={eyebrow} title={title} desc={desc} viewAllTo={viewAllTo} />
      </div>

      <div className="row__viewport">
        {canScrollLeft && (
          <button type="button" className="row__arrow row__arrow--left" onClick={() => scrollBy(-1)} aria-label="Scroll left">
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
        )}

        <div className="row__track" ref={trackRef} tabIndex={0} aria-label={`${title} — scrollable row`}>
          <div className="container row__track-pad">
            <div className="row__items">{children}</div>
          </div>
        </div>

        {canScrollRight && (
          <button type="button" className="row__arrow row__arrow--right" onClick={() => scrollBy(1)} aria-label="Scroll right">
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        )}
      </div>
    </div>
  );
}
