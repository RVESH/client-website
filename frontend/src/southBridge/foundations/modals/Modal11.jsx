import { useEffect } from "react";
import "./Modal11.scss";

function Modal11({
  open = true,
  onClose = () => {},
  eyebrow = "PRIVATE DINING",
  title = "An evening made personal.",
  description = "A quieter, more refined modal pattern for luxury hospitality, architecture and premium brands.",
}) {
  useEffect(() => {
    if (!open) return;

    const handler = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="sb-modal-11" role="dialog" aria-modal="true">
      <div className="sb-modal-11__frame">
        <button type="button" onClick={onClose}>
          Close
        </button>

        <span>{eyebrow}</span>

        <div className="sb-modal-11__line" />

        <h2>{title}</h2>

        <p>{description}</p>

        <a href="#discover">Discover more ↗</a>
      </div>
    </div>
  );
}

export default Modal11;