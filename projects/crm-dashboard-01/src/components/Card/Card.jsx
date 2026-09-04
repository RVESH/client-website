import styles from './Card.module.css'

export default function Card({ children, className = '', padding = true, as: Tag = 'div', ...rest }) {
  return (
    <Tag className={[styles.card, padding ? styles.padded : '', className].join(' ')} {...rest}>
      {children}
    </Tag>
  )
}

export function CardHeader({ title, subtitle, action }) {
  return (
    <div className={styles.header}>
      <div>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  )
}
