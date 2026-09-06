import Container from './Container.jsx'
import styles from './PageHero.module.css'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.inner}>
          {eyebrow && <span className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</span>}
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </Container>
    </section>
  )
}
