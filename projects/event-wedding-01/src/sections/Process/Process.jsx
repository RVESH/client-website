import SectionHeading from '../../components/SectionHeading'
import { processSteps } from '../../data/process'
import styles from './Process.module.scss'

export default function Process() {
  return (
    <section className={[styles.section, 'container'].join(' ')}>
      <SectionHeading
        eyebrow="How We Work"
        title="A considered planning process"
        description="No generic packages — just a clear, collaborative path from first conversation to the celebration itself."
        align="center"
      />

      <ol className={styles.list}>
        {processSteps.map((step) => (
          <li className={styles.step} key={step.n}>
            <span className={styles.number}>{step.n}</span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
