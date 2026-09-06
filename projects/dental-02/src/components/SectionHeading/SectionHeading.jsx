// Uses shared `.section-head` styles defined in src/styles/global.scss
export default function SectionHeading({ eyebrow, title, desc, align = 'left', between, children }) {
  const classes = [
    'section-head',
    align === 'center' && 'section-head--center',
    between && 'section-head--between',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <div>
        {eyebrow && <span className="section-head__eyebrow">{eyebrow}</span>}
        {title && <h2 className="section-head__title">{title}</h2>}
        {desc && <p className="section-head__desc">{desc}</p>}
      </div>
      {between && children}
    </div>
  )
}
