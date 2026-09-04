import "./SectionHeading.scss";

export default function SectionHeading({ eyebrow, title, desc, action, align = "split" }) {
  return (
    <div className={`section-head section-head--${align}`}>
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="section-head__title">{title}</h2>
      </div>
      {desc && <p className="section-head__desc">{desc}</p>}
      {action}
    </div>
  );
}
