import styles from './StatBlock.module.scss'

export default function StatBlock({ value, label, inverse = false }) {
  return (
    <div className={[styles.stat, inverse ? styles.inverse : ''].join(' ')}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}
