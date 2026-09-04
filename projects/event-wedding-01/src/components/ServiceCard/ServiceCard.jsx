import Button from '../Button'
import styles from './ServiceCard.module.scss'

export default function ServiceCard({ service, compact = false }) {
  return (
    <article className={[styles.card, compact ? styles.compact : ''].join(' ')}>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.summary}>{service.summary}</p>

      {!compact && (
        <>
          <p className={styles.description}>{service.description}</p>

          <ul className={styles.deliverables}>
            {service.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {service.idealFor && (
            <p className={styles.idealFor}>
              <span>Ideal for:</span> {service.idealFor}
            </p>
          )}
        </>
      )}

      <Button to="/contact" variant="ghost" className={styles.cta}>
        Enquire About This Service
      </Button>
    </article>
  )
}
