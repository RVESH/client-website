import Button from '../../components/Button'
import { whatsappLink, telLink } from '../../data/site'
import styles from './CTA.module.scss'

export default function CTA({
  eyebrow = 'Ready When You Are',
  title = 'Come see the floor for yourself.',
  description = 'Stop by during showroom hours or reach out directly — no appointment required to browse.',
}) {
  return (
    <section className={styles.section}>
      <div className={['container', styles.inner].join(' ')}>
        <div className={styles.text}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.actions}>
          <Button
            href={whatsappLink('Hello, I would like to enquire about a vehicle.')}
            variant="accent"
          >
            Send an Enquiry
          </Button>
          <Button href={telLink()} variant="dark">
            Call the Showroom
          </Button>
        </div>
      </div>
    </section>
  )
}
