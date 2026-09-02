import FeatureCard from '../../components/FeatureCard/FeatureCard.jsx'
import ProductPreview from '../../components/ProductPreview/ProductPreview.jsx'
import Icon from '../../components/Icon/Icon.jsx'
import { coreCapabilities, featureHighlights } from '../../data/features.js'
import './Features.scss'

export function CoreCapabilities() {
  return (
    <section className="section features-grid">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section-head__eyebrow">Core capabilities</span>
          <h2 className="section-head__title">Everything you need to run AI-powered workflows</h2>
          <p className="section-head__desc">
            A complete toolkit for building, running and monitoring intelligent workflows across your business.
          </p>
        </div>
        <div className="features-grid__list">
          {coreCapabilities.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeatureHighlights() {
  return (
    <section className="section feature-highlights">
      <div className="container">
        <div className="section-head">
          <span className="section-head__eyebrow">Feature highlights</span>
          <h2 className="section-head__title">Purpose-built for how modern teams actually work</h2>
        </div>
        <div className="feature-highlights__list">
          {featureHighlights.map((item, index) => (
            <div
              key={item.title}
              className={`feature-highlights__row ${index % 2 === 1 ? 'feature-highlights__row--reverse' : ''}`}
            >
              <div className="feature-highlights__copy">
                <div className="feature-highlights__icon">
                  <Icon name={item.icon} size={20} strokeWidth={1.75} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="feature-highlights__visual">
                <ProductPreview image={item.image} label="preview" alt={item.title} variant="compact" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
