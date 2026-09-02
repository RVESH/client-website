import Button from '../../components/Button/Button.jsx'
import { site } from '../../data/site.js'
import styles from './CTA.module.scss'

function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.panel}>
          <svg
            className={styles.streak}
            viewBox="0 0 300 60"
            aria-hidden="true"
          >
            <path
              d="M2 40C50 10 84 10 122 30C168 54 206 54 298 16"
              stroke="#2F7A6B"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              opacity="0.4"
            />
          </svg>

          <div className={styles.content}>
            <h2>Ready for a space that feels genuinely cared for?</h2>
            <p>
              Tell us about your home or office and we'll put together a
              straightforward quote — no pressure, no long calls.
            </p>
          </div>

          <div className={styles.ctaRow}>
            <Button to="/contact" variant="accent">
              Get a free quote
            </Button>
            <Button href={`tel:${site.phone}`} variant="ghost">
              Call {site.phoneDisplay}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
