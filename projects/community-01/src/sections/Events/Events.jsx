import EventCard from '../../components/EventCard/EventCard.jsx'
import Button from '../../components/Button/Button.jsx'
import { events } from '../../data/events.js'
import './Events.css'

export default function Events() {
  return (
    <section id="events" className="section events">
      <div className="container">
        <div className="section-head section-head--between">
          <div>
            <span className="section-head__eyebrow">Events</span>
            <h2 className="section-head__title">Happening soon</h2>
            <p className="section-head__desc">Workshops, showcases and meetups hosted by communities across Orbit.</p>
          </div>
          <Button href="#join" variant="secondary" size="md" icon="ArrowRight" className="events__cta">
            See full calendar
          </Button>
        </div>

        <div className="events__grid">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  )
}
