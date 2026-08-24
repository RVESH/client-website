import { useEffect, useRef } from "react";
import "./Modal10.scss";

function Modal10({
  open = false,
  onClose = () => {},
  placeholder = "Search anything...",
  items = [
    "Menu",
    "About",
    "Reservation",
    "Contact",
  ],
  onSelect = () => {},
}) {
  const inputRef = useRef(null);

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

    const focusTimer =
      window.setTimeout(() => {
        inputRef.current?.focus();
      }, 0);

    return () => {
      window.clearTimeout(focusTimer);

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
      className="sb-modal-10"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div className="sb-modal-10__panel">
        <div className="sb-modal-10__search">
          <span aria-hidden="true">⌕</span>

          <input
            ref={inputRef}
            type="search"
            placeholder={placeholder}
            aria-label={placeholder}
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
          >
            ESC
          </button>
        </div>

        <div className="sb-modal-10__results">
          {items.map((item, index) => (
            <button
              type="button"
              key={`${item}-${index}`}
              onClick={() => onSelect(item)}
            >
              <span>
                {String(index + 1).padStart(
                  2,
                  "0"
                )}
              </span>

              <strong>{item}</strong>

              <b aria-hidden="true">
                ↗
              </b>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal10;