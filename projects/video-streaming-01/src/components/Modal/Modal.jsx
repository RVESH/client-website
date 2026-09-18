import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import "./Modal.scss";

export default function Modal({ open, onClose, title, children }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="modal">
      <button type="button" className="modal__overlay" onClick={onClose} aria-hidden="true" tabIndex={-1} />
      <div className="modal__panel" role="dialog" aria-modal="true" aria-label={title}>
        <button type="button" ref={closeRef} className="modal__close" onClick={onClose} aria-label="Close">
          <X size={20} strokeWidth={2} />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
