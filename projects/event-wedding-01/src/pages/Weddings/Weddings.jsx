import SectionHeading from '../../components/SectionHeading'
import EventCard from '../../components/EventCard'
import CTA from '../../components/CTA'
import { events } from '../../data/events'
import styles from './Weddings.module.scss'

export default function Weddings() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className="container">
          <SectionHeading
            eyebrow="Weddings & Events"
            title="Signature experiences, shaped around you"
            description="These are the celebration formats we return to most often — each one a starting point, never a fixed package. Every detail is adapted to your venue, guest list, and vision."
            inverse
          />
        </div>
      </header>

      <section className={['container', styles.list].join(' ')}>
        {events.map((event, i) => (
          <EventCard key={event.id} event={event} reverse={i % 2 === 1} />
        ))}
      </section>

      <CTA
        eyebrow="Found Your Format?"
        title="Let's talk about your celebration."
        description="Whether one of these resonates or your vision is entirely your own, we would love to hear about it."
      />
    </div>
  )
}
