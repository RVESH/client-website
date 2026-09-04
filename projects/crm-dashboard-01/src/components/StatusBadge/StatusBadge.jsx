import styles from './StatusBadge.module.scss'

// Maps known status strings to a semantic tone. Anything unrecognized
// falls back to "neutral" so new statuses never render unstyled.
const TONE_MAP = {
  New: 'info',
  Contacted: 'violet',
  Qualified: 'success',
  Unqualified: 'neutral',
  Converted: 'success',
  Available: 'success',
  Reserved: 'warning',
  Sold: 'danger',
  Open: 'info',
  Won: 'success',
  Lost: 'danger',
}

export default function StatusBadge({ label, tone }) {
  const resolvedTone = tone || TONE_MAP[label] || 'neutral'
  return <span className={[styles.badge, styles[resolvedTone]].join(' ')}>{label}</span>
}
