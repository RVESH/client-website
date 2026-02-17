import React, { useEffect, useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">

        {/* Logo */}
        <button
          className="navbar__logo"
          onClick={() => handleScrollTo("hero")}
        >
          PixelRise
        </button>

        {/* Links */}
        <nav className="navbar__links">

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

          <button
            onClick={() => handleScrollTo("contact")}
            className="navbar__cta"
          >
            Contact
          </button>

        </nav>

      </div>
    </header>
  );
};

export default Navbar;
