import SectionHeading from '../../components/SectionHeading'
import { services } from '../../data/services'
import styles from './Services.module.scss'

export default function Services() {
  return (
    <section className={[styles.section, 'container'].join(' ')}>
      <SectionHeading
        eyebrow="Dealer Services"
        title="Support that goes beyond the sale"
        description="Practical, no-pressure services designed around how people actually buy and own vehicles."
      />

      <div className={styles.grid}>
        {services.map((service) => (
          <div className={styles.card} key={service.id}>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.summary}>{service.summary}</p>
            <p className={styles.detail}>{service.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
