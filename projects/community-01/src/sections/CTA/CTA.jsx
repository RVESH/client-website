import Button from '../../components/Button/Button.jsx'
import './CTA.scss'

export default function CTA() {
  return (
    <section id="join" className="section cta">
      <div className="container">
        <div className="cta__card">
          <div className="cta__glow" aria-hidden="true" />

          <div className="cta__content">
            <span className="section-head__eyebrow cta__eyebrow">
              Ready when you are
            </span>

            <h2 className="cta__title">
              Your community is waiting
            </h2>

            <p className="cta__desc">
              Join for free, pick a few communities that match your
              interests, and start showing up. No credit card, no algorithm
              deciding what you see.
            </p>

            <div className="cta__actions">
              <Button
                href="#join"
                data-join-orbit
                variant="primary"
                size="lg"
                icon="ArrowRight"
              >
                Join Orbit — it&apos;s free
              </Button>

              <Button
                href="#discover"
                variant="ghost"
                size="lg"
              >
                Explore communities first
              </Button>
            </div>

            <p className="cta__note">
              Free forever for members · Upgrade only if you&apos;re building
              a community
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}