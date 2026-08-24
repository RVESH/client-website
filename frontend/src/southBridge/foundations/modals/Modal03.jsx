import { useEffect } from "react";
import "./Modal03.scss";

function Modal03({
  open = false,
  onClose = () => {},
  title = "A lighter interaction.",
  description =
    "Designed for premium brands, visual storytelling and modern product experiences.",
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
      className="sb-modal-03"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sb-modal-03-title"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className="sb-modal-03__panel">
        <button
          type="button"
          className="sb-modal-03__close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>

        <span>SELECTED DETAIL</span>

        <div
          className="sb-modal-03__orb"
          aria-hidden="true"
        />

        <div className="sb-modal-03__copy">
          <h2 id="sb-modal-03-title">
            {title}
          </h2>

          <p>{description}</p>

          {children && (
            <div className="sb-modal-03__content">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal03;