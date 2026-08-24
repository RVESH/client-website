import { useEffect } from "react";
import "./Modal03.scss";

function Modal03({
  open = true,
  onClose = () => {},
  title = "A lighter interaction.",
  description = "Designed for premium brands, visual storytelling and modern product experiences.",
  children,
}) {
  useEffect(() => {
    if (!open) return;

    const keyHandler = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", keyHandler);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", keyHandler);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="sb-modal-03"
      role="dialog"
      aria-modal="true"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="sb-modal-03__panel">
        <button
          type="button"
          className="sb-modal-03__close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <span>SELECTED DETAIL</span>

        <div className="sb-modal-03__orb" />

        <div className="sb-modal-03__copy">
          <h2>{title}</h2>
          <p>{description}</p>

          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal03;