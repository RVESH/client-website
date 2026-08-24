import "./Preloader06.scss";

function Preloader06({
  open = true,
  progress = 0,
}) {
  if (!open) return null;

  const safeProgress = Math.max(
    0,
    Math.min(100, Number(progress) || 0)
  );

  const angle = `${safeProgress * 3.6}deg`;

  return (
    <div
      className="sb-preloader-06"
      role="status"
      aria-live="polite"
      aria-label="Loading website"
    >
      <div
        className="sb-preloader-06__ring"
        style={{ "--progress-angle": angle }}
      >
        <div className="sb-preloader-06__inner">
          <strong>{Math.round(safeProgress)}</strong>
          <span>LOADING</span>
        </div>
      </div>
    </div>
  );
}

export default Preloader06;