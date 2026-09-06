import TreatmentCard from '../../components/TreatmentCard/TreatmentCard.jsx'
import CTA from '../../components/CTA/CTA.jsx'
import { treatments } from '../../data/treatments.js'
import './Treatments.scss'

export default function Treatments() {
  return (
    <div className="page treatments-page">
      <section className="section treatments-hero">
        <div className="container treatments-hero__inner">
          <span className="section-head__eyebrow">Treatments</span>
          <h1 className="treatments-hero__title">Every treatment, explained plainly</h1>
          <p className="treatments-hero__desc">
            From routine care to full smile reconstruction, each treatment below includes what it involves and
            what to expect — so you can walk in already informed.
          </p>
        </div>
      </section>

      <section className="section--tight treatments-grid-section">
        <div className="container">
          <div className="treatments-grid">
            {treatments.map((item) => (
              <TreatmentCard key={item.id} {...item} variant="full" />
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Not sure where to start?"
        title="Book a consultation and we'll map out a plan"
        desc="Tell us what's on your mind and we'll recommend the right treatment path — no pressure, no obligation."
      />
    </div>
  )
}
