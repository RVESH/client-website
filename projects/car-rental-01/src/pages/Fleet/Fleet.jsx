import { useEffect, useState } from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import VehicleCard from '../../components/VehicleCard/VehicleCard.jsx'
import CTA from '../../sections/CTA/CTA.jsx'
import { vehicles } from '../../data/vehicles.js'
import { site } from '../../data/site.js'
import styles from './Fleet.module.css'

function Fleet() {
  useEffect(() => {
    document.title = 'Fleet | Auric Motors'
  }, [])

  const [activeCategory, setActiveCategory] = useState('all')

  const filtered =
    activeCategory === 'all'
      ? vehicles
      : vehicles.filter((v) => v.category === activeCategory)

  return (
    <>
      <section className={styles.intro}>
        <div className="container">
          <SectionHeading
            eyebrow="Our fleet"
            title="Ten vehicles, one transparent day rate"
            description="Filter by category to find the right fit, from efficient economy cars to executive sedans and open-top roadsters."
          />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className={styles.tabs} role="tablist" aria-label="Filter vehicles by category">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              className={activeCategory === 'all' ? styles.tabActive : styles.tab}
              onClick={() => setActiveCategory('all')}
            >
              All vehicles
            </button>
            {site.vehicleCategories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.value}
                className={activeCategory === cat.value ? styles.tabActive : styles.tab}
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className={styles.grid}>
              {filtered.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <p className={styles.empty}>No vehicles in this category right now.</p>
          )}
        </div>
      </section>

      <CTA />
    </>
  )
}

export default Fleet
