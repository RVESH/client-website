import SectionHeading from '../../components/SectionHeading'
import Button from '../../components/Button'
import { galleryItems } from '../../data/gallery'
import styles from './GalleryPreview.module.scss'

export default function GalleryPreview() {
  const preview = galleryItems.slice(0, 6)

  return (
    <section className={[styles.section, 'container'].join(' ')}>
      <div className={styles.headRow}>
        <SectionHeading
          eyebrow="From Recent Celebrations"
          title="A glimpse of the gallery"
          description="Ceremonies, receptions, and the small details that make each day distinct."
        />
        <Button to="/gallery" variant="ghost" className={styles.viewAll}>
          View Full Gallery
        </Button>
      </div>

      <div className={styles.grid}>
        {preview.map((item) => (
          <div className={styles.item} key={item.id}>
            <img src={item.src} alt={item.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
