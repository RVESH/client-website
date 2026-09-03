import { Activity } from 'lucide-react'
import { images } from '../../data/images.js'
import { activityFeed } from '../../data/posts.js'
import './MemberActivity.css'

export default function MemberActivity() {
  return (
    <section className="section--tight member-activity">
      <div className="container member-activity__inner">
        <div className="member-activity__copy">
          <span className="section-head__eyebrow">
            <Activity size={13} strokeWidth={2.25} /> Live activity
          </span>
          <h2 className="member-activity__title">Something's always happening</h2>
          <p className="section-head__desc">
            Thousands of members are online right now — posting, joining and showing up for each other.
          </p>
        </div>

        <ul className="member-activity__feed">
          {activityFeed.map((item) => (
            <li key={item.id} className="member-activity__item">
              <img src={images[item.avatar]} alt="" className="member-activity__avatar" loading="lazy" />
              <span className="member-activity__text">{item.text}</span>
              <span className="member-activity__time">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
