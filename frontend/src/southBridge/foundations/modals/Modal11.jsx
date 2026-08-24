import { useEffect } from "react";
import "./Modal11.scss";

function Modal11({
  open = false,
  onClose = () => {},
  eyebrow = "PRIVATE DINING",
  title = "An evening made personal.",
  description =
    "A quieter, more refined modal pattern for luxury hospitality, architecture and premium brands.",
  linkLabel = "Discover more ↗",
  linkHref = "#",
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
      className="sb-modal-11"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sb-modal-11-title"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className="sb-modal-11__frame">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
        >
          Close
        </button>

        <span>{eyebrow}</span>

        <div
          className="sb-modal-11__line"
          aria-hidden="true"
        />

        <h2 id="sb-modal-11-title">
          {title}
        </h2>

        <p>{description}</p>

        {linkHref && (
          <a href={linkHref}>
            {linkLabel}
          </a>
        )}
      </div>
    </div>
  );
}

export default Modal11;