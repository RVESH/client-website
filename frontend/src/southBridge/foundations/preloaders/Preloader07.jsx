import "./Preloader07.scss";

function Preloader07({
  open = true,
  progress = 0,
  label = "SYSTEM INITIALIZING",
}) {
  if (!open) return null;

  const safeProgress = Math.max(
    0,
    Math.min(100, Number(progress) || 0)
  );

  return (
    <div
      className="sb-preloader-07"
      role="status"
      aria-live="polite"
      aria-label="Loading website"
    >
      <div className="sb-preloader-07__grid" />

      <div className="sb-preloader-07__center">
        <span>{label}</span>
        <strong>
          {String(Math.round(safeProgress)).padStart(2, "0")}
        </strong>
      </div>

      <div className="sb-preloader-07__corners">
        <span>01</span>
        <span>07</span>
        <span>12</span>
      </div>
    </div>
  );
}

export default Preloader07;