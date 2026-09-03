import { Clock, Users } from 'lucide-react'
import Icon from '../Icon/Icon.jsx'
import { images } from '../../data/images.js'
import './EventCard.css'

export default function EventCard({ title, cover, date, time, type, community, attendees, icon }) {
  return (
    <article className="event-card">
      <div className="event-card__cover">
        <img src={images[cover]} alt="" loading="lazy" />
        <div className="event-card__date">
          <Icon name={icon} size={16} strokeWidth={2} />
          <span>{date}</span>
        </div>
        <span className={`event-card__type ${type === 'Online' ? 'event-card__type--online' : 'event-card__type--irl'}`}>
          {type}
        </span>
      </div>
      <div className="event-card__body">
        <span className="event-card__community">{community}</span>
        <h3 className="event-card__title">{title}</h3>
        <div className="event-card__meta">
          <span className="event-card__meta-item">
            <Clock size={14} strokeWidth={2} /> {time}
          </span>
          <span className="event-card__meta-item">
            <Users size={14} strokeWidth={2} /> {attendees}
          </span>
        </div>
      </div>
    </article>
  )
}
