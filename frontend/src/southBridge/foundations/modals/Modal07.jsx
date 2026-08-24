import { useEffect } from "react";
import "./Modal07.scss";

function Modal07({
  open = true,
  onClose = () => {},
  title = "Stay a little longer.",
  subtitle = "A full-viewport storytelling modal.",
  children,
}) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="sb-modal-07" role="dialog" aria-modal="true">
      <div className="sb-modal-07__grid">
        <span className="sb-modal-07__index">07 / 12</span>

        <button
          type="button"
          className="sb-modal-07__close"
          onClick={onClose}
        >
          Close
        </button>

        <div className="sb-modal-07__copy">
          <span>{subtitle}</span>
          <h2>{title}</h2>

          {children}
        </div>

        <span className="sb-modal-07__corner">ESC</span>
      </div>
    </div>
  );
}

export default Modal07;