import { useState } from 'react'
import { formatCurrency } from '../../utils/format'
import styles from './Charts.module.scss'

/**
 * Simple responsive bar chart rendered as SVG.
 * data: [{ label, value }]
 */
export default function BarChart({ data, height = 220 }) {
  const [hovered, setHovered] = useState(null)
  const max = Math.max(...data.map((d) => d.value)) * 1.15
  const barWidth = 100 / data.length

  return (
    <div className={styles.chartWrap}>
<svg
  viewBox={`0 0 100 ${height}`}
  preserveAspectRatio="none"
  className={styles.svg}
  style={{ height: `${height}px` }}
>
          {[0.25, 0.5, 0.75, 1].map((f) => (
          <line
            key={f}
            x1="0"
            x2="100"
            y1={height - height * f}
            y2={height - height * f}
            className={styles.gridLine}
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {data.map((d, i) => {
          const barHeight = (d.value / max) * (height - 24)
          const x = i * barWidth + barWidth * 0.22
          const w = barWidth * 0.56
          const isHovered = hovered === i
          return (
            <g key={d.label}>
              <rect
                x={x}
                y={height - barHeight - 20}
                width={w}
                height={barHeight}
                rx="2"
                className={isHovered ? styles.barHover : styles.bar}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              />
            </g>
          )
        })}
      </svg>

      <div className={styles.xLabels}>
        {data.map((d, i) => (
          <span
            key={d.label}
            className={[styles.xLabel, hovered === i ? styles.xLabelActive : ''].join(' ')}
          >
            {d.label}
          </span>
        ))}
      </div>

      {hovered !== null && (
        <div
          className={styles.tooltip}
          style={{ left: `${hovered * barWidth + barWidth / 2}%` }}
        >
          <span className={styles.tooltipLabel}>{data[hovered].label}</span>
          <span className={styles.tooltipValue}>{formatCurrency(data[hovered].value)}</span>
        </div>
      )}
    </div>
  )
}
