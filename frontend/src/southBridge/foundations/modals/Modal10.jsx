import { useEffect, useRef } from "react";
import "./Modal10.scss";

function Modal10({
  open = true,
  onClose = () => {},
  placeholder = "Search anything...",
  items = ["Menu", "About", "Reservation", "Contact"],
  onSelect = () => {},
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    inputRef.current?.focus();

    const handler = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handler);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="sb-modal-10"
      role="dialog"
      aria-modal="true"
    >
      <div className="sb-modal-10__panel">
        <div className="sb-modal-10__search">
          <span>⌕</span>

          <input
            ref={inputRef}
            type="search"
            placeholder={placeholder}
            aria-label={placeholder}
          />

          <button type="button" onClick={onClose}>
            ESC
          </button>
        </div>

        <div className="sb-modal-10__results">
          {items.map((item, index) => (
            <button
              type="button"
              key={item}
              onClick={() => onSelect(item)}
            >
              <span>0{index + 1}</span>
              <strong>{item}</strong>
              <b>↗</b>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal10;