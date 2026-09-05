import styles from './SectionHeading.module.scss'

function SectionHeading({ eyebrow, title, description, align = 'left', as: Tag = 'h2' }) {
  return (
    <div className={`${styles.heading} ${align === 'center' ? styles.center : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className={styles.title}>{title}</Tag>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}

export default SectionHeading
