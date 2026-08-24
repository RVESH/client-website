import { useEffect } from "react";
import "./Modal05.scss";

function Modal05({
  open = false,
  onClose = () => {},
  title = "Made with intention.",
  label = "THE STORY",
  image = "",
  imageAlt = "",
  children,
  linkLabel = "Explore story ↗",
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
      className="sb-modal-05"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sb-modal-05-title"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className="sb-modal-05__panel">
        <div className="sb-modal-05__image">
          {image && (
            <img
              src={image}
              alt={imageAlt || title}
            />
          )}
        </div>

        <div className="sb-modal-05__content">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
          >
            Close ×
          </button>

          <span>{label}</span>

          <h2 id="sb-modal-05-title">
            {title}
          </h2>

          {children && (
            <div className="sb-modal-05__body">
              {children}
            </div>
          )}

          {linkHref && (
            <a href={linkHref}>
              {linkLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal05;