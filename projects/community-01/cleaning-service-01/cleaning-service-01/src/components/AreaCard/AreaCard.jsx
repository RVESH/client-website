import styles from './AreaCard.module.scss'

function AreaCard({ area }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <h3>{area.name}</h3>
        <span className={styles.coverage}>{area.coverage}</span>
      </div>
      <p>{area.description}</p>
    </div>
  )
}

export default AreaCard
