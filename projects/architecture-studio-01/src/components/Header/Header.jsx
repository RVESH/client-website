import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { site } from "../../data/site.js";
import Button from "../Button/Button.jsx";

import "./Header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) {
      document.body.classList.remove("menu-open");
      return undefined;
    }

    document.body.classList.add("menu-open");

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const handlePointerDown = (event) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className={`header ${
        open ? "header--menu-open" : ""
      }`}
    >
      <div className="header__bar container">
        <NavLink
          to="/"
          className="header__mark"
          aria-label={`${site.name} home`}
          onClick={closeMenu}
        >
          {site.shortName}
        </NavLink>

        <nav
          className="header__nav"
          aria-label="Primary navigation"
        >
          <ul>
            {site.nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `header__link ${
                      isActive ? "is-active" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <Button
            to="/contact"
            variant="ghost"
            className="header__cta"
          >
            Enquire
          </Button>

          <button
            ref={toggleRef}
            type="button"
            className={`header__toggle ${
              open ? "is-open" : ""
            }`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={
              open
                ? "Close navigation"
                : "Open navigation"
            }
            onClick={() =>
              setOpen((value) => !value)
            }
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        ref={panelRef}
        id="mobile-menu"
        className={`header__panel ${
          open ? "is-open" : ""
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          <ul>
            {site.nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `header__panelLink ${
                      isActive ? "is-active" : ""
                    }`
                  }
                  tabIndex={open ? 0 : -1}
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true">↗</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__panelFooter">
          <a
            href={`mailto:${site.contact.email}`}
            tabIndex={open ? 0 : -1}
          >
            {site.contact.email}
          </a>

          <a
            href={`tel:${site.contact.phone.replace(
              /\s+/g,
              ""
            )}`}
            tabIndex={open ? 0 : -1}
          >
            {site.contact.phone}
          </a>
        </div>
      </div>

      <div
        className={`header__backdrop ${
          open ? "is-visible" : ""
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </header>
  );
}