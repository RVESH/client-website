import SectionHeading from '../../components/SectionHeading/SectionHeading';
import IconTile from '../../components/IconTile/IconTile';
import './WhyChooseUs.scss';

const points = [
  {
    icon: 'FileText',
    title: 'Written quotes, not guesses',
    body: 'Every job gets a line-itemed quote before work starts — materials, labor and timeline, all on paper.',
  },
  {
    icon: 'Clock',
    title: 'Schedules that hold',
    body: 'We plan around your dates, not ours, and tell you immediately if anything is going to shift.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Licensed, insured, inspected',
    body: 'Every trade on the crew is licensed for their work, and permitted jobs are inspected as required.',
  },
  {
    icon: 'Users',
    title: 'The same crew throughout',
    body: 'No rotating subs. The people who start your job are the people who finish it.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section section--raised why-section">
      <div className="container">
        <SectionHeading kicker="Why Forma" title="Fewer surprises, start to finish." align="center" />
        <div className="why-section__grid">
          {points.map((p) => (
            <div className="why-section__item" key={p.title}>
              <IconTile name={p.icon} />
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
