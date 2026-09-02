import Button from '../Button/Button.jsx'
import styles from './ServiceCard.module.scss'

function ServiceCard({ service, index }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageFrame}>
        <img
          src={service.image.src}
          alt={service.image.alt}
          loading="lazy"
          width="480"
          height="360"
        />
        <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
      </div>

      <div className={styles.body}>
        <h3>{service.title}</h3>
        <p className={styles.summary}>{service.summary}</p>

        <ul className={styles.points}>
          {service.points.slice(0, 3).map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className={styles.footer}>
          {service.coverage && (
            <span className={styles.coverage}>{service.coverage}</span>
          )}
          <Button to="/contact" variant="ghost" className={styles.cta}>
            Enquire
          </Button>
        </div>
      </div>
    </article>
  )
}

export default ServiceCard
