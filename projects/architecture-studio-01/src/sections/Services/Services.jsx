import { services } from '../../data/services.js'
import ServiceCard from '../../components/ServiceCard/ServiceCard.jsx'
import './Services.scss'

export default function ServicesSection() {
  return (
    <section className="section servicesSection">
      <div className="container">
        <p className="eyebrow">What we do</p>

        <h2>
          Architecture and interiors, developed together.
        </h2>

        <div className="servicesSection__list">
          {services.map((service, index) => (
            <ServiceCard
              service={service}
              index={index}
              key={service.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}