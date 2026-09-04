import SectionHeading from '../../components/SectionHeading'
import { images } from '../../data/images'
import styles from './VenueShowcase.module.scss'

const VENUES = [
  { image: images.venue01, label: 'Garden & Estate' },
  { image: images.venue02, label: 'Ballroom & Black-Tie' },
  { image: images.venue03, label: 'Coastal & Waterfront' },
  { image: images.venue04, label: 'Modern & Minimal' },
]

export default function VenueShowcase() {
  return (
    <section className={[styles.section, 'container'].join(' ')}>
      <SectionHeading
        eyebrow="Venues & Styles"
        title="A style for every setting"
        description="We design around the venue, not against it — here are a few of the aesthetics we return to most often."
      />

      <div className={styles.grid}>
        {VENUES.map((venue) => (
          <div className={styles.item} key={venue.label}>
            <div className={styles.imageWrap}>
              <img src={venue.image.src} alt={venue.image.alt} loading="lazy" />
            </div>
            <span className={styles.label}>{venue.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
