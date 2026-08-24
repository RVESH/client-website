import "./Preloader02.scss";

function Preloader02({
  open = true,
  progress = 0,
  label = "Loading experience",
}) {
  if (!open) return null;

  const safeProgress = Math.max(
    0,
    Math.min(100, Number(progress) || 0)
  );

  return (
    <div
      className="sb-preloader-02"
      role="status"
      aria-live="polite"
      aria-label="Loading website"
    >
      <div className="sb-preloader-02__number">
        {String(Math.round(safeProgress)).padStart(2, "0")}
        <small>%</small>
      </div>

      <div className="sb-preloader-02__footer">
        <span>{label}</span>
        <span>PLEASE WAIT</span>
      </div>
    </div>
  );
}

export default Preloader02;