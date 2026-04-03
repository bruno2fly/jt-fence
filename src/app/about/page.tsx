import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionIntro from '@/components/SectionIntro';
import CTABanner from '@/components/CTABanner';
import { company } from '@/data/company';
import { metadata as metadataMap } from '@/data/metadata';
import {
  Award,
  Users,
  Heart,
  Zap,
} from 'lucide-react';
import { aboutPageHeroBackgroundSrc, encodeImageSrc } from '@/data/serviceImages';

export const metadata: Metadata = {
  title: metadataMap['/about'].title,
  description: metadataMap['/about'].description,
  keywords: metadataMap['/about'].keywords,
  openGraph: {
    title: metadataMap['/about'].ogTitle,
    description: metadataMap['/about'].ogDescription,
  },
};

const values = [
  {
    icon: Award,
    title: 'Quality Craftsmanship',
    description: 'We obsess over the details and take pride in delivering installations that exceed expectations.',
  },
  {
    icon: Users,
    title: 'Customer-First Approach',
    description: 'Your satisfaction is our top priority. We listen, communicate clearly, and deliver what we promise.',
  },
  {
    icon: Heart,
    title: 'Local Community',
    description: 'We\'re proud to be part of the South Shore community and give back through quality service.',
  },
  {
    icon: Zap,
    title: 'Professional Excellence',
    description: 'Licensed, insured, and committed to maintaining the highest industry standards.',
  },
];

const differences = [
  {
    title: 'Premium Craftsmanship',
    description: 'We source the finest materials and employ time-tested installation techniques perfected over 15+ years. Every fence is built to last.',
  },
  {
    title: 'Clear Communication',
    description: 'From the initial consultation through project completion, we keep you informed every step of the way. No surprises, just transparency.',
  },
    {
    title: 'Clean Installations',
    description: 'Professional site management, careful protection of your property, and thorough cleanup are standard on every project.',
  },
];

export default function About() {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />

      {/* Page Hero */}
      <section
        className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center pt-12 pb-12 overflow-hidden"
        style={{
          backgroundImage: `url(${encodeImageSrc(aboutPageHeroBackgroundSrc)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1810]/88 via-[#1B4332]/80 to-[#1a2220]/90" aria-hidden />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#FAF8F5] mb-6 leading-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
            About JT Fence Inc.
          </h1>
          <p className="font-body text-lg md:text-xl text-[#E8E4DF] max-w-2xl mx-auto leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.4)]">
            Serving South Shore Massachusetts with quality fencing solutions since 2008
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionIntro
          eyebrow="Our Story"
          title="Founded on Quality and Integrity"
          description="JT Fence Inc. was established in 2008 with a simple mission: deliver premium fencing solutions with exceptional customer service."
          centered={true}
        />
        <div className="mt-12 space-y-8 font-body text-[#2D3436] leading-relaxed text-lg">
          <p>
            What started as a small operation with a commitment to quality has grown into the trusted fencing contractor throughout South Shore Massachusetts. Over the past 15+ years, we've completed hundreds of installations, earning the trust and loyalty of homeowners and business owners across Plymouth County and surrounding areas.
          </p>
          <p>
            Our growth has been built on a foundation of honest communication, superior craftsmanship, and genuine care for our customers' satisfaction. We don't just install fences—we enhance properties and create lasting value for the families and businesses we serve.
          </p>
          <p>
            Today, JT Fence Inc. continues to lead the market with innovation in materials and techniques, while maintaining the personal touch and attention to detail that defined us from day one. We remain committed to being the South Shore's first choice for professional fencing solutions.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Our Difference"
            title="What Sets JT Fence Inc. Apart"
            description="We combine years of experience, quality materials, and a customer-first philosophy to deliver exceptional results."
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {differences.map((diff, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-[#E8E4DF] hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#C9A84C] rounded-full flex items-center justify-center mb-6 flex-shrink-0">
                  <span className="font-heading font-bold text-[#1B4332]">{index + 1}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#1B4332] mb-4">
                  {diff.title}
                </h3>
                <p className="font-body text-[#2D3436] leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionIntro
          eyebrow="Core Values"
          title="The Principles That Guide Us"
          description="These values shape every decision we make and every project we complete."
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1B4332] rounded-full mb-6 flex-shrink-0">
                  <Icon className="w-8 h-8 text-[#C9A84C]" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#1B4332] mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-[#2D3436] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Company Stats / Key Facts */}
      <section className="bg-[#1B4332] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-bold text-[#C9A84C] mb-2">
                {company.yearsExperience}+
              </div>
              <p className="font-body text-[#E8E4DF] text-lg">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-bold text-[#C9A84C] mb-2">
                500+
              </div>
              <p className="font-body text-[#E8E4DF] text-lg">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-bold text-[#C9A84C] mb-2">
                100%
              </div>
              <p className="font-body text-[#E8E4DF] text-lg">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-bold text-[#C9A84C] mb-2">
                9
              </div>
              <p className="font-body text-[#E8E4DF] text-lg">Service Areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Culture */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionIntro
          eyebrow="Our Team"
          title="Skilled Professionals You Can Trust"
          description="Our team combines years of experience, specialized training, and a genuine commitment to customer satisfaction."
          centered={true}
        />
        <div className="mt-12 space-y-8 font-body text-[#2D3436] leading-relaxed text-lg">
          <p>
            Every member of the JT Fence Inc. team brings expertise, professionalism, and a commitment to excellence. Our installers are trained in the latest techniques and materials, ensuring your fence is built to the highest standards.
          </p>
          <p>
            We invest in our people through ongoing training and professional development. This commitment to growth allows us to offer you the most current solutions and best practices in the fencing industry.
          </p>
          <p>
            Beyond technical skills, our team is defined by integrity and a customer-first attitude. We treat every property as if it were our own and take pride in the work we do.
          </p>
        </div>
      </section>

      {/* Certifications & Qualifications */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionIntro
            eyebrow="Credentials"
            title="Licensed, Insured, and Certified"
            description="We maintain all necessary certifications and licenses to operate professionally and responsibly."
            centered={true}
          />
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {company.certifications.map((cert, index) => (
              <div
                key={index}
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-[#C9A84C] rounded-full"
              >
                <span className="font-body font-semibold text-[#1B4332]">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Work With JT Fence Inc.?"
        description="Contact us today to discuss your fencing project and see why we're the trusted choice throughout South Shore Massachusetts."
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
