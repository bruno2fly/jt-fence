import { Metadata } from 'next';
import {
  Breadcrumbs,
  SectionIntro,
  ServiceCard,
  CTABanner,
} from '@/components';
import { services } from '@/data/services';
import { company } from '@/data/company';
import { metadata as metadataMap } from '@/data/metadata';
import { Hammer } from 'lucide-react';

export const metadata: Metadata = {
  title: metadataMap['/services'].title,
  description: metadataMap['/services'].description,
  keywords: metadataMap['/services'].keywords,
  openGraph: {
    title: metadataMap['/services'].ogTitle,
    description: metadataMap['/services'].ogDescription,
  },
};

const comparisonData = [
  {
    material: 'Wood Fencing',
    durability: '15-20 years',
    maintenance: 'High',
    cost: '$15-30/ft',
    bestFor: 'Classic beauty, residential',
  },
  {
    material: 'Vinyl Fencing',
    durability: '20-30+ years',
    maintenance: 'Very Low',
    cost: '$25-40/ft',
    bestFor: 'Low maintenance, coastal',
  },
  {
    material: 'Aluminum Fencing',
    durability: '20-30+ years',
    maintenance: 'Low',
    cost: '$20-35/ft',
    bestFor: 'Modern design, views',
  },
  {
    material: 'Pet Fencing',
    durability: '15-25 years',
    maintenance: 'Medium',
    cost: '$18-35/ft',
    bestFor: 'Dog containment, safety',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />

      {/* Page Hero */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center pt-12 pb-12 overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(135deg, #1B4332 0%, #2D3436 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/95 to-[#2D3436]/85"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#FAF8F5] mb-6 leading-tight">
            Our Fencing Services
          </h1>
          <p className="font-body text-lg md:text-xl text-[#E8E4DF] max-w-2xl mx-auto leading-relaxed">
            Complete fencing solutions for every property type and aesthetic preference
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionIntro
          eyebrow="Professional Solutions"
          title="Complete Fencing Services"
          description="Whether you need a new installation, professional repair, or specialized pet fencing, JT Fence Inc. delivers exceptional results with quality materials and expert craftsmanship."
          centered={true}
        />
      </section>

      {/* All Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.name}
              description={service.shortDescription}
              slug={service.slug}
              icon={<Hammer className="w-6 h-6" />}
            />
          ))}
        </div>
      </section>

      {/* Service Comparison Section */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Compare Options"
            title="Choose the Right Material"
            description="Each fencing material offers unique advantages. Compare to find the best fit for your property and needs."
            centered={true}
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#C9A84C]">
                  <th className="text-left py-4 px-4 font-heading font-semibold text-[#1B4332]">Material</th>
                  <th className="text-left py-4 px-4 font-heading font-semibold text-[#1B4332]">Durability</th>
                  <th className="text-left py-4 px-4 font-heading font-semibold text-[#1B4332]">Maintenance</th>
                  <th className="text-left py-4 px-4 font-heading font-semibold text-[#1B4332]">Cost Range</th>
                  <th className="text-left py-4 px-4 font-heading font-semibold text-[#1B4332]">Best For</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-[#E8E4DF] hover:bg-white transition-colors">
                    <td className="py-4 px-4 font-body font-semibold text-[#1B4332]">{row.material}</td>
                    <td className="py-4 px-4 font-body text-[#2D3436]">{row.durability}</td>
                    <td className="py-4 px-4 font-body text-[#2D3436]">{row.maintenance}</td>
                    <td className="py-4 px-4 font-body text-[#2D3436]">{row.cost}</td>
                    <td className="py-4 px-4 font-body text-[#2D3436]">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionIntro
          eyebrow="What We Provide"
          title="Comprehensive Service Package"
          description="Every project includes our complete service commitment."
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: 'Free Professional Estimates',
              description: 'No obligation consultations with detailed measurements and transparent pricing.',
            },
            {
              title: 'Expert Design Consultation',
              description: 'We help you choose the perfect material and style for your property.',
            },
            {
              title: 'Quality Materials',
              description: 'Premium materials sourced from trusted suppliers for lasting durability.',
            },
            {
              title: 'Professional Installation',
              description: 'Expert installers trained in latest techniques and best practices.',
            },
            {
              title: 'Clean Worksite',
              description: 'Professional site management and thorough cleanup after every project.',
            },
            {
              title: 'Warranty Coverage',
              description: 'Workmanship warranties and manufacturer material coverage for peace of mind.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-8 border border-[#E8E4DF] hover:shadow-lg transition-shadow">
              <h3 className="font-heading text-lg font-semibold text-[#1B4332] mb-3">
                {item.title}
              </h3>
              <p className="font-body text-[#2D3436] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Get Started?"
        description="Contact JT Fence Inc. today for a free consultation and accurate quote on your fencing project. Our team is ready to help you enhance your property."
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
