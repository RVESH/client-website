import Icon from '../../components/Icon/Icon.jsx'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import './Benefits.scss'

const benefits = [
  {
    icon: 'BadgeCheck',
    title: 'Verified makers only',
    desc: 'Every seller is reviewed before their first listing goes live — no drop-shippers, no resellers.',
  },
  {
    icon: 'Truck',
    title: 'Shipped direct from the studio',
    desc: 'No central warehouse. Your order ships from the maker\'s own workshop, tracked end to end.',
  },
  {
    icon: 'Undo2',
    title: 'Clear return windows',
    desc: 'Every listing states its return policy plainly — no fine print, no surprises at checkout.',
  },
  {
    icon: 'MessagesSquare',
    title: 'Talk to the maker',
    desc: 'Questions about a piece go straight to the person who made it, not a support queue.',
  },
]

export default function Benefits() {
  return (
    <section className="section benefits">
      <div className="container">
        <SectionHeading kicker="Why INDEX" title="Buying direct, done properly" align="center" />

        <div className="benefits__grid">
          {benefits.map((item, i) => (
            <div key={item.title} className="benefits__item">
              <span className="benefits__index">{String(i + 1).padStart(2, '0')}</span>
              <div className="benefits__icon">
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
