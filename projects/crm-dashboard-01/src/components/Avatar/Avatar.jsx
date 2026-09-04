import { getInitials } from '../../utils/format'
import styles from './Avatar.module.css'

const FALLBACK_COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#3b82f6', '#8b5cf6']

function colorForName(name) {
  const code = name.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0)
  return FALLBACK_COLORS[code % FALLBACK_COLORS.length]
}

export default function Avatar({ name, color, size = 32 }) {
  const bg = color || colorForName(name || '?')
  return (
    <span
      className={styles.avatar}
      style={{ width: size, height: size, background: bg, fontSize: size * 0.38 }}
      title={name}
    >
      {getInitials(name || '?')}
    </span>
  )
}
