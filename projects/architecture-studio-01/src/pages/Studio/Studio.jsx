import { images } from '../../data/images.js'
import { team, credentials } from '../../data/team.js'
import TeamCard from '../../components/TeamCard/TeamCard.jsx'
import './Studio.scss'

const approach = [
  {
    title: 'Listen first',
    text: 'Before any drawing, we spend time understanding how a space will actually be used, day to day, by the people who\u2019ll be in it.',
  },
  {
    title: 'Design with materials, not just on paper',
    text: 'We test finishes, joints and light at full scale in the studio, so decisions are based on how something behaves, not how it renders.',
  },
  {
    title: 'Stay on site through delivery',
    text: 'The team that designs the project stays involved through construction, so the drawings survive contact with the build.',
  },
]

export default function Studio() {
  return (
    <>
      <section className="section section--tight studioStory">
        <div className="container studioStory__grid">
          <div className="studioStory__text">
            <p className="eyebrow">Studio story</p>
            <h1>Started at a kitchen table in 1998, still stubborn about the same things.</h1>
            <p className="lede">
              Marrow Studio began as a two-person practice taking on small
              residential extensions in east London. Twenty-six years on,
              we still work at a scale where every project gets both
              principals' attention, from first sketch to final snag.
            </p>
          </div>
          <div className="studioStory__image">
            <img src={images.studioWorkshop.src} alt={images.studioWorkshop.alt} />
          </div>
        </div>
      </section>

      <section className="section section--dark studioPhilosophy">
        <div className="container studioPhilosophy__grid">
          <div>
            <p className="eyebrow">Philosophy</p>
            <h2>A building should get better with use, not just look good on the day it opens.</h2>
          </div>
          <p className="lede">
            We design for the fifth year of a building's life as carefully
            as the first — for how a stone floor wears, how a brass
            handle patinas, how a room performs in a heatwave. Longevity
            isn't a finish you apply at the end; it's a set of decisions
            made from the first sketch.
          </p>
        </div>
      </section>

      <section className="section studioApproach">
        <div className="container">
          <p className="eyebrow">Approach</p>
          <div className="studioApproach__list">
            {approach.map((item, i) => (
              <div className="studioApproach__item" key={item.title}>
                <span className="studioApproach__index">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper studioTeam">
        <div className="container">
          <p className="eyebrow">Principals</p>
          <div className="studioTeam__grid">
            {team.map((person) => (
              <TeamCard person={person} key={person.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section studioCredentials">
        <div className="container studioCredentials__grid">
          <div>
            <p className="eyebrow">Selected credentials</p>
            <h2>Recognition we didn't design for, but don't mind having.</h2>
          </div>
          <ul>
            {credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
