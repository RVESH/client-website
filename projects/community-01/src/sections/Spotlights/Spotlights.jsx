import MemberCard from '../../components/MemberCard/MemberCard.jsx'
import { memberSpotlights } from '../../data/members.js'
import './Spotlights.scss'

export default function Spotlights() {
  return (
    <section id="members" className="section spotlights">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section-head__eyebrow">Member spotlights</span>
          <h2 className="section-head__title">Real people, real orbit stories</h2>
        </div>

        <div className="spotlights__grid">
          {memberSpotlights.map((item) => (
            <MemberCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
