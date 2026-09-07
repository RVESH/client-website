import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./Navbar.scss";
import logo from "../../../../images/sbra.png";
import NavigationButtons from "./NavigationButtons";

const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "Skills", id: "skills" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Process", id: "process" },
];

const SCROLL_OFFSET = 68;
const SCROLL_THRESHOLD = 50;
const ACTIVE_ZONE = 110;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  const navRef = useRef(null);

  const isHomePage =
    location.pathname === "/" ||
    location.pathname === "";

  /* ================================================================
     SCROLL SPY
     ================================================================ */

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);

    if (!isHomePage) {
      return;
    }

    const sectionIds = [
      "hero",
      ...NAV_LINKS.map((link) => link.id),
    ];

    let currentSection = "hero";

    for (const id of sectionIds) {
      const element = document.getElementById(id);

      if (!element) {
        continue;
      }

      const rect = element.getBoundingClientRect();

      if (
        rect.top <= ACTIVE_ZONE &&
        rect.bottom >= ACTIVE_ZONE
      ) {
        currentSection = id;
        break;
      }
    }

    setActiveId(currentSection);
  }, [isHomePage]);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [handleScroll]);

  /* ================================================================
     CLOSE MENU ON ROUTE CHANGE
     ================================================================ */

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /* ================================================================
     SECTION SCROLL
     ================================================================ */

  const scrollToSection = useCallback(
    (id) => {
      if (!isHomePage) {
        navigate(`/#${id}`);
        return;
      }

      const element =
        document.getElementById(id);

      if (!element) {
        if (id === "hero") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }

        setMenuOpen(false);
        return;
      }

      const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        SCROLL_OFFSET;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      setActiveId(id);
      setMenuOpen(false);
    },
    [
      isHomePage,
      navigate,
    ]
  );

  /* ================================================================
     ROUTE
     ================================================================ */

  const openRoute = useCallback(
    (path) => {
      setMenuOpen(false);
      navigate(path);
    },
    [navigate]
  );

  /* ================================================================
     LOGO
     ================================================================ */

  const handleLogoClick = useCallback(() => {
    if (isHomePage) {
      scrollToSection("hero");
      return;
    }

    navigate("/");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [
    isHomePage,
    navigate,
    scrollToSection,
  ]);

  /* ================================================================
     OUTSIDE CLICK
     ================================================================ */

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleOutsideClick = (event) => {
      if (
        !navRef.current?.contains(
          event.target
        )
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "click",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "click",
        handleOutsideClick
      );
    };
  }, [menuOpen]);

  /* ================================================================
     BODY SCROLL LOCK
     ================================================================ */

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [menuOpen]);

  /* ================================================================
     ESCAPE
     ================================================================ */

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [menuOpen]);

  return (
    <>
      {/* ============================================================
          HEADER
         ============================================================ */}

      <header
        ref={navRef}
        className={`navbar ${
          scrolled
            ? "navbar--scrolled"
            : ""
        }`}
      >
        <div className="navbar__inner">

          {/* LOGO */}

          <button
            type="button"
            className="navbar__logo"
            onClick={handleLogoClick}
            aria-label="Go to SouthBridge home"
          >
            <img
              src={logo}
              alt="SouthBridge Research Analytics"
            />
          </button>

          {/* DESKTOP NAV */}

          <nav
            className="navbar__links"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                className={`navbar__link ${
                  activeId === link.id
                    ? "navbar__link--active"
                    : ""
                }`}
                onClick={() =>
                  scrollToSection(link.id)
                }
                aria-current={
                  activeId === link.id
                    ? "page"
                    : undefined
                }
              >
                {link.label}

                <span
                  className="navbar__link-dot"
                  aria-hidden="true"
                />
              </button>
            ))}
          </nav>

          {/* ========================================================
              RIGHT SIDE
              DESKTOP:
              Websites + Let's Talk
              Contact intentionally removed
             ======================================================== */}

          <div className="navbar__right">

            <div className="navbar__desktop-websites">
              <NavigationButtons
                showContact={false}
              />
            </div>

            <button
              type="button"
              className="navbar__cta"
              onClick={() =>
                openRoute("/contact")
              }
              aria-label="Open contact page"
            >
              <span>Let's Talk</span>

              <svg
                width="14"
                height="14"
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

            {/* HAMBURGER */}

            <button
              type="button"
              className={`navbar__ham ${
                menuOpen
                  ? "navbar__ham--open"
                  : ""
              }`}
              onClick={() =>
                setMenuOpen(
                  (previous) => !previous
                )
              }
              aria-label={
                menuOpen
                  ? "Close menu"
                  : "Open menu"
              }
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

      {/* ============================================================
          MOBILE DRAWER

          Contact stays HERE.
         ============================================================ */}

      <aside
        id="mobile-drawer"
        className={`navbar__drawer ${
          menuOpen
            ? "navbar__drawer--open"
            : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="navbar__drawer-inner">

          <div className="navbar__drawer-heading">
            <span>Navigation</span>
            <small>SouthBridge</small>
          </div>

          <nav
            className="navbar__drawer-links"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map(
              (link, index) => (
                <button
                  key={link.id}
                  type="button"
                  className={`navbar__drawer-link ${
                    activeId === link.id
                      ? "active"
                      : ""
                  }`}
                  style={{
                    animationDelay:
                      `${index * 55}ms`,
                  }}
                  onClick={() =>
                    scrollToSection(
                      link.id
                    )
                  }
                >
                  <span className="navbar__drawer-num">
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </span>

                  <span>
                    {link.label}
                  </span>

                  <span
                    className="navbar__drawer-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              )
            )}

            {/* ======================================================
                WEBSITES
               ====================================================== */}

            <div className="navbar__drawer-websites">
              <NavigationButtons
                showContact={true}
              />
            </div>

            {/* ======================================================
                LET'S TALK
               ====================================================== */}

            <button
              type="button"
              className="navbar__drawer-cta"
              onClick={() =>
                openRoute("/contact")
              }
            >
              <span>Let's Talk</span>
              <span aria-hidden="true">
                →
              </span>
            </button>
          </nav>

          <div className="navbar__drawer-footer">
            <span>
              SouthBridge Research Analytics
            </span>

            <span>
              {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </aside>

      {/* ============================================================
          OVERLAY
         ============================================================ */}

      <div
        className={`navbar__overlay ${
          menuOpen
            ? "navbar__overlay--visible"
            : ""
        }`}
        onClick={() =>
          setMenuOpen(false)
        }
        aria-hidden="true"
      />
    </>
  );
};

export default Navbar;