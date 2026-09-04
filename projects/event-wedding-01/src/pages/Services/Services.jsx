import SectionHeading from '../../components/SectionHeading'
import ServiceCard from '../../components/ServiceCard'
import CTA from '../../components/CTA'
import { services } from '../../data/services'
import styles from './Services.module.scss'

export default function Services() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Planning support at every level"
            description="Every engagement is scoped around how much you want to hand off — from a single day of coordination to full creative direction from the very first conversation."
            inverse
          />
        </div>
      </header>

      <section className={['container', styles.grid].join(' ')}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>

      <CTA
        eyebrow="Not Sure Where to Start?"
        title="Tell us what you have in mind."
        description="Every couple's needs are different — share a few details and we will recommend the right level of support."
      />
    </div>
  )
}
