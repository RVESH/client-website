import "./Preloader11.scss";

function Preloader11({
  open = true,
  progress = 0,
  title = "Taking shape.",
}) {
  if (!open) return null;

  const safeProgress = Math.max(
    0,
    Math.min(100, Number(progress) || 0)
  );

  return (
    <div
      className="sb-preloader-11"
      role="status"
      aria-live="polite"
      aria-label="Loading website"
    >
      <div className="sb-preloader-11__orb sb-preloader-11__orb--one" />
      <div className="sb-preloader-11__orb sb-preloader-11__orb--two" />

      <div className="sb-preloader-11__content">
        <span>PLEASE WAIT</span>

        <h1>{title}</h1>

        <div className="sb-preloader-11__progress">
          <span style={{ width: `${safeProgress}%` }} />
        </div>

        <div>
          <small>LOADING</small>
          <small>{Math.round(safeProgress)}%</small>
        </div>
      </div>
    </div>
  );
}

export default Preloader11;