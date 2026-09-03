import { useState } from 'react'
import { useRouter } from '../../app/router.jsx'
import { locations } from '../../data/locations.js'
import { site } from '../../data/site.js'
import styles from './BookingWidget.module.css'

const todayISO = () => new Date().toISOString().slice(0, 10)

function BookingWidget({ variant = 'light' }) {
  const { navigate } = useRouter()

  const [pickupLocation, setPickupLocation] = useState(locations[0].id)
  const [sameDropoff, setSameDropoff] = useState(true)
  const [dropoffLocation, setDropoffLocation] = useState(locations[0].id)
  const [pickupDate, setPickupDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // UI-only: there is no live availability backend. A real reservation
    // request happens on the Contact page. This just takes the visitor
    // to browse the fleet, which is the honest next step here.
    navigate('/fleet')
  }

  return (
    <form
      className={`${styles.widget} ${variant === 'dark' ? styles.dark : ''}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="pickupLocation">Pickup location</label>
          <select
            id="pickupLocation"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          >
            {locations.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.city}, {loc.state}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <div className={styles.labelRow}>
            <label htmlFor="dropoffLocation">Drop-off location</label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={sameDropoff}
                onChange={(e) => setSameDropoff(e.target.checked)}
              />
              Same as pickup
            </label>
          </div>
          <select
            id="dropoffLocation"
            value={sameDropoff ? pickupLocation : dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
            disabled={sameDropoff}
          >
            {locations.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.city}, {loc.state}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="pickupDate">Pickup date</label>
          <input
            id="pickupDate"
            type="date"
            required
            min={todayISO()}
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="returnDate">Return date</label>
          <input
            id="returnDate"
            type="date"
            required
            min={pickupDate || todayISO()}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="vehicleType">Vehicle type</label>
          <select
            id="vehicleType"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="">Any type</option>
            {site.vehicleCategories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className={styles.submit}>
        Search availability
      </button>
    </form>
  )
}

export default BookingWidget
