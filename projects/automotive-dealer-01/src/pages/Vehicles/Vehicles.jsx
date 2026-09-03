import { useMemo, useState } from 'react'
import SectionHeading from '../../components/SectionHeading'
import VehicleCard from '../../components/VehicleCard'
import { vehicles, categories } from '../../data/vehicles'
import styles from './Vehicles.module.scss'

export default function Vehicles() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    if (active === 'All') return vehicles
    return vehicles.filter((v) => v.category === active)
  }, [active])

  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <div className="container">
          <SectionHeading
            eyebrow="Inventory"
            title="Available vehicles"
            description="Browse our current showroom floor. Filter by category or view every vehicle we have on hand."
          />
        </div>
      </header>

      <div className="container">
        <div className={styles.filterBar} role="group" aria-label="Filter vehicles by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={[styles.filterBtn, active === cat ? styles.filterActive : ''].join(' ')}
              aria-pressed={active === cat}
            >
              {cat}
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
          <div className={styles.empty}>
            <p>No vehicles currently match this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
