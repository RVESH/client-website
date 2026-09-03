import { site } from '../../data/site'
import styles from './Stats.module.scss'

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={['container', styles.grid].join(' ')}>
        {site.stats.map((stat) => (
          <div className={styles.stat} key={stat.label}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
