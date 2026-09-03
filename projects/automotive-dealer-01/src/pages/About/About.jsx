import SectionHeading from '../../components/SectionHeading'
import CTA from '../../sections/CTA'
import { images } from '../../data/images'
import { team } from '../../data/team'
import { site } from '../../data/site'
import styles from './About.module.scss'

const PILLARS = [
  {
    title: 'Deliberate sourcing',
    body: 'We do not fill the lot to fill it. Every vehicle is selected because we would recommend it to a friend.',
  },
  {
    title: 'Documented inspection',
    body: 'Our 150-point inspection standard is applied consistently, with a written summary available on request.',
  },
  {
    title: 'Ownership beyond delivery',
    body: 'Our team remains a point of contact for maintenance questions and future trade-ins.',
  },
]

export default function About() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className="container">
          <SectionHeading
            eyebrow="About Vantage"
            title="Fifteen years of doing this the deliberate way"
            description={site.description}
            inverse
          />
        </div>
      </header>

      <section className={['container', styles.storySection].join(' ')}>
        <div className={styles.imageCol}>
          <img src={images.about.src} alt={images.about.alt} loading="lazy" />
        </div>
        <div className={styles.textCol}>
          <h2 className={styles.sectionTitle}>Our story</h2>
          <p className={styles.paragraph}>
            Vantage Motor Co. opened its doors in {site.founded} with a single
            showroom floor and a conviction that dealerships could operate
            with more transparency than the industry was known for. Fifteen
            years later, that conviction has not changed — only the scale of
            what we are able to source and inspect for our clients.
          </p>
          <p className={styles.paragraph}>
            We are not a marketplace and we are not a superstore. We are a
            small team that stands behind a small, carefully chosen
            inventory, and we would rather tell a buyer a vehicle is not
            right for them than make a sale that does not fit.
          </p>
        </div>
      </section>

      <section className={styles.pillarsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How we operate</h2>
          <div className={styles.pillarGrid}>
            {PILLARS.map((pillar) => (
              <div className={styles.pillarCard} key={pillar.title}>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarBody}>{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={['container', styles.teamSection].join(' ')}>
        <SectionHeading eyebrow="The Team" title="Who you'll actually talk to" />
        <div className={styles.teamGrid}>
          {team.map((member) => (
            <div className={styles.teamCard} key={member.id}>
              <div className={styles.teamPhoto}>
                <img src={member.photo.src} alt={member.photo.alt} loading="lazy" />
              </div>
              <h3 className={styles.teamName}>{member.name}</h3>
              <p className={styles.teamRole}>{member.role}</p>
              <p className={styles.teamBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={['container', styles.statsSection].join(' ')}>
        {site.stats.map((stat) => (
          <div className={styles.stat} key={stat.label}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </section>

      <CTA
        eyebrow="Visit Us"
        title="See the inventory in person."
        description="Our showroom floor is open six days a week — no appointment required to look around."
      />
    </div>
  )
}
