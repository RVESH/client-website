import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Search, Bookmark } from "lucide-react";
import { site } from "../../data/site";
import { videos } from "../../data/videos";
import Button from "../Button/Button.jsx";
import "./Header.scss";

function MobileDrawer({ open, onClose, toggleRef }) {
  const drawerRef = useRef(null);

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
          <span className="mobile-drawer__brand">{site.name}</span>
          <button type="button" className="mobile-drawer__close" onClick={onClose} aria-label="Close menu">
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
          <Button to="/browse" variant="primary" onClick={onClose}>
            Browse everything
          </Button>
        </div>
      </div>
    </>,
    document.body
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const toggleRef = useRef(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  const suggestions =
    query.trim().length > 1
      ? videos.filter((v) => v.title.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 5)
      : [];

  const submitSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/browse?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header__bar">
        <div className="header__bar-inner container">
          <NavLink to="/" className="header__brand" onClick={close}>
            <span className="header__brand-mark">A</span>
            <span className="header__brand-name">{site.name}</span>
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
            <div className="header__search">
              <button
                type="button"
                className="btn btn--icon"
                aria-label={searchOpen ? "Close search" : "Open search"}
                aria-expanded={searchOpen}
                onClick={() => setSearchOpen((v) => !v)}
              >
                {searchOpen ? <X size={18} strokeWidth={2} /> : <Search size={18} strokeWidth={2} />}
              </button>

              {searchOpen && (
                <form className="header__search-panel" onSubmit={submitSearch} role="search">
                  <label htmlFor="header-search" className="visually-hidden">
                    Search titles
                  </label>
                  <input
                    id="header-search"
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search movies and series"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  {suggestions.length > 0 && (
                    <ul className="header__suggestions">
                      {suggestions.map((s) => (
                        <li key={s.id}>
                          <button
                            type="button"
                            onClick={() => {
                              navigate(`/movie/${s.id}`);
                              setSearchOpen(false);
                              setQuery("");
                            }}
                          >
                            {s.title}
                            <span>{s.year}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </form>
              )}
            </div>

            <Button to="/browse?watchlist=1" variant="ghost" icon={Bookmark} className="header__watchlist-link">
              Watchlist
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
