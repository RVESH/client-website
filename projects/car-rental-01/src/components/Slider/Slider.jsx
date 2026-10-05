import { useEffect } from 'react'
import { vehicles } from '../../data/vehicles.js'
import VehicleCard from '../VehicleCard/VehicleCard.jsx'
import RouteLink from '../RouteLink/RouteLink.jsx'
import styles from './Slider.module.css'

function Slider() {
  useEffect(() => {
    document.title = 'Auric Motors | Premium Car Rental'
  }, [])


  
  
  // Get vehicles for the slider (all vehicles, or we could filter to featured)
  const sliderVehicles = vehicles

  return (
    <section className={styles.slider} aria-label="Vehicle slider">
      <div className={styles.sliderContainer}>
        {sliderVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className={styles.slide}
            role="button"
            tabIndex={0}
            onClick={() => window.location.href = '/fleet'}
            aria-label={`View ${vehicle.name} details`}
          >
            <RouteLink to="/fleet" className={styles.slideLink}>
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            </RouteLink>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Slider