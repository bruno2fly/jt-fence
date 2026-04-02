# Quick Start Guide

## Component System Quick Reference

### 1. Import Components

```tsx
// Individual imports
import { Header, Footer, Hero } from '@/components';

// Or specific imports for smaller bundles
import Header from '@/components/Header';
```

### 2. Basic Page Layout

```tsx
'use client';

import { Header, Hero, Footer, SectionIntro, ServiceCard } from '@/components';
import { Home } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Header phoneNumber="(555) 123-4567" />
      
      <main>
        <Hero
          title="Premium Fencing Solutions"
          subtitle="Professional installation for residential and commercial properties"
          ctaText="Get Free Quote"
          ctaLink="/quote"
        />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <SectionIntro
              eyebrow="SERVICES"
              title="What We Provide"
              description="Expert fencing solutions tailored to your needs"
              centered
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
```

### 3. Common Patterns

#### Services Section
```tsx
import { SectionIntro, ServiceCard } from '@/components';
import { Hammer, Lock, Zap, Award } from 'lucide-react';

const services = [
  {
    title: 'Residential Fencing',
    description: 'Custom fencing for homes',
    slug: 'residential-fencing',
    icon: <Hammer />
  },
  // ... more services
];

export function ServicesSection() {
  return (
    <section className="py-20">
      <SectionIntro
        eyebrow="SERVICES"
        title="Our Offerings"
        description="Complete fencing solutions"
        centered
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map(s => (
          <ServiceCard key={s.slug} {...s} />
        ))}
      </div>
    </section>
  );
}
```

#### Testimonials Section
```tsx
import { SectionIntro, TestimonialCard } from '@/components';

const testimonials = [
  {
    name: 'John Smith',
    location: 'Downtown',
    rating: 5,
    text: 'Excellent service and professional team!',
    serviceType: 'Residential Fencing'
  },
  // ... more testimonials
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#FAF8F5]">
      <SectionIntro
        eyebrow="CLIENT REVIEWS"
        title="Testimonials"
        description="See what our customers say"
        centered
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
```

#### Service Areas Section
```tsx
import { SectionIntro, AreaCard } from '@/components';

const areas = [
  {
    name: 'Downtown',
    slug: 'downtown',
    description: 'Professional fencing in the downtown area'
  },
  // ... more areas
];

export function ServiceAreasSection() {
  return (
    <section className="py-20">
      <SectionIntro
        eyebrow="SERVICE AREAS"
        title="Where We Work"
        description="Serving multiple communities"
        centered
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {areas.map(area => (
          <AreaCard key={area.slug} {...area} />
        ))}
      </div>
    </section>
  );
}
```

#### Portfolio Section
```tsx
import { SectionIntro, PortfolioCard } from '@/components';

const projects = [
  {
    title: 'Modern Privacy Fence',
    description: 'Custom-built with premium materials',
    serviceType: 'Residential Fencing',
    location: 'North Side',
    imageAlt: 'Privacy Fence'
  },
  // ... more projects
];

export function PortfolioSection() {
  return (
    <section className="py-20 bg-[#FAF8F5]">
      <SectionIntro
        eyebrow="PORTFOLIO"
        title="Recent Projects"
        description="See our latest work"
        centered
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <PortfolioCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
```

#### FAQ Section
```tsx
import { SectionIntro, FAQAccordion } from '@/components';

const faqs = [
  {
    question: 'How long does installation take?',
    answer: 'Most residential projects take 2-5 days...'
  },
  {
    question: 'Do you offer warranties?',
    answer: 'Yes, we offer a 5-year workmanship warranty...'
  },
];

export function FAQSection() {
  return (
    <section className="py-20">
      <SectionIntro
        eyebrow="FAQ"
        title="Common Questions"
        description="Answers to your questions"
        centered
      />
      <div className="max-w-2xl mx-auto">
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
```

#### Quote Form Page
```tsx
import { QuoteForm, Breadcrumbs, SectionIntro } from '@/components';

export default function QuotePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Free Quote' }
        ]}
      />

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <SectionIntro
            title="Get Your Free Quote"
            description="Fill out the form below and we'll contact you within 24 hours"
            centered
          />

          <div className="mt-12">
            <QuoteForm onSuccess={() => console.log('Success!')} />
          </div>
        </div>
      </section>
    </>
  );
}
```

### 4. Process Steps

```tsx
import { SectionIntro, ProcessSteps } from '@/components';

const processSteps = [
  {
    number: 1,
    title: 'Consultation',
    description: 'Discuss your project needs and vision'
  },
  {
    number: 2,
    title: 'Estimate',
    description: 'Receive a detailed quote with timeline'
  },
  {
    number: 3,
    title: 'Installation',
    description: 'Professional installation by our team'
  },
  {
    number: 4,
    title: 'Complete',
    description: 'Final walkthrough and satisfaction guarantee'
  }
];

export function ProcessSection() {
  return (
    <section className="py-20">
      <SectionIntro
        eyebrow="PROCESS"
        title="How It Works"
        description="Our streamlined process from start to finish"
        centered
      />
      <div className="max-w-6xl mx-auto px-4">
        <ProcessSteps steps={processSteps} />
      </div>
    </section>
  );
}
```

### 5. CTA Banner

```tsx
import { CTABanner } from '@/components';

export function CallToAction() {
  return (
    <CTABanner
      title="Ready to Start Your Project?"
      description="Contact us today for a free consultation and estimate"
      primaryCta={{
        text: 'Get Started',
        link: '/quote'
      }}
      phoneCta={true}
      phoneNumber="(555) 123-4567"
    />
  );
}
```

### 6. JSON-LD SEO

```tsx
import { JsonLd } from '@/components';

export function HomePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'JT Fence Inc.',
    image: 'https://example.com/logo.png',
    description: 'Premium fencing solutions',
    telephone: '(555) 123-4567',
    areaServed: ['Downtown', 'North Side', 'Suburbs'],
    serviceType: ['Fencing', 'Gate Installation']
  };

  return (
    <>
      <JsonLd data={schema} />
      {/* Page content */}
    </>
  );
}
```

## Color Reference

Use these colors throughout:

```tsx
// Primary
bg-[#1B4332]  // Forest Green
text-[#1B4332]

// Secondary
bg-[#2D3436]  // Charcoal
text-[#2D3436]

// Accent
bg-[#C9A84C]  // Gold
text-[#C9A84C]

// Light
bg-[#FAF8F5]  // Cream
text-[#FAF8F5]

// Border
border-[#E8E4DF]  // Stone
```

## Tailwind Classes to Know

These custom classes are used throughout components:

```tsx
// Font classes (set up in your tailwind.config.ts)
className="font-heading"  // Playfair Display
className="font-body"     // Inter
```

## Client vs Server Components

**Client Components (with 'use client'):**
- Header.tsx
- FAQAccordion.tsx
- QuoteForm.tsx

**Server Components:**
- All others by default

## Performance Tips

1. Use `next/image` for portfolio images in production
2. Implement lazy loading for portfolio sections
3. Use React.memo for card components if rendering many
4. Consider code splitting for heavy sections

## Responsive Breakpoints

All components are mobile-first using:
- Default: Mobile (< 640px)
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

## Next Steps

1. Set up your Next.js project with Tailwind CSS
2. Configure font imports in globals.css:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap');
   ```

3. Add font classes to tailwind.config.ts:
   ```js
   theme: {
     fontFamily: {
       heading: ['Playfair Display', 'serif'],
       body: ['Inter', 'sans-serif'],
     }
   }
   ```

4. Install lucide-react: `npm install lucide-react`
5. Import and use components as shown above
6. Customize content as needed for your business

