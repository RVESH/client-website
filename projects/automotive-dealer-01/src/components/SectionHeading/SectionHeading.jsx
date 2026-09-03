import styles from './SectionHeading.module.scss'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  inverse = false,
}) {
  return (
    <div
      className={[
        styles.heading,
        align === 'center' ? styles.center : '',
        inverse ? styles.inverse : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow && <span className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}
