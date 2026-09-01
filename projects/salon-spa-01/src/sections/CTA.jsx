import "./CTA.scss";
import site from "../data/site";
import Button from "../components/Button.jsx";

function CTA() {
  const { cta } = site;

  return (
    <section className="section cta-block">
      <div className="container cta-block__inner">
        <div>
          <h2>{cta.heading}</h2>
          <p className="section-sub">{cta.subheading}</p>
        </div>
        <div className="cta-block__actions">
          <Button action="enquire" variant="primary">
            Enquire Now
          </Button>
          <Button action="whatsapp" variant="secondary">
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
