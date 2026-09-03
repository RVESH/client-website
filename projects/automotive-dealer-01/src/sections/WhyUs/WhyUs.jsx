import SectionHeading from '../../components/SectionHeading'
import styles from './WhyUs.module.scss'

const REASONS = [
  {
    n: '01',
    title: 'Every vehicle inspected',
    body: 'A documented 150-point inspection before anything reaches the floor.',
  },
  {
    n: '02',
    title: 'Transparent pricing',
    body: 'No hidden fees, no last-minute add-ons. The price listed is the price discussed.',
  },
  {
    n: '03',
    title: 'Direct communication',
    body: 'Speak with the same sales contact from first enquiry through delivery.',
  },
  {
    n: '04',
    title: 'Curated, not crowded',
    body: 'A focused inventory of vehicles we would put our own name behind.',
  },
]

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Why Vantage"
          title="What makes our floor different"
          inverse
        />

        <div className={styles.grid}>
          {REASONS.map((reason) => (
            <div className={styles.card} key={reason.n}>
              <span className={styles.number}>{reason.n}</span>
              <h3 className={styles.title}>{reason.title}</h3>
              <p className={styles.body}>{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
