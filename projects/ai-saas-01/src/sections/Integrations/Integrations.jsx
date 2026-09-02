import IntegrationCard from '../../components/IntegrationCard/IntegrationCard.jsx'
import { integrations } from '../../data/features.js'
import './Integrations.scss'

export default function Integrations() {
  return (
    <section className="section integrations">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section-head__eyebrow">Integrations</span>
          <h2 className="section-head__title">Connects to the tools your team already runs on</h2>
          <p className="section-head__desc">
            80+ native connectors across CRM, support, productivity, data and engineering tools — with an open API
            for everything else.
          </p>
        </div>
        <div className="integrations__grid">
          {integrations.map((item) => (
            <IntegrationCard key={item.name} name={item.name} category={item.category} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
