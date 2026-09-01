import { services } from '../../data/services.js'
import Button from '../../components/Button/Button.jsx'
import './StudioIntro.scss'

export default function StudioIntro() {
  return (
    <section className="section studioIntro">
      <div className="container studioIntro__grid">
        <div className="studioIntro__statement">
          <p className="eyebrow">Studio statement</p>

          <h2>
            We treat a building&apos;s structure and its finishes as
            one decision, not two.
          </h2>

          <p className="lede">
            Architecture and interior design stay under one roof, so
            the relationship between structure, materials and everyday
            life is considered from the beginning.
          </p>

          <Button to="/studio" variant="ghost">
            More on the studio
          </Button>
        </div>

        <div className="studioIntro__capabilities">
          <p className="eyebrow">Capabilities</p>

          <ul>
            {services.map((service) => (
              <li key={service.id}>
                <span>{service.title}</span>
                <p>{service.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}