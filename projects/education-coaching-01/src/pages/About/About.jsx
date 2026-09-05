import { useEffect } from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import MentorCard from '../../components/MentorCard/MentorCard.jsx'
import TeachingApproach from '../../sections/TeachingApproach/TeachingApproach.jsx'
import Outcomes from '../../sections/Outcomes/Outcomes.jsx'
import Trust from '../../sections/Trust/Trust.jsx'
import CTA from '../../components/CTA/CTA.jsx'
import { images } from '../../data/images.js'
import { team } from '../../data/team.js'
import styles from './About.module.scss'

const philosophy = [
  {
    title: 'Learner-first, always',
    description:
      'Curriculum bends to fit the learner, not the other way around. If a lesson isn\u2019t landing, we change the lesson.',
  },
  {
    title: 'Feedback over content volume',
    description:
      'A short course with real feedback beats a long course with none. We\u2019d rather you finish and remember it.',
  },
  {
    title: 'Mentors who\u2019ve done the work',
    description:
      'Every mentor has held the role they now teach toward — not just studied it academically.',
  },
];

function About() {
  useEffect(() => {
    document.title = 'About | Keystone Learning'
  }, [])

  return (
    <>
      <section className={styles.intro}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <span className="eyebrow">Our story</span>
            <h1 className={styles.title}>
              Built by mentors who wanted mentorship, not just content
            </h1>
            <p className={styles.lead}>
              Keystone started in 2016 when our founder, Elena, kept noticing
              the same pattern: talented people stalling out in self-paced
              courses, not because the material was too hard, but because no
              one was checking in. Keystone exists to fix that — structured
              curriculum, paired with a real mentor who actually knows your
              name and your goals.
            </p>
          </div>
          <div className={styles.introImage}>
            <img src={images.about01.src} alt={images.about01.alt} width="600" height="450" />
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            eyebrow="Our philosophy"
            title="A mission built around one belief"
            description="People learn faster and stick with it longer when someone experienced is paying attention to their progress. Everything else follows from that."
          />

          <div className={styles.philosophyGrid}>
            {philosophy.map((item) => (
              <div key={item.title} className={styles.philosophyItem}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeachingApproach />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our mentors"
            title="Learn from people who've actually done the job"
            description="Every mentor at Keystone has held the role they now coach toward, not just studied it from the outside."
          />

          <div className={styles.mentorGrid}>
            {team.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
      </section>

      <Outcomes />
      <Trust />

      <CTA
        title="Want to talk to a mentor before deciding?"
        description="A free call is the easiest way to see if Keystone is the right fit for where you are right now."
      />
    </>
  )
}

export default About
