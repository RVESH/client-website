import Icon from '../../components/Icon/Icon.jsx'
import ProductPreview from '../../components/ProductPreview/ProductPreview.jsx'
import Integrations from '../../sections/Integrations/Integrations.jsx'
import CTA from '../../sections/CTA/CTA.jsx'
import { detailedFeatureGroups } from '../../data/features.js'
import './Features.scss'

export default function Features() {
  return (
    <div className="page features-page">
      <section className="section features-hero">
        <div className="container features-hero__inner">
          <span className="section-head__eyebrow">Platform</span>
          <h1 className="features-hero__title">A complete system for AI-powered work</h1>
          <p className="features-hero__desc">
            From the models that make decisions to the automations that act on them — every layer of Nexora is
            designed to work together, not as a collection of disconnected tools.
          </p>
        </div>
      </section>

      <section className="section features-detail">
        <div className="container">
          <div className="features-detail__list">
            {detailedFeatureGroups.map((group, index) => (
              <article
                key={group.id}
                id={group.id}
                className={`features-detail__row ${index % 2 === 1 ? 'features-detail__row--reverse' : ''}`}
              >
                <div className="features-detail__copy">
                  <div className="features-detail__icon">
                    <Icon name={group.icon} size={20} strokeWidth={1.75} />
                  </div>
                  <h2>{group.title}</h2>
                  <p className="features-detail__desc">{group.desc}</p>
                  <ul className="features-detail__points">
                    {group.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="features-detail__visual">
                  <ProductPreview image={group.image} label={`nexora.ai/${group.id}`} alt={group.title} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Integrations />
      <CTA
        eyebrow="Explore the platform"
        title="See the full feature set in action"
        desc="Book a walkthrough with our team or start a free trial and explore it yourself."
      />
    </div>
  )
}
