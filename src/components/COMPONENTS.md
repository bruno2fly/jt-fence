# JT Fence Inc. Component Library

Complete production-ready component system for the JT Fence Inc. website. All components use TypeScript, Tailwind CSS, and follow the premium design system specifications.

## Design System

**Colors:**
- Primary Forest Green: `#1B4332`
- Secondary Charcoal: `#2D3436`
- Accent Gold: `#C9A84C`
- Cream: `#FAF8F5`
- Stone: `#E8E4DF`

**Typography:**
- Heading Font: `Playfair Display` (class: `font-heading`)
- Body Font: `Inter` (class: `font-body`)

**Style:** Premium, clean, architectural, trustworthy

---

## Layout Components

### Header
Sticky header with responsive navigation, mobile menu, and CTA button.

**Features:**
- Sticky positioning with scroll effect
- Desktop dropdown menu for Services
- Mobile hamburger menu with slide-out drawer
- "Get a Free Quote" CTA button
- Click-to-call phone number on desktop
- Smooth transitions and animations

**Props:**
```typescript
interface HeaderProps {
  phoneNumber?: string; // Default: '(555) 123-4567'
}
```

**Usage:**
```tsx
import { Header } from '@/components';

export default function Layout() {
  return <Header phoneNumber="(555) 123-4567" />;
}
```

---

### Footer
Dark footer with company info, navigation links, and social media.

**Features:**
- 4-column layout with company info
- Phone, email, and address display
- Quick links navigation
- Services links
- Service areas links
- Social media links (Facebook, Instagram)
- Copyright and legal links

**Props:**
```typescript
interface FooterProps {
  phoneNumber?: string;
  email?: string;
  address?: string;
}
```

**Usage:**
```tsx
import { Footer } from '@/components';

export default function Layout() {
  return (
    <Footer
      phoneNumber="(555) 123-4567"
      email="info@jtfence.com"
      address="Your City, State"
    />
  );
}
```

---

## Hero & Section Components

### Hero
Large hero section with gradient overlay, typography, and trust badges.

**Features:**
- Gradient overlay on background image or solid gradient
- Large Playfair Display heading
- Subtitle with premium typography
- Dual CTA buttons (primary gold, secondary outlined)
- Trust badges row below hero
- Fully responsive

**Props:**
```typescript
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}
```

**Usage:**
```tsx
import { Hero } from '@/components';

export default function HomePage() {
  return (
    <Hero
      title="Premium Fencing Solutions"
      subtitle="Residential & Commercial Fencing Installation"
      ctaText="Get a Free Quote"
      ctaLink="/quote"
      secondaryCtaText="View Portfolio"
      secondaryCtaLink="/portfolio"
    />
  );
}
```

---

### SectionIntro
Reusable section header with eyebrow text, title, and description.

**Features:**
- Optional eyebrow label (uppercase, accent gold)
- Large heading (Playfair Display)
- Description paragraph
- Optional centered alignment

**Props:**
```typescript
interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description: string;
  centered?: boolean;
}
```

**Usage:**
```tsx
import { SectionIntro } from '@/components';

export default function Services() {
  return (
    <SectionIntro
      eyebrow="WHAT WE OFFER"
      title="Our Services"
      description="Comprehensive fencing solutions for every need"
      centered={true}
    />
  );
}
```

---

### TrustBadges
Horizontal row of trust indicators with icons.

**Features:**
- 4 trust badges: 15+ Years Experience, Licensed & Insured, 5-Star Reviews, Free Estimates
- Responsive 2/4 column grid
- Icon + label design
- Premium styling with backdrop blur

**Usage:**
```tsx
import { TrustBadges } from '@/components';

export default function Hero() {
  return <TrustBadges />;
}
```

---

## Card Components

### ServiceCard
Card component for displaying services.

**Features:**
- Icon support (Lucide icons)
- Hover elevation and border color change
- Learn More link with arrow
- Links to /services/[slug]

**Props:**
```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  icon: ReactNode | LucideIcon;
}
```

**Usage:**
```tsx
import { ServiceCard } from '@/components';
import { Hammer } from 'lucide-react';

export default function ServicesSection() {
  return (
    <ServiceCard
      title="Residential Fencing"
      description="Beautiful and durable fencing for your home"
      slug="residential-fencing"
      icon={<Hammer />}
    />
  );
}
```

---

### TestimonialCard
Customer review card with star rating.

**Features:**
- 5-star rating display
- Quote text in italic
- Customer name and location
- Optional service type badge
- Hover shadow effect

**Props:**
```typescript
interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  serviceType?: string;
}
```

**Usage:**
```tsx
import { TestimonialCard } from '@/components';

export default function Reviews() {
  return (
    <TestimonialCard
      name="John Smith"
      location="Downtown"
      rating={5}
      text="Excellent work! The fence looks amazing and was completed on time."
      serviceType="Residential Fencing"
    />
  );
}
```

---

### AreaCard
Card for service areas with description.

**Features:**
- Links to /service-areas/[slug]
- Town name and description
- Arrow indicator
- Hover effects

**Props:**
```typescript
interface AreaCardProps {
  name: string;
  slug: string;
  description: string;
}
```

**Usage:**
```tsx
import { AreaCard } from '@/components';

export default function ServiceAreas() {
  return (
    <AreaCard
      name="Downtown"
      slug="downtown"
      description="Professional fencing services in the downtown area"
    />
  );
}
```

---

### PortfolioCard
Project portfolio display card.

**Features:**
- Image placeholder with gray gradient
- Hover overlay effect
- Service type and location tags
- View Project link with arrow
- Premium styling

**Props:**
```typescript
interface PortfolioCardProps {
  title: string;
  description: string;
  serviceType: string;
  location: string;
  imageAlt: string;
  href?: string;
}
```

**Usage:**
```tsx
import { PortfolioCard } from '@/components';

export default function Portfolio() {
  return (
    <PortfolioCard
      title="Modern Privacy Fence"
      description="Custom-built privacy fence with premium materials"
      serviceType="Residential Fencing"
      location="North Side"
      imageAlt="Privacy Fence Project"
      href="/portfolio/project-1"
    />
  );
}
```

---

## Form & Interactive Components

### QuoteForm
Full-featured quote request form with validation.

**Features:**
- Client-side form validation
- Fields: name, email, phone, city, service type, project details
- Service type dropdown with 4 options
- Success message display
- Error messaging
- Auto-reset after submission
- Form state management
- Optional onSuccess callback

**Props:**
```typescript
interface QuoteFormProps {
  onSuccess?: () => void;
}
```

**Usage:**
```tsx
import { QuoteForm } from '@/components';

export default function QuotePage() {
  const handleSuccess = () => {
    console.log('Form submitted successfully');
  };

  return <QuoteForm onSuccess={handleSuccess} />;
}
```

**Form Fields:**
- Name (required)
- Email (required, validates format)
- Phone (required, validates 10-digit format)
- City (required)
- Service Type (required, dropdown)
  - Residential Fencing
  - Commercial Fencing
  - Fence Repair
  - Gate Installation
- Project Details (required, textarea)

---

### FAQAccordion
Expandable accordion for frequently asked questions.

**Features:**
- Click to expand/collapse
- Smooth animation on expansion
- Plus/minus icon rotation
- Clean typography
- Hover effects

**Props:**
```typescript
interface AccordionItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: AccordionItem[];
}
```

**Usage:**
```tsx
import { FAQAccordion } from '@/components';

const faqItems = [
  {
    question: 'How long does a fence last?',
    answer: 'With proper maintenance, most fences last 15-20 years...'
  },
  {
    question: 'Do you offer warranties?',
    answer: 'Yes, we offer comprehensive warranties on all work...'
  }
];

export default function FAQSection() {
  return <FAQAccordion items={faqItems} />;
}
```

---

## CTA Components

### CTABanner
Full-width call-to-action banner with strong messaging.

**Features:**
- Forest green background
- Large heading and description
- Primary CTA button
- Optional phone call CTA button
- Responsive layout

**Props:**
```typescript
interface CTAButton {
  text: string;
  link: string;
}

interface CTABannerProps {
  title: string;
  description: string;
  primaryCta: CTAButton;
  phoneCta?: boolean;
  phoneNumber?: string;
}
```

**Usage:**
```tsx
import { CTABanner } from '@/components';

export default function Page() {
  return (
    <CTABanner
      title="Ready to Transform Your Property?"
      description="Contact us today for a free consultation and estimate"
      primaryCta={{ text: 'Get Started', link: '/quote' }}
      phoneCta={true}
      phoneNumber="(555) 123-4567"
    />
  );
}
```

---

## Navigation Components

### Breadcrumbs
Breadcrumb navigation trail.

**Features:**
- Links and labels
- Slash separators
- Responsive design
- Accent gold colors for links

**Props:**
```typescript
interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}
```

**Usage:**
```tsx
import { Breadcrumbs } from '@/components';

export default function ServicePage() {
  return (
    <Breadcrumbs
      items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Residential Fencing' }
      ]}
    />
  );
}
```

---

## Process Components

### ProcessSteps
Numbered step cards with connecting lines.

**Features:**
- Numbered circles with gold background
- Connecting lines between steps (desktop)
- Title and description for each step
- Premium card styling
- Responsive grid (1 col mobile, 2 col tablet, 4 col desktop)

**Props:**
```typescript
interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}
```

**Usage:**
```tsx
import { ProcessSteps } from '@/components';

const steps = [
  {
    number: 1,
    title: 'Free Consultation',
    description: 'Meet with our team to discuss your project'
  },
  {
    number: 2,
    title: 'Design & Estimate',
    description: 'Custom design with detailed pricing'
  },
  {
    number: 3,
    title: 'Installation',
    description: 'Professional installation by certified team'
  },
  {
    number: 4,
    title: 'Final Walkthrough',
    description: 'Quality check and project completion'
  }
];

export default function ProcessSection() {
  return <ProcessSteps steps={steps} />;
}
```

---

## SEO Components

### JsonLd
Renders JSON-LD structured data for SEO.

**Features:**
- Renders script tag with JSON-LD structured data
- Safe HTML injection
- Used for organization, local business, and other schema markup

**Props:**
```typescript
interface JsonLdProps {
  data: any;
}
```

**Usage:**
```tsx
import { JsonLd } from '@/components';

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'JT Fence Inc.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main St',
      addressLocality: 'Your City',
      postalCode: '12345'
    },
    telephone: '(555) 123-4567'
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      {/* Rest of page */}
    </>
  );
}
```

---

## Usage in Layouts

### Complete Page Example

```tsx
import { Header, Hero, SectionIntro, ServiceCard, Footer } from '@/components';
import { Hammer, Lock, Zap, Award } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Header phoneNumber="(555) 123-4567" />
      
      <Hero
        title="Premium Fencing Solutions"
        subtitle="Residential & Commercial Fencing Installation"
        ctaText="Get a Free Quote"
        ctaLink="/quote"
        secondaryCtaText="View Portfolio"
        secondaryCtaLink="/portfolio"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="OUR SERVICES"
            title="What We Offer"
            description="Complete fencing solutions for residential and commercial properties"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <ServiceCard
              title="Residential Fencing"
              description="Beautiful fencing for your home"
              slug="residential-fencing"
              icon={<Hammer />}
            />
            {/* More service cards */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
```

---

## Styling Notes

All components use:
- **Tailwind CSS** for styling
- **CSS custom properties** for color values
- **Responsive breakpoints**: `sm:`, `md:`, `lg:`
- **Transitions and animations** for polish
- **Hover states** for interactivity

All hex color values use Tailwind's arbitrary value syntax:
- `bg-[#1B4332]`
- `text-[#C9A84C]`
- `border-[#E8E4DF]`

---

## Import All Components

```tsx
import {
  Header,
  Footer,
  Hero,
  SectionIntro,
  TrustBadges,
  ServiceCard,
  TestimonialCard,
  AreaCard,
  PortfolioCard,
  QuoteForm,
  FAQAccordion,
  CTABanner,
  Breadcrumbs,
  ProcessSteps,
  JsonLd
} from '@/components';
```

---

## Dependencies

- **React 18+** (including 'use client' support for client components)
- **Next.js 14+** (for Link component and routing)
- **Tailwind CSS 3+** (for styling)
- **lucide-react** (for icons)

---

## Component State Management

**Client Components (with 'use client'):**
- `Header` - Mobile menu and scroll state
- `FAQAccordion` - Accordion expansion state
- `QuoteForm` - Form state and validation

**Server Components:**
- All other components are server-side by default for optimal performance

---

## Accessibility

All components include:
- Semantic HTML elements
- Proper heading hierarchy
- ARIA labels where appropriate
- Keyboard navigation support (buttons, links, form inputs)
- Color contrast that meets WCAG standards

---

## File Locations

All component files are located in:
```
/sessions/nifty-jolly-ride/jt-fence/src/components/
```

Component files:
- `Header.tsx` - Navigation header
- `Footer.tsx` - Footer section
- `Hero.tsx` - Hero section
- `SectionIntro.tsx` - Section headers
- `TrustBadges.tsx` - Trust indicators
- `ServiceCard.tsx` - Service display
- `TestimonialCard.tsx` - Customer reviews
- `AreaCard.tsx` - Service area cards
- `PortfolioCard.tsx` - Project portfolio
- `QuoteForm.tsx` - Quote request form
- `FAQAccordion.tsx` - FAQ section
- `CTABanner.tsx` - Call-to-action banner
- `Breadcrumbs.tsx` - Navigation breadcrumbs
- `ProcessSteps.tsx` - Process visualization
- `JsonLd.tsx` - SEO structured data
- `index.ts` - Central exports

