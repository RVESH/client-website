import "./CTA10.scss";

function CTA10({
  label = "Have a project in mind?",
  action = "Let's talk",
  href = "#contact",
}) {
  return (
    <section className="sb-cta-10">
      <div className="sb-cta-10__shell">
        <span>{label}</span>

        <a href={href}>
          {action}
          <b>↗</b>
        </a>
      </div>
    </section>
  );
}

export default CTA10;