import { useEffect } from "react";
import "./Modal02.scss";

function Modal02({
  open = false,
  onClose = () => {},
  title = "Your selection",
  description =
    "A side-panel pattern useful for carts, booking details, filters and quick actions.",
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
      className="sb-modal-02"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sb-modal-02-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <aside className="sb-modal-02__panel">
        <div className="sb-modal-02__top">
          <span>01 / DETAILS</span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
          >
            Close
          </button>
        </div>

        <div className="sb-modal-02__body">
          <h2 id="sb-modal-02-title">
            {title}
          </h2>

          <p>{description}</p>

          {children && (
            <div className="sb-modal-02__content">
              {children}
            </div>
          )}
        </div>

        <div className="sb-modal-02__bottom">
          <button
            type="button"
            onClick={onAction}
          >
            {actionLabel}
          </button>
        </div>
      </aside>
    </div>
  );
}

export default Modal02;