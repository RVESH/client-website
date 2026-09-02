import { stats } from '../../data/features.js'
import './Stats.scss'

export default function Stats() {
  return (
    <section className="section--tight stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((item) => (
            <div key={item.label} className="stats__item">
              <div className="stats__value">{item.value}</div>
              <div className="stats__label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
