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
  // Group areas by county for better organization
  const plymouthCounty = serviceAreas.filter((area) => area.county === 'Plymouth County');
  const barnstableCounty = serviceAreas.filter((area) => area.county === 'Barnstable County');

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
          description="JT Fence Inc. proudly serves South Shore Massachusetts and Cape Cod with professional fencing solutions. Whether you're in a bustling coastal town or a quiet residential community, our team brings the same dedication to quality and customer service to every project."
        />
      </section>

      {/* Regional Overview */}
      <section className="bg-[#F5F1ED] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-[#E8E4DF]">
              <h3 className="font-heading text-xl font-semibold text-[#1B4332] mb-3">
                Plymouth County
              </h3>
              <p className="font-body text-[#2D3436] text-sm leading-relaxed">
                We serve 7 communities throughout Plymouth County, from the historic shores of Plymouth to the affluent neighborhoods of Norwell and prestigious Duxbury.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[#E8E4DF]">
              <h3 className="font-heading text-xl font-semibold text-[#1B4332] mb-3">
                Barnstable County
              </h3>
              <p className="font-body text-[#2D3436] text-sm leading-relaxed">
                Cape Cod's unique coastal environment demands specialized expertise. Our team excels at delivering salt-resistant fencing solutions for the Cape's demanding climate.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[#E8E4DF]">
              <h3 className="font-heading text-xl font-semibold text-[#1B4332] mb-3">
                Local Expertise
              </h3>
              <p className="font-body text-[#2D3436] text-sm leading-relaxed">
                With over 15 years serving these communities, we understand local building codes, municipal requirements, and the unique needs of each neighborhood.
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
            title="South Shore Service Region"
            description="We install and repair fencing across Plymouth County, Cape Cod, and neighboring South Shore communities."
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
        <div className="mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">
            Plymouth County Service Areas
          </h2>
          <p className="font-body text-[#2D3436] text-lg mb-12 max-w-2xl">
            Serving these communities with professional fencing installation and repair:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {plymouthCounty.map((area) => (
              <AreaCard
                key={area.slug}
                name={area.name}
                slug={area.slug}
                description={area.description.split('\n')[0]}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">
            Barnstable County Service Areas
          </h2>
          <p className="font-body text-[#2D3436] text-lg mb-12 max-w-2xl">
            Specialized coastal fencing solutions for Cape Cod properties:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {barnstableCounty.map((area) => (
              <AreaCard
                key={area.slug}
                name={area.name}
                slug={area.slug}
                description={area.description.split('\n')[0]}
              />
            ))}
          </div>
        </div>
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
