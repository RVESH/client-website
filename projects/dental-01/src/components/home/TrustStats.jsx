import Container from '../ui/Container.jsx'
import { stats } from '../../data/stats.js'
import styles from './TrustStats.module.css'

export default function TrustStats() {
  return (
    <section className={styles.band}>
      <Container>
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.item}>
              <p className={styles.value}>{stat.value}</p>
              <p className={styles.label}>{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
