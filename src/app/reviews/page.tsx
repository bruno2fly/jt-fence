import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionIntro from '@/components/SectionIntro';
import TestimonialCard from '@/components/TestimonialCard';
import CTABanner from '@/components/CTABanner';
import { testimonials } from '@/data/testimonials';
import { company } from '@/data/company';
import { metadata as metadataMap } from '@/data/metadata';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
  title: metadataMap['/reviews'].title,
  description: metadataMap['/reviews'].description,
  keywords: metadataMap['/reviews'].keywords,
  openGraph: {
    title: metadataMap['/reviews'].ogTitle,
    description: metadataMap['/reviews'].ogDescription,
  },
};

export default function ReviewsPage() {
  const averageRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);
  const totalReviews = testimonials.length;

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Reviews' },
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
            Customer Reviews
          </h1>
          <p className="font-body text-lg md:text-xl text-[#E8E4DF] max-w-2xl mx-auto leading-relaxed">
            See what homeowners throughout South Shore Massachusetts say about their experience with JT Fence Inc.
          </p>
        </div>
      </section>

      {/* Intro Section with Trust Summary */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionIntro
          eyebrow="Trusted by Homeowners"
          title="5-Star Customer Satisfaction"
          description="Our customers consistently rate us 5 stars for quality craftsmanship, professional service, and exceptional results."
          centered={true}
        />
      </section>

      {/* Trust Summary Cards */}
      <section className="bg-[#FAF8F5] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center border border-[#E8E4DF]">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="fill-[#C9A84C] text-[#C9A84C]"
                  />
                ))}
              </div>
              <div className="font-heading text-4xl font-bold text-[#1B4332] mb-2">
                {averageRating}
              </div>
              <p className="font-body text-[#2D3436]">Average Rating</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center border border-[#E8E4DF]">
              <div className="font-heading text-4xl font-bold text-[#1B4332] mb-2">
                {totalReviews}+
              </div>
              <p className="font-body text-[#2D3436]">Customer Reviews</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center border border-[#E8E4DF]">
              <div className="font-heading text-4xl font-bold text-[#1B4332] mb-2">
                100%
              </div>
              <p className="font-body text-[#2D3436]">Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
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
      </section>

      {/* Why Customers Trust Us */}
      <section className="bg-[#1B4332] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="What Our Customers Value"
            title="Why Homeowners Choose JT Fence Inc."
            description="Our 5-star ratings reflect our commitment to quality, professionalism, and customer satisfaction."
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: 'Quality Craftsmanship',
                description: 'Professional installations that look beautiful and are built to last. Our attention to detail shows in every project.',
              },
              {
                title: 'Professional Service',
                description: 'From initial consultation to final walkthrough, our team treats your property with respect and care.',
              },
              {
                title: 'Clear Communication',
                description: 'We keep you informed every step of the way. No surprises, just transparent communication and quality work.',
              },
              {
                title: 'Fair Pricing',
                description: 'Competitive pricing that reflects the quality of our materials and workmanship. Free estimates, no obligations.',
              },
              {
                title: 'Reliable Timeline',
                description: 'We complete projects on schedule and provide realistic estimates from the start.',
              },
              {
                title: 'Thorough Cleanup',
                description: 'Professional site management and thorough cleanup after every installation. We leave your property better than we found it.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:border-[#C9A84C] transition-colors">
                <h3 className="font-heading text-lg font-semibold text-[#FAF8F5] mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-[#E8E4DF] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionIntro
          eyebrow="Real Results"
          title="How JT Fence Inc. Transformed Properties"
          description="Our customers share how our fencing solutions enhanced their properties and transformed their outdoor spaces."
          centered={true}
        />
        <div className="mt-12 space-y-8 font-body text-[#2D3436] leading-relaxed text-lg">
          <p>
            Every 5-star review represents more than just a satisfied customer—it represents a successfully completed project that enhanced a property and improved a family's quality of life. Whether it was providing privacy for a backyard retreat, securing a safe space for pets, or adding modern aesthetics to a contemporary home, our work makes a real difference.
          </p>
          <p>
            The consistent praise for our professional service, quality materials, and attention to detail reflects our core values. We don't just meet expectations; we exceed them. That's why customers throughout South Shore Massachusetts recommend us to friends and family, and why many become repeat customers for additional projects.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Join Our Satisfied Customers?"
        description="Experience the JT Fence Inc. difference. Contact us today for a free consultation and see why homeowners throughout South Shore Massachusetts trust us with their fencing needs."
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
