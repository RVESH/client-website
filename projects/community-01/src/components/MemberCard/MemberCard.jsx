import { Quote } from 'lucide-react'
import { images } from '../../data/images.js'
import './MemberCard.css'

export default function MemberCard({ name, role, community, avatar, quote }) {
  return (
    <figure className="member-card">
      <Quote size={22} strokeWidth={1.5} className="member-card__mark" />
      <blockquote className="member-card__quote">“{quote}”</blockquote>
      <figcaption className="member-card__meta">
        <img src={images[avatar]} alt="" className="member-card__avatar" loading="lazy" />
        <div>
          <div className="member-card__name">{name}</div>
          <div className="member-card__role">
            {role} · {community}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
