import Icon from '../ui/Icon.jsx'
import styles from './TreatmentCard.module.css'

export default function TreatmentCard({ treatment }) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <span className={styles.icon}>
          <Icon name={treatment.icon} size={24} />
        </span>
        <span className={styles.duration}>{treatment.duration}</span>
      </div>
      <h3 className={styles.title}>{treatment.name}</h3>
      <p className={styles.description}>{treatment.description}</p>
      <ul className={styles.highlights}>
        {treatment.highlights.map((point) => (
          <li key={point} className={styles.highlightItem}>
            <Icon name="check" size={16} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
