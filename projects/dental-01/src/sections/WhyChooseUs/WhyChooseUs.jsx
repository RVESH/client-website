import Icon from '../../components/Icon/Icon.jsx'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import './WhyChooseUs.scss'

const reasons = [
  {
    icon: 'Clock',
    title: 'Unhurried appointments',
    desc: 'We schedule generous time per visit, so your dentist never has to rush an explanation or a procedure.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Rigorous hygiene standards',
    desc: 'Hospital-grade sterilisation and single-use materials wherever possible, on every single visit.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Honest treatment plans',
    desc: 'We explain the full range of options — including doing nothing — before recommending a path forward.',
  },
  {
    icon: 'Sparkles',
    title: 'Modern, gentle technique',
    desc: 'Digital imaging and guided planning mean fewer surprises and less discomfort during treatment.',
  },
  {
    icon: 'Users',
    title: 'The same team, every time',
    desc: 'You\'ll see a consistent, familiar face at each visit rather than whoever happens to be free.',
  },
  {
    icon: 'MapPin',
    title: 'A calm, considered space',
    desc: 'Natural light, quiet rooms and thoughtful details designed to lower your heart rate, not raise it.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section section--alt why-choose">
      <div className="container">
        <SectionHeading
          eyebrow="Why Meridian"
          title="Considered care, not conveyor-belt dentistry"
          desc="Every detail of the studio — from scheduling to materials — is built around a single question: what would make this easier for the patient?"
          align="center"
        />

        <div className="why-choose__grid">
          {reasons.map((item) => (
            <div key={item.title} className="why-choose__item">
              <div className="why-choose__icon">
                <Icon name={item.icon} size={20} strokeWidth={1.75} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
