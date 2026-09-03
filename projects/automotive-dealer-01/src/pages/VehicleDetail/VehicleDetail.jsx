import { useParams, Link } from 'react-router-dom'
import Button from '../../components/Button'
import VehicleBadge from '../../components/VehicleBadge'
import VehicleCard from '../../components/VehicleCard'
import { getVehicleById, getRelatedVehicles } from '../../data/vehicles'
import { whatsappLink, telLink, mailLink } from '../../data/site'
import NotFound from '../NotFound'
import styles from './VehicleDetail.module.scss'

export default function VehicleDetail() {
  const { id } = useParams()
  const vehicle = getVehicleById(id)

  if (!vehicle) {
    return (
      <NotFound
        title="Vehicle not found"
        message="This vehicle may have been sold or is no longer listed."
        backTo="/vehicles"
        backLabel="Back to Vehicles"
      />
    )
  }

  const related = getRelatedVehicles(vehicle.id, vehicle.category)
  const enquiryMessage = `Hello, I'm interested in the ${vehicle.year} ${vehicle.brand} ${vehicle.model}.`

  return (
    <div className={styles.page}>
      <div className={styles.breadcrumbRow}>
        <div className="container">
          <Link to="/vehicles" className={styles.breadcrumb}>
            ← Back to Vehicles
          </Link>
        </div>
      </div>

      <div className={['container', styles.layout].join(' ')}>
        <div className={styles.imageCol}>
          <div className={styles.imageFrame}>
            <img src={vehicle.detail.src} alt={vehicle.detail.alt} loading="eager" />
          </div>
        </div>

        <div className={styles.infoCol}>
          <div className={styles.titleRow}>
            <div>
              <p className={styles.brand}>{vehicle.brand}</p>
              <h1 className={styles.model}>{vehicle.model}</h1>
            </div>
            <VehicleBadge status={vehicle.status} />
          </div>

          <p className={styles.summary}>{vehicle.summary}</p>

          <div className={styles.priceRow}>
            <span className={styles.price}>{vehicle.price}</span>
            <span className={styles.year}>{vehicle.year}</span>
          </div>

          <div className={styles.quickMeta}>
            <div>
              <span className={styles.quickLabel}>Mileage</span>
              <span className={styles.quickValue}>{vehicle.mileage}</span>
            </div>
            <div>
              <span className={styles.quickLabel}>Fuel</span>
              <span className={styles.quickValue}>{vehicle.fuel}</span>
            </div>
            <div>
              <span className={styles.quickLabel}>Transmission</span>
              <span className={styles.quickValue}>{vehicle.transmission}</span>
            </div>
            <div>
              <span className={styles.quickLabel}>Power</span>
              <span className={styles.quickValue}>{vehicle.power}</span>
            </div>
          </div>

          <div className={styles.actions}>
            <Button href={whatsappLink(enquiryMessage)} variant="accent">
              Enquire About This Vehicle
            </Button>
            <div className={styles.secondaryActions}>
              <Button href={telLink()} variant="ghost">
                Call
              </Button>
              <Button href={mailLink(`Enquiry: ${vehicle.brand} ${vehicle.model}`)} variant="ghost">
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={['container', styles.detailSection].join(' ')}>
        <div className={styles.descriptionCol}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.description}>{vehicle.description}</p>
        </div>

        <div className={styles.specsCol}>
          <h2 className={styles.sectionTitle}>Specification</h2>
          <dl className={styles.specGrid}>
            {vehicle.specs.map((spec) => (
              <div className={styles.specRow} key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {related.length > 0 && (
        <div className={['container', styles.relatedSection].join(' ')}>
          <h2 className={styles.sectionTitle}>You may also consider</h2>
          <div className={styles.relatedGrid}>
            {related.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
