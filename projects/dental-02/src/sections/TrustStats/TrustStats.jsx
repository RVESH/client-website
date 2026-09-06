import { trustStats } from '../../data/site.js'
import './TrustStats.scss'

export default function TrustStats() {
  return (
    <section className="section--tight trust-stats">
      <div className="container">
        <div className="trust-stats__grid">
          {trustStats.map((stat) => (
            <div key={stat.label} className="trust-stats__item">
              <div className="trust-stats__value">{stat.value}</div>
              <div className="trust-stats__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
