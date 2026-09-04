import SectionHeading from '../../components/SectionHeading'
import ServiceCard from '../../components/ServiceCard'
import Button from '../../components/Button'
import { services } from '../../data/services'
import styles from './FeaturedServices.module.scss'

export default function FeaturedServices() {
  const featured = services.slice(0, 3)

  return (
    <section className={[styles.section, 'container'].join(' ')}>
      <div className={styles.headRow}>
        <SectionHeading
          eyebrow="What We Offer"
          title="Planning support at every level"
          description="From full creative direction to day-of execution, choose the level of support that fits how you want to plan."
        />
        <Button to="/services" variant="ghost" className={styles.viewAll}>
          View All Services
        </Button>
      </div>

      <div className={styles.grid}>
        {featured.map((service) => (
          <ServiceCard key={service.id} service={service} compact />
        ))}
      </div>
    </section>
  )
}
