import Button from '../Button/Button.jsx'
import { site } from '../../data/site.js'
import styles from './CTA.module.scss'

/**
 * Reusable final call-to-action panel. Defaults suit the generic
 * "book a call" case; pass title/description to customize per page.
 */
function CTA({
  title = 'Ready to learn with a real mentor?',
  description = 'Book a free call and we\u2019ll help you find the right course or program for where you are now.',
  primaryLabel = 'Book a Free Call',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryHref,
}) {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.panel}>
          <svg className={styles.underline} viewBox="0 0 240 40" aria-hidden="true">
            <path
              d="M6 30 Q 60 8 120 22 T 234 14"
              stroke="#E8A33D"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
          </svg>

          <div className={styles.content}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <div className={styles.ctaRow}>
            <Button to={primaryTo} variant="accent">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref || `tel:${site.phone}`} variant="ghost">
              {secondaryLabel || `Call ${site.phoneDisplay}`}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
