import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { site } from '../../data/site'
import Button from '../Button/Button.jsx'
import './Header.scss'

export default function Header() {
  const [open, setOpen] = useState(false)
  const drawerRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    const firstFocusable = drawerRef.current?.querySelector(
      'a, button, input, select, textarea'
    )

    firstFocusable?.focus()
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className="header">
      <div className="header__bar">
        <div className="header__bar-inner container">
          <NavLink
            to="/"
            className="header__brand"
            onClick={closeMenu}
            aria-label={`${site.brand?.name || 'StrataBuild'} home`}
          >
            <span className="header__brand-mark" aria-hidden="true">
              SB
            </span>

            <span className="header__brand-name">
              {site.brand?.name || 'Strata'}
              <em>{site.brand?.accent || 'Build'}</em>
            </span>
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
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      isActive ? 'is-active' : undefined
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <a
              className="header__phone"
              href={site.contact.phoneHref}
              aria-label={`Call ${site.contact.phoneDisplay}`}
            >
              <Phone
                size={15}
                strokeWidth={2}
                aria-hidden="true"
              />
              <span>{site.contact.phoneDisplay}</span>
            </a>

            <Button
              to="/contact"
              variant="primary"
              className="header__cta"
            >
              {site.cta.primary}
            </Button>

            <button
              ref={toggleRef}
              type="button"
              className="header__toggle"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <X size={23} strokeWidth={2} />
              ) : (
                <Menu size={23} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <>
          <button
            type="button"
            className="header__overlay is-open"
            onClick={closeMenu}
            aria-label="Close navigation"
            tabIndex={-1}
          />

          <aside
            id="mobile-drawer"
            ref={drawerRef}
            className="header__drawer is-open"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="header__drawer-top">
              <span className="header__drawer-title">
                {site.brand?.name || 'Strata'}
                <em>{site.brand?.accent || 'Build'}</em>
              </span>

              <button
                type="button"
                className="header__drawer-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={23} strokeWidth={2} />
              </button>
            </div>

            <nav
              className="header__drawer-nav"
              aria-label="Mobile navigation"
            >
              <ul>
                {site.nav.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        isActive ? 'is-active' : undefined
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header__drawer-footer">
              <a
                className="header__phone header__phone--drawer"
                href={site.contact.phoneHref}
              >
                <Phone
                  size={15}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span>{site.contact.phoneDisplay}</span>
              </a>

              <Button
                to="/contact"
                variant="primary"
                onClick={closeMenu}
                className="header__drawer-cta"
              >
                {site.cta.primary}
              </Button>
            </div>
          </aside>
        </>
      )}
    </header>
  )
}