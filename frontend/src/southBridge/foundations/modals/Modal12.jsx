import { useEffect } from "react";
import "./Modal12.scss";

function Modal12({
  open = false,
  onClose = () => {},
  title = "Selected details",
  items = [
    [
      "01",
      "Materials",
      "Natural oak and brushed steel",
    ],
    [
      "02",
      "Finish",
      "Soft mineral texture",
    ],
    [
      "03",
      "Lead time",
      "Approximately two weeks",
    ],
  ],
  actionLabel = "Continue ↗",
  onAction = () => {},
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
      className="sb-modal-12"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sb-modal-12-title"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className="sb-modal-12__panel">
        <div className="sb-modal-12__heading">
          <span aria-hidden="true">
            12 / 12
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>

        <h2 id="sb-modal-12-title">
          {title}
        </h2>

        <div className="sb-modal-12__list">
          {items.map(
            ([number, label, value], index) => (
              <article
                key={`${number}-${index}`}
              >
                <span>{number}</span>

                <strong>{label}</strong>

                <p>{value}</p>
              </article>
            )
          )}
        </div>

        <button
          className="sb-modal-12__primary"
          type="button"
          onClick={onAction}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}

export default Modal12;