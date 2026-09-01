import "./TeamCard.scss";

function TeamCard({ member }) {
  const { name, role, bio, image } = member;

  return (
    <article className="team-card">
      <div className="team-card__image">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <h3 className="team-card__name">{name}</h3>
      <p className="team-card__role">{role}</p>
      {bio && <p className="team-card__bio">{bio}</p>}
    </article>
  );
}

export default TeamCard;
