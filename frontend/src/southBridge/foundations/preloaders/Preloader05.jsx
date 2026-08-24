import "./Preloader05.scss";

function Preloader05({
  open = true,
  progress = 0,
  title = "Almost ready.",
}) {
  if (!open) return null;

  const safeProgress = Math.max(
    0,
    Math.min(100, Number(progress) || 0)
  );

  return (
    <div
      className="sb-preloader-05"
      role="status"
      aria-live="polite"
      aria-label="Loading website"
    >
      <div className="sb-preloader-05__counter">
        {String(Math.round(safeProgress)).padStart(2, "0")}
      </div>

      <div className="sb-preloader-05__title">
        <span>LOADING</span>
        <h1>{title}</h1>
      </div>

      <div className="sb-preloader-05__footer">
        <span>05 / 12</span>
        <span>{Math.round(safeProgress)}%</span>
      </div>
    </div>
  );
}

export default Preloader05;