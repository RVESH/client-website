import { useEffect } from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import AreaCard from '../../components/AreaCard/AreaCard.jsx'
import Button from '../../components/Button/Button.jsx'
import CTA from '../../sections/CTA/CTA.jsx'
import { areas } from '../../data/areas.js'
import { images } from '../../data/images.js'
import { site } from '../../data/site.js'
import styles from './Areas.module.scss'

function Areas() {
  useEffect(() => {
    document.title = 'Service Areas | Brightside Home Care'
  }, [])

  return (
    <>
      <section className={styles.intro}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <span className="eyebrow">Where we work</span>
            <h1 className={styles.title}>Serving homes and offices across Marin County</h1>
            <p className={styles.lead}>
              Brightside covers {areas.length} communities from San Rafael to
              Tiburon. If your neighborhood isn't listed below, reach out
              anyway — we're often able to accommodate nearby addresses.
            </p>
          </div>
          <div className={styles.introImage}>
            <img
              src={images.area01.src}
              alt={images.area01.alt}
              width="600"
              height="420"
            />
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading title="Our service areas" />
          <div className={styles.grid}>
            {areas.map((area) => (
              <AreaCard key={area.id} area={area} />
            ))}
          </div>

          <div className={styles.notListed}>
            <div>
              <h3>Don't see your area?</h3>
              <p>
                We occasionally take on homes just outside these boundaries.
                Send us your address and we'll let you know right away.
              </p>
            </div>
            <Button href={site.whatsappLink} variant="accent">
              Ask on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

export default Areas
