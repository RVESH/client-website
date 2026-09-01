import './TeamCard.scss'

export default function TeamCard({ person }) {
  return (
    <article className="teamCard">
      <div className="teamCard__frame">
        <img src={person.image.src} alt={person.image.alt} loading="lazy" />
      </div>
      <h3>{person.name}</h3>
      <p className="teamCard__role">{person.role}</p>
      <p className="teamCard__bio">{person.bio}</p>
    </article>
  )
}
