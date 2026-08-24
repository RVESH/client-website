import { useEffect } from "react";
import "./Modal09.scss";

function Modal09({
  open = true,
  onClose = () => {},
  title = "A considered detail.",
  description = "Layered cards work well for premium product information and selected content.",
  children,
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
      className="sb-modal-09"
      role="dialog"
      aria-modal="true"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="sb-modal-09__shadow" />

      <div className="sb-modal-09__panel">
        <button type="button" onClick={onClose}>
          ×
        </button>

        <span>SELECTED</span>

        <h2>{title}</h2>

        <p>{description}</p>

        {children && (
          <div className="sb-modal-09__content">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal09;