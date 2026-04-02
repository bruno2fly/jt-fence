import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionIntro from '@/components/SectionIntro';
import ServiceCard from '@/components/ServiceCard';
import FAQAccordion from '@/components/FAQAccordion';
import AreaCard from '@/components/AreaCard';
import CTABanner from '@/components/CTABanner';
import JsonLd from '@/components/JsonLd';
import { serviceAreas } from '@/data/serviceAreas';
import { services } from '@/data/services';
import { Fence, Shield, Home, AlertCircle, CheckCircle } from 'lucide-react';

// Generate static params for all service areas
export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    slug: area.slug,
  }));
}

// Generate metadata for each service area
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const area = serviceAreas.find((a) => a.slug === params.slug);

  if (!area) {
    return {};
  }

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: area.localKeywords,
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
    },
  };
}

// Map service slugs to icons
const getServiceIcon = (slug: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'wood-fences': <Home className="w-6 h-6" />,
    'vinyl-fences': <Shield className="w-6 h-6" />,
    'aluminum-fences': <Fence className="w-6 h-6" />,
    'pet-dog-fencing': <AlertCircle className="w-6 h-6" />,
  };
  return iconMap[slug] || <Fence className="w-6 h-6" />;
};

export default function ServiceAreaPage({ params }: { params: { slug: string } }) {
  const area = serviceAreas.find((a) => a.slug === params.slug);

  if (!area) {
    notFound();
  }

  // Get related areas (exclude current, show 3-4 nearby)
  const relatedAreas = serviceAreas
    .filter((a) => a.slug !== area.slug && a.county === area.county)
    .slice(0, 3);

  // Get services by popular service slugs
  const areaServices = services.filter((service) =>
    area.popularServices.includes(service.slug)
  );

  // Create location-specific FAQs
  const localFaqs = [
    {
      question: `How much does fence installation cost in ${area.name}?`,
      answer: `Fence installation costs in ${area.name} typically range from $15-40 per linear foot depending on material type and site conditions. Wood fences average $15-30 per linear foot, vinyl $25-40, and aluminum $20-35. We provide free estimates that include site assessment and detailed pricing for your specific project.`,
    },
    {
      question: `Do I need a fence permit in ${area.name}?`,
      answer: `Permit requirements vary in ${area.name}. Most residential fences within standard height limits don't require permits, but some properties or neighborhoods may have specific requirements. We handle all permit research and applications for you, ensuring your installation complies with local regulations.`,
    },
    {
      question: `What's the best fence type for ${area.name} properties?`,
      answer: area.county === 'Barnstable County'
        ? `For Cape Cod properties, we recommend vinyl or aluminum fencing due to salt-air resistance. These materials won't rot or corrode like wood in coastal environments. Many Cape Cod homeowners also appreciate the low-maintenance benefits of vinyl and aluminum for their seasonal properties.`
        : `${area.name} properties benefit from various fence types depending on your needs. Wood offers classic beauty for traditional neighborhoods, vinyl provides low-maintenance durability, and aluminum offers modern aesthetics. We recommend consulting with our team to find the perfect match for your property and architectural style.`,
    },
    {
      question: `How long does fence installation take in ${area.name}?`,
      answer: `Most residential fence installations in ${area.name} take 2-5 working days depending on fence length, material type, and property conditions. We provide realistic timelines during your estimate and keep you updated throughout the project. Larger installations or complex properties may require additional time.`,
    },
  ];

  // JSON-LD LocalBusiness schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `JT Fence Inc. - ${area.name} Fencing`,
    image: 'https://jtfenceboston.com/logo.png',
    url: `https://jtfenceboston.com/service-areas/${area.slug}`,
    telephone: '(781) 420-5858',
    email: 'contact@jtfenceboston.com',
    areaServed: {
      '@type': 'City',
      name: area.name,
    },
    priceRange: '$15-40',
    description: area.description,
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: area.name },
  ];

  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <SectionIntro
          title={`Professional Fence Installation in ${area.name}`}
          description={area.description.split('\n')[0]}
        />
      </section>

      {/* Area Description */}
      <section className="bg-[#F5F1ED] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 md:p-12 border border-[#E8E4DF]">
            <p className="font-body text-lg text-[#2D3436] leading-relaxed mb-6">
              {area.description.split('\n').slice(1).join('\n')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">
          Residential Fencing Services in {area.name}
        </h2>
        <p className="font-body text-lg text-[#2D3436] mb-12 max-w-2xl">
          We offer a complete range of fencing solutions for {area.name} homeowners:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {areaServices.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.name}
              description={service.shortDescription}
              slug={service.slug}
              icon={getServiceIcon(service.slug)}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1B4332] mb-12 text-center">
            Why {area.name} Homeowners Choose JT Fence
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {area.whyChooseUs.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#C9A84C]">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="font-body text-lg text-[#2D3436] leading-relaxed">
                    {reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQ Section */}
      <section className="bg-[#F5F1ED] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1B4332] mb-12 text-center">
            Frequently Asked Questions About Fencing in {area.name}
          </h2>
          <FAQAccordion items={localFaqs} />
        </div>
      </section>

      {/* Related Areas */}
      {relatedAreas.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1B4332] mb-12 text-center">
            Nearby Service Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedAreas.map((relatedArea) => (
              <AreaCard
                key={relatedArea.slug}
                name={relatedArea.name}
                slug={relatedArea.slug}
                description={relatedArea.description.split('\n')[0]}
              />
            ))}
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform Your Yard?"
        description={`Get a free estimate for your ${area.name} fencing project. Our team is ready to help you create the perfect outdoor space.`}
        primaryCta={{ text: 'Get Free Estimate', link: '/contact' }}
        phoneCta={true}
        phoneNumber="(781) 420-5858"
      />
    </>
  );
}
