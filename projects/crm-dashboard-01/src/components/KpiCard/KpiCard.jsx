import Icon from '../Icon'
import { formatCurrency, formatNumber, formatPercent } from '../../utils/format'
import styles from './KpiCard.module.scss'

function formatValue(value, format) {
  if (format === 'currency') return formatCurrency(value, { compact: value >= 100000 })
  if (format === 'percent') return formatPercent(value)
  return formatNumber(value)
}

export default function KpiCard({ label, value, format, delta, trend }) {
  const isUp = trend === 'up'
  return (
    <div className={styles.card}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{formatValue(value, format)}</span>
      <span className={[styles.delta, isUp ? styles.up : styles.down].join(' ')}>
        <Icon name={isUp ? 'arrowUp' : 'arrowDown'} size={13} />
        {formatPercent(Math.abs(delta))}
        <span className={styles.deltaLabel}>vs last period</span>
      </span>
    </div>
  )
}
