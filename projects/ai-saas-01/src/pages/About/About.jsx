import { Target, Compass, Users2, ShieldCheck, Gauge, Handshake } from 'lucide-react'
import { images } from '../../data/images.js'
import Trust from '../../sections/Trust/Trust.jsx'
import CTA from '../../sections/CTA/CTA.jsx'
import './About.scss'

const principles = [
  {
    icon: Compass,
    title: 'Clarity over complexity',
    desc: 'Every feature earns its place by making a real workflow simpler, not by adding another setting.',
  },
  {
    icon: Gauge,
    title: 'Fast by default',
    desc: 'Decisions and automations should feel instant. Speed is a feature we protect at every layer.',
  },
  {
    icon: ShieldCheck,
    title: 'Trustworthy by design',
    desc: 'Every AI decision is explainable and reversible. Nothing acts on your data silently.',
  },
  {
    icon: Handshake,
    title: 'Built with our customers',
    desc: 'Our roadmap is shaped in the open, with the teams who rely on Nexora every day.',
  },
]

const team = [
  {
    name: 'Elena Marsh',
    role: 'Co-founder & CEO',
    image: 'teamFounder',
    bio: 'Previously led product at two enterprise data platforms before starting Nexora in 2020.',
  },
  {
    name: 'Rahul Nair',
    role: 'Co-founder & CTO',
    image: 'teamCofounder',
    bio: 'Spent a decade building distributed systems and ML infrastructure at scale.',
  },
  {
    name: 'Sofia Almeida',
    role: 'Head of Product',
    image: 'teamLead',
    bio: 'Focused on turning complex workflow problems into interfaces people actually enjoy using.',
  },
]

export default function About() {
  return (
    <div className="page about-page">
      <section className="section about-story">
        <div className="container about-story__inner">
          <div className="about-story__copy">
            <span className="section-head__eyebrow">Our story</span>
            <h1 className="about-story__title">Built by people tired of workflow busywork</h1>
            <p className="about-story__desc">
              Nexora started in 2020 after our founders spent years watching talented teams get buried in manual
              handoffs, spreadsheets and disconnected tools. We set out to build the operating layer we always
              wished existed — one place where AI, automation and analytics work together instead of living in
              separate tabs.
            </p>
            <p className="about-story__desc">
              Today, thousands of teams run their day-to-day operations on Nexora, from first customer contact to
              final approval.
            </p>
          </div>
          <div className="about-story__visual">
            <img src={images.aboutStoryVisual} alt="Illustration of Nexora's growth from 2020 to today" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section--tight about-mission">
        <div className="container">
          <div className="about-mission__card">
            <Target size={22} strokeWidth={1.75} className="about-mission__icon" />
            <p className="about-mission__text">
              Our mission is to give every team an intelligent layer that removes repetitive work, so people can
              spend their time on judgment, creativity and relationships — the things AI can't replace.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-principles">
        <div className="container">
          <div className="section-head">
            <span className="section-head__eyebrow">Principles</span>
            <h2 className="section-head__title">What guides how we build</h2>
          </div>
          <div className="about-principles__grid">
            {principles.map((item) => {
              const IconEl = item.icon
              return (
                <div key={item.title} className="about-principles__item">
                  <div className="about-principles__icon">
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

      <Trust />

      <section className="section about-team">
        <div className="container">
          <div className="section-head">
            <span className="section-head__eyebrow">
              <Users2 size={13} strokeWidth={2} /> Team
            </span>
            <h2 className="section-head__title">The people building Nexora</h2>
          </div>
          <div className="about-team__grid">
            {team.map((person) => (
              <div key={person.name} className="about-team__card">
                <img src={images[person.image]} alt={`${person.name}, ${person.role}`} loading="lazy" />
                <h3>{person.name}</h3>
                <p className="about-team__role">{person.role}</p>
                <p className="about-team__bio">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Join the mission"
        title="We're always looking for people who care about this problem"
        desc="Reach out even if you don't see an open role listed — we'd still love to hear from you."
      />
    </div>
  )
}
