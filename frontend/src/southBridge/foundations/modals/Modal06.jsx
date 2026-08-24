import { useEffect } from "react";
import "./Modal06.scss";

function Modal06({
  open = false,
  onClose = () => {},
  title = "Choose your preference",
  children,
}) {
  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="sb-modal-06"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sb-modal-06-title"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className="sb-modal-06__sheet">
        <div
          className="sb-modal-06__grabber"
          aria-hidden="true"
        />

        <div className="sb-modal-06__header">
          <h2 id="sb-modal-06-title">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>

        <div className="sb-modal-06__body">
          {children || (
            <p>
              This bottom-sheet pattern is ideal
              for filters, mobile menus, booking
              choices and compact actions.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal06;