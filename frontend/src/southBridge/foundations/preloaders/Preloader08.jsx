import "./Preloader08.scss";

function Preloader08({
  open = true,
  progress = 0,
  image = "",
  title = "A new beginning.",
}) {
  if (!open) return null;

  const safeProgress = Math.max(
    0,
    Math.min(100, Number(progress) || 0)
  );

  return (
    <div
      className="sb-preloader-08"
      role="status"
      aria-live="polite"
      aria-label="Loading website"
    >
      {image && (
        <div
          className="sb-preloader-08__image"
          style={{
            backgroundImage: `url("${image}")`,
            transform: `scale(${1.08 - safeProgress / 1000})`,
          }}
        />
      )}

      <div className="sb-preloader-08__overlay" />

      <div className="sb-preloader-08__copy">
        <span>LOADING EXPERIENCE</span>

        <h1>{title}</h1>

        <small>{Math.round(safeProgress)}%</small>
      </div>
    </div>
  );
}

export default Preloader08;