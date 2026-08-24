import { useEffect } from "react";
import "./Modal01.scss";

function Modal01({
  open = false,
  onClose = () => {},
  eyebrow = "DETAILS",
  title = "A quiet, focused moment.",
  description =
    "A clean modal pattern designed for product information, confirmations and focused content.",
  actionLabel = "Continue",
  onAction = () => {},
  children,
}) {
  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="sb-modal-01"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sb-modal-01-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="sb-modal-01__panel">
        <button
          className="sb-modal-01__close"
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>

        <span className="sb-modal-01__eyebrow">
          {eyebrow}
        </span>

        <h2 id="sb-modal-01-title">
          {title}
        </h2>

        <p>{description}</p>

        {children && (
          <div className="sb-modal-01__content">
            {children}
          </div>
        )}

        <div className="sb-modal-01__actions">
          <button
            type="button"
            onClick={onAction}
          >
            {actionLabel}
          </button>

          <button
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal01;