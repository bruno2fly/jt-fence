import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';
import PortfolioCard from '@/components/PortfolioCard';
import AreaCard from '@/components/AreaCard';
import ProcessSteps from '@/components/ProcessSteps';
import SectionIntro from '@/components/SectionIntro';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { faqs } from '@/data/faqs';
import { portfolioItems } from '@/data/portfolio';
import { serviceAreas } from '@/data/serviceAreas';
import { company } from '@/data/company';
import { metadata as metadataMap } from '@/data/metadata';
import {
  Hammer,
  Shield,
  Home as HomeIcon,
  TreePine,
  Sparkles,
  Heart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: metadataMap['/'].title,
  description: metadataMap['/'].description,
  keywords: metadataMap['/'].keywords,
  openGraph: {
    title: metadataMap['/'].ogTitle,
    description: metadataMap['/'].ogDescription,
  },
};

const whyChooseUsReasons = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed Massachusetts contractor with comprehensive insurance coverage for your peace of mind.',
  },
  {
    icon: Hammer,
    title: 'Expert Craftsmanship',
    description: 'Over 15 years of experience delivering premium quality installations on every project.',
  },
  {
    icon: Heart,
    title: 'Customer-First Service',
    description: 'We prioritize clear communication, transparent pricing, and professional service from start to finish.',
  },
  {
    icon: Sparkles,
    title: 'Clean Installations',
    description: 'Professional site management and thorough cleanup after every installation.',
  },
  {
    icon: HomeIcon,
    title: 'Property Value Enhancement',
    description: 'Your new fence will enhance curb appeal and increase your property value.',
  },
  {
    icon: TreePine,
    title: 'Quality Materials',
    description: 'We source premium materials that withstand New England weather and look beautiful for years.',
  },
];

export default function Home() {
  const featuredPortfolio = portfolioItems.filter((item) => item.featured).slice(0, 3);
  const faqItems = faqs
    .filter((faq) => faq.category === 'General' || faq.category === 'Services')
    .slice(0, 5)
    .map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    }));

  const processSteps = [
    {
      number: 1,
      title: 'Free Estimate Request',
      description: 'Contact us to schedule your free consultation and fence estimate.',
    },
    {
      number: 2,
      title: 'Property Consultation',
      description: 'We visit your property to assess your needs and discuss your vision.',
    },
    {
      number: 3,
      title: 'Design & Planning',
      description: 'We create a detailed plan and provide transparent pricing.',
    },
    {
      number: 4,
      title: 'Professional Installation',
      description: 'Our expert team installs your fence with precision and care.',
    },
  ];

  const serviceAreaPreview = serviceAreas.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Premium Fence Installation Across Massachusetts"
        subtitle={`JT Fence Inc. delivers exceptional residential and commercial fencing solutions with over ${company.yearsExperience} years of expertise. Transform your property with quality craftsmanship you can trust.`}
        ctaText="Get Your Free Quote"
        ctaLink="/contact"
        secondaryCtaText="Explore Our Work"
        secondaryCtaLink="/portfolio"
      />

      {/* Services Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionIntro
          eyebrow="Complete Fencing Solutions"
          title="Our Services"
          description="From classic wood to modern aluminum, we offer fencing solutions for every property type and aesthetic preference."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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

      {/* Why Choose JT Fence Section */}
      <section className="bg-[#1B4332] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="What Sets Us Apart"
            title="Why Choose JT Fence Inc."
            description="We combine expertise, quality materials, and exceptional service to deliver fencing solutions that exceed expectations."
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {whyChooseUsReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:border-[#C9A84C] transition-colors"
                >
                  <div className="mb-4 inline-block p-3 bg-[#C9A84C] rounded-lg">
                    <Icon className="w-6 h-6 text-[#1B4332]" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[#FAF8F5] mb-3">
                    {reason.title}
                  </h3>
                  <p className="font-body text-[#E8E4DF] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionIntro
          eyebrow="Our Work"
          title="Featured Projects"
          description="See examples of our quality craftsmanship across wood, vinyl, aluminum, and specialized pet fencing installations."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredPortfolio.map((project) => (
            <PortfolioCard
              key={project.id}
              title={project.title}
              description={project.description}
              serviceType={project.serviceType}
              location={project.location}
              imageAlt={project.imageAlt}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="inline-flex items-center px-8 py-3.5 bg-[#C9A84C] text-white font-body font-semibold rounded-lg hover:bg-[#B8933F] transition-colors"
          >
            View All Projects
            <span className="ml-2">→</span>
          </a>
        </div>
      </section>

      {/* Service Areas Preview Section */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Local Expertise"
            title="Service Areas"
            description="We serve the entire South Shore of Massachusetts with professional fencing solutions tailored to each community's unique needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {serviceAreaPreview.map((area) => (
              <AreaCard
                key={area.slug}
                name={area.name}
                slug={area.slug}
                description={area.description.split('\n')[0]}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/service-areas"
              className="inline-flex items-center px-8 py-3.5 bg-[#1B4332] text-white font-body font-semibold rounded-lg hover:bg-[#0f2b1f] transition-colors"
            >
              View All Service Areas
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Process Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionIntro
          eyebrow="Our Process"
          title="How We Work"
          description="From initial consultation to final walkthrough, we follow a proven process designed for quality, transparency, and customer satisfaction."
        />
        <div className="mt-12">
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Customer Reviews"
            title="What Our Customers Say"
            description="See why homeowners throughout South Shore Massachusetts trust JT Fence Inc. for their fencing needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {testimonials.slice(0, 4).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                text={testimonial.text}
                serviceType={testimonial.serviceType}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/reviews"
              className="inline-flex items-center px-8 py-3.5 bg-[#C9A84C] text-white font-body font-semibold rounded-lg hover:bg-[#B8933F] transition-colors"
            >
              Read All Reviews
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our fencing services, materials, and installation process."
          />
          <div className="mt-12">
            <FAQAccordion items={faqItems} />
          </div>
          <div className="text-center mt-12">
            <a
              href="/faq"
              className="inline-flex items-center px-8 py-3.5 bg-[#1B4332] text-white font-body font-semibold rounded-lg hover:bg-[#0f2b1f] transition-colors"
            >
              View All FAQs
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <CTABanner
        title="Ready to Enhance Your Property?"
        description="Contact JT Fence Inc. today for a free consultation and accurate quote on your fence installation or repair project."
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
