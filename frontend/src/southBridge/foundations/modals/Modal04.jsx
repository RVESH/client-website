import { useEffect } from "react";
import "./Modal04.scss";

function Modal04({
  open = true,
  onClose = () => {},
  image = "/images/gallery-01.webp",
  title = "Evening Light",
  description = "A large-format gallery modal for photography, interiors, food and product imagery.",
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
      className="sb-modal-04"
      role="dialog"
      aria-modal="true"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        className="sb-modal-04__close"
        type="button"
        onClick={onClose}
        aria-label="Close image"
      >
        ×
      </button>

      <figure className="sb-modal-04__figure">
        <img src={image} alt={title} />

        <figcaption>
          <strong>{title}</strong>
          <span>{description}</span>
        </figcaption>
      </figure>
    </div>
  );
}

export default Modal04;