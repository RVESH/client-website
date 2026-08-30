import Services from "../../sections/Services/Services";

export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <div className="page-shell">
          <span className="eyebrow">
            SERVICES
          </span>

          <h1 className="section-title">
            Care designed
            <br />
            around you.
          </h1>
        </div>
      </section>

      <Services />
    </>
  );
}