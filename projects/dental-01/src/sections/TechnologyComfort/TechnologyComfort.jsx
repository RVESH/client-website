import { CheckCircle2 } from 'lucide-react'
import { images } from '../../data/images.js'
import './TechnologyComfort.scss'

const points = [
  'Digital 3D imaging for precise, low-radiation diagnostics',
  'Guided planning software for implants and orthodontics',
  'Noise-dampened rooms and optional headphones during treatment',
  'Sedation options available for anxious or complex cases',
]

export default function TechnologyComfort() {
  return (
    <section className="section technology-comfort">
      <div className="container technology-comfort__inner">
        <div className="technology-comfort__visual">
          <img
            src={images.technologyVisual}
            alt="Illustration of digital diagnostic technology used at Meridian Dental Studio"
            loading="lazy"
          />
        </div>

        <div className="technology-comfort__copy">
          <span className="section-head__eyebrow">Technology & comfort</span>
          <h2 className="section-head__title">Modern tools, used to make things gentler</h2>
          <p className="section-head__desc">
            We invest in technology for one reason: it lets us diagnose earlier, plan more precisely and treat
            with less discomfort — not to make the studio feel clinical.
          </p>

          <ul className="technology-comfort__points">
            {points.map((point) => (
              <li key={point}>
                <CheckCircle2 size={18} strokeWidth={2} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
