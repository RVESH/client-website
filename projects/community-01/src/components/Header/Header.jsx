import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X, Orbit } from 'lucide-react'
import Button from '../Button/Button.jsx'
import { site, nav, ctaLinks } from '../../data/site.js'
import './Header.scss'

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
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [open])

  const closeMenu = () => {
    setOpen(false)
  }

  const toggleMenu = () => {
    setOpen((current) => !current)
  }

  const mobileMenu = (
    <>
      <button
        type="button"
        className={`header__backdrop ${
          open ? 'header__backdrop--open' : ''
        }`}
        aria-label="Close menu"
        onClick={closeMenu}
      />

      <aside
        id="mobile-menu"
        className={`header__mobile ${
          open ? 'header__mobile--open' : ''
        }`}
        aria-hidden={!open}
      >
        <div className="header__mobile-inner">
          <div className="header__mobile-brand">
            <span className="header__mobile-brand-mark">
              <Orbit
                size={18}
                strokeWidth={2.2}
              />
            </span>

            <span className="header__mobile-brand-name">
              {site.name}
            </span>
          </div>

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
      </aside>
    </>
  )

  return (
    <>
      <header
        className={`header ${
          scrolled ? 'header--scrolled' : ''
        }`}
      >
        <div className="container header__inner">
          <a
            href="#top"
            className="header__brand"
            aria-label={`${site.name} — home`}
            onClick={closeMenu}
          >
            <span className="header__brand-mark">
              <Orbit
                size={18}
                strokeWidth={2.25}
              />
            </span>

            <span className="header__brand-name">
              {site.name}
            </span>
          </a>

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

          {/* Mobile button stays in the header row, always on the right */}
          <button
            type="button"
            className={`header__toggle ${
              open ? 'header__toggle--open' : ''
            }`}
            aria-label={
              open ? 'Close menu' : 'Open menu'
            }
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            {open ? (
              <X
                size={24}
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                size={24}
                strokeWidth={1.8}
              />
            )}
          </button>
        </div>
      </header>

      {typeof document !== 'undefined'
        ? createPortal(
            mobileMenu,
            document.body,
          )
        : null}
    </>
  )
}