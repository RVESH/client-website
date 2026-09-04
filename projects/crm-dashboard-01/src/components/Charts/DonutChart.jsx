import { useState } from 'react'
import styles from './Charts.module.scss'

/**
 * Donut chart rendered as stacked SVG stroke-dasharray arcs.
 * data: [{ label, value, color }]
 */
export default function DonutChart({ data, size = 160, thickness = 22 }) {
  const [hovered, setHovered] = useState(null)
  const total = data.reduce((sum, d) => sum + d.value, 0)
  const radius = (size - thickness) / 2
  const circumference = 2 * Math.PI * radius
  const center = size / 2

  let cumulative = 0

  return (
    <div className={styles.donutWrap}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--color-gray-100)"
          strokeWidth={thickness}
        />
        {data.map((d, i) => {
          const fraction = d.value / total
          const dash = fraction * circumference
          const offset = -cumulative * circumference
          cumulative += fraction
          const isHovered = hovered === i
          return (
            <circle
              key={d.label}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={d.color}
              strokeWidth={isHovered ? thickness + 4 : thickness}
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={offset}
              strokeLinecap="butt"
              transform={`rotate(-90 ${center} ${center})`}
              className={styles.donutSegment}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            />
          )
        })}
        <text
          x={center}
          y={center - 4}
          textAnchor="middle"
          className={styles.donutCenterValue}
        >
          {hovered !== null ? data[hovered].value : total}
        </text>
        <text x={center} y={center + 14} textAnchor="middle" className={styles.donutCenterLabel}>
          {hovered !== null ? data[hovered].label : 'Total Leads'}
        </text>
      </svg>

      <ul className={styles.legend}>
        {data.map((d, i) => (
          <li
            key={d.label}
            className={[styles.legendItem, hovered === i ? styles.legendItemActive : ''].join(' ')}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className={styles.legendDot} style={{ background: d.color }} />
            <span className={styles.legendLabel}>{d.label}</span>
            <span className={styles.legendValue}>{d.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
