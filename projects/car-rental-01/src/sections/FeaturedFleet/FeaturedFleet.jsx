import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import VehicleCard from '../../components/VehicleCard/VehicleCard.jsx'
import Button from '../../components/Button/Button.jsx'
import { vehicles } from '../../data/vehicles.js'
import styles from './FeaturedFleet.module.css'

function FeaturedFleet() {
  const featured = [
    vehicles.find((v) => v.id === 'halcyon-sedan'),
    vehicles.find((v) => v.id === 'terrain-suv'),
    vehicles.find((v) => v.id === 'regent-executive'),
  ].filter(Boolean)

  return (
    <section className="section">
      <div className="container">
        <div className={styles.headRow}>
          <SectionHeading
            eyebrow="Featured fleet"
            title="A vehicle for every kind of trip"
            description="From efficient commuters to executive sedans, every car is inspected and detailed before it reaches you."
          />
          <Button to="/fleet" variant="ghost" className={styles.viewAll}>
            View full fleet
          </Button>
        </div>

        <div className={styles.grid}>
          {featured.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedFleet
