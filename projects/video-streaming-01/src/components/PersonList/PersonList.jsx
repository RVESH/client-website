import "./PersonList.scss";

export default function PersonList({ label, people }) {
  if (!people || people.length === 0) return null;
  return (
    <div className="person-list">
      <span className="person-list__label">{label}</span>
      <p className="person-list__names">{people.join(", ")}</p>
    </div>
  );
}
