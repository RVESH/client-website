/*
 * SOUTHBRIDGE V1 — MASTER PRELOADER
 *
 * Purpose:
 * Controls the selected visual preloader.
 *
 * FIXED ACROSS V1 WEBSITES:
 * - open state
 * - progress state
 * - accessible loading state
 *
 * The selected foundation preloader can replace/customize
 * this visual implementation without changing App.js loading logic.
 */

import "./Preloader.scss";

function Preloader({
  open = true,
  progress = 0,
  brand = "LUMA",
}) {
  if (!open) return null;

  const safeProgress = Math.max(
    0,
    Math.min(100, Number(progress) || 0)
  );

  return (
    <div
      className="sb-preloader-03"
      role="status"
      aria-live="polite"
      aria-label="Loading website"
    >
      <div className="sb-preloader-03__brand">
        <span className="sb-preloader-03__mark">
          {brand.trim().charAt(0).toUpperCase() || "S"}
        </span>

        <strong>{brand}</strong>
      </div>

      <div className="sb-preloader-03__meta">
        <span>Preparing your experience</span>

        <span>
          {String(Math.round(safeProgress)).padStart(2, "0")}%
        </span>
      </div>
    </div>
  );
}

export default Preloader;