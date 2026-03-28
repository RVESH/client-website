import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../../../../images/pixelrise.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ IMPROVED SCROLL (with offset)
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 80; // navbar height
      const top = element.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  // ✅ Close menu on outside click (mobile UX fix)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".navbar")) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">

        {/* LOGO */}
        <button
          className="navbar__logo"
          onClick={() => handleScrollTo("hero")}
        >
          <img src={logo} alt="PixelRise Logo" />
        </button>

        {/* RIGHT SIDE */}
        <div className="navbar__right">

          {/* Mobile CTA */}
          <button
            onClick={() => handleScrollTo("contact")}
            className="navbar__cta navbar__cta--mobile"
          >
            Contact
          </button>

          {/* Hamburger */}
          <button
            className={`navbar__toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

        {/* MENU */}
        <nav className={`navbar__links ${menuOpen ? "active" : ""}`}>

          <button onClick={() => handleScrollTo("services")}>
            Services
          </button>

          <button onClick={() => handleScrollTo("skills")}>
            Skills
          </button>

          <button onClick={() => handleScrollTo("portfolio")}>
            Portfolio
          </button>

          <button onClick={() => handleScrollTo("process")}>
            Process
          </button>

          {/* Desktop CTA */}
          <button
            onClick={() => handleScrollTo("contact")}
            className="navbar__cta desktop-only"
          >
            Contact
          </button>

        </nav>

      </div>
    </header>
  );
};

export default Navbar;