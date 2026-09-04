import Button from '../Button/Button.jsx'
import './CTA.scss'

export default function CTA({
  kicker = "Ready when you are",
  title = 'Start browsing the full catalogue',
  desc = 'Hundreds of makers, thousands of objects — filtered however you want to look.',
  primaryLabel = 'Browse Marketplace',
  primaryTo = '/marketplace',
  secondaryLabel = 'Talk to us',
  secondaryTo = '/contact',
}) {
  return (
    <section className="section cta">
      <div className="container">
        <div className="cta__panel">
          <span className="section-head__kicker">{kicker}</span>
          <h2 className="cta__title">{title}</h2>
          <p className="cta__desc">{desc}</p>
          <div className="cta__actions">
            <Button to={primaryTo} variant="inverse" size="lg" icon="ArrowRight">
              {primaryLabel}
            </Button>
            <Button to={secondaryTo} variant="ghost" size="lg">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
