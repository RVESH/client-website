import Button from '../Button'
import styles from './EventCard.module.scss'

export default function EventCard({ event, reverse = false }) {
  return (
    <article className={[styles.card, reverse ? styles.reverse : ''].join(' ')}>
      <div className={styles.imageCol}>
        <img src={event.image.src} alt={event.image.alt} loading="lazy" />
      </div>

      <div className={styles.textCol}>
        <span className={styles.style}>{event.style}</span>
        <h3 className={styles.title}>{event.title}</h3>
        <span className={styles.guestRange}>{event.guestRange}</span>
        <p className={styles.description}>{event.description}</p>

        <ul className={styles.highlights}>
          {event.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Button to="/contact" variant="ghost">
          Enquire About This Experience
        </Button>
      </div>
    </article>
  )
}
