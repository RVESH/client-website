import { useMemo, useState } from 'react'
import SectionHeading from '../../components/SectionHeading'
import GalleryGrid from '../../components/GalleryGrid'
import { galleryItems, galleryCategories } from '../../data/gallery'
import styles from './Gallery.module.scss'

export default function Gallery() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    if (active === 'All') return galleryItems
    return galleryItems.filter((item) => item.category === active)
  }, [active])

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className="container">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments from recent celebrations"
            description="A look at the ceremonies, receptions, and details we have designed — filter by category or browse everything."
            inverse
          />
        </div>
      </header>

      <div className="container">
        <div className={styles.filterBar} role="group" aria-label="Filter gallery by category">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={[styles.filterBtn, active === cat ? styles.filterActive : ''].join(' ')}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.gridWrap}>
          <GalleryGrid items={filtered} />
        </div>
      </div>
    </div>
  )
}
