import "./TeamPreview.scss";
import team from "../data/team";
import TeamCard from "../components/TeamCard.jsx";
import Button from "../components/Button.jsx";

function TeamPreview() {
  const featured = team.filter((m) => m.featured).slice(0, 3);

  return (
    <section className="section team-preview">
      <div className="container">
        <div className="section-head team-preview__head">
          <div>
            <span className="eyebrow">Meet the studio</span>
            <h2>Artists behind the work</h2>
          </div>
          <Button to="/team" variant="secondary" size="sm">
            Meet the full team
          </Button>
        </div>

        <div className="team-preview__grid">
          {featured.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamPreview;
