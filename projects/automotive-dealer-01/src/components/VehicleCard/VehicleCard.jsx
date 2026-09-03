import { Link } from 'react-router-dom'
import VehicleBadge from '../VehicleBadge'
import styles from './VehicleCard.module.scss'

export default function VehicleCard({ vehicle }) {
  const {
    id,
    brand,
    model,
    year,
    bodyType,
    category,
    fuel,
    transmission,
    mileage,
    price,
    status,
    cover,
  } = vehicle

  return (
    <article className={styles.card}>
      <Link to={`/vehicles/${id}`} className={styles.imageLink} tabIndex={-1} aria-hidden="true">
        <div className={styles.imageWrap}>
          <img src={cover.src} alt={cover.alt} loading="lazy" />
          <span className={styles.category}>{category || bodyType}</span>
        </div>
      </Link>

      <div className={styles.body}>
        <div className={styles.headRow}>
          <div>
            <p className={styles.brand}>{brand}</p>
            <h3 className={styles.model}>{model}</h3>
          </div>
          <VehicleBadge status={status} />
        </div>

        <ul className={styles.specs}>
          <li>{year}</li>
          <li>{fuel}</li>
          <li>{transmission}</li>
          <li>{mileage}</li>
        </ul>

        <div className={styles.footRow}>
          <span className={styles.price}>{price}</span>
          <Link to={`/vehicles/${id}`} className={styles.cta}>
            View details
            <span className={styles.arrow} aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
