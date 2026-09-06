import { Phone } from 'lucide-react'
import Button from '../../components/Button/Button.jsx'
import { images } from '../../data/images.js'
import { contact, buildTelLink } from '../../data/site.js'
import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">A private dental studio, since 2011</span>
          <h1 className="hero__title">
            Dental care that feels <span className="hero__title-accent">unhurried</span>
          </h1>
          <p className="hero__desc">
            Meridian Dental Studio pairs skilled specialists with calm, considered rooms — so every visit feels
            more like a pause in your day than something to dread.
          </p>
          <div className="hero__actions">
            <Button to="/contact" variant="primary" size="lg" icon="ArrowRight">
              Reserve Now
            </Button>
            <Button href={buildTelLink()} variant="secondary" size="lg">
              <Phone size={16} className="hero__phone-icon" /> {contact.phoneDisplay}
            </Button>
          </div>
        </div>

        <div className="hero__visual">
          <img
            src={images.heroVisual}
            alt="Illustration of a calm, sunlit treatment room at Meridian Dental Studio"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
