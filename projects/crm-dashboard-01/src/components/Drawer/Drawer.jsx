import { useEffect } from 'react'
import Icon from '../Icon'
import styles from './Drawer.module.css'

export default function Drawer({ open, onClose, title, subtitle, children, footer }) {
  useEffect(() => {
    if (!open) return undefined

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className={styles.root}>
      <div className={styles.overlay} onClick={onClose} />
      <aside className={styles.panel} role="dialog" aria-modal="true" aria-label={title}>
        <header className={styles.header}>
          <div>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close panel">
            <Icon name="x" size={18} />
          </button>
        </header>

        <div className={styles.body}>{children}</div>

        {footer && <footer className={styles.footer}>{footer}</footer>}
      </aside>
    </div>
  )
}
