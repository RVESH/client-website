import ServicesSection from '../../sections/Services/Services.jsx'
import CTA from '../../sections/CTA/CTA.jsx'
import './Services.scss'

export default function Services() {
  return (
    <>
      <section className="section section--tight servicesIntro">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Four ways we get involved, usually in this order.</h1>
          <p className="lede">
            Some clients need all four, from a first feasibility sketch
            through to snagging. Others just need one stage done well.
            Either way, the same two principals stay on the project.
          </p>
        </div>
      </section>

      <ServicesSection />
      <CTA />
    </>
  )
}
