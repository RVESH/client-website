import React, { useEffect, useState, useCallback, useRef } from "react";
import "./Navbar.scss";
import logo from "../../../../images/sbra.png";

const NAV_LINKS = [
  { label: "Services",  id: "services"  },
  { label: "Skills",    id: "skills"    },
  { label: "Portfolio", id: "portfolio" },
  { label: "Process",   id: "process"   },
];

const SCROLL_OFFSET = 68;
const SCROLL_THRESHOLD = 50;
const ACTIVE_ZONE = 100;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const navRef = useRef(null);

  // ─── Scroll spy ─────────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);

    const ids = ["hero", ...NAV_LINKS.map((l) => l.id), "contact"];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      const { top, bottom } = el.getBoundingClientRect();
      if (top <= ACTIVE_ZONE && bottom >= ACTIVE_ZONE) {
        setActiveId(id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ─── Smooth scroll ──────────────────────────────────────────────
  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - SCROLL_OFFSET,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  }, []);

  // ─── Close drawer on outside click ──────────────────────────────
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (!navRef.current?.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [menuOpen]);

  // ─── Lock body scroll when drawer open ──────────────────────────
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = original; };
  }, [menuOpen]);

  // ─── Close drawer on Escape key ─────────────────────────────────
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuOpen]);

  return (
    <>
      {/* ═══ NAVBAR HEADER ═══ */}
      <header
        ref={navRef}
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      >
        <div className="navbar__inner">
          {/* Logo */}
          <button
            className="navbar__logo"
            onClick={() => scrollTo("hero")}
            aria-label="Go to top"
          >
            <img src={logo} alt="sbra" width="80px" height="122px" />
          </button>

          {/* Desktop Nav */}
          <nav className="navbar__links" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                className={`navbar__link ${
                  activeId === link.id ? "navbar__link--active" : ""
                }`}
                onClick={() => scrollTo(link.id)}
                aria-current={activeId === link.id ? "true" : undefined}
              >
                {link.label}
                <span className="navbar__link-dot" aria-hidden="true" />
              </button>
            ))}
          </nav>

          {/* Right: CTA + Hamburger */}
          <div className="navbar__right">
            <button
              className="navbar__cta"
              onClick={() => scrollTo("contact")}
            >
              <span>Let's Talk</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              className={`navbar__ham ${menuOpen ? "navbar__ham--open" : ""}`}
              onClick={() => setMenuOpen((p) => !p)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-drawer"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* ═══ MOBILE DRAWER — OUTSIDE header ═══ */}
      <div
        id="mobile-drawer"
        className={`navbar__drawer ${
          menuOpen ? "navbar__drawer--open" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="navbar__drawer-links" aria-label="Mobile navigation">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.id}
              className={`navbar__drawer-link ${
                activeId === link.id ? "active" : ""
              }`}
              style={{ animationDelay: `${i * 55}ms` }}
              onClick={() => scrollTo(link.id)}
              aria-current={activeId === link.id ? "true" : undefined}
            >
              <span className="navbar__drawer-num">0{i + 1}</span>
              {link.label}
            </button>
          ))}
          <button
            className="navbar__drawer-cta"
            onClick={() => scrollTo("contact")}
            style={{ animationDelay: `${NAV_LINKS.length * 55}ms` }}
          >
            Let's Talk →
          </button>
        </nav>
      </div>

      {/* ═══ OVERLAY — OUTSIDE header ═══ */}
      <div
        className={`navbar__overlay ${
          menuOpen ? "navbar__overlay--visible" : ""
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
};

export default Navbar;