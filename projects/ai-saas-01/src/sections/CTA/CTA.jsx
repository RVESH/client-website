import Button from '../../components/Button/Button.jsx'
import { ctaLinks } from '../../data/site.js'
import './CTA.scss'

export default function CTA({
  eyebrow = 'Get started',
  title = 'Ready to put your workflows on autopilot?',
  desc = 'Start free, invite your team and connect your first workflow in under ten minutes.',
}) {
  return (
    <section className="section cta">
      <div className="container">
        <div className="cta__card">
          <div className="cta__glow" aria-hidden="true" />
          <div className="cta__content">
            <span className="cta__eyebrow">{eyebrow}</span>
            <h2 className="cta__title">{title}</h2>
            <p className="cta__desc">{desc}</p>
            <div className="cta__actions">
              <Button to={ctaLinks.primary.path} variant="primary" size="lg" icon="ArrowRight">
                {ctaLinks.primary.label}
              </Button>
              <Button to={ctaLinks.secondary.path} variant="ghost" size="lg">
                {ctaLinks.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
