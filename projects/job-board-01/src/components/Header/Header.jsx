import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { site } from "../../data/site";
import Button from "../Button/Button.jsx";
import "./Header.scss";

function MobileDrawer({ open, onClose, toggleRef }) {
  const drawerRef = useRef(null);

  // Escape to close, lock background scroll, focus first link on open.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        toggleRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    const firstLink = drawerRef.current?.querySelector("a, button");
    firstLink?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, toggleRef]);

  return createPortal(
    <>
      <button
        type="button"
        className={`mobile-drawer__overlay ${open ? "is-open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
        tabIndex={-1}
      />
      <div
        id="mobile-drawer"
        ref={drawerRef}
        className={`mobile-drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="mobile-drawer__head">
          <span className="mobile-drawer__brand">
            Hire<em>ly</em>
          </span>
          <button
            type="button"
            className="mobile-drawer__close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={22} strokeWidth={2} />
          </button>
        </div>

        <nav aria-label="Mobile">
          <ul>
            {site.nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={onClose}
                  className={({ isActive }) => (isActive ? "is-active" : undefined)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-drawer__footer">
          <a className="mobile-drawer__phone" href={site.contact.phoneHref}>
            <Phone size={15} strokeWidth={2} aria-hidden="true" />
            <span>{site.contact.phoneDisplay}</span>
          </a>
          <Button to="/jobs" variant="primary" onClick={onClose}>
            {site.cta.candidate}
          </Button>
        </div>
      </div>
    </>,
    document.body
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="header__bar">
        <div className="header__bar-inner container">
          <NavLink to="/" className="header__brand" onClick={close}>
            <span className="header__brand-mark">H</span>
            <span className="header__brand-name">
              Hire<em>ly</em>
            </span>
          </NavLink>

          <nav className="header__nav" aria-label="Primary">
            <ul>
              {site.nav.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) => (isActive ? "is-active" : undefined)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <Button to="/contact" variant="ghost" className="header__employer-cta">
              {site.cta.employer}
            </Button>
            <Button to="/jobs" variant="primary">
              {site.cta.candidate}
            </Button>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="header__toggle"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>
      </div>

      <MobileDrawer open={open} onClose={close} toggleRef={toggleRef} />
    </header>
  );
}
