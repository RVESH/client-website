import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import ServiceCard from '../../components/ServiceCard/ServiceCard.jsx'
import Button from '../../components/Button/Button.jsx'
import { services } from '../../data/services.js'
import styles from './FeaturedServices.module.scss'

function FeaturedServices() {
  const featured = services.slice(0, 3)

  return (
    <section className="section">
      <div className="container">
        <div className={styles.headRow}>
          <SectionHeading
            eyebrow="What we do"
            title="Services built around how your space actually gets used"
            description="From regular upkeep to one-time resets, every visit follows the same detail-first standard."
          />
          <Button to="/services" variant="ghost" className={styles.viewAll}>
            View all services
          </Button>
        </div>

        <div className={styles.grid}>
          {featured.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices
