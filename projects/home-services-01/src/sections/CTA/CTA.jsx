import { MessageCircle, Phone } from 'lucide-react';
import Button from '../../components/Button/Button';
import { site, whatsappHref } from '../../data/site';
import './CTA.scss';

export default function CTA() {
  return (
    <section className="section--tight section--brass cta-section">
      <div className="container cta-section__inner">
        <div>
          <h2>Ready to scope your project?</h2>
          <p>Tell us what needs doing — we'll get back with a written quote, usually within a day.</p>
        </div>
        <div className="btn-row">
          <Button to="/contact" variant="primary" className="cta-section__btn-dark">Request a quote</Button>
          <Button href={whatsappHref()} variant="outline" icon={MessageCircle} iconPosition="left" className="cta-section__btn-outline">
            WhatsApp
          </Button>
          <Button href={site.phoneHref} variant="ghost" icon={Phone} iconPosition="left" className="cta-section__btn-ghost">
            {site.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
