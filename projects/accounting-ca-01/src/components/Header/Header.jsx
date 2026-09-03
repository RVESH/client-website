import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { site } from "../../data/site";
import Button from "../Button/Button.jsx";
import "./Header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);
  const toggleRef = useRef(null);

  // Close on Escape, lock background scroll while open.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
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
  }, [open]);

  const handleNavigate = () => setOpen(false);

  return (
    <header className="header">
      <div className="header__bar container">
        <NavLink to="/" className="header__brand" onClick={handleNavigate}>
          <span className="header__brand-mark">L&amp;Co.</span>
          <span className="header__brand-name">{site.shortName}</span>
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
          <a className="header__phone" href={site.contact.phoneHref}>
            <Phone size={15} strokeWidth={1.75} aria-hidden="true" />
            <span>{site.contact.phoneDisplay}</span>
          </a>
          <Button to="/contact" variant="primary" className="header__cta">
            {site.cta.primary}
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
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </div>

      <div
        className={`header__overlay ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-drawer"
        ref={drawerRef}
        className={`header__drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <nav aria-label="Mobile">
          <ul>
            {site.nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={handleNavigate}
                  className={({ isActive }) => (isActive ? "is-active" : undefined)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__drawer-footer">
          <a className="header__phone header__phone--drawer" href={site.contact.phoneHref}>
            <Phone size={15} strokeWidth={1.75} aria-hidden="true" />
            <span>{site.contact.phoneDisplay}</span>
          </a>
          <Button to="/contact" variant="primary" onClick={handleNavigate}>
            {site.cta.primary}
          </Button>
        </div>
      </div>
    </header>
  );
}
