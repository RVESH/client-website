import { useEffect } from "react";
import { X } from "lucide-react";
import "./Modal.scss";

export default function Modal({
  open,
  title,
  children,
  onClose,
}) {
  useEffect(() => {
    if (!open) return;

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        originalOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="sb-modal"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose?.();
        }
      }}
    >
      <div className="sb-modal__panel">
        <header className="sb-modal__header">
          <h2>{title}</h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </header>

        <div className="sb-modal__body">
          {children}
        </div>
      </div>
    </div>
  );
}