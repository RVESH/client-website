import styles from './VehicleMeta.module.scss'

/**
 * Compact metadata row for a vehicle: year, fuel, transmission, mileage, etc.
 * items: [{ label, value }]
 */
export default function VehicleMeta({ items, dense = false }) {
  return (
    <ul className={[styles.meta, dense ? styles.dense : ''].filter(Boolean).join(' ')}>
      {items.map((item, i) => (
        <li key={i} className={styles.item}>
          {item.label && <span className={styles.label}>{item.label}</span>}
          <span className={styles.value}>{item.value}</span>
        </li>
      ))}
    </ul>
  )
}
