import { useEffect } from "react";
import "./Modal08.scss";

function Modal08({
  open = false,
  onClose = () => {},
  title = "Reservation received",
  message =
    "Your request has been noted. We will get back to you shortly.",
  confirmLabel = "Done",
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
      className="sb-modal-08"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sb-modal-08-title"
    >
      <div className="sb-modal-08__panel">
        <div
          className="sb-modal-08__icon"
          aria-hidden="true"
        >
          ✓
        </div>

        <h2 id="sb-modal-08-title">
          {title}
        </h2>

        <p>{message}</p>

        <button
          type="button"
          onClick={onClose}
        >
          {confirmLabel}
        </button>
      </div>
    </div>
  );
}

export default Modal08;