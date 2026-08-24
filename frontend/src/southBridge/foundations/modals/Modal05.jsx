import { useEffect } from "react";
import "./Modal05.scss";

function Modal05({
  open = true,
  onClose = () => {},
  title = "Made with intention.",
  label = "THE STORY",
  image = "/images/about-main.webp",
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
      className="sb-modal-05"
      role="dialog"
      aria-modal="true"
    >
      <div className="sb-modal-05__panel">
        <div className="sb-modal-05__image">
          <img src={image} alt="" />
        </div>

        <div className="sb-modal-05__content">
          <button type="button" onClick={onClose}>
            Close ×
          </button>

          <span>{label}</span>
          <h2>{title}</h2>

          {children}

          <a href="#explore">Explore story ↗</a>
        </div>
      </div>
    </div>
  );
}

export default Modal05;