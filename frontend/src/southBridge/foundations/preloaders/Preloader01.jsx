import "./Preloader01.scss";

function Preloader01({
  open = true,
  progress = 0,
  brand = "SOUTHBRIDGE",
}) {
  if (!open) return null;

  const safeProgress = Math.max(
    0,
    Math.min(100, Number(progress) || 0)
  );

  return (
    <div
      className="sb-preloader-01"
      role="status"
      aria-live="polite"
      aria-label="Loading website"
    >
      <div className="sb-preloader-01__top">
        <span>{brand}</span>
        <span>{String(Math.round(safeProgress)).padStart(2, "0")}%</span>
      </div>

      <div className="sb-preloader-01__line" aria-hidden="true">
        <span style={{ width: `${safeProgress}%` }} />
      </div>
    </div>
  );
}

export default Preloader01;