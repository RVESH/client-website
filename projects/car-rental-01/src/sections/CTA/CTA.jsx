import Button from '../../components/Button/Button.jsx'
import { site } from '../../data/site.js'
import styles from './CTA.module.css'

function CTA() {
  const fleetRoute =
    site.nav.find(
      (item) =>
        item.label.toLowerCase() === 'fleet',
    )?.to || '/fleet'

  return (
    <section className="section">
      <div className="container">
        <div className={styles.panel}>
          <svg
            className={styles.corner}
            viewBox="0 0 140 140"
            aria-hidden="true"
          >
            <path
              d="M0 140 L140 0 L140 45 L45 140 Z"
              fill="#14161B"
              opacity="0.06"
            />
          </svg>

          <div className={styles.content}>
            <h2>Ready to hit the road?</h2>

            <p>
              Browse the fleet, pick your dates, and send a
              reservation enquiry — our team confirms
              availability within one business day.
            </p>
          </div>

          <div className={styles.ctaRow}>
            <Button
              to={fleetRoute}
              variant="accent"
            >
              Browse the fleet
            </Button>

            <Button
              href={`tel:${site.phone}`}
              variant="ghost"
            >
              Call {site.phoneDisplay}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA