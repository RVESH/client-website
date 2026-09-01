import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import Button from '../../components/Button/Button';
import { site, whatsappHref } from '../../data/site';
import { getImage } from '../../data/images';
import './Hero.scss';

export default function Hero() {
  return (
    <section className="hero section--ink">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="index-label">
            <ShieldCheck size={14} aria-hidden="true" />
            <span>{site.license}</span>
          </p>
          <h1 className="hero__title">
            <span className="hero__title-line">Home services,</span>
            <span className="hero__title-line hero__title-line--accent">done to spec.</span>
          </h1>
          <p className="hero__lead">
            Remodels, repairs, electrical, plumbing and outdoor work for {site.serviceAreas[0]} and the
            surrounding area — scoped clearly, scheduled honestly, and finished the way it was drawn up.
          </p>
          <div className="btn-row">
            <Button to="/contact" variant="primary" size="lg">Request a quote</Button>
            <Button href={site.phoneHref} variant="outline" size="lg" icon={Phone} iconPosition="left">
              {site.phoneDisplay}
            </Button>
          </div>
          <a className="hero__whatsapp" href={whatsappHref()} target="_blank" rel="noreferrer">
            <MessageCircle size={17} aria-hidden="true" />
            <span>Message us on WhatsApp</span>
          </a>
        </div>

        <div className="hero__frame">
          <img src={getImage('hero')} alt="Line-drawing elevation of a house, representing Forma's planning-first approach" />
        </div>
      </div>

      <div className="hero__ticker">
        <div className="container hero__ticker-inner">
          <span>Since {site.founded}</span>
          <span>&middot;</span>
          <span>Licensed &amp; insured</span>
          <span>&middot;</span>
          <span>Free written quotes</span>
          <span>&middot;</span>
          <span>Serving {site.serviceAreas.length} local areas</span>
        </div>
      </div>
    </section>
  );
}
