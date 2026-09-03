import { ArrowRight } from "lucide-react";
import { team } from "../../data/team";
import { site } from "../../data/site";
import TeamCard from "../../components/TeamCard/TeamCard.jsx";
import Button from "../../components/Button/Button.jsx";
import "./Team.scss";

export default function TeamPreview() {
  const preview = team.slice(0, 4);

  return (
    <section className="section team-preview">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">The people</span>
            <h2 className="section-head__title">{site.teamPreview.heading}</h2>
          </div>
          <Button to="/team" variant="ghost" icon={ArrowRight}>
            Meet the full team
          </Button>
        </div>

        <div className="team-preview__grid">
          {preview.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
