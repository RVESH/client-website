import SectionHeading from '../../components/SectionHeading'
import Button from '../../components/Button'
import { images } from '../../data/images'
import { site } from '../../data/site'
import styles from './DealerIntro.module.scss'

export default function DealerIntro() {
  return (
    <section className={[styles.section, 'container'].join(' ')}>
      <div className={styles.imageCol}>
        <img src={images.dealer.src} alt={images.dealer.alt} loading="lazy" />
        <div className={styles.badge}>
          <span className={styles.badgeValue}>{site.yearsInBusiness}+</span>
          <span className={styles.badgeLabel}>Years in business</span>
        </div>
      </div>

      <div className={styles.textCol}>
        <SectionHeading
          eyebrow="The Dealership"
          title="A showroom built around trust, not turnover."
        />
        <p className={styles.paragraph}>
          Vantage Motor Co. was founded in {site.founded} on a simple premise:
          buying a vehicle should feel like a considered decision, not a
          transaction to survive. Every vehicle on our floor is sourced
          deliberately, inspected thoroughly, and priced transparently.
        </p>
        <p className={styles.paragraph}>
          We keep our inventory intentionally focused — fewer vehicles, each
          one verified, rather than a lot full of unknowns.
        </p>
        <Button to="/about" variant="ghost">
          More about us
        </Button>
      </div>
    </section>
  )
}
