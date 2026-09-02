import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { site } from '../../data/site.js'
import styles from './WhyChooseUs.module.scss'

function WhyChooseUs() {
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading
          eyebrow="Why choose Brightside"
          title="The details that make a recurring clean actually worth keeping"
          description="Reliability is the whole product. Here's what we hold ourselves to on every visit."
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
