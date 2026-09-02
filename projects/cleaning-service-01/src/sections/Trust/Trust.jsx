import { site } from '../../data/site.js'
import styles from './Trust.module.scss'

function Trust() {
  return (
    <section className="section section--dark">
      <div className="container">
        <div className={styles.grid}>
          {site.stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trust
