import styles from './LocationCard.module.css'

function LocationCard({ location }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div>
          <h3>{location.city}</h3>
          <span className={styles.state}>{location.state}</span>
        </div>
        <span className={styles.code}>{location.code}</span>
      </div>

      <p className={styles.description}>{location.description}</p>

      <div className={styles.details}>
        <span>{location.address}</span>
        <span>{location.hours}</span>
        <a href={`tel:${location.phone}`}>{location.phone}</a>
      </div>
    </div>
  )
}

export default LocationCard
