import { useEffect } from "react";
import "./Modal07.scss";

function Modal07({
  open = false,
  onClose = () => {},
  title = "Stay a little longer.",
  subtitle = "A full-viewport storytelling modal.",
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
      className="sb-modal-07"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sb-modal-07-title"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className="sb-modal-07__grid">
        <span
          className="sb-modal-07__index"
          aria-hidden="true"
        >
          07 / 12
        </span>

        <button
          type="button"
          className="sb-modal-07__close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          Close
        </button>

        <div className="sb-modal-07__copy">
          <span>{subtitle}</span>

          <h2 id="sb-modal-07-title">
            {title}
          </h2>

          {children && (
            <div className="sb-modal-07__content">
              {children}
            </div>
          )}
        </div>

        <span
          className="sb-modal-07__corner"
          aria-hidden="true"
        >
          ESC
        </span>
      </div>
    </div>
  );
}

export default Modal07;