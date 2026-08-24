import { useEffect } from "react";
import "./Modal02.scss";

function Modal02({
  open = true,
  onClose = () => {},
  title = "Your selection",
  description = "A side-panel pattern useful for carts, booking details, filters and quick actions.",
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
      className="sb-modal-02"
      role="dialog"
      aria-modal="true"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <aside className="sb-modal-02__panel">
        <div className="sb-modal-02__top">
          <span>01 / DETAILS</span>

          <button type="button" onClick={onClose} aria-label="Close">
            Close
          </button>
        </div>

        <div className="sb-modal-02__body">
          <h2>{title}</h2>
          <p>{description}</p>

          {children}
        </div>

        <div className="sb-modal-02__bottom">
          <button type="button">Continue</button>
        </div>
      </aside>
    </div>
  );
}

export default Modal02;