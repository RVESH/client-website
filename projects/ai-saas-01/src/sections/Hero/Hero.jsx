import Button from '../../components/Button/Button.jsx'
import ProductPreview from '../../components/ProductPreview/ProductPreview.jsx'
import { ctaLinks } from '../../data/site.js'
import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Now with adaptive workflow intelligence
          </span>
          <h1 className="hero__title">
            The operating layer for <span className="hero__title-accent">AI-powered teams</span>
          </h1>
          <p className="hero__desc">
            Nexora unifies your workflows, data and decisions into a single intelligent layer — so your team
            automates the busywork and focuses on the work that actually moves the business.
          </p>
          <div className="hero__actions">
            <Button to={ctaLinks.primary.path} variant="primary" size="lg" icon="ArrowRight">
              {ctaLinks.primary.label}
            </Button>
            <Button to="/features" variant="secondary" size="lg" icon="PlayCircle" iconPosition="left">
              See how it works
            </Button>
          </div>
          <div className="hero__meta">
            <span>No credit card required</span>
            <span className="hero__meta-sep">·</span>
            <span>Setup in under 10 minutes</span>
          </div>
        </div>

        <div className="hero__visual">
          <ProductPreview image="heroProductUI" label="nexora.ai/dashboard" alt="Nexora AI dashboard preview showing workflow analytics" />
        </div>
      </div>
    </section>
  )
}
