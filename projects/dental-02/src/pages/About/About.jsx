import { HeartHandshake, ShieldCheck, Sparkles, Users2 } from 'lucide-react'
import { images } from '../../data/images.js'
import CTA from '../../components/CTA/CTA.jsx'
import './About.scss'

const pillars = [
  {
    icon: HeartHandshake,
    title: 'Patient-first care',
    desc: 'We recommend what a patient actually needs, not what fills a schedule. If waiting is the right call, we say so.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygiene & safety',
    desc: 'Hospital-grade sterilisation protocols, single-use materials wherever possible, and instrument tracking on every tray.',
  },
  {
    icon: Sparkles,
    title: 'Clinical technology',
    desc: 'Digital imaging and guided planning reduce guesswork, which means fewer visits and gentler treatment.',
  },
  {
    icon: Users2,
    title: 'Team culture',
    desc: 'A small, tenured team who know each other\'s cases — so care stays consistent even between appointments.',
  },
]

export default function About() {
  return (
    <div className="page about-page">
      <section className="section about-story">
        <div className="container about-story__inner">
          <div className="about-story__copy">
            <span className="section-head__eyebrow">Our story</span>
            <h1 className="about-story__title">Built around one idea: slow down the visit</h1>
            <p className="about-story__desc">
              Meridian opened in 2011 after our founder, Dr. Elena Marsh, spent years watching good dentistry get
              undermined by rushed appointments and unclear explanations. She set out to build a studio where the
              pace of care matched the seriousness of the work — longer appointments, smaller patient rosters and
              rooms designed to feel calm rather than clinical.
            </p>
            <p className="about-story__desc">
              Thirteen years later, that same philosophy still shapes every decision here, from how we schedule
              the day to which materials we choose.
            </p>
          </div>
          <div className="about-story__visual">
            <img
              src={images.aboutStoryVisual}
              alt="Illustration marking Meridian Dental Studio's history since 2011"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section--tight about-philosophy">
        <div className="container">
          <div className="about-philosophy__card">
            <p className="about-philosophy__text">
              "We never want a patient to leave uncertain about why we recommended something. If we can't explain
              it in a sentence a non-dentist understands, we haven't done our job yet."
            </p>
            <span className="about-philosophy__attribution">— Dr. Elena Marsh, Founder & Lead Dentist</span>
          </div>
        </div>
      </section>

      <section className="section about-pillars">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="section-head__eyebrow">How we practice</span>
            <h2 className="section-head__title">The standards behind every appointment</h2>
          </div>

          <div className="about-pillars__grid">
            {pillars.map((item) => {
              const IconEl = item.icon
              return (
                <div key={item.title} className="about-pillars__item">
                  <div className="about-pillars__icon">
                    <IconEl size={20} strokeWidth={1.75} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section--tight about-standards section--alt">
        <div className="container about-standards__inner">
          <div>
            <span className="section-head__eyebrow">Clinical standards</span>
            <h2 className="section-head__title">What "premium" means to us clinically</h2>
            <p className="section-head__desc">
              Premium isn't a waiting-room amenity — it's the standard of care behind the door.
            </p>
          </div>
          <ul className="about-standards__list">
            <li>Every treatment plan reviewed by a second clinician before major procedures</li>
            <li>Sterilisation logs and instrument tracking maintained for full transparency</li>
            <li>Continuing education required annually for every dentist on staff</li>
            <li>Digital records with redundant backups — never paper charts alone</li>
            <li>A dedicated infection-control lead overseeing studio-wide protocol</li>
          </ul>
        </div>
      </section>

      <CTA
        eyebrow="Come see it for yourself"
        title="New patients are always welcome at Meridian"
        desc="Book a first visit and experience the difference an unhurried appointment makes."
      />
    </div>
  )
}
