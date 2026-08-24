import "./Preloader04.scss";

function Preloader04({
  open = true,
  progress = 0,
  leftLabel = "ENTERING",
  rightLabel = "SOUTHBRIDGE",
}) {
  if (!open) return null;

  const safeProgress = Math.max(
    0,
    Math.min(100, Number(progress) || 0)
  );

  return (
    <div
      className="sb-preloader-04"
      role="status"
      aria-live="polite"
      aria-label="Loading website"
    >
      <div className="sb-preloader-04__side sb-preloader-04__side--left">
        <span>{leftLabel}</span>
      </div>

      <div className="sb-preloader-04__side sb-preloader-04__side--right">
        <strong>{rightLabel}</strong>
      </div>

      <div className="sb-preloader-04__center">
        {String(Math.round(safeProgress)).padStart(2, "0")}
      </div>
    </div>
  );
}

export default Preloader04;