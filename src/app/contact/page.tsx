import { Metadata } from 'next';
import {
  Breadcrumbs,
  SectionIntro,
  QuoteForm,
} from '@/components';
import { company } from '@/data/company';
import { serviceAreas } from '@/data/serviceAreas';
import { metadata as metadataMap } from '@/data/metadata';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: metadataMap['/contact'].title,
  description: metadataMap['/contact'].description,
  keywords: metadataMap['/contact'].keywords,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    title: metadataMap['/contact'].ogTitle,
    description: metadataMap['/contact'].ogDescription,
    url: 'https://jtfenceboston.com/contact',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JT Fence Inc. - Premium Fencing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataMap['/contact'].ogTitle,
    description: metadataMap['/contact'].ogDescription,
    images: ['/images/og-image.jpg'],
  },
};

export default function ContactPage() {
  const serviceAreaCities = serviceAreas.map((area) => area.name);

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
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
            Contact JT Fence Inc.
          </h1>
          <p className="font-body text-lg md:text-xl text-[#E8E4DF] max-w-2xl mx-auto leading-relaxed">
            Ready to transform your property? Get in touch with our team for a free consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <SectionIntro
                eyebrow="Get in Touch"
                title="Request Your Free Quote"
                description="Fill out the form below and we'll contact you within 24 hours to discuss your fencing project."
                centered={false}
              />
            </div>
            <QuoteForm />
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              {/* Phone */}
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#C9A84C]">
                      <Phone className="h-6 w-6 text-[#1B4332]" />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#1B4332]">
                    Call Us
                  </h3>
                </div>
                <a
                  href={`tel:${company.phone.replace(/\D/g, '')}`}
                  className="font-body text-[#C9A84C] hover:text-[#B8933F] transition-colors text-lg font-semibold"
                >
                  {company.phone}
                </a>
                <p className="font-body text-sm text-[#2D3436] mt-2">
                  Call for immediate assistance or to schedule your consultation.
                </p>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#C9A84C]">
                      <Mail className="h-6 w-6 text-[#1B4332]" />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#1B4332]">
                    Email
                  </h3>
                </div>
                <a
                  href={`mailto:${company.email}`}
                  className="font-body text-[#C9A84C] hover:text-[#B8933F] transition-colors text-lg font-semibold break-all"
                >
                  {company.email}
                </a>
                <p className="font-body text-sm text-[#2D3436] mt-2">
                  Send us details about your project anytime.
                </p>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#C9A84C]">
                      <MapPin className="h-6 w-6 text-[#1B4332]" />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#1B4332]">
                    Location
                  </h3>
                </div>
                <p className="font-body text-lg font-semibold text-[#2D3436]">
                  {company.location}
                </p>
                <p className="font-body text-sm text-[#2D3436] mt-2">
                  Serving {serviceAreaCities.length}+ South Shore communities
                </p>
              </div>

              {/* Business Hours */}
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#C9A84C]">
                      <Clock className="h-6 w-6 text-[#1B4332]" />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#1B4332]">
                    Business Hours
                  </h3>
                </div>
                <div className="font-body text-sm text-[#2D3436] space-y-1">
                  <p><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
                  <p><span className="font-semibold">Saturday:</span> 9:00 AM - 4:00 PM</p>
                  <p><span className="font-semibold">Sunday:</span> Closed</p>
                </div>
                <p className="font-body text-xs text-[#9A9590] mt-3">
                  We respond to inquiries within 24 hours
                </p>
              </div>

              {/* Free Consultation Banner */}
              <div className="bg-[#FAF8F5] border-2 border-[#C9A84C] rounded-lg p-6 mt-8">
                <h4 className="font-heading text-lg font-semibold text-[#1B4332] mb-2">
                  Free Consultation
                </h4>
                <p className="font-body text-sm text-[#2D3436] mb-3">
                  We offer no-obligation consultations to discuss your fencing project and provide accurate pricing.
                </p>
                <p className="font-body text-xs font-semibold text-[#C9A84C] italic">
                  No pressure. Just honest advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white border-y border-[#E8E4DF] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Location"
            title="Find Us"
            description="Based in Plymouth, we serve the South Shore and surrounding communities."
            centered={true}
          />
          <div className="mt-10 w-full overflow-hidden rounded-lg border border-[#E8E4DF] shadow-sm bg-[#E8E4DF]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94551.43894996498!2d-70.72723895!3d41.9584457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4b5b0a3f24c59%3A0x7c31b7b2f3e8b1a0!2sPlymouth%2C%20MA!5e0!3m2!1sen!1sus!4v1680000000000!5m2!1sen!1sus"
              title="Map of Plymouth, MA — JT Fence Inc."
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
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Service Coverage"
            title="Areas We Serve"
            description="JT Fence Inc. serves all of South Shore Massachusetts with professional fencing solutions."
            centered={true}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {serviceAreaCities.map((city) => (
              <div
                key={city}
                className="bg-white rounded-lg p-4 border border-[#E8E4DF] hover:border-[#C9A84C] transition-colors text-center"
              >
                <p className="font-body font-semibold text-[#1B4332]">{city}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-[#2D3436] text-center mt-8 text-sm">
            Don't see your town listed? Contact us to confirm service availability.
          </p>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionIntro
          eyebrow="First Step to Your New Fence"
          title="Why Reach Out Today?"
          description="The sooner you contact us, the sooner you can start enjoying your new fence."
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            {
              title: 'Free Estimate',
              description: 'No cost, no obligation consultation to discuss your project.',
            },
            {
              title: 'Expert Advice',
              description: 'Benefit from 15+ years of experience and professional guidance.',
            },
            {
              title: 'Custom Solutions',
              description: 'We tailor our approach to your specific property and needs.',
            },
            {
              title: 'Transparent Pricing',
              description: 'Know exactly what you\'re getting with detailed, itemized quotes.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-[#E8E4DF] hover:shadow-lg transition-shadow">
              <h3 className="font-heading font-semibold text-[#1B4332] mb-2">
                {item.title}
              </h3>
              <p className="font-body text-[#2D3436] text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
