import './ServiceCard.scss'

export default function ServiceCard({ service, index }) {
  return (
    <article className="serviceCard">
      <div className="serviceCard__frame">
        <img src={service.image.src} alt={service.image.alt} loading="lazy" />
      </div>
      <div className="serviceCard__body">
        <span className="serviceCard__index">{String(index + 1).padStart(2, '0')}</span>
        <h3>{service.title}</h3>
        <p className="lede">{service.summary}</p>
        <ul className="serviceCard__points">
          {service.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
