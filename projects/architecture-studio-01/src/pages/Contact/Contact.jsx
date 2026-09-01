import { site } from '../../data/site.js'
import { images } from '../../data/images.js'
import './Contact.scss'

export default function Contact() {
  const { contact } = site

  const whatsappHref = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/[^\d]/g, '')}`
    : '#'

  return (
    <section className="section contactDetails">
      <div className="container contactDetails__grid">

        <div className="contactDetails__info">
          <div className="contactDetails__block">
            <p className="eyebrow">Studio</p>

            <address>
              {contact.address.line1}
              <br />
              {contact.address.line2}
              <br />
              {contact.address.country}
            </address>
          </div>

          <div className="contactDetails__block">
            <p className="eyebrow">Get in touch</p>

            <a
              href={`mailto:${contact.email}`}
              className="contactDetails__link"
            >
              {contact.email}
            </a>

            {contact.phone && (
              <a
                href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                className="contactDetails__link"
              >
                {contact.phone}
              </a>
            )}
          </div>

          <div className="contactDetails__block">
            <p className="eyebrow">Opening hours</p>

            <dl className="contactDetails__hours">
              {contact.hours?.map((h) => (
                <div key={h.days}>
                  <dt>{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          {contact.whatsapp && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="contactDetails__cta"
            >
              <span>Send an enquiry</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>

        <div className="contactDetails__image">
          <img
            src={images.contact.src}
            alt={images.contact.alt}
            loading="lazy"
          />
        </div>

      </div>
    </section>
  )
}