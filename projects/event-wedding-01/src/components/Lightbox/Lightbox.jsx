import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import useScrollLock from '../../hooks/useScrollLock'
import styles from './Lightbox.module.scss'

/**
 * Full-screen image viewer with keyboard navigation. Portaled to
 * document.body so it always sits above the page regardless of any
 * stacking-context created by ancestor elements.
 */
export default function Lightbox({ items, activeIndex, onClose, onNavigate }) {
  const isOpen = activeIndex !== null && activeIndex !== undefined
  useScrollLock(isOpen)

  const handleKey = useCallback(
    (e) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % items.length)
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + items.length) % items.length)
    },
    [isOpen, activeIndex, items.length, onClose, onNavigate]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [handleKey])

  if (!isOpen) return null

  const item = items[activeIndex]

  return createPortal(
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
    >
      <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close gallery">
        <span aria-hidden="true">✕</span>
      </button>

      <button
        type="button"
        className={[styles.navBtn, styles.navPrev].join(' ')}
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((activeIndex - 1 + items.length) % items.length)
        }}
        aria-label="Previous image"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <figure className={styles.figure} onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.alt} className={styles.image} />
        <figcaption className={styles.caption}>
          {item.category} — {activeIndex + 1} / {items.length}
        </figcaption>
      </figure>

      <button
        type="button"
        className={[styles.navBtn, styles.navNext].join(' ')}
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((activeIndex + 1) % items.length)
        }}
        aria-label="Next image"
      >
        <span aria-hidden="true">›</span>
      </button>
    </div>,
    document.body
  )
}
