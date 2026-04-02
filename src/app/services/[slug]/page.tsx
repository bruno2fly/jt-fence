import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { serviceAreas } from '@/data/serviceAreas';
import { metadata } from '@/data/metadata';
import ServiceDetailClient from './ServiceDetailClient';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all service pages
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {};
  }

  const pageMetadata = metadata[`/services/${service.slug}`];

  return {
    title: pageMetadata?.title || service.title,
    description: pageMetadata?.description || service.shortDescription,
    keywords: service.keywords,
    openGraph: {
      title: pageMetadata?.ogTitle || service.title,
      description: pageMetadata?.ogDescription || service.shortDescription,
      type: 'website',
      url: `https://jtfenceboston.com/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Get relevant testimonials
  const relatedTestimonials = testimonials
    .filter((t) => t.serviceType === service.slug)
    .slice(0, 3);

  // Get related service areas
  const relatedAreas = serviceAreas
    .filter((area) => area.popularServices.includes(service.slug))
    .slice(0, 5);

  return (
    <ServiceDetailClient
      service={service}
      relatedTestimonials={relatedTestimonials}
      relatedAreas={relatedAreas}
    />
  );
}
