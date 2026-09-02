import { images } from '../../data/images.js'
import './Trust.scss'

const logos = [
  { key: 'trustLogo1', name: 'Northpeak' },
  { key: 'trustLogo2', name: 'Veraline' },
  { key: 'trustLogo3', name: 'Orbital' },
  { key: 'trustLogo4', name: 'Stratum' },
  { key: 'trustLogo5', name: 'Fieldset' },
  { key: 'trustLogo6', name: 'Cascade' },
]

export default function Trust() {
  return (
    <section className="section--tight trust">
      <div className="container">
        <p className="trust__label">Trusted by fast-moving teams at</p>
        <ul className="trust__logos">
          {logos.map((logo) => (
            <li key={logo.key}>
              <img src={images[logo.key]} alt={logo.name} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
