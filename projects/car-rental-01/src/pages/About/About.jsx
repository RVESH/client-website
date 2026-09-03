import { useEffect } from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import Trust from '../../sections/Trust/Trust.jsx'
import CTA from '../../sections/CTA/CTA.jsx'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard.jsx'
import { images } from '../../data/images.js'
import { testimonials } from '../../data/testimonials.js'
import styles from './About.module.css'

const standards = [
  {
    title: 'Inspected before every rental',
    description:
      'Each vehicle passes a multi-point inspection between reservations, covering tires, fluids, brakes, and cleanliness.',
  },
  {
    title: 'Retired well before its time',
    description:
      'Cars are rotated out of the fleet on a strict schedule, long before mileage or age start to show.',
  },
  {
    title: 'Straightforward pricing',
    description:
      'The day rate shown is what you pay. Insurance is included, not added as a surprise line item at the counter.',
  },
  {
    title: 'A team that answers',
    description:
      'Reservation and roadside support lines are staffed by people, not a phone tree, around the clock.',
  },
]

function About() {
  useEffect(() => {
    document.title = 'About | Auric Motors'
  }, [])

  const spotlight = testimonials[1]

  return (
    <>
      <section className={styles.intro}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <span className="eyebrow">Our story</span>
            <h1 className={styles.title}>
              Built by people who were tired of rental-counter surprises
            </h1>
            <p className={styles.lead}>
              Auric Motors started in Austin in 2014 with twelve cars and a
              simple idea: show the real price upfront, keep the fleet
              genuinely well maintained, and make the counter experience
              fast. Twelve years later, that's still the whole strategy —
              just across seven cities instead of one.
            </p>
          </div>
          <div className={styles.introImage}>
            <img src={images.about01.src} alt={images.about01.alt} width="600" height="450" />
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            eyebrow="Our standards"
            title="A rental experience built on fewer surprises"
            description="Anyone can list a fleet online. What actually matters is what happens between reservations — here's what we hold ourselves to."
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
