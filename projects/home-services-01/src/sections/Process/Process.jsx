import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './Process.scss';

const steps = [
  { title: 'Tell us the job', body: 'Call, message or fill out the form with what needs doing and roughly when.' },
  { title: 'We come take a look', body: 'A quick site visit for anything beyond a small repair, so the quote is accurate.' },
  { title: 'You get a written quote', body: 'Itemized pricing and a start date — nothing starts until you approve it.' },
  { title: 'We do the work', body: 'Same crew from start to finish, daily clean-up, and a walkthrough before we call it done.' },
];

export default function Process() {
  return (
    <section className="section process-section">
      <div className="container">
        <SectionHeading kicker="How it works" title="Four steps, no call-center runaround." />
        <ol className="process-section__list">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="process-section__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
