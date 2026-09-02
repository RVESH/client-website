import { useEffect } from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import ServiceCard from '../../components/ServiceCard/ServiceCard.jsx'
import CTA from '../../sections/CTA/CTA.jsx'
import { services } from '../../data/services.js'
import styles from './Services.module.scss'

function Services() {
  useEffect(() => {
    document.title = 'Services | Brightside Home Care'
  }, [])

  return (
    <>
      <section className={styles.intro}>
        <div className="container">
          <SectionHeading
            eyebrow="Our services"
            title="A service for every kind of clean, handled the same careful way"
            description="Whether it's a weekly upkeep visit or a full reset before moving day, every service follows a clear checklist and the same trained standard."
          />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className={styles.grid}>
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

export default Services
