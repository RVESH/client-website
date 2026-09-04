import SectionHeading from '../../components/SectionHeading'
import Button from '../../components/Button'
import { events } from '../../data/events'
import styles from './SignatureEvents.module.scss'

export default function SignatureEvents() {
  const featured = events.slice(0, 3)

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.headRow}>
          <SectionHeading
            eyebrow="Signature Experiences"
            title="Weddings designed around you"
            description="A glimpse of the celebration formats we design most often — each one shaped entirely around the couple."
          />
          <Button to="/weddings" variant="ghost" className={styles.viewAll}>
            View All Experiences
          </Button>
        </div>

        <div className={styles.grid}>
          {featured.map((event) => (
            <article className={styles.card} key={event.id}>
              <div className={styles.imageWrap}>
                <img src={event.image.src} alt={event.image.alt} loading="lazy" />
              </div>
              <span className={styles.style}>{event.style}</span>
              <h3 className={styles.title}>{event.title}</h3>
              <span className={styles.guestRange}>{event.guestRange}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
