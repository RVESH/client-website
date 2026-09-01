import './SectionHeading.scss';

/**
 * Standard section heading block: optional index label, headline,
 * optional supporting copy. `index` is only shown when the section is
 * genuinely part of a numbered sequence (see frontend-design guidance).
 */
export default function SectionHeading({ index, kicker, title, lead, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {(index || kicker) && (
        <p className="index-label">
          {index && <span>{index}</span>}
          {index && kicker && <span aria-hidden="true">/</span>}
          {kicker && <span>{kicker}</span>}
        </p>
      )}
      <h2 className="section-heading__title">{title}</h2>
      {lead && <p className="section-heading__lead">{lead}</p>}
    </div>
  );
}
