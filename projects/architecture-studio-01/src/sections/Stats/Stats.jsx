import { site } from '../../data/site.js'
import './Stats.scss'

export default function Stats() {
  return (
    <section className="section section--dark stats">
      <div className="container stats__grid">
        <dl className="stats__numbers">
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>

        <figure className="stats__quote">
          <blockquote>
            &ldquo;{site.testimonial.quote}&rdquo;
          </blockquote>

          <figcaption>
            {site.testimonial.name}, {site.testimonial.role}
          </figcaption>
        </figure>
      </div>

      {site.clients?.length > 0 && (
        <div className="container stats__clients">
          <p className="eyebrow">Selected clients</p>

          <ul>
            {site.clients.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}