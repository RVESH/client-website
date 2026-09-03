import styles from './SectionHeading.module.css'

function SectionHeading({ eyebrow, title, description, align = 'left', as: Tag = 'h2' }) {
  const classes = [styles.heading, align === 'center' ? styles.center : ''].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className={styles.title}>{title}</Tag>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}

export default SectionHeading
