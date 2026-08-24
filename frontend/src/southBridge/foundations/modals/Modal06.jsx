import { useEffect } from "react";
import "./Modal06.scss";

function Modal06({
  open = true,
  onClose = () => {},
  title = "Choose your preference",
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
    <div
      className="sb-modal-06"
      role="dialog"
      aria-modal="true"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="sb-modal-06__sheet">
        <div className="sb-modal-06__grabber" />

        <div className="sb-modal-06__header">
          <h2>{title}</h2>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="sb-modal-06__body">
          {children || (
            <p>
              This bottom-sheet pattern is ideal for filters, mobile menus,
              booking choices and compact actions.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal06;