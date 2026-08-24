import "./Preloader09.scss";

function Preloader09({
  open = true,
  progress = 0,
  brand = "MAISON",
}) {
  if (!open) return null;

  const safeProgress = Math.max(
    0,
    Math.min(100, Number(progress) || 0)
  );

  return (
    <div
      className="sb-preloader-09"
      role="status"
      aria-live="polite"
      aria-label="Loading website"
    >
      <div className="sb-preloader-09__brand">
        <span>{brand}</span>

        <small>
          {String(Math.round(safeProgress)).padStart(2, "0")}
        </small>
      </div>

      <div className="sb-preloader-09__rule" />

      <p>
        Something considered is about to begin.
      </p>
    </div>
  );
}

export default Preloader09;