import SectionHeading from '../../components/SectionHeading/SectionHeading';
import IconTile from '../../components/IconTile/IconTile';
import Stats from '../../sections/Stats/Stats';
import Testimonials from '../../sections/Testimonials/Testimonials';
import CTA from '../../sections/CTA/CTA';
import { site } from '../../data/site';
import { getImage } from '../../data/images';
import './AboutPage.scss';

const values = [
  { icon: 'Ruler', title: 'Plan before we cut', body: 'Every job is measured and scoped before materials are ordered — fewer change orders, fewer surprises.' },
  { icon: 'ShieldCheck', title: 'Do it to code', body: 'Permits pulled when required, work inspected when required. No shortcuts that show up later.' },
  { icon: 'HeartHandshake', title: 'Say what we mean', body: 'If a timeline shifts or a cost changes, you hear it from us first — not from an invoice.' },
];

export default function About() {
  return (
    <>
      <section className="section about-hero section--ink">
        <div className="container about-hero__grid">
          <div>
            <SectionHeading
              index="ABOUT"
              title={`Started on one street in ${site.serviceAreas[0]}, in ${site.founded}.`}
              lead={`${site.fullName} began as a two-person repair crew. ${new Date().getFullYear() - site.founded} years on, we're a full trades team — still taking the same approach: plan it properly, then do it properly.`}
            />
          </div>
          <div className="about-hero__frame">
            <img src={getImage('aboutShop')} alt="Line-drawing of hand tools, representing Forma's workshop" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading kicker="What we hold to" title="Three things that don't change between jobs." />
          <div className="about-values">
            {values.map((v) => (
              <div className="about-values__item" key={v.title}>
                <IconTile name={v.icon} />
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
