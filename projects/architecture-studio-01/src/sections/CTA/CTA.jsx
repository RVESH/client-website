import { site } from '../../data/site.js'
import Button from '../../components/Button/Button.jsx'
import './CTA.scss'

export default function CTA() {
  const phone = site.contact.phone
  const whatsapp = site.contact.whatsapp

  const phoneHref = phone
    ? `tel:${phone.replace(/[^\d+]/g, '')}`
    : null

  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp.replace(/[^\d]/g, '')}`
    : null

  return (
    <section className="section cta">
      <div className="container cta__inner">
        <p className="eyebrow">Start a project</p>

        <h2>Have a site, or just a sketch on a napkin?</h2>

        <p className="lede">
          We take on a small number of projects each year so every one
          gets proper attention. Tell us what you are working with and
          we will let you know honestly whether we are a fit.
        </p>

        <div className="cta__actions">
          <Button to="/contact">
            Start a conversation
          </Button>

          {whatsappHref && (
            <a
              className="cta__phone"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
            </a>
          )}

          {phoneHref && (
            <a
              className="cta__phone"
              href={phoneHref}
            >
              {phone}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}