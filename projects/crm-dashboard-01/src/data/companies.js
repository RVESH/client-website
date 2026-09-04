// ============================================================================
// COMPANIES — demo data
// ============================================================================

export const companies = [
  { id: 'co-01', name: 'Northwind Traders', industry: 'Retail', size: '201-500' },
  { id: 'co-02', name: 'Initech Systems', industry: 'Software', size: '51-200' },
  { id: 'co-03', name: 'Globex Corporation', industry: 'Manufacturing', size: '1000+' },
  { id: 'co-04', name: 'Umbrella Health', industry: 'Healthcare', size: '501-1000' },
  { id: 'co-05', name: 'Soylent Foods', industry: 'Food & Beverage', size: '51-200' },
  { id: 'co-06', name: 'Stark Industrial', industry: 'Manufacturing', size: '1000+' },
  { id: 'co-07', name: 'Wayne Logistics', industry: 'Logistics', size: '501-1000' },
  { id: 'co-08', name: 'Aperture Labs', industry: 'Research', size: '11-50' },
  { id: 'co-09', name: 'Hooli Cloud', industry: 'Software', size: '201-500' },
  { id: 'co-10', name: 'Pied Piper Inc.', industry: 'Software', size: '11-50' },
  { id: 'co-11', name: 'Massive Dynamic', industry: 'Technology', size: '1000+' },
  { id: 'co-12', name: 'Cyberdyne Systems', industry: 'Technology', size: '201-500' },
  { id: 'co-13', name: 'Gringotts Financial', industry: 'Finance', size: '501-1000' },
  { id: 'co-14', name: 'Oscorp Materials', industry: 'Manufacturing', size: '201-500' },
  { id: 'co-15', name: 'Acme Supply Co.', industry: 'Retail', size: '51-200' },
]

export const getCompanyById = (id) => companies.find((c) => c.id === id)
