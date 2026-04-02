import { Service } from '@/data/services'
import { company } from '@/data/company'

interface FAQItem {
  question: string
  answer: string
}

interface BreadcrumbItem {
  name: string
  url: string
}

/**
 * Generates a LocalBusiness schema for JT Fence Inc.
 * Used for local SEO to help search engines understand the business details.
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    description: company.description,
    url: 'https://www.jtfenceboston.com',
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plymouth, MA', // Update with actual street address if available
      addressLocality: 'Plymouth',
      addressRegion: 'MA',
      postalCode: '02360', // Update with actual postal code if available
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.9584,
      longitude: -70.3738,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Plymouth',
        addressRegion: 'MA',
      },
      {
        '@type': 'City',
        name: 'Cape Cod',
        addressRegion: 'MA',
      },
      {
        '@type': 'City',
        name: 'Wareham',
        addressRegion: 'MA',
      },
      {
        '@type': 'City',
        name: 'Duxbury',
        addressRegion: 'MA',
      },
      {
        '@type': 'City',
        name: 'Kingston',
        addressRegion: 'MA',
      },
      {
        '@type': 'City',
        name: 'Scituate',
        addressRegion: 'MA',
      },
      {
        '@type': 'City',
        name: 'Norwell',
        addressRegion: 'MA',
      },
      {
        '@type': 'City',
        name: 'Hanover',
        addressRegion: 'MA',
      },
      {
        '@type': 'City',
        name: 'Pembroke',
        addressRegion: 'MA',
      },
    ],
    openingHours: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
    priceRange: '$$',
    sameAs: [company.social.facebook, company.social.instagram],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
  }
}

/**
 * Generates a Service schema for a specific fencing service.
 * Helps search engines understand what services the business offers.
 */
export function generateServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.shortDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      url: 'https://www.jtfenceboston.com',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'South Shore Massachusetts',
    },
    serviceType: 'Fencing Installation & Repair',
  }
}

/**
 * Generates an FAQPage schema with multiple FAQ items.
 * Helps display rich snippets in search results for common questions.
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generates a BreadcrumbList schema for improved navigation in search results.
 * Helps search engines understand site structure and improves user experience.
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generates a WebSite schema for the entire website.
 * Helps define the site's search and structure for search engines.
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'JT Fence Inc.',
    url: 'https://www.jtfenceboston.com',
    description: company.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate:
          'https://www.jtfenceboston.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}
