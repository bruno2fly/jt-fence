import JsonLd from './JsonLd';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'FencingContractor',
  name: 'JT Fence Inc.',
  description:
    'Premium fence installation and repair services in South Shore Massachusetts',
  url: 'https://jtfenceboston.com',
  telephone: '(781) 420-5858',
  email: 'contact@jtfenceboston.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Plymouth',
    addressRegion: 'MA',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.9584,
    longitude: -70.6673,
  },
  areaServed: [
    'Plymouth, MA',
    'Cape Cod, MA',
    'Wareham, MA',
    'Duxbury, MA',
    'Kingston, MA',
    'Scituate, MA',
    'Norwell, MA',
    'Hanover, MA',
    'Pembroke, MA',
  ],
  openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-16:00'],
  priceRange: '$$',
  image: 'https://jtfenceboston.com/images/jtlogo.png',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '8',
  },
};

export default function LocalBusinessJsonLd() {
  return <JsonLd data={localBusinessSchema} />;
}
