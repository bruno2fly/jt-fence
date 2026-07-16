import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionIntro from '@/components/SectionIntro';
import AreaCard from '@/components/AreaCard';
import CTABanner from '@/components/CTABanner';
import { serviceAreas } from '@/data/serviceAreas';
import { metadata as metadataMap } from '@/data/metadata';

export const metadata: Metadata = {
  ...(metadataMap['/service-areas'] || {}),
};

export default function ServiceAreasPage() {
  const regionOrder = [
    'Plymouth County',
    'Barnstable County',
    'MetroWest',
    'South of Boston',
    'North Shore',
  ];

  const serviceAreasByRegion = serviceAreas.reduce<Record<string, typeof serviceAreas>>(
    (regions, area) => {
      regions[area.county] = regions[area.county] || [];
      regions[area.county].push(area);
      return regions;
    },
    {}
  );

  const orderedRegions = [
    ...regionOrder.filter((region) => serviceAreasByRegion[region]?.length),
    ...Object.keys(serviceAreasByRegion).filter((region) => !regionOrder.includes(region)),
  ];

  const regionDescriptions: Record<string, string> = {
    'Plymouth County':
      'Serving these South Shore communities with professional fencing installation and repair:',
    'Barnstable County':
      "Specialized coastal fencing solutions for Cape Cod and Barnstable County properties:",
    MetroWest:
      'Residential fencing for historic towns, wooded suburbs, dense inner neighborhoods, and growing MetroWest communities:',
    'South of Boston':
      'Fence installation for established neighborhoods, city-adjacent suburbs, waterfront communities, and family homes south of Boston:',
    'North Shore':
      'Quality fencing for North Shore suburbs, historic downtowns, wooded lots, lake-area homes, and upscale residential properties:',
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas' },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <SectionIntro
          title="Fence Installation Across Massachusetts"
          description="JT Fence Inc. proudly serves Massachusetts communities from the South Shore and Cape Cod to MetroWest, South of Boston, and the North Shore. Whether you're in a coastal town, historic suburb, or dense urban neighborhood, our team brings the same dedication to quality and customer service to every project."
        />
      </section>

      {/* Regional Overview */}
      <section className="bg-[#F5F1ED] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-[#E8E4DF]">
              <h3 className="font-heading text-xl font-semibold text-[#1B4332] mb-3">
                Five Service Regions
              </h3>
              <p className="font-body text-[#2D3436] text-sm leading-relaxed">
                We serve organized coverage across Plymouth County, Barnstable County, MetroWest, South of Boston, and the North Shore.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[#E8E4DF]">
              <h3 className="font-heading text-xl font-semibold text-[#1B4332] mb-3">
                {serviceAreas.length} Local Communities
              </h3>
              <p className="font-body text-[#2D3436] text-sm leading-relaxed">
                From Cape Cod salt-air properties to wooded inland lots and close-set city homes, each service-area page reflects local fencing needs.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[#E8E4DF]">
              <h3 className="font-heading text-xl font-semibold text-[#1B4332] mb-3">
                Local Expertise
              </h3>
              <p className="font-body text-[#2D3436] text-sm leading-relaxed">
                With over 15 years serving Massachusetts communities, we understand municipal requirements, neighborhood expectations, and the unique conditions of each property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service region map */}
      <section className="bg-[#FAF8F5] py-16 md:py-20 border-y border-[#E8E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Coverage"
            title="Massachusetts Service Regions"
            description="We install and repair fencing across Plymouth County, Cape Cod, MetroWest, South of Boston, the North Shore, and neighboring communities."
            centered={true}
          />
          <div className="mt-10 w-full overflow-hidden rounded-lg border border-[#E8E4DF] shadow-sm bg-[#E8E4DF]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200000!2d-70.72723895!3d41.9584457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4b5b0a3f24c59%3A0x7c31b7b2f3e8b1a0!2sPlymouth%2C%20MA!5e0!3m2!1sen!1sus!4v1680000000000!5m2!1sen!1sus"
              title="South Shore Massachusetts — JT Fence Inc. service area"
              width="100%"
              height={400}
              className="border-0 w-full min-h-[400px] block"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {orderedRegions.map((region, index) => (
          <div key={region} className={index < orderedRegions.length - 1 ? 'mb-16' : undefined}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">
              {region} Service Areas
            </h2>
            <p className="font-body text-[#2D3436] text-lg mb-12 max-w-2xl">
              {regionDescriptions[region] ||
                'Professional fencing installation and repair for these Massachusetts communities:'}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {serviceAreasByRegion[region].map((area) => (
                <AreaCard
                  key={area.slug}
                  name={area.name}
                  slug={area.slug}
                  description={area.description.split('\n')[0]}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Why Local Matters */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1B4332] mb-8 text-center">
              Why Choose Local
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#C9A84C]">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[#1B4332] mb-2">
                    Local Knowledge
                  </h3>
                  <p className="font-body text-[#2D3436]">
                    We understand municipal codes, permit requirements, and architectural standards in each community we serve. This ensures your project stays on track and meets all local regulations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#C9A84C]">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[#1B4332] mb-2">
                    Environmental Expertise
                  </h3>
                  <p className="font-body text-[#2D3436]">
                    Whether it's the salt air of Cape Cod or the diverse soil conditions throughout Plymouth County, we recommend materials and techniques specifically suited to local environmental challenges.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#C9A84C]">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[#1B4332] mb-2">
                    Reliable Service
                  </h3>
                  <p className="font-body text-[#2D3436]">
                    As a local contractor, we're invested in our reputation. Our customers are our neighbors, and their satisfaction drives everything we do.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#C9A84C]">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[#1B4332] mb-2">
                    Quick Response Times
                  </h3>
                  <p className="font-body text-[#2D3436]">
                    We're conveniently located to serve our communities. This means faster response times for estimates, consultations, and emergency repairs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Enhance Your Property?"
        description="Contact JT Fence Inc. today for a free estimate. Our team is ready to help you find the perfect fencing solution for your home."
        primaryCta={{ text: 'Get Free Estimate', link: '/contact' }}
        phoneCta={true}
        phoneNumber="(781) 420-5858"
      />
    </>
  );
}
