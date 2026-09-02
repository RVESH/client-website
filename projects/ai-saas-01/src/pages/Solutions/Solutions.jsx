import { SolutionsDetailed } from '../../sections/Solutions/Solutions.jsx'
import CTA from '../../sections/CTA/CTA.jsx'
import { solutions } from '../../data/solutions.js'
import './Solutions.scss'

export default function Solutions() {
  return (
    <div className="page solutions-page">
      <section className="section solutions-hero">
        <div className="container solutions-hero__inner">
          <span className="section-head__eyebrow">Solutions</span>
          <h1 className="solutions-hero__title">Built for how every team gets work done</h1>
          <p className="solutions-hero__desc">
            The same platform, configured around the workflows that matter to each team — from first response to
            final approval.
          </p>
          <nav className="solutions-hero__jumplinks" aria-label="Jump to solution">
            {solutions.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <SolutionsDetailed />

      <CTA
        eyebrow="Find your fit"
        title="Not sure which workflow to start with?"
        desc="Tell us about your team and we'll help you map out the highest-impact place to start."
      />
    </div>
  )
}
