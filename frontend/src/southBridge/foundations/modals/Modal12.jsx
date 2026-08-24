import { useEffect } from "react";
import "./Modal12.scss";

function Modal12({
  open = true,
  onClose = () => {},
  title = "Selected details",
  items = [
    ["01", "Materials", "Natural oak and brushed steel"],
    ["02", "Finish", "Soft mineral texture"],
    ["03", "Lead time", "Approximately two weeks"],
  ],
}) {
  useEffect(() => {
    if (!open) return;

    const handler = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="sb-modal-12"
      role="dialog"
      aria-modal="true"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="sb-modal-12__panel">
        <div className="sb-modal-12__heading">
          <span>12 / 12</span>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <h2>{title}</h2>

        <div className="sb-modal-12__list">
          {items.map(([number, label, value]) => (
            <article key={number}>
              <span>{number}</span>
              <strong>{label}</strong>
              <p>{value}</p>
            </article>
          ))}
        </div>

        <button className="sb-modal-12__primary" type="button">
          Continue ↗
        </button>
      </div>
    </div>
  );
}

export default Modal12;