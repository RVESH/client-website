import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../../../../images/pixelrise.png";

const NAV_LINKS = [
  { label: "Services",  id: "services"  },
  { label: "Skills",    id: "skills"    },
  { label: "Portfolio", id: "portfolio" },
  { label: "Process",   id: "process"   },
];

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeId,  setActiveId]  = useState("");

  /* ── Scroll shadow + active section tracker ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight active nav link
      const ids = [...NAV_LINKS.map((l) => l.id), "contact", "hero"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Smooth scroll with offset ── */
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  /* ── Close menu on outside click ── */
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (!e.target.closest(".navbar")) setMenuOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [menuOpen]);

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${menuOpen ? "navbar--open" : ""}`}>
      <div className="navbar__inner">

        {/* ── LOGO ── */}
        <button className="navbar__logo" onClick={() => handleScrollTo("hero")} aria-label="Go to top">
          <img src={logo} alt="PixelRise" />
          {/* <span className="navbar__logo-name">PixelRise</span> */}
        </button>

        {/* ── DESKTOP NAV ── */}
        <nav className="navbar__links" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className={`navbar__link ${activeId === link.id ? "navbar__link--active" : ""}`}
              onClick={() => handleScrollTo(link.id)}
            >
              {link.label}
              <span className="navbar__link-dot" />
            </button>
          ))}
        </nav>

        {/* ── RIGHT: CTA + HAMBURGER ── */}
        <div className="navbar__right">
          <button
            className="navbar__cta"
            onClick={() => handleScrollTo("contact")}
          >
            <span>Let's Talk</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* ── MOBILE DRAWER ── */}
      <div className={`navbar__drawer ${menuOpen ? "navbar__drawer--open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="navbar__drawer-links">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.id}
              className={`navbar__drawer-link ${activeId === link.id ? "active" : ""}`}
              style={{ animationDelay: `${i * 60}ms` }}
              onClick={() => handleScrollTo(link.id)}
            >
              <span className="navbar__drawer-num">0{i + 1}</span>
              {link.label}
            </button>
          ))}

          <button
            className="navbar__drawer-cta"
            onClick={() => handleScrollTo("contact")}
            style={{ animationDelay: `${NAV_LINKS.length * 60}ms` }}
          >
            Let's Talk →
          </button>
        </nav>
      </div>

      {/* ── MOBILE OVERLAY ── */}
      <div
        className={`navbar__overlay ${menuOpen ? "navbar__overlay--visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />
    </header>
  );
};

export default Navbar;