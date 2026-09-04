import StatBlock from '../../components/StatBlock'
import { site } from '../../data/site'
import styles from './TrustStats.module.scss'

export default function TrustStats() {
  return (
    <section className={styles.section}>
      <div className={['container', styles.grid].join(' ')}>
        {site.stats.map((stat) => (
          <StatBlock key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  )
}
