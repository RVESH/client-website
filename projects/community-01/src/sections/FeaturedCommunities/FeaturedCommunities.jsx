import CommunityCard from '../../components/CommunityCard/CommunityCard.jsx'
import Button from '../../components/Button/Button.jsx'
import { communities } from '../../data/communities.js'
import './FeaturedCommunities.css'

export default function FeaturedCommunities() {
  return (
    <section id="discover" className="section featured">
      <div className="container">
        <div className="section-head section-head--between">
          <div>
            <span className="section-head__eyebrow">Discover</span>
            <h2 className="section-head__title">Communities worth joining</h2>
            <p className="section-head__desc">Hand-picked spaces that are active, welcoming and genuinely worth your time.</p>
          </div>
          <Button href="#categories" variant="secondary" size="md" icon="ArrowRight" className="featured__cta">
            Browse all
          </Button>
        </div>

        <div className="featured__grid">
          {communities.map((item) => (
            <CommunityCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
