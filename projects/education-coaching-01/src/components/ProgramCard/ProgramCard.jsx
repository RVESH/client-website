import Button from '../Button/Button.jsx'
import styles from './ProgramCard.module.scss'

function ProgramCard({ program }) {
  const contactUrl = `/contact?interest=${encodeURIComponent(program.title)}`

  return (
    <article className={styles.card}>
      <div className={styles.imageFrame}>
        <img
          src={program.image.src}
          alt={program.image.alt}
          loading="lazy"
          width="560"
          height="360"
        />
      </div>

      <div className={styles.body}>
        <div className={styles.metaRow}>
          <span className={styles.format}>{program.format}</span>
          <span className={styles.duration}>{program.duration}</span>
        </div>

        <h3>{program.title}</h3>
        <p className={styles.tagline}>{program.tagline}</p>
        <p className={styles.description}>{program.description}</p>

        <ul className={styles.benefits}>
          {program.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>

        <Button
          to={contactUrl}
          variant="accent"
          className={styles.cta}
        >
          Enquire about this program
        </Button>
      </div>
    </article>
  )
}

export default ProgramCard