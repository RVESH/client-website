import { Users, Circle } from 'lucide-react'
import { images } from '../../data/images.js'
import './CommunityCard.css'

export default function CommunityCard({ name, category, cover, members, online, description, tags }) {
  return (
    <article className="community-card">
      <div className="community-card__cover">
        <img src={images[cover]} alt="" loading="lazy" />
        <span className="community-card__category">{category}</span>
      </div>
      <div className="community-card__body">
        <h3 className="community-card__name">{name}</h3>
        <p className="community-card__desc">{description}</p>

        <ul className="community-card__tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="community-card__footer">
          <span className="community-card__stat">
            <Users size={14} strokeWidth={2} /> {members}
          </span>
          <span className="community-card__stat community-card__stat--online">
            <Circle size={8} fill="currentColor" strokeWidth={0} /> {online} online
          </span>
        </div>
      </div>
    </article>
  )
}
