import "./Preloader12.scss";

function Preloader12({
  open = true,
  progress = 0,
  title = "Welcome.",
}) {
  if (!open) return null;

  const safeProgress = Math.max(
    0,
    Math.min(100, Number(progress) || 0)
  );

  return (
    <div
      className="sb-preloader-12"
      role="status"
      aria-live="polite"
      aria-label="Loading website"
    >
      <div className="sb-preloader-12__bars">
        <span style={{ height: `${safeProgress}%` }} />

        <span
          style={{
            height: `${Math.max(safeProgress - 12, 0)}%`,
          }}
        />

        <span
          style={{
            height: `${Math.max(safeProgress - 25, 0)}%`,
          }}
        />

        <span
          style={{
            height: `${Math.max(safeProgress - 38, 0)}%`,
          }}
        />
      </div>

      <div className="sb-preloader-12__center">
        <span>12 / 12</span>
        <h1>{title}</h1>
        <small>{Math.round(safeProgress)}%</small>
      </div>
    </div>
  );
}

export default Preloader12;