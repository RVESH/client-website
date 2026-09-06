import Button from '../Button/Button.jsx'
import { contact, buildTelLink } from '../../data/site.js'
import './CTA.scss'

export default function CTA({
  eyebrow = 'Ready when you are',
  title = 'Book your visit at Meridian',
  desc = 'Tell us a little about what you need and we\'ll confirm a time that works for you.',
}) {
  return (
    <section className="section cta">
      <div className="container">
        <div className="cta__card">
          <div className="cta__content">
            <span className="section-head__eyebrow">{eyebrow}</span>
            <h2 className="cta__title">{title}</h2>
            <p className="cta__desc">{desc}</p>
            <div className="cta__actions">
              <Button to="/contact" variant="primary" size="lg" icon="ArrowRight">
                Reserve Now
              </Button>
              <Button href={buildTelLink()} variant="outline" size="lg" icon="Phone" iconPosition="left">
                {contact.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
