import { useEffect } from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import Trust from '../../sections/Trust/Trust.jsx'
import CTA from '../../sections/CTA/CTA.jsx'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard.jsx'
import { images } from '../../data/images.js'
import { testimonials } from '../../data/testimonials.js'
import styles from './About.module.scss'

const standards = [
  {
    title: 'Trained on a shared standard',
    description:
      'Every cleaner completes a paid training period and is evaluated against the same room-by-room checklist before working solo.',
  },
  {
    title: 'Background-checked, every time',
    description:
      'Anyone entering your home has cleared a background check. There are no exceptions and no subcontracted crews.',
  },
  {
    title: 'Consistent teams',
    description:
      'We assign the same cleaner or team to your recurring visits whenever possible, so they get to know your space.',
  },
  {
    title: 'Accountable if something is missed',
    description:
      "If a visit doesn't meet our standard, tell us within 24 hours and we'll return to make it right at no charge.",
  },
]

function About() {
  useEffect(() => {
    document.title = 'About | Brightside Home Care'
  }, [])

  const spotlight = testimonials[2]

  return (
    <>
      <section className={styles.intro}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <span className="eyebrow">Our story</span>
            <h1 className={styles.title}>
              Started by two people tired of unreliable cleaning crews
            </h1>
            <p className={styles.lead}>
              Brightside began in 2017 when our founders, both juggling young
              families, couldn't find a cleaning service that showed up on
              time and did the same thorough job twice in a row. So they
              built one — starting with a handful of homes in San Rafael and
              growing through word of mouth ever since.
            </p>
          </div>
          <div className={styles.introImage}>
            <img
              src={images.about01.src}
              alt={images.about01.alt}
              width="600"
              height="450"
            />
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            eyebrow="How we work"
            title="A cleaning philosophy built on consistency, not luck"
            description="Anyone can have a good day. What clients actually pay for is the same good outcome, visit after visit — which only comes from real standards behind the scenes."
          />

          <div className={styles.standardsGrid}>
            {standards.map((item) => (
              <div key={item.title} className={styles.standard}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.teamGrid}`}>
          <div className={styles.teamImage}>
            <img
              src={images.team01.src}
              alt={images.team01.alt}
              loading="lazy"
              width="600"
              height="480"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our team"
              title="Local, trained, and treated like the professionals they are"
              description="We hire people who take pride in careful work, pay above the local average for cleaning roles, and invest in ongoing training. Lower turnover means more familiar faces at your door."
            />
          </div>
        </div>
      </section>

      <Trust />

      <section className="section">
        <div className={`container ${styles.spotlightWrap}`}>
          <TestimonialCard testimonial={spotlight} />
        </div>
      </section>

      <CTA />
    </>
  )
}

export default About
