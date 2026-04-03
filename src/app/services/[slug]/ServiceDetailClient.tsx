'use client';

import { useMemo } from 'react';
import Hero from '@/components/Hero';
import SectionIntro from '@/components/SectionIntro';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';
import TestimonialCard from '@/components/TestimonialCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import AreaCard from '@/components/AreaCard';
import ServiceResponsiveImage from '@/components/ServiceResponsiveImage';
import { Service } from '@/data/services';
import { getServiceImageSet, poolFenceAllGalleryImages } from '@/data/serviceImages';
import { Testimonial } from '@/data/testimonials';
import { ServiceArea } from '@/data/serviceAreas';

interface ServiceDetailClientProps {
  service: Service;
  relatedTestimonials: Testimonial[];
  relatedAreas: ServiceArea[];
}

// Installation process steps - these can be customized per service
const getInstallationSteps = (serviceSlug: string) => {
  const baseSteps = [
    {
      number: 1,
      title: 'Site Preparation & Assessment',
      description: 'We assess your property, measure the fence line, and mark the proposed installation area for your approval.',
    },
    {
      number: 2,
      title: 'Post Installation',
      description: 'Posts are set at proper spacing with concrete footings to ensure stability and longevity through all weather conditions.',
    },
    {
      number: 3,
      title: 'Panel Installation',
      description: 'Panels or boards are securely attached to posts with proper alignment and spacing according to your design specifications.',
    },
    {
      number: 4,
      title: 'Finishing & Cleanup',
      description: 'Gates are installed and tested, final touches are made, and we thoroughly clean the work area.',
    },
  ];

  // Service-specific customizations
  if (serviceSlug === 'pet-dog-fencing') {
    baseSteps[1].description = 'Posts are set at proper spacing with concrete footings. For persistent diggers, we install below-ground barrier systems.';
    baseSteps[3].description = 'Secure gate latches are installed and tested. We verify the fence height and integrity meet your pet containment needs.';
  }

  if (serviceSlug === 'vinyl-fences' || serviceSlug === 'aluminum-fences') {
    baseSteps[3].description = 'Gates are installed with smooth operation, final touch-ups made, and we thoroughly clean the work area. Minimal maintenance education provided.';
  }

  if (serviceSlug === 'pool-fence') {
    return [
      {
        number: 1,
        title: 'Pool layout & access plan',
        description:
          'We measure your deck, coping, and gate locations, confirm fence height and spacing for pool safety, and walk through how metal barrier and vinyl perimeter sections meet.',
      },
      {
        number: 2,
        title: 'Posts & gate framing',
        description:
          'Posts are set in concrete with attention to paver lines and grade. Gate posts are plumbed for smooth self-closing hinges and reliable latch height.',
      },
      {
        number: 3,
        title: 'Barrier & privacy panels',
        description:
          'Panels are hung level with consistent picket spacing, clean transitions at corners, and color-matched hardware. Vinyl runs tie into the pool barrier where planned.',
      },
      {
        number: 4,
        title: 'Gate tune-up & walkthrough',
        description:
          'We adjust self-closing hinges, test latches, and review maintenance with you—then leave the site broom-clean.',
      },
    ];
  }

  return baseSteps;
};

// Get service-specific FAQ items
const getServiceFAQs = (serviceSlug: string) => {
  // Define service-specific FAQs
  const serviceFAQs: { [key: string]: { question: string; answer: string }[] } = {
    'wood-fences': [
      {
        question: 'How often should I stain or seal my wood fence?',
        answer:
          'We recommend sealing or staining your wood fence every 2-3 years to maintain protection against weathering and UV damage. This maintenance schedule helps extend your fence\'s lifespan to 15-20 years or more. The exact timing depends on your local climate and sun exposure.',
      },
      {
        question: 'Can wood fences be repaired if boards rot?',
        answer:
          'Yes, individual rotted boards can be replaced without replacing the entire fence. We can inspect your fence and replace only the damaged sections, which is typically more cost-effective than full replacement. Regular maintenance prevents rot from developing.',
      },
      {
        question: 'What wood species do you recommend for Massachusetts?',
        answer:
          'We primarily use pressure-treated lumber for its rot and insect resistance, and cedar for its natural beauty and durability. Both handle Massachusetts\' moisture and temperature variations well. We can discuss which is best for your specific property.',
      },
      {
        question: 'Is my wood fence environmentally friendly?',
        answer:
          'Wood is a renewable resource, making it more eco-friendly than some alternatives. Pressure-treated lumber is engineered for longevity, reducing replacement frequency. We source from responsible suppliers committed to sustainable forestry practices.',
      },
    ],
    'vinyl-fences': [
      {
        question: 'What should I do if my vinyl fence gets a crack?',
        answer:
          'Small cracks can often be repaired with vinyl patching compounds. For larger cracks or breaks, individual panels can be replaced without affecting the rest of the fence. Contact us for inspection and repair options.',
      },
      {
        question: 'Can vinyl fences be painted or stained?',
        answer:
          'Vinyl is not typically painted because its color is integral to the material. However, high-quality vinyl retains color for decades. If you want to change the color, it\'s usually more practical to replace panels than attempt painting.',
      },
      {
        question: 'How do I clean my vinyl fence?',
        answer:
          'Simply rinse your vinyl fence with a garden hose annually to remove dust and debris. For stubborn stains, use mild soap and water with a soft brush. Avoid abrasive cleaners and pressure washers above 1500 PSI, which can damage the vinyl.',
      },
      {
        question: 'Does vinyl fade in the New England sun?',
        answer:
          'Premium-grade vinyl like we use is engineered with UV inhibitors to resist fading. While all materials fade slightly over time, quality vinyl maintains its appearance for 20-30 years with minimal visible color change.',
      },
    ],
    'aluminum-fences': [
      {
        question: 'Will aluminum rust in coastal Massachusetts?',
        answer:
          'No, aluminum naturally resists rust and corrosion, even in salt-air environments. This makes it ideal for coastal properties where steel would corrode. A powder-coat finish provides additional UV protection and color longevity.',
      },
      {
        question: 'Can aluminum fences be customized?',
        answer:
          'Yes, aluminum offers excellent customization options. We can create custom designs with different heights, colors, and decorative elements. Aluminum\'s versatility allows us to match contemporary or ornamental architectural styles.',
      },
      {
        question: 'How strong is aluminum fencing?',
        answer:
          'Despite being lightweight, aluminum is incredibly strong and durable. It resists bending and maintains structural integrity even in high-wind situations. The material is rated for residential and commercial applications.',
      },
      {
        question: 'What maintenance does aluminum fencing need?',
        answer:
          'Aluminum requires minimal maintenance. Periodically rinse with water to remove salt spray and dust. No painting or staining needed. Annual visual inspections ensure any minor damage is addressed promptly.',
      },
    ],
    'pet-dog-fencing': [
      {
        question: 'What fence height is needed to contain my dog?',
        answer:
          'Most dogs are contained by 4-5 foot fencing. Larger, athletic breeds may need 5-6 feet. We assess your dog\'s jumping ability and breed characteristics to recommend appropriate height. We can also customize specific sections for escape-artist dogs.',
      },
      {
        question: 'How do you prevent diggers from escaping?',
        answer:
          'For persistent diggers, we install below-ground barrier systems that extend 6-12 inches below the fence line. These barriers prevent tunneling without being visible. We also recommend removing items near the fence that dogs might use to climb.',
      },
      {
        question: 'Can you install pet fencing with good sightlines?',
        answer:
          'Absolutely! Semi-privacy pet fencing allows you to see your pets while containing them. We design with gaps and spacing that prevent escape while maintaining visibility. This helps you supervise your pets\' outdoor activities.',
      },
      {
        question: 'What about gate latches for escape-artist pets?',
        answer:
          'We install specialized gate latches designed to prevent clever dogs from opening them. These include padlock compatibility and mechanical designs that resist dog manipulation. We test gates during installation to ensure security.',
      },
    ],
    'pool-fence': [
      {
        question: 'Do you install both the pool barrier and privacy fencing?',
        answer:
          'Yes. Many projects use black ornamental metal at the water for visibility and airflow, and white vinyl along the property line for privacy. We plan the full layout so gates, corners, and transitions look intentional—not patched together.',
      },
      {
        question: 'Will my gate self-close and latch?',
        answer:
          'We install self-closing hinges and latches suited to pool gates and adjust them during installation. We recommend a quick check each season and after heavy use so the gate continues to close reliably.',
      },
      {
        question: 'Can you work with existing pavers and coping?',
        answer:
          'We regularly install after or alongside hardscaping. We coordinate post placement with your deck and coping so lines stay straight and posts are secure—without cutting corners on footing depth.',
      },
      {
        question: 'What about winter and salt air on the South Shore?',
        answer:
          'We specify powder-coated metal and quality vinyl rated for outdoor exposure. Occasional rinsing of metal near splash zones and routine gate checks help hardware last in coastal and inland Massachusetts alike.',
      },
    ],
  };

  return (serviceFAQs[serviceSlug] || []).map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));
};

export default function ServiceDetailClient({
  service,
  relatedTestimonials,
  relatedAreas,
}: ServiceDetailClientProps) {
  // Get installation steps
  const installationSteps = useMemo(() => getInstallationSteps(service.slug), [service.slug]);

  // Get service-specific FAQs
  const serviceFAQs = useMemo(() => getServiceFAQs(service.slug), [service.slug]);

  const imageSet = useMemo(() => getServiceImageSet(service.slug), [service.slug]);

  const isPetPage = service.slug === 'pet-dog-fencing';
  const isPoolPage = service.slug === 'pool-fence';

  // Build JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.fullDescription,
    areaServed: {
      '@type': 'State',
      name: 'Massachusetts',
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'JT Fence Inc.',
      telephone: '(781) 420-5858',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'MA',
        addressCountry: 'US',
      },
      sameAs: [
        'https://www.facebook.com/jtfenceinc',
        'https://www.google.com/maps/place/JT+Fence',
      ],
    },
    priceRange: service.priceRangeEstimate,
  };

  const heroTitle = isPetPage
    ? 'Dog-Safe Fencing for Your Yard'
    : isPoolPage
      ? 'Pool Fences & Safety Barriers'
      : `Professional ${service.name} Installation in Massachusetts`;
  const heroSubtitle = isPetPage
    ? 'Containment built around real dog behavior—jumping, digging, and clever gate escapes. We design height, barriers, and hardware so your pets stay secure and you stay at ease.'
    : service.shortDescription;

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.name },
        ]}
      />

      {/* Hero Section */}
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        ctaText="Get Free Estimate"
        ctaLink="/contact"
        secondaryCtaText={
          isPetPage
            ? 'Ask About Your Dog'
            : isPoolPage
              ? 'Discuss Your Pool Layout'
              : service.slug === 'wood-fences'
                ? 'See All Services'
                : 'View All Services'
        }
        secondaryCtaLink={isPetPage || isPoolPage ? '/contact' : '/services'}
        backgroundImage={imageSet ? encodeURI(imageSet.hero.src) : undefined}
        overlayVariant={imageSet ? (isPetPage ? 'home' : 'photo') : 'default'}
      />

      {/* Intro Section with Full Description */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {isPetPage && (
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <SectionIntro
                eyebrow="Safety first"
                title="Fencing that respects how dogs act"
                description="Every install considers breed, energy level, and habits—so containment is reliable, not guesswork."
                centered
              />
            </div>
          )}
          {isPetPage && imageSet && (
            <div className="max-w-7xl mx-auto mb-12 md:mb-16">
              <ServiceResponsiveImage
                src={imageSet.intro.src}
                alt={imageSet.intro.alt}
                aspect="wide"
                priority
              />
            </div>
          )}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-[#2D3436]">
              <p className="text-lg leading-relaxed mb-6">{service.fullDescription}</p>
            </div>
          </div>
          {imageSet && !isPetPage && (
            <div className="mt-10 max-w-5xl mx-auto">
              <ServiceResponsiveImage
                src={imageSet.intro.src}
                alt={imageSet.intro.alt}
                aspect="wide"
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="pet-safety" className="py-16 md:py-24 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow={isPetPage ? 'Peace of mind' : isPoolPage ? 'Safety & curb appeal' : 'Why Choose'}
            title={
              isPetPage
                ? 'Why owners trust our pet fencing'
                : isPoolPage
                  ? 'Why Massachusetts homeowners choose our pool fencing'
                  : `Benefits of ${service.name}`
            }
            description={
              isPetPage
                ? 'Security details—height, gates, dig barriers, and latches—chosen for your situation, not a one-size catalog.'
                : isPoolPage
                  ? 'Open sightlines at the water, solid privacy where you want it, and hardware that works every day—not just on installation day.'
                  : `Discover the advantages that make ${service.name} an excellent choice for your property.`
            }
          />

          <div
            className={`mt-12 grid grid-cols-1 gap-10 items-start ${
              imageSet && !isPetPage ? 'lg:grid-cols-2' : ''
            }`}
          >
            {imageSet && !isPetPage && (
              <div className="order-2 lg:order-1 lg:sticky lg:top-28">
                <ServiceResponsiveImage
                  src={imageSet.benefitsHighlight.src}
                  alt={imageSet.benefitsHighlight.alt}
                  aspect="landscape"
                />
                {imageSet.benefitsHighlight.title && (
                  <p className="mt-3 text-center font-body text-sm text-[#9A9590]">
                    {imageSet.benefitsHighlight.title}
                  </p>
                )}
              </div>
            )}
            <div className={`space-y-6 ${imageSet && !isPetPage ? 'order-1 lg:order-2' : ''}`}>
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 border border-[#E8E4DF] hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C9A84C] flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-body text-[#2D3436] leading-relaxed">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {isPetPage && imageSet && (
            <div className="mt-14 max-w-7xl mx-auto">
              <ServiceResponsiveImage
                src={imageSet.benefitsHighlight.src}
                alt={imageSet.benefitsHighlight.alt}
                aspect="wide"
              />
              {imageSet.benefitsHighlight.title && (
                <p className="mt-3 text-center font-body text-sm text-[#9A9590]">{imageSet.benefitsHighlight.title}</p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Best Use Cases Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow={isPetPage ? 'Real situations' : isPoolPage ? 'Right fit' : 'Applications'}
            title={isPetPage ? 'When this kind of fencing matters' : isPoolPage ? 'Ideal pool fencing projects' : 'Best Use Cases'}
            description={
              isPetPage
                ? 'From athletic jumpers to diggers and multi-dog homes, we plan for real backyard behavior.'
                : isPoolPage
                  ? 'From new builds to remodels, we install barriers that match how your family uses the yard.'
                  : `Learn when ${service.name} is the ideal choice for your fencing needs.`
            }
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.bestUseCases.map((useCase, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-[#FAF8F5] rounded-lg border border-[#E8E4DF]">
                <span className="flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-md bg-[#C9A84C] text-white font-semibold text-sm">
                  {index + 1}
                </span>
                <p className="font-body text-[#2D3436] leading-relaxed">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Style & Design Options Section — omitted for pet & dog (dedicated page, not material categories) */}
      {!isPetPage && service.styleOptions.length > 0 && (
        <section className="py-16 md:py-24 bg-[#FAF8F5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Customization"
              title={isPoolPage ? 'Barrier types & layout options' : 'Available Styles & Designs'}
              description={
                isPoolPage
                  ? 'Mix ornamental metal at the pool with vinyl privacy along the line—planned as one project with gates and corners that line up.'
                  : `Choose from our range of ${service.name.toLowerCase()} styles to match your property's aesthetic.`
              }
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.styleOptions.map((style, index) => {
                const styleShot = imageSet?.styleImages[index];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden border border-[#E8E4DF] hover:border-[#C9A84C] hover:shadow-md transition-all flex flex-col"
                  >
                    {styleShot && (
                      <div className="border-b border-[#E8E4DF] -mx-px">
                        <ServiceResponsiveImage
                          src={styleShot.src}
                          alt={styleShot.alt}
                          aspect="landscape"
                          className="!rounded-none border-0 shadow-none bg-transparent"
                        />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                          <span className="font-semibold text-[#C9A84C]">{index + 1}</span>
                        </div>
                        <h4 className="font-heading font-semibold text-[#1B4332] text-left leading-snug">
                          {style}
                        </h4>
                      </div>
                      {styleShot?.caption && (
                        <p className="font-body text-sm text-[#9A9590] mt-2">{styleShot.caption}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Full project gallery — pool fence (all photography) */}
      {isPoolPage && (
        <section className="py-16 md:py-24 bg-white border-t border-[#E8E4DF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Real projects"
              title="Pool fence project gallery"
              description="A closer look at barrier layouts, privacy combinations, pavers, and backyards we have fenced across Massachusetts."
            />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {poolFenceAllGalleryImages.map((img, idx) => (
                <div
                  key={`${img.src}-${idx}`}
                  className={idx === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-1' : ''}
                >
                  <ServiceResponsiveImage
                    src={img.src}
                    alt={img.alt}
                    aspect={idx === 0 ? 'wide' : 'landscape'}
                    className={idx === 0 ? '!min-h-[220px] sm:!min-h-[280px]' : undefined}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* On-site detail photography */}
      {imageSet?.detailStrip && imageSet.detailStrip.length > 0 && (
        <section className="py-16 md:py-20 bg-white border-y border-[#E8E4DF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Our Work"
              title="Installation & Detail"
              description="Real project photography from JT Fence Inc. installations across the South Shore."
            />
            <div
              className={`mt-10 grid gap-6 ${
                imageSet.detailStrip.length > 1
                  ? 'grid-cols-1 md:grid-cols-2'
                  : 'grid-cols-1 max-w-4xl mx-auto'
              }`}
            >
              {imageSet.detailStrip.map((img, idx) => (
                <ServiceResponsiveImage
                  key={`${img.src}-${idx}`}
                  src={img.src}
                  alt={img.alt}
                  aspect="wide"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Durability & Maintenance Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Long-Term Care"
            title="Durability & Maintenance"
            description="Learn how to keep your fence looking beautiful and performing well for years to come."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAF8F5] rounded-lg p-8 border border-[#E8E4DF]">
              <h3 className="font-heading text-xl font-semibold text-[#1B4332] mb-4">Durability</h3>
              <p className="font-body text-[#2D3436] leading-relaxed">{service.durabilityInfo}</p>
            </div>
            <div className="bg-[#FAF8F5] rounded-lg p-8 border border-[#E8E4DF]">
              <h3 className="font-heading text-xl font-semibold text-[#1B4332] mb-4">Maintenance</h3>
              <p className="font-body text-[#2D3436] leading-relaxed">{service.maintenanceInfo}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-16 md:py-24 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Our Process"
            title="Installation Process"
            description="Here's how we ensure a professional, seamless installation from start to finish."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationSteps.map((step) => (
              <div key={step.number} className="bg-white rounded-lg p-6 border border-[#E8E4DF]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C9A84C] flex items-center justify-center">
                    <span className="font-heading font-bold text-white text-lg">{step.number}</span>
                  </div>
                  <h4 className="font-heading font-semibold text-[#1B4332] text-sm">{step.title}</h4>
                </div>
                <p className="font-body text-[#2D3436] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Questions"
            title={`${service.name} FAQ`}
            description={
              service.slug === 'wood-fences'
                ? 'Find answers to common questions about wood fencing and care.'
                : isPetPage
                  ? 'Common questions about fence height, diggers, gates, and keeping dogs safe.'
                  : isPoolPage
                    ? 'Gates, mixed materials, pavers, and what to expect on a pool fence project.'
                    : 'Find answers to common questions about our fencing services.'
            }
          />

          <div className="mt-12">
            <FAQAccordion items={serviceFAQs} />
          </div>
        </div>
      </section>

      {/* Related Testimonials Section */}
      {relatedTestimonials.length > 0 && (
        <section className="py-16 md:py-24 bg-[#FAF8F5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Real Reviews"
              title="What Our Customers Say"
              description={`Hear from homeowners who chose ${service.name} for their properties.`}
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  location={testimonial.location}
                  rating={testimonial.rating}
                  text={testimonial.text}
                  serviceType={service.name}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Service Areas Section */}
      {relatedAreas.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Service Areas"
              title="Available Throughout South Shore"
              description={`We provide ${service.name.toLowerCase()} installation throughout Massachusetts. View service areas near you.`}
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedAreas.map((area) => (
                <AreaCard
                  key={area.slug}
                  name={area.name}
                  slug={area.slug}
                  description={area.description.split('\n')[0]}
                />
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="/service-areas"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#C9A84C] text-[#C9A84C] font-body font-semibold rounded-lg hover:bg-[#C9A84C] hover:text-white transition-colors text-base"
              >
                View All Service Areas
              </a>
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <CTABanner
        title={
          isPetPage
            ? 'Ready to secure your yard for your dog?'
            : isPoolPage
              ? 'Ready to plan your pool fence?'
              : 'Ready for Your New Fence?'
        }
        description={
          isPetPage
            ? 'Tell us about your dogs and your yard—we’ll recommend height, barriers, and gate hardware that fit real life.'
            : isPoolPage
              ? 'Share your pool and deck layout—we’ll recommend barrier height, gate locations, and how vinyl and metal sections can work together.'
              : `Contact JT Fence Inc. today for a free estimate on ${service.name} installation. Our expert team is ready to bring your fencing vision to life.`
        }
        primaryCta={{
          text: 'Get Free Estimate',
          link: '/contact',
        }}
        phoneCta
        phoneNumber="(781) 420-5858"
      />
    </>
  );
}
