import PageHero from '../components/ui/PageHero.jsx'
import Container from '../components/ui/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Icon from '../components/ui/Icon.jsx'
import CTABand from '../components/home/CTABand.jsx'
import { clinicInfo } from '../data/clinicInfo.js'
import styles from './About.module.scss'

const STORY_IMAGE =
  'https://images.unsplash.com/photo-1704455306251-b4634215d98f?auto=format&fit=crop&w=1200&q=80'

const values = [
  {
    icon: 'droplet',
    title: 'Comfort first',
    text: 'Sedation options, quiet suites, and unhurried scheduling are built into how we plan every appointment, not offered as an upsell.',
  },
  {
    icon: 'scan',
    title: 'Evidence over habit',
    text: 'Treatment recommendations follow current clinical research, reviewed and updated as the evidence changes.',
  },
  {
    icon: 'shield',
    title: 'Transparent pricing',
    text: 'You receive a written estimate before treatment begins, with alternatives discussed when cost is a factor.',
  },
  {
    icon: 'team',
    title: 'Continuity of care',
    text: 'The clinician who starts your treatment plan is the one who sees it through, barring an emergency.',
  },
]

const timeline = [
  {
    year: '2006',
    title: 'Aurelia opens its doors',
    text: 'Dr. Evelyn Cross founds the practice with a single treatment room and a focus on cosmetic dentistry.',
  },
  {
    year: '2013',
    title: 'Digital planning adopted clinic-wide',
    text: '3D imaging and digital smile design replace traditional impressions and guesswork across every discipline.',
  },
  {
    year: '2018',
    title: 'Specialist team assembled',
    text: 'Aurelia expands from general dentistry to a five-specialist model covering implants, ortho, endo, and periodontics.',
  },
  {
    year: '2024',
    title: 'Riverside District studio opens',
    text: 'The current location opens with six treatment suites and a dedicated pediatric room.',
  },
]

const credibility = [
  { icon: 'shield', text: 'Accredited by the State Dental Board' },
  { icon: 'star', text: 'AACD Fellowship-trained lead dentist' },
  { icon: 'team', text: 'Member, American Dental Association' },
  { icon: 'scan', text: 'Sterilization audited quarterly' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Aurelia"
        title="Built around one idea: dental care shouldn't be something you dread"
        description="Since 2006, we've focused on making advanced dentistry feel calm and comprehensible — not just clinically sound."
      />

      <section className="section">
        <Container>
          <div className={styles.story}>
            <div className={styles.storyImage}>
              <img src={STORY_IMAGE} alt="Treatment room at Aurelia Dental Studio" loading="lazy" />
            </div>
            <div className={styles.storyText}>
              <span className="eyebrow">Our story</span>
              <h2 style={{ fontSize: '1.9rem', margin: '14px 0 20px' }}>
                A practice built by someone who didn't like going to the dentist either
              </h2>
              <p>
                Dr. Evelyn Cross started Aurelia after years of watching patients delay care out
                of anxiety, not access. Her early cases focused on smile design and cosmetic
                work, but the underlying goal was always the same — make the experience itself
                less stressful, so people stop putting it off.
              </p>
              <p>
                That founding idea shaped everything that followed: the move to digital scanning
                instead of impression trays, the decision to specialize rather than generalize,
                and the emphasis on explaining a plan before ever picking up an instrument.
              </p>
              <p>
                Today Aurelia is a five-specialist practice in {clinicInfo.address.city.split(',')[0]},
                still built around that same premise.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className={`section ${styles.valuesSection}`}>
        <Container>
          <SectionHeading
            eyebrow="Philosophy"
            title="What guides how we practice"
            description="These aren't values on a wall — they shape scheduling, pricing, and how cases get handed between specialists."
          />
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>
                  <Icon name={value.icon} size={20} />
                </span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueText}>{value.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading eyebrow="Milestones" title="How we got here" center />
          <div className={styles.timeline}>
            {timeline.map((item) => (
              <div key={item.year} className={styles.timelineItem}>
                <span className={styles.timelineYear}>{item.year}</span>
                <div>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={`section section--tight ${styles.credSection}`}>
        <Container>
          <div className={styles.credGrid}>
            {credibility.map((item) => (
              <div key={item.text} className={styles.credItem}>
                <span className={styles.credIcon}>
                  <Icon name={item.icon} size={20} />
                </span>
                <span className={styles.credText}>{item.text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  )
}
