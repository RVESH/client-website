import { useEffect } from "react";
import "./Modal04.scss";

function Modal04({
  open = false,
  onClose = () => {},
  image = "",
  title = "Evening Light",
  description =
    "A large-format gallery modal for photography, interiors, food and product imagery.",
  alt = "",
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
      className="sb-modal-04"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sb-modal-04-title"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <button
        className="sb-modal-04__close"
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        ×
      </button>

      <figure className="sb-modal-04__figure">
        {image && (
          <img
            src={image}
            alt={alt || title}
          />
        )}

        <figcaption>
          <strong id="sb-modal-04-title">
            {title}
          </strong>

          <span>{description}</span>
        </figcaption>
      </figure>
    </div>
  );
}

export default Modal04;