import { useEffect } from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import LocationCard from '../../components/LocationCard/LocationCard.jsx'
import Button from '../../components/Button/Button.jsx'
import CTA from '../../sections/CTA/CTA.jsx'
import { locations } from '../../data/locations.js'
import { images } from '../../data/images.js'
import { site } from '../../data/site.js'
import styles from './Locations.module.css'

function Locations() {
  useEffect(() => {
    document.title = 'Locations | Auric Motors'
  }, [])

  return (
    <>
      <section className={styles.intro}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <span className="eyebrow">Where we operate</span>
            <h1 className={styles.title}>Pickup across seven major cities</h1>
            <p className={styles.lead}>
              Reserve in one city and return in another anywhere in our
              network at no extra charge. Don't see your city? Reach out —
              we're often able to arrange delivery nearby.
            </p>
          </div>
          <div className={styles.introImage}>
            <img
              src={images.locations01.src}
              alt={images.locations01.alt}
              width="600"
              height="420"
            />
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading title="Our locations" />
          <div className={styles.grid}>
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>

          <div className={styles.notListed}>
            <div>
              <h3>Don't see your city?</h3>
              <p>
                We occasionally arrange delivery just outside these
                locations. Send us a message and we'll let you know.
              </p>
            </div>
            <Button href={`mailto:${site.email}`} variant="accent">
              Ask by email
            </Button>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

export default Locations
