import "./Preloader10.scss";

function Preloader10({
  open = true,
  progress = 0,
  system = "CORE / INIT",
}) {
  if (!open) return null;

  const safeProgress = Math.max(
    0,
    Math.min(100, Number(progress) || 0)
  );

  return (
    <div
      className="sb-preloader-10"
      role="status"
      aria-live="polite"
      aria-label="Loading website"
    >
      <div className="sb-preloader-10__top">
        <span>{system}</span>
        <span>V1.0</span>
      </div>

      <div className="sb-preloader-10__middle">
        <span className="sb-preloader-10__pulse" />

        <strong>
          {String(Math.round(safeProgress)).padStart(2, "0")}
        </strong>

        <span>INITIALIZING</span>
      </div>

      <div className="sb-preloader-10__bottom">
        <span>SYNC</span>
        <span>AUTH</span>
        <span>ASSETS</span>
        <span>UI</span>
      </div>
    </div>
  );
}

export default Preloader10;