import { useState } from 'react'
import Lightbox from '../Lightbox'
import styles from './GalleryGrid.module.scss'

export default function GalleryGrid({ items }) {
  const [activeIndex, setActiveIndex] = useState(null)

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No images in this category yet.</p>
      </div>
    )
  }

  return (
    <>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <button
            type="button"
            key={item.id}
            className={styles.item}
            onClick={() => setActiveIndex(i)}
            aria-label={`Open image: ${item.alt}`}
          >
            <img src={item.src} alt={item.alt} loading="lazy" />
            <span className={styles.overlay} aria-hidden="true">
              <span className={styles.plus}>+</span>
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        items={items}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  )
}
