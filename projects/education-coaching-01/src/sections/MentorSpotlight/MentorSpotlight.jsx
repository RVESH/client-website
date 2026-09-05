import Button from '../../components/Button/Button.jsx'
import { team } from '../../data/team.js'
import styles from './MentorSpotlight.module.scss'

function MentorSpotlight() {
  const founder = team.find((m) => m.id === 'elena-marsh') || team[0]

  return (
    <section className="section section--tint">
      <div className={`container ${styles.layout}`}>
        <div className={styles.imageFrame}>
          <img src={founder.image.src} alt={founder.image.alt} loading="lazy" width="480" height="560" />
        </div>

        <div className={styles.copy}>
          <span className="eyebrow">Meet your mentor</span>
          <h2>{founder.name}</h2>
          <span className={styles.role}>{founder.role}</span>
          <p className={styles.bio}>{founder.bio}</p>
          <p className={styles.credentials}>{founder.credentials}</p>
          <Button to="/about" variant="ghost">
            Meet the full team
          </Button>
        </div>
      </div>
    </section>
  )
}

export default MentorSpotlight
