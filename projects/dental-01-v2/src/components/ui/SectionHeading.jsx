import styles from './SectionHeading.module.scss'

export default function SectionHeading({ eyebrow, title, description, center = false, className = '' }) {
  return (
    <div className={[styles.wrap, center ? styles.center : '', className].filter(Boolean).join(' ')}>
      {eyebrow && <span className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}
