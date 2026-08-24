import { useEffect } from "react";
import "./Modal08.scss";

function Modal08({
  open = true,
  onClose = () => {},
  title = "Reservation received",
  message = "Your request has been noted. We will get back to you shortly.",
  confirmLabel = "Done",
}) {
  useEffect(() => {
    if (!open) return;

    const handler = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="sb-modal-08"
      role="dialog"
      aria-modal="true"
    >
      <div className="sb-modal-08__panel">
        <div className="sb-modal-08__icon">✓</div>

        <h2>{title}</h2>

        <p>{message}</p>

        <button type="button" onClick={onClose}>
          {confirmLabel}
        </button>
      </div>
    </div>
  );
}

export default Modal08;