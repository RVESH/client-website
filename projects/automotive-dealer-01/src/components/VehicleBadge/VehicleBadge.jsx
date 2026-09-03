import styles from './VehicleBadge.module.scss'

const STATUS_MAP = {
  Available: styles.available,
  Reserved: styles.reserved,
  Sold: styles.sold,
}

export default function VehicleBadge({ status }) {
  const statusClass = STATUS_MAP[status] || styles.available
  return (
    <span className={[styles.badge, statusClass].join(' ')}>
      <span className={styles.dot} aria-hidden="true" />
      {status}
    </span>
  )
}
