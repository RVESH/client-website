import DoctorCard from '../../components/DoctorCard/DoctorCard.jsx'
import CTA from '../../components/CTA/CTA.jsx'
import { doctors } from '../../data/doctors.js'
import './Doctors.scss'

export default function Doctors() {
  return (
    <div className="page doctors-page">
      <section className="section doctors-hero">
        <div className="container doctors-hero__inner">
          <span className="section-head__eyebrow">Our team</span>
          <h1 className="doctors-hero__title">Five specialists, one shared standard of care</h1>
          <p className="doctors-hero__desc">
            Every dentist at Meridian trained at accredited institutions and continues clinical education every
            year — but what patients notice most is how much time they take to listen.
          </p>
        </div>
      </section>

      <section className="section--tight doctors-grid-section">
        <div className="container">
          <div className="doctors-grid">
            {doctors.map((doc) => (
              <DoctorCard key={doc.id} {...doc} variant="full" />
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Ready to meet the team?"
        title="Book a consultation with the right specialist"
        desc="Let us know what you need and we'll match you with the dentist best suited to your case."
      />
    </div>
  )
}
