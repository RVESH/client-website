import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import TreatmentCard from '../../components/TreatmentCard/TreatmentCard.jsx'
import Button from '../../components/Button/Button.jsx'
import { getFeaturedTreatments } from '../../data/treatments.js'
import './FeaturedTreatments.scss'

export default function FeaturedTreatments() {
  const featured = getFeaturedTreatments()

  return (
    <section className="section featured-treatments">
      <div className="container">
        <SectionHeading
          eyebrow="Treatments"
          title="Care built around your goals"
          desc="From routine cleanings to full smile design, every treatment starts with an honest conversation about what you actually need."
          between
        >
          <Button to="/treatments" variant="outline" size="md" icon="ArrowRight" className="featured-treatments__cta">
            View all treatments
          </Button>
        </SectionHeading>

        <div className="featured-treatments__grid">
          {featured.map((item) => (
            <TreatmentCard key={item.id} {...item} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  )
}
