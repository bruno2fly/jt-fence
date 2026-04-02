import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionIntro from '@/components/SectionIntro';
import ProcessSteps from '@/components/ProcessSteps';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';
import { faqs } from '@/data/faqs';
import { company } from '@/data/company';
import { metadata as metadataMap } from '@/data/metadata';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: metadataMap['/process'].title,
  description: metadataMap['/process'].description,
  keywords: metadataMap['/process'].keywords,
  openGraph: {
    title: metadataMap['/process'].ogTitle,
    description: metadataMap['/process'].ogDescription,
  },
};

const processSteps = [
  {
    number: 1,
    title: 'Free Estimate Request',
    description: 'Contact us to schedule your free consultation and property assessment.',
  },
  {
    number: 2,
    title: 'Property Consultation',
    description: 'We visit your property, listen to your vision, and discuss material and design options.',
  },
  {
    number: 3,
    title: 'Fence Planning & Design',
    description: 'We create a detailed plan and provide transparent pricing with no hidden costs.',
  },
  {
    number: 4,
    title: 'Professional Installation',
    description: 'Our expert team completes your installation with precision and professional care.',
  },
  {
    number: 5,
    title: 'Final Walkthrough',
    description: 'We conduct a thorough walkthrough to ensure your complete satisfaction.',
  },
];

const stepDetails = [
  {
    step: 'Free Estimate Request',
    content: 'Getting started is easy. Call us at (781) 420-5858 or fill out our online form to schedule your free consultation. We\'ll work around your schedule and provide a convenient appointment time. There\'s no obligation—we just want to learn about your project and discuss how we can help.',
  },
  {
    step: 'Property Consultation',
    content: 'During the consultation, we visit your property to assess the scope of your project. We measure your property line, evaluate soil conditions, identify any obstacles or challenges, and listen to your vision for the finished fence. This is your opportunity to ask questions and discuss your ideas with our experienced team.',
  },
  {
    step: 'Fence Planning & Design',
    content: 'After the consultation, we develop a detailed plan including material recommendations, design specifications, and accurate pricing. We handle all permit research and applications, ensuring your project complies with local regulations. We provide the quote in writing with itemized costs so you know exactly what you\'re getting.',
  },
  {
    step: 'Professional Installation',
    content: 'Once you approve the quote, we schedule your installation at a time convenient for you. Our crew arrives on time with all necessary equipment and materials. We follow our proven installation process: site preparation, property line marking (which you approve), post installation with concrete footings, panel installation, gate hanging, and final adjustments. We maintain a professional worksite throughout.',
  },
  {
    step: 'Final Walkthrough',
    content: 'Upon completion, we conduct a thorough walkthrough with you to ensure everything meets your expectations. We address any questions or adjustments needed. We provide care instructions for your specific fence material and discuss warranty coverage. Finally, we clean up thoroughly, leaving your property spotless.',
  },
];

export default function ProcessPage() {
  const processFaqs = faqs
    .filter((faq) => faq.category === 'Process')
    .map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    }));

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Process' },
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
            Our Fencing Process
          </h1>
          <p className="font-body text-lg md:text-xl text-[#E8E4DF] max-w-2xl mx-auto leading-relaxed">
            A proven, transparent, and customer-focused approach from start to finish
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionIntro
          eyebrow="How We Work"
          title="A Transparent Process You Can Trust"
          description="We've refined our fence installation process over 15+ years to ensure quality results, clear communication, and customer satisfaction at every step."
          centered={true}
        />
      </section>

      {/* Process Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <ProcessSteps steps={processSteps} />
      </section>

      {/* Detailed Step Descriptions */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {stepDetails.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-[#E8E4DF]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#C9A84C] flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-[#1B4332]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-[#1B4332] mb-3">
                      Step {index + 1}: {item.step}
                    </h3>
                    <p className="font-body text-[#2D3436] leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionIntro
          eyebrow="Our Commitment"
          title="What Makes Our Process Different"
          description="Our approach prioritizes clear communication, professional execution, and your complete satisfaction."
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: 'Transparent Pricing',
              description: 'No hidden costs, no surprises. You receive a detailed, itemized quote before work begins. We discuss all costs upfront.',
            },
            {
              title: 'Professional Project Management',
              description: 'We handle all permits, inspections, and compliance with local regulations. You don\'t have to worry about the details.',
            },
            {
              title: 'Quality Assurance',
              description: 'We inspect our work thoroughly and make adjustments until you\'re completely satisfied with the final result.',
            },
            {
              title: 'Respectful Installation',
              description: 'We treat your property with care, protect your landscaping, and maintain a clean, professional worksite.',
            },
            {
              title: 'Timeline Reliability',
              description: 'We provide realistic schedules and keep you updated. Your project stays on track from consultation through completion.',
            },
            {
              title: 'Ongoing Support',
              description: 'After installation, we provide care instructions and are available to answer questions about maintenance and warranties.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-8 border border-[#E8E4DF] hover:shadow-lg transition-shadow">
              <h3 className="font-heading text-lg font-semibold text-[#1B4332] mb-3">
                {item.title}
              </h3>
              <p className="font-body text-[#2D3436] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Common Questions"
            title="About Our Process"
            description="Find answers to questions about how we work and what to expect."
            centered={true}
          />
          <div className="mt-12">
            {processFaqs.length > 0 ? (
              <FAQAccordion items={processFaqs} />
            ) : (
              <p className="text-center font-body text-[#2D3436]">
                Check back for frequently asked questions about our process.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Timeline Expectations */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionIntro
          eyebrow="Timeline"
          title="What to Expect"
          description="Here's a typical timeline for a residential fencing project."
          centered={true}
        />
        <div className="mt-12 space-y-6">
          {[
            { phase: 'Free Estimate', timeframe: '1-2 days to schedule', description: 'We contact you within 24 hours to schedule your consultation.' },
            { phase: 'Consultation & Measurements', timeframe: '1-2 hours', description: 'On-site assessment, property evaluation, and design discussion.' },
            { phase: 'Quote Development', timeframe: '3-5 business days', description: 'We prepare your detailed quote and send it for review.' },
            { phase: 'Scheduling Installation', timeframe: 'Flexible', description: 'You choose a convenient time within 2-4 weeks.' },
            { phase: 'Installation', timeframe: '2-5 business days', description: 'Most residential projects complete in this timeframe.' },
            { phase: 'Final Inspection', timeframe: '1 day', description: 'Walkthrough and final adjustments with you present.' },
          ].map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1B4332]">
                  <span className="font-heading font-bold text-[#C9A84C]">{index + 1}</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-heading font-semibold text-[#1B4332] mb-1">
                  {item.phase}
                </h4>
                <p className="font-body text-sm text-[#C9A84C] font-semibold mb-2">
                  {item.timeframe}
                </p>
                <p className="font-body text-[#2D3436]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="font-body text-[#2D3436] mt-8 p-4 bg-white rounded-lg border-l-4 border-[#C9A84C]">
          Exact timeline varies based on project complexity, permit requirements, and weather conditions. We provide realistic estimates during your consultation.
        </p>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Get Started?"
        description="Let's begin your fencing project. Contact us today for a free consultation and learn how our process will transform your property."
        primaryCta={{
          text: 'Schedule Your Free Estimate',
          link: '/contact',
        }}
        phoneCta={true}
        phoneNumber={company.phone}
      />
    </>
  );
}
