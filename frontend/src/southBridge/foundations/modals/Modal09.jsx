import { useEffect } from "react";
import "./Modal09.scss";

function Modal09({
  open = false,
  onClose = () => {},
  title = "A considered detail.",
  description =
    "Layered cards work well for premium product information and selected content.",
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
      className="sb-modal-09"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sb-modal-09-title"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div
        className="sb-modal-09__shadow"
        aria-hidden="true"
      />

      <div className="sb-modal-09__panel">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>

        <span>SELECTED</span>

        <h2 id="sb-modal-09-title">
          {title}
        </h2>

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