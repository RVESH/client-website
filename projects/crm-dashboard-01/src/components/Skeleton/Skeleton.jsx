import styles from './Skeleton.module.css'

export function SkeletonBlock({ width = '100%', height = 16, radius, className = '' }) {
  return (
    <span
      className={[styles.block, className].join(' ')}
      style={{ width, height, borderRadius: radius }}
    />
  )
}

export function SkeletonKpiCard() {
  return (
    <div className={styles.kpiCard}>
      <SkeletonBlock width="60%" height={12} />
      <SkeletonBlock width="45%" height={26} />
      <SkeletonBlock width="35%" height={12} />
    </div>
  )
}

export function SkeletonTableRow({ columns = 5 }) {
  return (
    <div className={styles.tableRow}>
      {Array.from({ length: columns }).map((_, i) => (
        <SkeletonBlock key={i} height={14} width={i === 0 ? '70%' : '55%'} />
      ))}
    </div>
  )
}

export function SkeletonCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <SkeletonBlock width={40} height={40} radius="50%" />
        <div className={styles.cardHeadText}>
          <SkeletonBlock width="70%" height={14} />
          <SkeletonBlock width="50%" height={12} />
        </div>
      </div>
      <SkeletonBlock width="100%" height={12} />
      <SkeletonBlock width="80%" height={12} />
    </div>
  )
}
