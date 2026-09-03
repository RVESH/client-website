import Button from '../Button/Button.jsx'
import { site } from '../../data/site.js'
import styles from './VehicleCard.module.css'

const categoryLabel = (value) =>
  site.vehicleCategories.find((c) => c.value === value)?.label || value

function SeatsIcon() {
  return (
    <svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true">
      <circle cx="10" cy="6" r="3.2" fill="currentColor" />
      <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function TransmissionIcon() {
  return (
    <svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true">
      <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M10 6.5 V10 L12.4 12.4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FuelIcon() {
  return (
    <svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true">
      <rect x="4" y="4" width="8" height="13" rx="1.3" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M12 8.5 H14 a1.5 1.5 0 0 1 1.5 1.5 v4 a1 1 0 0 0 2 0 V8 l-2 -2" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="6" y1="7.5" x2="10" y2="7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function VehicleCard({ vehicle }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageFrame}>
        <img
          src={vehicle.image.src}
          alt={vehicle.image.alt}
          loading="lazy"
          width="480"
          height="300"
        />
        <span className={styles.categoryBadge}>{categoryLabel(vehicle.category)}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3>{vehicle.name}</h3>
          <div className={styles.price}>
            <span className={styles.priceValue}>${vehicle.pricePerDay}</span>
            <span className={styles.priceUnit}>/day</span>
          </div>
        </div>

        <p className={styles.summary}>{vehicle.summary}</p>

        <div className={styles.metaRow}>
          <span className={styles.metaItem}>
            <SeatsIcon />
            {vehicle.seats} seats
          </span>
          <span className={styles.metaItem}>
            <TransmissionIcon />
            {vehicle.transmission}
          </span>
          <span className={styles.metaItem}>
            <FuelIcon />
            {vehicle.fuelType}
          </span>
        </div>

        <ul className={styles.tags}>
          {vehicle.features.slice(0, 3).map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <Button to="/contact" variant="ghost" className={styles.cta}>
          Check availability
        </Button>
      </div>
    </article>
  )
}

export default VehicleCard
