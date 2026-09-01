import "./Team.scss";
import team from "../data/team";
import TeamCard from "../components/TeamCard.jsx";
import CTA from "../sections/CTA.jsx";

function Team() {
  return (
    <>
      <section className="section page-banner">
        <div className="container">
          <span className="eyebrow">The people</span>
          <h1>Meet the team</h1>
          <p className="section-sub">
            Every artist at Maison Rosette trains for years before joining the floor, and keeps
            training long after.
          </p>
        </div>
      </section>

      <section className="section team-grid-section">
        <div className="container">
          <div className="team-grid-section__grid">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

export default Team;
