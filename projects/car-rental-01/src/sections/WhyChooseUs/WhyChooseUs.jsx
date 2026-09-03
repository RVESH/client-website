import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { site } from '../../data/site.js'
import styles from './WhyChooseUs.module.css'

function WhyChooseUs() {
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading
          eyebrow="Why Auric"
          title="Everything included, nothing hidden"
          description="Renting a car should be simple. Here's what's built into every reservation, regardless of which vehicle you choose."
        />

        <div className={styles.grid}>
          {site.benefits.map((benefit) => (
            <div key={benefit.title} className={styles.item}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
