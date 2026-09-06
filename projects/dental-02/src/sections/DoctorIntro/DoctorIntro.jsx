import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import DoctorCard from '../../components/DoctorCard/DoctorCard.jsx'
import Button from '../../components/Button/Button.jsx'
import { doctors } from '../../data/doctors.js'
import './DoctorIntro.scss'

export default function DoctorIntro() {
  const featured = doctors.slice(0, 3)

  return (
    <section className="section doctor-intro">
      <div className="container">
        <SectionHeading
          eyebrow="Meet the team"
          title="Specialists who take the time to explain"
          desc="Five dentists, one shared philosophy: patients deserve to understand every recommendation before they agree to it."
          between
        >
          <Button to="/doctors" variant="outline" size="md" icon="ArrowRight" className="doctor-intro__cta">
            Meet the full team
          </Button>
        </SectionHeading>

        <div className="doctor-intro__grid">
          {featured.map((doc) => (
            <DoctorCard key={doc.id} {...doc} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  )
}
