import { Metadata } from 'next';
import {
  Breadcrumbs,
  SectionIntro,
  PortfolioCard,
  CTABanner,
} from '@/components';
import { portfolioItems } from '@/data/portfolio';
import { company } from '@/data/company';
import { metadata as metadataMap } from '@/data/metadata';

export const metadata: Metadata = {
  title: metadataMap['/portfolio'].title,
  description: metadataMap['/portfolio'].description,
  keywords: metadataMap['/portfolio'].keywords,
  openGraph: {
    title: metadataMap['/portfolio'].ogTitle,
    description: metadataMap['/portfolio'].ogDescription,
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio' },
        ]}
      />

      {/* Page Hero */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center pt-12 pb-12 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/services/PHOTO-2026-03-31-09-23-32.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/95 to-[#2D3436]/85"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#FAF8F5] mb-6 leading-tight">
            Our Portfolio
          </h1>
          <p className="font-body text-lg md:text-xl text-[#E8E4DF] max-w-2xl mx-auto leading-relaxed">
            Explore our collection of completed fence projects throughout South Shore Massachusetts
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionIntro
          eyebrow="Our Work"
          title="Professional Quality Showcased"
          description="Each project in our portfolio demonstrates our commitment to quality craftsmanship, attention to detail, and customer satisfaction. From residential privacy fences to commercial installations, we deliver exceptional results."
          centered={true}
        />
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((project, index) => {
            // Assign different fence photos to portfolio items
            const portfolioImages = [
              '/images/services/PHOTO-2026-03-31-09-23-29.jpg',
              '/images/services/PHOTO-2026-03-31-09-23-30.jpg',
              '/images/services/PHOTO-2026-03-31-09-23-31.jpg',
              '/images/services/PHOTO-2026-03-31-09-23-32.jpg',
              '/images/services/PHOTO-2026-03-31-09-23-28.jpg',
              '/images/services/PHOTO-2026-03-31-09-23-29 2.jpg',
              '/images/services/PHOTO-2026-03-31-09-23-29 3.jpg',
              '/images/services/PHOTO-2026-03-31-09-23-30 2.jpg',
              '/images/services/PHOTO-2026-03-31-09-23-30 3.jpg'
            ];
            
            return (
              <PortfolioCard
                key={project.id}
                title={project.title}
                description={project.description}
                serviceType={project.serviceType}
                location={project.location}
                imageAlt={project.imageAlt}
                image={portfolioImages[index % portfolioImages.length]}
              />
            );
          })}
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-[#C9A84C] mb-3">
                500+
              </div>
              <p className="font-body text-lg text-[#2D3436]">Completed Projects</p>
              <p className="font-body text-sm text-[#9A9590] mt-2">From small repairs to large commercial installations</p>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-[#C9A84C] mb-3">
                15+
              </div>
              <p className="font-body text-lg text-[#2D3436]">Years of Experience</p>
              <p className="font-body text-sm text-[#9A9590] mt-2">Perfecting our craft since 2008</p>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-[#C9A84C] mb-3">
                100%
              </div>
              <p className="font-body text-lg text-[#2D3436]">Satisfaction Rate</p>
              <p className="font-body text-sm text-[#9A9590] mt-2">Our customers rate us 5 stars</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Projects Matter */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionIntro
          eyebrow="Quality Assurance"
          title="Every Project Tells Our Story"
          description="Our portfolio isn't just a gallery—it's proof of our commitment to excellence, integrity, and customer satisfaction."
          centered={true}
        />
        <div className="mt-12 space-y-8 font-body text-[#2D3436] leading-relaxed text-lg max-w-3xl mx-auto">
          <p>
            Every project in our portfolio represents countless hours of skilled labor, premium materials carefully selected, and a team dedicated to delivering results that exceed expectations. We don't just build fences—we create lasting value for our customers' properties.
          </p>
          <p>
            From the initial consultation where we listen to your vision, through the professional installation where we execute with precision, to the final walkthrough where you see your transformed property—every step reflects our unwavering commitment to quality.
          </p>
          <p>
            The variety of projects in our portfolio demonstrates our expertise across all fencing types and property conditions. Whether your property faces coastal salt air, challenging soil conditions, or unique design requirements, we have the experience to deliver solutions tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform Your Property?"
        description="See how JT Fence Inc. can enhance your property with professional fencing. Contact us today for a free consultation and quote."
        primaryCta={{
          text: 'Get Your Free Quote',
          link: '/contact',
        }}
        phoneCta={true}
        phoneNumber={company.phone}
      />
    </>
  );
}
