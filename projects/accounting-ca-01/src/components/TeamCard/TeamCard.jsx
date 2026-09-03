import "./TeamCard.scss";

export default function TeamCard({ member }) {
  return (
    <article className="team-card">
      <div className="team-card__photo">
        <img src={member.image.src} alt={member.image.alt} loading="lazy" />
      </div>
      <div className="team-card__body">
        <h3 className="team-card__name">{member.name}</h3>
        <p className="team-card__role">{member.role}</p>
        <dl className="team-card__meta">
          <div>
            <dt>Specialisation</dt>
            <dd>{member.specialisation}</dd>
          </div>
          <div>
            <dt>Experience</dt>
            <dd>{member.experience}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
