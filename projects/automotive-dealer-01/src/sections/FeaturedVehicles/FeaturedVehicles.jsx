import SectionHeading from '../../components/SectionHeading'
import VehicleCard from '../../components/VehicleCard'
import Button from '../../components/Button'
import { vehicles } from '../../data/vehicles'
import styles from './FeaturedVehicles.module.scss'

export default function FeaturedVehicles() {
  const featured = vehicles.slice(0, 3)

  return (
    <section className={[styles.section, 'container'].join(' ')}>
      <div className={styles.headRow}>
        <SectionHeading
          eyebrow="Current Inventory"
          title="Featured vehicles"
          description="A snapshot of what's on the floor right now. Every vehicle listed has cleared our 150-point inspection."
        />
        <Button to="/vehicles" variant="ghost" className={styles.viewAll}>
          View all vehicles
        </Button>
      </div>

      <div className={styles.grid}>
        {featured.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </section>
  )
}
