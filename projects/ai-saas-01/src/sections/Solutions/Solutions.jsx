import { CheckCircle2 } from 'lucide-react'
import FeatureCard from '../../components/FeatureCard/FeatureCard.jsx'
import ProductPreview from '../../components/ProductPreview/ProductPreview.jsx'
import Icon from '../../components/Icon/Icon.jsx'
import Button from '../../components/Button/Button.jsx'
import { useCases } from '../../data/features.js'
import { solutions } from '../../data/solutions.js'
import './Solutions.scss'

export function UseCases() {
  return (
    <section className="section use-cases">
      <div className="container">
        <div className="section-head">
          <span className="section-head__eyebrow">Use cases</span>
          <h2 className="section-head__title">Built for the workflows that run your business</h2>
        </div>
        <div className="use-cases__list">
          {useCases.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} size="sm" />
          ))}
        </div>
      </div>
    </section>
  )
}

export function SolutionsDetailed() {
  return (
    <section className="section solutions-detailed">
      <div className="container">
        <div className="solutions-detailed__list">
          {solutions.map((item, index) => (
            <article
              key={item.id}
              id={item.id}
              className={`solutions-detailed__row ${index % 2 === 1 ? 'solutions-detailed__row--reverse' : ''}`}
            >
              <div className="solutions-detailed__copy">
                <div className="solutions-detailed__icon">
                  <Icon name={item.icon} size={20} strokeWidth={1.75} />
                </div>
                <h3>{item.title}</h3>
                <p className="solutions-detailed__desc">{item.desc}</p>

                <ol className="solutions-detailed__workflow">
                  {item.workflow.map((step, i) => (
                    <li key={step}>
                      <span className="solutions-detailed__step-num">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>

                <ul className="solutions-detailed__benefits">
                  {item.benefits.map((b) => (
                    <li key={b}>
                      <CheckCircle2 size={15} strokeWidth={2} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Button to="/contact" variant="secondary" size="sm" icon="ArrowRight">
                  Talk to us about {item.title.toLowerCase()}
                </Button>
              </div>

              <div className="solutions-detailed__visual">
                <ProductPreview image={item.image} label={`nexora.ai/${item.id}`} alt={`${item.title} workflow preview`} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
