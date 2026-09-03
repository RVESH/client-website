import { useEffect, useState } from 'react'
import { Menu, X, Orbit } from 'lucide-react'
import Button from '../Button/Button.jsx'
import { site, nav, ctaLinks } from '../../data/site.js'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [open])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
    >
      <div className="container header__inner">
        <a
          href="#top"
          className="header__brand"
          aria-label={`${site.name} — home`}
          onClick={closeMenu}
        >
          <span className="header__brand-mark">
            <Orbit size={17} strokeWidth={2.25} />
          </span>

          <span>{site.name}</span>
        </a>

        {/* Desktop navigation */}
        <nav
          className="header__nav"
          aria-label="Primary navigation"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="header__link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="header__actions">
          <Button
            href={ctaLinks.secondary.href}
            variant="ghost"
            size="sm"
          >
            {ctaLinks.secondary.label}
          </Button>

          <Button
            href={ctaLinks.primary.href}
            variant="primary"
            size="sm"
            data-join-orbit
          >
            {ctaLinks.primary.label}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="header__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? (
            <X size={23} strokeWidth={1.8} />
          ) : (
            <Menu size={23} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`header__mobile ${
          open ? 'header__mobile--open' : ''
        }`}
        aria-hidden={!open}
      >
        <div className="header__mobile-inner">
          <nav
            className="header__mobile-nav"
            aria-label="Mobile navigation"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="header__mobile-link"
                tabIndex={open ? 0 : -1}
                onClick={closeMenu}
              >
                <span>{item.label}</span>
                <span className="header__mobile-arrow">
                  →
                </span>
              </a>
            ))}
          </nav>

          <div className="header__mobile-actions">
            <Button
              href={ctaLinks.secondary.href}
              variant="secondary"
              size="md"
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
            >
              {ctaLinks.secondary.label}
            </Button>

            <Button
              href={ctaLinks.primary.href}
              variant="primary"
              size="md"
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
              data-join-orbit
            >
              {ctaLinks.primary.label}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}