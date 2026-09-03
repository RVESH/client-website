import { team } from "../../data/team";
import TeamCard from "../../components/TeamCard/TeamCard.jsx";
import CTA from "../../sections/CTA/CTA.jsx";
import "./Team.scss";

export default function TeamPage() {
  return (
    <>
      <section className="section section--dark team-page-hero">
        <div className="container">
          <span className="eyebrow">Our advisors</span>
          <h1 className="team-page-hero__heading">Chartered accountants who stay with your file</h1>
          <p className="team-page-hero__desc">
            Eleven advisors, each responsible for their own roster of clients — no rotating case
            handlers, no re-explaining your business every renewal.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="team-page__grid">
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
