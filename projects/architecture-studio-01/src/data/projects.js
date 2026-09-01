import { images } from './images.js'

export const categories = ['All', 'Residential', 'Cultural', 'Hospitality', 'Workplace']

export const projects = [
  {
    id: 'kiln-house',
    title: 'Kiln House',
    category: 'Residential',
    location: 'Walthamstow, London',
    year: 2023,
    cover: images.project01,
    detail: images.project01Detail,
    summary: 'A brick-and-steel extension to a Victorian terrace, built around a reclaimed kiln chimney the client asked us to keep standing.',
    featured: true,
  },
  {
    id: 'long-table-pavilion',
    title: 'Long Table Pavilion',
    category: 'Hospitality',
    location: 'Marlow, Buckinghamshire',
    year: 2022,
    cover: images.project02,
    summary: 'A timber-framed dining hall for sixty, built to be taken down and rebuilt on a new site within a week.',
  },
  {
    id: 'salt-works-hotel',
    title: 'Salt Works Hotel',
    category: 'Hospitality',
    location: 'Whitstable, Kent',
    year: 2021,
    cover: images.project03,
    detail: images.project03Detail,
    summary: 'Conversion of a disused salt processing yard into a 40-room hotel, keeping the original loading gantry as a covered walkway.',
  },
  {
    id: 'founders-archive',
    title: "Founders' Archive",
    category: 'Cultural',
    location: 'Bristol',
    year: 2020,
    cover: images.project04,
    summary: 'A reading room and archive for a maritime trust, designed around the humidity and light requirements of paper collections.',
  },
  {
    id: 'two-courtyards-house',
    title: 'Two Courtyards House',
    category: 'Residential',
    location: 'Oxford',
    year: 2019,
    cover: images.project05,
    summary: 'A single-storey house arranged around two courtyards, splitting private and shared rooms along a line of light.',
  },
  {
    id: 'riverbank-studios',
    title: 'Riverbank Studios',
    category: 'Workplace',
    location: 'Hackney Wick, London',
    year: 2018,
    cover: images.project06,
    summary: 'Twelve studios for makers and small manufacturers, built over a flood plain on a raised concrete deck.',
  },
]

export const featuredProject = projects.find((p) => p.featured) ?? projects[0]
