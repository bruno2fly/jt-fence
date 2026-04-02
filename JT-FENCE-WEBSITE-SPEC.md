# JT Fence Inc. — Complete Website Specification & Brand Strategy

**Document Version:** 1.0
**Last Updated:** April 2026
**Status:** Implementation-Ready
**Audience:** Development Team, Client Stakeholders, Design Partners

---

## Table of Contents

1. [Brand Summary](#1-brand-summary)
2. [UX/UI Design Direction](#2-uxui-design-direction)
3. [Full Sitemap](#3-full-sitemap)
4. [SEO Strategy](#4-seo-strategy)
5. [Page-by-Page Content Outline](#5-page-by-page-content-outline)
6. [Component System](#6-component-system)
7. [Next.js Folder Structure](#7-nextjs-folder-structure)
8. [Data Structure Plan](#8-data-structure-plan)
9. [Page Metadata Examples](#9-page-metadata-examples)
10. [Full Build Specification](#10-full-build-specification)
11. [Optional Add-ons](#11-optional-add-ons)

---

## 1. Brand Summary

### Company Overview
JT Fence Inc. is a residential fencing specialist serving Massachusetts homeowners with over 15 years of industry expertise. The company provides comprehensive fencing solutions from initial consultation through professional installation and ongoing maintenance.

### Positioning Statement
JT Fence Inc. is the **premium, locally-trusted fencing partner for Massachusetts homeowners** who demand quality craftsmanship, transparent communication, and lasting durability. We combine architectural expertise with meticulous execution to enhance property value and curb appeal.

### Value Proposition
- **Expert Craftsmanship:** Master-level installation techniques ensure fences that outlast industry standards
- **Transparent Process:** Clear communication from quote through completion; no hidden fees or surprises
- **Local Knowledge:** Deep understanding of Massachusetts building codes, soil conditions, and regional preferences
- **Comprehensive Solutions:** Complete fence design, installation, and maintenance services under one trusted partner
- **Proven Results:** 500+ satisfied customers across eastern Massachusetts with documented portfolio

### Target Audience
**Primary:** Massachusetts residential homeowners, ages 35-65, household income $100k+, who are investing in property improvement and value professional expertise and reliability.

**Secondary:** Real estate agents, property managers, and commercial property owners in need of quality fencing solutions.

### Brand Personality Traits
- **Professional yet approachable** – Expert credentials paired with friendly, personable communication
- **Reliable and trustworthy** – Consistent follow-through and transparent business practices
- **Quality-obsessed** – Attention to detail evident in every project
- **Locally rooted** – Deep community ties and understanding of regional needs
- **Straightforward** – No jargon, clear explanations, honest assessments

### Key Differentiators
1. Genuine 15+ year track record with extensive portfolio
2. Personalized site evaluation and custom design process
3. Complete transparency: fixed pricing, written contracts, timeline clarity
4. Local knowledge of Massachusetts-specific building codes and soil conditions
5. In-house crew (no subcontractors) ensures quality control
6. Comprehensive warranty and aftercare support

---

## 2. UX/UI Design Direction

### Visual Philosophy
**Premium, Architectural, Trustworthy**

The website conveys professionalism and quality through:
- Clean, spacious layouts that reflect the craftsmanship of finished fences
- High-quality photography showcasing completed projects with architectural detail
- Refined typography that suggests expertise without feeling cold
- Strategic use of whitespace to create breathing room and focus attention
- Trust signals (testimonials, certifications, guarantees) prominently integrated
- Subtle, sophisticated color palette that feels premium rather than trendy

### Layout Principles

| Principle | Application |
|-----------|-------------|
| **Photo-Driven** | Every major section includes high-quality project photography that demonstrates quality |
| **White Space** | Generous margins and padding prevent visual clutter; content feels intentional |
| **Clear Segmentation** | Distinct visual breaks between sections aid scanning and comprehension |
| **Progressive Disclosure** | Detailed information available but doesn't overwhelm initial view |
| **Trust-First** | Client testimonials, certifications, and guarantees placed strategically throughout |
| **Conversion Focus** | CTAs present but not aggressive; multiple pathways to engagement |
| **Accessibility** | WCAG 2.1 AA compliance throughout; readable contrast, semantic HTML, keyboard navigation |

### Mobile-First Approach
- Foundation designed for mobile screens (320px+) with progressive enhancement
- Touch-friendly interactive elements (min 48px tap targets)
- Responsive imagery using `srcset` and `picture` elements
- Mobile menu that maintains brand aesthetic and usability
- Form inputs optimized for mobile data entry
- Performance targets: Core Web Vitals all Green across all devices

### Conversion-Focused UX Patterns
1. **Above-fold value proposition** – Immediately conveys what JT Fence does and why to choose them
2. **Multiple CTA pathways** – Phone, email, contact form, and process explanation all accessible
3. **Social proof placement** – Testimonials and portfolio images build confidence before commitment
4. **Clear next steps** – Each page guides visitor to logical action (schedule consultation, explore services, etc.)
5. **Friction reduction** – Minimal form fields, clear requirements, progress indication
6. **Reassurance elements** – FAQ sections address common concerns; warranty information prominent
7. **Mobile-optimized forms** – Single-column layout, native input types, smart defaults

---

## 3. Full Sitemap

```
JT Fence Inc. Website Structure
├── / (Home)
├── /about
│   └── (Company story, team, credentials, certifications)
│
├── /services
│   ├── / (Services overview)
│   ├── /residential-wood-fencing
│   ├── /vinyl-fencing
│   ├── /aluminum-fencing
│   └── /fence-repair-maintenance
│
├── /portfolio
│   └── (Gallery view: 30+ project photos with descriptions)
│
├── /reviews
│   └── (Testimonials, star ratings, client feedback)
│
├── /process
│   └── (Step-by-step installation process, timeline, what to expect)
│
├── /service-areas
│   ├── / (Main service area page with map)
│   ├── /boston
│   ├── /cambridge
│   ├── /brookline
│   ├── /newton
│   ├── /watertown
│   ├── /waltham
│   ├── /belmont
│   ├── /arlington
│   └── /somerville
│
├── /contact
│   └── (Contact form, phone, email, hours)
│
└── /404
    └── (Custom 404 page with navigation)
```

### Sitemap Statistics
- **Total Pages:** 21
- **Unique Service Pages:** 4
- **Location Landing Pages:** 9
- **Core Content Pages:** 4
- **Utility Pages:** 2

---

## 4. SEO Strategy

### Primary Keyword Themes

#### Brand & Authority
- jt fence inc
- jt fence massachusetts
- fence company massachusetts

#### Service-Level Keywords
- residential fencing massachusetts
- wood fencing installation
- vinyl fence installation
- aluminum fence installation
- fence repair massachusetts
- fence maintenance

#### Local Intent Keywords
- fencing contractor near me
- fence company [specific town]
- residential fence [town]

#### Long-Tail, Intent-Driven Keywords
- how to choose fence material
- how much does fence installation cost
- best fence for privacy
- how to maintain wood fence
- fence installation process
- fence warranty protection

### Per-Page Keyword Mapping

| Page | Primary Keywords | Secondary Keywords | Target Monthly Volume |
|------|------------------|-------------------|----------------------|
| / Home | fence company massachusetts, residential fencing | fence installer, local fence contractor | 320 |
| /about | jt fence inc, fence company history | local fencing company, experienced contractors | 90 |
| /services | fence services, residential fencing solutions | fence installation, fence repair | 450 |
| /residential-wood-fencing | wood fence installation, residential wood fencing | best wood fence, wood fence cost | 380 |
| /vinyl-fencing | vinyl fence installation, vinyl fencing cost | low maintenance fence, vinyl fence benefits | 290 |
| /aluminum-fencing | aluminum fence installation, aluminum fencing | ornamental fence, modern fencing | 150 |
| /fence-repair-maintenance | fence repair, fence maintenance | wood fence repair, vinyl fence repair | 210 |
| /portfolio | fence gallery, residential fence designs | fence photo ideas, fence inspiration | 200 |
| /reviews | fence company reviews, jt fence reviews | fence contractor ratings | 180 |
| /process | fence installation process, how to install fence | what to expect fence contractor | 240 |
| /service-areas | fence company near me, local fence contractor | fence services [region] | 310 |
| /boston | fence company boston, residential fencing boston | wood fence boston, fence contractor boston | 160 |
| /cambridge | fence company cambridge, fencing cambridge | residential fence cambridge | 120 |
| /brookline | fence company brookline, fence installation brookline | fence contractor brookline | 95 |
| (+ 6 more town pages) | fence company [town], fencing [town] | residential fence [town], fence services [town] | 80-120 each |
| /contact | contact fence company, get fence quote | fence estimate, free consultation | 140 |

### Local SEO Strategy

#### Service Area Pages
Each of 9 town pages (Boston, Cambridge, Brookline, Newton, Watertown, Waltham, Belmont, Arlington, Somerville) includes:
- Local service area introduction with neighborhood-specific context
- Proximity-based trust signals (years serving the area, number of projects)
- Location-specific information (building code references, typical soil conditions, climate considerations)
- Local customer testimonials and portfolio projects from that town
- Localized FAQ addressing town-specific concerns
- Service area map showing coverage zone

#### Citation Strategy
- Consistent NAP (Name, Address, Phone) across Google Business Profile, Yelp, Angie's List, HomeAdvisor
- Local directories: Massachusetts Contractors Association, Better Business Bureau
- Mention in local community sites and news articles

#### Google Business Profile Optimization
- Complete profile with all services listed
- Regular posts about seasonal services (winter prep, spring maintenance)
- Q&A section addressing common customer questions
- Photo updates showcasing recent projects in service areas
- Positive review management and response strategy

### Schema Markup Implementation

#### LocalBusiness Schema (site-wide)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JT Fence Inc.",
  "description": "Premium residential fencing installation and repair services in Massachusetts",
  "url": "https://jtfenceinc.com",
  "telephone": "+1-617-555-0123",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Fence Street",
    "addressLocality": "Boston",
    "addressRegion": "MA",
    "postalCode": "02101",
    "addressCountry": "US"
  },
  "image": "https://jtfenceinc.com/logo.png",
  "sameAs": ["https://www.facebook.com/jtfenceinc", "https://www.instagram.com/jtfenceinc"]
}
```

#### Service Schema (Service pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Residential Wood Fencing Installation",
  "provider": {
    "@type": "LocalBusiness",
    "name": "JT Fence Inc."
  },
  "areaServed": ["Boston, MA", "Cambridge, MA", "Brookline, MA"],
  "description": "Professional wood fence installation for residential properties"
}
```

#### FAQPage Schema (FAQ sections)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a fence installation typically take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential fence installations take 2-5 days depending on property size and complexity."
      }
    }
  ]
}
```

#### BreadcrumbList Schema (All pages)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://jtfenceinc.com"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://jtfenceinc.com/services"}
  ]
}
```

### Internal Linking Strategy

| Origin Page | Target Pages | Link Context | Anchor Text |
|-------------|--------------|--------------|------------|
| Home | All service pages | "Explore our fencing solutions" section | [Service Name] Installation |
| Service pages | Portfolio | Case studies / examples | "See our work" |
| Service pages | Process | "How it works" section | View Our Installation Process |
| Service pages | Contact | CTA buttons | Get Your Free Quote |
| Service areas | Individual town pages | Navigation | [Town Name] Fencing |
| Town pages | Home | Footer navigation | Back to Home |
| Portfolio | Service pages | Image descriptions | Related service |
| Blog/resources | Service pages | Educational content | Service cross-references |

### Content Expansion Roadmap

**Phase 1 (Months 1-2):** Foundational SEO
- Optimize all core pages for primary keywords
- Implement schema markup across site
- Create and optimize 9 town landing pages

**Phase 2 (Months 3-4):** Content Development
- Develop 10-15 blog posts on seasonal maintenance, material comparisons, cost guides
- Create DIY vs. professional comparison content
- Develop local guides (building codes, HOA rules by town)

**Phase 3 (Months 5-6):** Authority & Links
- Develop guest content opportunities with local home improvement publications
- Create downloadable guides (fence maintenance, material comparison)
- Develop resource pages linking to trusted local contractors (reciprocal opportunities)

**Phase 4 (Months 7+):** Ongoing
- Monthly blog posts on seasonal topics and fence trends
- Video content (time-lapse installations, before/afters)
- Customer story case studies with detailed metrics

---

## 5. Page-by-Page Content Outline

### Homepage (/)

**Purpose:** Establish trust, communicate value proposition, and guide visitors to appropriate next action

**Key Sections:**
1. Hero Section (headline, subheadline, primary CTA)
2. Value Proposition (3 differentiators with icons)
3. Services Overview (4 service cards with brief descriptions)
4. Portfolio Showcase (6-8 project images with brief captions)
5. Process Overview (4-step visual timeline)
6. Testimonials/Social Proof (3-4 client testimonials with photos)
7. Service Areas Map (visual coverage zone)
8. FAQ Section (5-6 common questions)
9. Final CTA Section (clear call-to-action with multiple pathways)

**Primary CTA:** "Schedule Your Free Consultation"

**Target Keywords:** fence company massachusetts, residential fencing, fence installation

**Content Strategy Notes:**
- Lead with credibility and local expertise
- Use photography to establish quality perception
- Minimize friction on primary CTA
- Multiple conversion pathways (phone, form, process explanation)

---

### About (/about)

**Purpose:** Build trust through company story, team credibility, and proven track record

**Key Sections:**
1. Company Story (origin, values, mission)
2. Experience & Expertise (15+ years, certifications)
3. Team Bios (key team members with photos)
4. Certifications & Credentials (logos and brief descriptions)
5. Guarantees & Warranty Information
6. Community Involvement (local partnerships, sponsorships)
7. Photo Gallery (office, team in action, projects)
8. Client Statistics (projects completed, towns served, customer satisfaction)

**Primary CTA:** "Meet Our Team" (link to full bios) / "Get Free Estimate"

**Target Keywords:** jt fence inc, fence company history, local fence contractor

**Content Strategy Notes:**
- Emphasize longevity and local roots
- Humanize the company through team profiles
- Display certifications and awards prominently
- Use storytelling to create emotional connection

---

### Services Hub (/services)

**Purpose:** Overview of all fencing solutions and clear navigation to specific service pages

**Key Sections:**
1. Introduction (what services are offered)
2. Service Card Grid (4 main services with icons and brief descriptions)
3. How We Help (process overview: assess → design → install → maintain)
4. Why Choose Our Services (3-4 key differentiators)
5. Portfolio Preview (project images by service type)
6. Comparison Table (material options at a glance)
7. FAQ (general services questions)

**Primary CTA:** "Explore [Service Type]" (to individual service pages)

**Target Keywords:** fence services, residential fencing solutions, fence installation

**Content Strategy Notes:**
- Provide clear hierarchy of service options
- Use visual comparison tools (material comparison table)
- Link strategically to detail pages
- Emphasize customization and flexibility

---

### Residential Wood Fencing (/services/residential-wood-fencing)

**Purpose:** Establish wood as premium option and drive conversions for this popular material

**Key Sections:**
1. Service Overview (what it is, why choose it)
2. Why Wood Fencing (benefits: aesthetic, traditional, customizable)
3. Wood Types & Options (cedar, pressure-treated, composite; pros/cons table)
4. Design Gallery (before/afters of wood fence projects)
5. Installation Process (step-by-step with photos)
6. Maintenance Guide (how to keep wood fence pristine)
7. Cost & Pricing (typical price range with variables explained)
8. Timeline (how long installation takes)
9. Comparison (wood vs. vinyl vs. aluminum)
10. Customer Stories (testimonials from wood fence customers)
11. FAQ (wood-specific questions)

**Primary CTA:** "Get Your Wood Fence Quote"

**Target Keywords:** wood fence installation, residential wood fencing, wood fence cost

**Content Strategy Notes:**
- Use high-quality before/after photography
- Educate on maintenance requirements (sets realistic expectations)
- Address cost objections directly
- Emphasize aesthetic and customization benefits

---

### Vinyl Fencing (/services/vinyl-fencing)

**Purpose:** Position vinyl as modern, low-maintenance option for convenience-focused homeowners

**Key Sections:**
1. Service Overview (modern, maintenance-free solution)
2. Why Vinyl Fencing (durability, minimal maintenance, longevity)
3. Vinyl Options & Styles (privacy, semi-privacy, picket; colors and textures)
4. Durability & Longevity (warranty, climate resistance, fade resistance)
5. Installation Gallery (before/afters of vinyl projects)
6. Maintenance (surprisingly simple; annual cleaning)
7. Cost Analysis (investment vs. long-term value)
8. Weather Resistance (UV, frost, salt spray protection)
9. Comparison (vinyl vs. wood vs. aluminum)
10. Homeowner Reviews (video testimonials of vinyl fence owners)
11. FAQ (vinyl-specific questions)

**Primary CTA:** "Request Vinyl Fencing Estimate"

**Target Keywords:** vinyl fence installation, vinyl fencing cost, low maintenance fence

**Content Strategy Notes:**
- Lead with maintenance advantage
- Address durability concerns with warranty information
- Use customer testimonials from long-term vinyl owners
- Provide realistic cost comparison over 20-year lifecycle

---

### Aluminum Fencing (/services/aluminum-fencing)

**Purpose:** Establish aluminum as premium, modern aesthetic option for contemporary properties

**Key Sections:**
1. Service Overview (modern, ornamental solution)
2. Why Aluminum Fencing (sleek aesthetic, durability, low maintenance)
3. Design Styles (contemporary, ornamental, mixed materials)
4. Finish Options (powder-coated colors, custom finishes)
5. Durability (rust-resistant, UV stable, longevity)
6. Installation Gallery (modern residential and commercial projects)
7. Design Applications (when aluminum works best)
8. Maintenance (minimal care requirements)
9. Cost (premium positioning, value justification)
10. Customization (design flexibility, mixed materials)
11. FAQ (aluminum-specific questions)

**Primary CTA:** "Schedule Aluminum Fence Consultation"

**Target Keywords:** aluminum fence installation, aluminum fencing, ornamental fence

**Content Strategy Notes:**
- Lead with modern aesthetic appeal
- Showcase design flexibility
- Address strength/durability for homeowners concerned about security
- Position as investment in modern property value

---

### Fence Repair & Maintenance (/services/fence-repair-maintenance)

**Purpose:** Capture customers with existing fences and establish as long-term maintenance partner

**Key Sections:**
1. Service Overview (repair, restoration, maintenance programs)
2. Common Issues Addressed (rot, leaning, broken boards, weather damage)
3. Inspection Process (how we identify problems)
4. Repair Services (wood repairs, vinyl replacement, post reinforcement)
5. Maintenance Programs (seasonal maintenance packages)
6. Prevention Guide (how to extend fence life)
7. Before/After Gallery (repair project showcases)
8. Seasonal Maintenance Checklist (what to do when)
9. Warranty on Repairs
10. FAQ (repair vs. replacement, maintenance questions)

**Primary CTA:** "Schedule Free Fence Inspection"

**Target Keywords:** fence repair, fence maintenance, wood fence repair

**Content Strategy Notes:**
- Provide educational value on prevention
- Encourage proactive maintenance with seasonal guides
- Position as cost-effective alternative to replacement
- Use before/afters to demonstrate expertise

---

### Portfolio (/portfolio)

**Purpose:** Showcase work quality and provide social proof through diverse project examples

**Content Structure:**
- Grid layout: 30+ high-quality project photos
- Each project includes:
  - Large image
  - Project location
  - Fence type (wood/vinyl/aluminum)
  - Brief description
  - Service area highlight
- Filter options: by material type, by service area
- "View case study" option for select projects

**Primary CTA:** "Transform Your Property"

**Target Keywords:** fence gallery, residential fence designs, fence portfolio

**Content Strategy Notes:**
- Prioritize quality over quantity (fewer excellent photos vs. many mediocre)
- Ensure geographic representation (projects from all service areas)
- Include before/afters where available
- Write compelling captions that address homeowner benefits
- Use as trust-building tool and inspiration source

---

### Reviews & Testimonials (/reviews)

**Purpose:** Provide social proof and build trust through customer experiences

**Content Sections:**
1. Testimonial Grid (10+ customer testimonials with photos and names)
2. Star Rating Summary (overall rating prominently displayed)
3. Video Testimonials (3-5 customers discussing their experience)
4. Service-Specific Reviews (how reviews break down by service type)
5. Process Rating (ratings for communication, timeline, cleanliness)
6. Geographic Reviews (testimonials from each service area)
7. Third-Party Reviews Links (Yelp, Google, HomeAdvisor icons/links)

**Primary CTA:** "Start Your Project Today"

**Target Keywords:** fence company reviews, jt fence reviews, contractor ratings

**Content Strategy Notes:**
- Use authentic customer photos and names
- Highlight specific benefits mentioned by customers
- Vary testimonial length (some brief, some detailed)
- Address specific concerns (budget consciousness, timeline reliability, quality)
- Include video testimonials for higher trust

---

### Installation Process (/process)

**Purpose:** Reduce anxiety by explaining process step-by-step and setting expectations

**Key Sections:**
1. Process Overview (visual timeline of 5-6 major phases)
2. Phase 1: Consultation
   - Initial contact options
   - Site visit and assessment
   - Design discussion
   - Estimate and timeline

3. Phase 2: Design & Planning
   - Custom design options
   - Material selection
   - Build timeline
   - Permit handling (if applicable)

4. Phase 3: Pre-Installation
   - Site preparation
   - Material procurement
   - Crew scheduling
   - Property access coordination

5. Phase 4: Installation
   - Daily process overview
   - What to expect
   - Timeline (typical days required)
   - Crew communication

6. Phase 5: Quality Check & Final Walk-Through
   - Inspection standards
   - Adjustment process
   - Final approval
   - Documentation

7. Phase 6: Warranty & Support
   - Warranty details
   - Maintenance recommendations
   - Contact for future needs

**Primary CTA:** "Schedule Consultation"

**Target Keywords:** fence installation process, how to install fence, what to expect

**Content Strategy Notes:**
- Use visual timeline format (attractive and scannable)
- Address common concerns at each phase
- Emphasize communication and customer control
- Highlight transparency (no surprises)
- Include FAQ addressing timeline questions

---

### Service Areas (/service-areas and /service-areas/[town])

**Purpose:** Establish local presence and drive location-specific search visibility

**Service Areas Main Page:**
- Interactive map showing all 9 service areas
- "We Proudly Serve" section listing all towns
- Why we focus on this region (soil types, building codes, community knowledge)
- Links to individual town pages
- Local testimonials from each area

**Individual Town Pages (9 total):**
Each town page (/service-areas/[town]) includes:
- Service area introduction specific to that town
- Projects completed in that town (portfolio images)
- Testimonials from residents of that town
- Local considerations (building codes, typical soil, climate factors)
- Town-specific FAQ
- "Serving [Town] for [X] Years" credibility statement
- Contact CTA for that specific area

**Towns Covered:**
1. Boston
2. Cambridge
3. Brookline
4. Newton
5. Watertown
6. Waltham
7. Belmont
8. Arlington
9. Somerville

**Primary CTA:** "Get Your Local Estimate"

**Target Keywords:** fence company [town], fencing [town], fence contractor [town]

**Content Strategy Notes:**
- Localize content with town-specific references
- Emphasize local knowledge (building codes, neighborhood character)
- Use local project examples and testimonials
- Optimize for local search intent
- Create reasons to serve that specific town (community involvement, experience)

---

### Contact Page (/contact)

**Purpose:** Facilitate easy connection and drive conversions through multiple contact pathways

**Key Sections:**
1. Contact Form
   - Name
   - Email
   - Phone
   - Service interest dropdown
   - Property address
   - Brief description of project
   - Best time to contact
   - Submission confirmation message

2. Contact Information
   - Phone number (clickable on mobile)
   - Email address
   - Business hours
   - Physical office address with map

3. Alternative Contact Methods
   - Social media links
   - Live chat option (if available)

4. FAQ (quick answers without form submission)

5. Response Time Commitment
   - Promise of response time (e.g., "We'll respond within 24 hours")
   - What to expect next

**Primary CTA:** "Send Message" / "Call Now"

**Target Keywords:** contact fence company, get fence quote, fence estimate

**Content Strategy Notes:**
- Minimize form friction (essential fields only)
- Provide multiple contact pathways
- Set clear expectations about response
- Reassure about no-obligation quote
- Easy phone access on mobile devices

---

## 6. Component System

### Reusable Components Table

| Component Name | Purpose | Key Props | Where Used | Notes |
|---|---|---|---|---|
| **HeroSection** | Page header with background image/video, headline, CTA | title, subtitle, backgroundImage, ctaText, ctaLink, alignment | Home, Service pages | Responsive image sizing |
| **ServiceCard** | Display individual service with icon, title, description | title, description, icon, link, image | Services hub, Home | Grid layout: 2-4 columns |
| **ProjectCard** | Showcase portfolio project with image, title, details | image, title, location, serviceType, link | Portfolio, Service pages | Lazy-loaded images |
| **TestimonialCard** | Display customer review with photo, name, quote | quote, authorName, authorPhoto, rating, link | Home, Reviews page | 3-5 stars |
| **CallToAction** | Primary action button with optional secondary button | primaryText, primaryLink, secondaryText, secondaryLink, theme | Every page | 2 color themes (primary, secondary) |
| **FAQAccordion** | Expandable FAQ section | questions (array), category | Multiple pages | Schema markup included |
| **ProcessStep** | Single step in process timeline | stepNumber, title, description, icon, image | Process page, Home | Numbered or icon-based |
| **ImageGallery** | Grid gallery with modal/lightbox | images (array), columns, layout | Portfolio, Service pages | Lazy loading, responsive |
| **Comparison Table** | Material/service comparison | rows, columns, headers | Service pages | Sticky header on scroll |
| **Navigation** | Site header navigation | isOpen, mobileMenuOpen | All pages (header) | Responsive, sticky on scroll |
| **Footer** | Site footer with links, contact, social | copyrightYear, socialLinks | All pages (footer) | 3-4 column layout |
| **ContactForm** | Multi-field contact form | fields, submitAction, successMessage | Contact page, CTA blocks | Form validation, error states |
| **ReviewStars** | Star rating display | rating, maxRating, showCount | Reviews page, Testimonials | Interactive if applicable |
| **MapComponent** | Interactive map or embedded map | location, zoom, markers | Service areas page, Contact | Google Maps or Mapbox |
| **ImageCard** | Image with overlay text and CTA | image, title, description, link | Multiple layouts | Hover effects |
| **Breadcrumb** | Navigation breadcrumb trail | items (array), currentPage | All interior pages | Schema markup included |
| **VideoEmbed** | Responsive video player | videoId, title, thumbnail | Home, About, Reviews | YouTube/Vimeo embed |
| **TextBlock** | Rich text content block | content, alignment, maxWidth | Service pages, About | Markdown support |
| **StatisticCard** | Display single metric (projects, years, etc) | label, value, icon | Home, About | Large typography |
| **SocialLinks** | Social media follow links | platforms (array), size | Footer, About page | Icon library |

---

## 7. Next.js Folder Structure

```
jt-fence-website/
├── .env.local                    # Environment variables
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js            # Tailwind CSS config
├── tsconfig.json                 # TypeScript config
├── README.md
│
├── public/                       # Static assets
│   ├── logo.svg
│   ├── logo-dark.svg
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── images/                   # Static image files
│   │   ├── hero/
│   │   ├── portfolio/
│   │   ├── team/
│   │   ├── services/
│   │   └── icons/
│   ├── videos/                   # Video files or references
│   └── documents/                # PDFs (guides, warranties)
│
├── src/
│   ├── app/                      # App router pages & layouts
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page (/)
│   │   ├── not-found.tsx         # 404 page
│   │   │
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── services/
│   │   │   ├── page.tsx          # Services hub
│   │   │   ├── layout.tsx
│   │   │   ├── residential-wood-fencing/
│   │   │   │   └── page.tsx
│   │   │   ├── vinyl-fencing/
│   │   │   │   └── page.tsx
│   │   │   ├── aluminum-fencing/
│   │   │   │   └── page.tsx
│   │   │   └── fence-repair-maintenance/
│   │   │       └── page.tsx
│   │   │
│   │   ├── portfolio/
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── [id]/              # Dynamic project detail page
│   │   │       └── page.tsx
│   │   │
│   │   ├── reviews/
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── process/
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── service-areas/
│   │   │   ├── page.tsx          # Main service areas
│   │   │   ├── layout.tsx
│   │   │   └── [town]/            # Dynamic town pages
│   │   │       ├── page.tsx
│   │   │       └── layout.tsx
│   │   │
│   │   ├── contact/
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   └── api/                  # API routes
│   │       ├── contact/          # Contact form submission
│   │       │   └── route.ts
│   │       ├── email/            # Email service
│   │       │   └── route.ts
│   │       └── projects/         # Project data API
│   │           └── route.ts
│   │
│   ├── components/               # Reusable React components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Breadcrumb.tsx
│   │   │   └── MobileMenu.tsx
│   │   │
│   │   ├── hero/
│   │   │   └── HeroSection.tsx
│   │   │
│   │   ├── cards/
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── StatisticCard.tsx
│   │   │   └── ImageCard.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── ValueProp.tsx
│   │   │   ├── ProcessTimeline.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── TestimonialSection.tsx
│   │   │   ├── ServiceAreaMap.tsx
│   │   │   └── CTASection.tsx
│   │   │
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx
│   │   │   ├── QuoteForm.tsx
│   │   │   └── FormInput.tsx
│   │   │
│   │   ├── gallery/
│   │   │   ├── ImageGallery.tsx
│   │   │   └── ProjectGallery.tsx
│   │   │
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Icon.tsx
│   │   │   ├── ComparisonTable.tsx
│   │   │   ├── ReviewStars.tsx
│   │   │   └── SocialLinks.tsx
│   │   │
│   │   └── utilities/
│   │       ├── LazyImage.tsx
│   │       ├── VideoEmbed.tsx
│   │       └── MapComponent.tsx
│   │
│   ├── lib/                      # Utility functions and helpers
│   │   ├── utils.ts              # General utilities
│   │   ├── seo.ts                # SEO utilities (metadata, schema)
│   │   ├── api-client.ts         # API call utilities
│   │   ├── constants.ts          # App constants, config
│   │   ├── formatters.ts         # Data formatting utilities
│   │   └── validation.ts         # Form validation
│   │
│   ├── styles/                   # Global styles
│   │   ├── globals.css           # Global CSS
│   │   ├── variables.css         # CSS variables (colors, spacing)
│   │   └── animations.css        # Reusable animations
│   │
│   ├── data/                     # Static data files
│   │   ├── services.ts           # Service descriptions
│   │   ├── projects.ts           # Portfolio projects
│   │   ├── testimonials.ts       # Customer testimonials
│   │   ├── process.ts            # Installation process steps
│   │   ├── faqs.ts               # FAQ content
│   │   ├── team.ts               # Team member data
│   │   └── locations.ts          # Service area locations
│   │
│   ├── types/                    # TypeScript type definitions
│   │   ├── index.ts              # Exported types
│   │   ├── service.ts
│   │   ├── project.ts
│   │   ├── testimonial.ts
│   │   ├── contact.ts
│   │   └── location.ts
│   │
│   └── hooks/                    # Custom React hooks
│       ├── useContactForm.ts
│       ├── useIntersectionObserver.ts
│       └── useMobileMenu.ts
│
├── tests/                        # Test files
│   ├── components/
│   ├── pages/
│   └── lib/
│
└── docs/                         # Documentation
    ├── SETUP.md
    ├── COMPONENTS.md
    ├── DEPLOYMENT.md
    └── SEO.md
```

---

## 8. Data Structure Plan

### services.ts
```typescript
interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  benefits: string[];
  cta: string;
  keywords: string[];
}

export const services: Service[] = [
  {
    id: 'residential-wood',
    name: 'Residential Wood Fencing',
    slug: 'residential-wood-fencing',
    description: 'Classic wood fencing with premium craftsmanship',
    // ... additional fields
  },
  // ... more services
];
```

### projects.ts
```typescript
interface Project {
  id: string;
  title: string;
  location: string;
  town: string;
  serviceType: 'wood' | 'vinyl' | 'aluminum' | 'repair';
  description: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  year: number;
  featured: boolean;
}

export const projects: Project[] = [
  // ... array of projects
];
```

### testimonials.ts
```typescript
interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorLocation: string;
  rating: number;
  image?: string;
  serviceType: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  // ... array of testimonials
];
```

### faqs.ts
```typescript
interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'wood' | 'vinyl' | 'aluminum' | 'process' | 'pricing';
  featured: boolean;
}

export const faqs: FAQ[] = [
  // ... array of FAQs
];
```

### process.ts
```typescript
interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  // ... 6 steps in installation process
];
```

### locations.ts
```typescript
interface Location {
  id: string;
  town: string;
  state: string;
  coordinates: { lat: number; lng: number };
  yearsServing: number;
  projectCount: number;
  description: string;
  keywords: string[];
}

export const locations: Location[] = [
  // ... 9 service area towns
];
```

### team.ts
```typescript
interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export const team: TeamMember[] = [
  // ... team members
];
```

---

## 9. Page Metadata Examples

### Home Page

```typescript
// /app/page.tsx
export const metadata: Metadata = {
  title: 'JT Fence Inc. | Premium Residential Fencing in Massachusetts',
  description: 'Professional fencing installation and repair for Massachusetts homeowners. 15+ years serving Boston, Cambridge, Brookline & more with wood, vinyl & aluminum fencing.',
  keywords: 'fence company massachusetts, residential fencing, fence installation boston',
  openGraph: {
    type: 'website',
    url: 'https://jtfenceinc.com',
    title: 'JT Fence Inc. | Premium Residential Fencing',
    description: 'Expert fencing solutions for Massachusetts homeowners',
    images: [
      {
        url: 'https://jtfenceinc.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'JT Fence Inc. Projects'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JT Fence Inc. | Premium Residential Fencing',
    description: 'Expert fencing solutions for Massachusetts homeowners'
  }
};
```

### Residential Wood Fencing Service Page

```typescript
// /app/services/residential-wood-fencing/page.tsx
export const metadata: Metadata = {
  title: 'Wood Fence Installation | JT Fence Inc. Massachusetts',
  description: 'Premium residential wood fence installation. Cedar & pressure-treated options. Custom designs, expert installation, lasting durability. Free estimate.',
  keywords: 'wood fence installation, residential wood fencing, cedar fence, wood fence cost massachusetts',
  openGraph: {
    type: 'website',
    url: 'https://jtfenceinc.com/services/residential-wood-fencing',
    title: 'Wood Fence Installation - JT Fence Inc.',
    description: 'Expert wood fencing installation throughout Massachusetts',
    images: [
      {
        url: 'https://jtfenceinc.com/og-wood-fence.jpg',
        width: 1200,
        height: 630,
        alt: 'Wood Fence Installation Example'
      }
    ]
  }
};
```

### Boston Service Area Page

```typescript
// /app/service-areas/boston/page.tsx
export const metadata: Metadata = {
  title: 'Fence Company Boston | JT Fence Inc. Residential Fencing',
  description: 'Professional fence installation & repair in Boston, MA. 15+ years serving the Boston area with wood, vinyl & aluminum fencing. Free estimate.',
  keywords: 'fence company boston, fencing boston ma, fence contractor boston, residential fence boston',
  openGraph: {
    type: 'website',
    url: 'https://jtfenceinc.com/service-areas/boston',
    title: 'Fence Company Boston - JT Fence Inc.',
    description: 'Professional fencing services in Boston, Massachusetts'
  }
};
```

### Portfolio Page

```typescript
// /app/portfolio/page.tsx
export const metadata: Metadata = {
  title: 'Fence Gallery | JT Fence Inc. Portfolio Projects',
  description: '30+ residential fence installation projects showcasing wood, vinyl & aluminum designs. See our work in Boston & Massachusetts communities.',
  keywords: 'fence gallery, residential fence designs, fence portfolio, fence ideas',
  openGraph: {
    type: 'website',
    url: 'https://jtfenceinc.com/portfolio',
    title: 'Fence Gallery - JT Fence Inc.',
    description: 'See our residential fence projects'
  }
};
```

### Contact Page

```typescript
// /app/contact/page.tsx
export const metadata: Metadata = {
  title: 'Contact JT Fence Inc. | Free Estimate & Consultation',
  description: 'Get a free quote for your residential fence project. Call or complete our contact form. Same-day response. Serving Boston & Massachusetts.',
  keywords: 'contact fence company, fence estimate, free consultation, fence quote',
  openGraph: {
    type: 'website',
    url: 'https://jtfenceinc.com/contact',
    title: 'Contact Us - JT Fence Inc.'
  }
};
```

---

## 10. Full Build Specification

### Technology Stack

| Category | Technology | Version | Notes |
|----------|-----------|---------|-------|
| **Framework** | Next.js | 14.x | App Router, Server Components |
| **Language** | TypeScript | 5.x | Full type safety |
| **Styling** | Tailwind CSS | 3.x | Utility-first CSS framework |
| **UI Components** | Headless UI | Latest | Accessibility-first components |
| **Forms** | React Hook Form | Latest | Efficient form handling |
| **HTTP Client** | Fetch API / Axios | Native/Latest | API communication |
| **Image Optimization** | Next.js Image | Built-in | Automatic optimization |
| **SEO** | next-sitemap | Latest | Sitemap generation |
| **Analytics** | Google Analytics 4 | Latest | Conversion tracking |
| **Email** | Nodemailer / SendGrid | Latest | Form submission emails |
| **CMS** (optional) | Strapi / Contentful | Latest | Content management |
| **Hosting** | Vercel | Latest | Native Next.js hosting |
| **Database** | PostgreSQL / MongoDB | Latest | For form submissions, projects |
| **Cache** | Redis | Latest | Performance optimization |

### Development Workflow

#### Code Standards
- **Linting:** ESLint with Next.js config
- **Formatting:** Prettier (2-space indentation)
- **Git Hooks:** Husky + lint-staged
- **Commit Messages:** Conventional Commits (feat:, fix:, docs:, etc.)

#### Branch Strategy
- `main` – Production ready, deployed automatically
- `develop` – Integration branch for features
- `feature/[feature-name]` – Individual feature branches
- Release process: PR to `main`, automatic Vercel deployment

#### Testing Strategy
- **Unit Tests:** Jest + React Testing Library
- **E2E Tests:** Playwright or Cypress
- **Performance Testing:** Lighthouse CI
- **Accessibility Testing:** WAVE, Axe DevTools

### Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| Core Web Vitals (LCP) | < 2.5s | Lighthouse |
| Core Web Vitals (FID) | < 100ms | Web Vitals |
| Core Web Vitals (CLS) | < 0.1 | Web Vitals |
| First Contentful Paint | < 1.8s | Lighthouse |
| Total Blocking Time | < 200ms | Lighthouse |
| Lighthouse Score | > 95 (all pages) | Lighthouse |
| Mobile Performance | > 90 | PageSpeed Insights |
| Load Time (3G) | < 3s | Throttled testing |

### Deployment Recommendations

#### Pre-Deployment Checklist
- All tests passing (unit, e2e, accessibility)
- Lighthouse score > 95 on all pages
- SEO metadata complete and valid
- Image optimization verified (no oversized images)
- Form submission tested end-to-end
- All links verified (internal and external)
- Mobile responsive tested on real devices
- Analytics and conversion tracking verified

#### Hosting: Vercel
- Automatic deployments from `main` branch
- Preview deployments for all PRs
- Automatic SSL certificate
- CDN distribution to edge locations
- Automatic image optimization
- Serverless functions for API routes

#### Domain & DNS
- Primary domain: jtfenceinc.com
- SSL certificate: Automatic (Vercel)
- DNS: Configure at domain registrar pointing to Vercel nameservers
- Email: Separate email hosting (Gmail Workspace or similar)

#### Environment Variables
```
NEXT_PUBLIC_SITE_URL=https://jtfenceinc.com
NEXT_PUBLIC_GA_ID=[Google Analytics ID]

# Email Configuration
SMTP_HOST=[SendGrid/Gmail SMTP server]
SMTP_PORT=587
SMTP_USER=[email address]
SMTP_PASS=[app password]

# Database (if applicable)
DATABASE_URL=[PostgreSQL connection string]

# Third-party APIs
GOOGLE_MAPS_API_KEY=[Key from Google Cloud]
RECAPTCHA_PUBLIC_KEY=[reCAPTCHA key]
RECAPTCHA_SECRET_KEY=[reCAPTCHA secret]
```

#### Monitoring & Analytics
- **Google Analytics 4:** Track page views, user behavior, conversions
- **Google Search Console:** Monitor search visibility, indexing, errors
- **Vercel Analytics:** Monitor Core Web Vitals and edge request data
- **Error Tracking:** Sentry or similar for JavaScript errors
- **Uptime Monitoring:** UptimeRobot for 99.9% availability monitoring

#### Backup & Disaster Recovery
- Database backups: Daily automated backups
- Code repository: GitHub with version history
- Disaster recovery plan: Document recovery procedures
- Recovery time objective (RTO): 4 hours
- Recovery point objective (RPO): 1 day

### Build & Deployment Process

#### Local Development
```bash
# Install dependencies
npm install

# Development server
npm run dev
# Server runs on http://localhost:3000

# Code quality checks
npm run lint
npm run format
npm run test

# Production build
npm run build
npm run start
```

#### CI/CD Pipeline (GitHub Actions)
1. **On Pull Request:**
   - Lint code
   - Run tests
   - Build site
   - Lighthouse audit
   - Preview deployment to Vercel

2. **On Merge to Main:**
   - Run all checks
   - Build production site
   - Deploy to Vercel
   - Run E2E tests on production
   - Alert on failure

---

## 11. Optional Add-ons

### Option A: Three Homepage Hero Headline Options

#### Option 1: Trust & Expertise Focus
**Headline:** "Premium Fencing Built to Last"
**Subheadline:** "Expert installation crafted by Massachusetts's most trusted fence specialists. 15 years of proven quality."
**Tone:** Professional, authoritative, quality-focused

#### Option 2: Results & Transformation Focus
**Headline:** "Transform Your Outdoor Space"
**Subheadline:** "Custom fencing solutions that enhance property value and create your ideal outdoor living."
**Tone:** Aspirational, customer-benefit focused, transformational

#### Option 3: Local & Community Focus
**Headline:** "Your Local Fencing Partner"
**Subheadline:** "Serving Massachusetts homeowners for 15+ years. Same crew on every project. No subcontractors."
**Tone:** Warm, local, personal connection

**Recommendation:** Option 1 leads with quality (strongest positioning for premium market segment)

---

### Option B: Three Brand Tone Directions

#### Tone Direction 1: "The Expert Craftsman"
*Professional, knowledgeable, detail-oriented*

**Example Copy:**
"Every fence we install reflects our commitment to precision and durability. We understand that a fence isn't just a property boundary—it's an investment in your home's value and your family's comfort. Our 15+ years of experience means we anticipate challenges, select materials with care, and execute installations with meticulous attention to detail."

**Where to Use:** Service pages, about page, detailed content
**Personality:** Serious about craft, educational, confident without arrogance

#### Tone Direction 2: "The Helpful Neighbor"
*Approachable, friendly, straightforward*

**Example Copy:**
"We've been installing fences in our Massachusetts communities for over 15 years, and we still get excited about helping our neighbors improve their homes. No complicated jargon—just honest advice about what works best for your property and your budget. We're here to make the process simple and the results beautiful."

**Where to Use:** Homepage, contact page, early-stage content
**Personality:** Warm, accessible, genuinely wants to help

#### Tone Direction 3: "The Modern Professional"
*Contemporary, efficient, results-driven*

**Example Copy:**
"Quality doesn't have to be complicated. We've streamlined our process to deliver exceptional results on schedule and on budget. From initial consultation to final inspection, we use proven methods and premium materials to ensure your fence looks beautiful and performs flawlessly for decades."

**Where to Use:** Process page, case studies, service comparison
**Personality:** Modern, efficient, focuses on outcomes

**Recommendation:** Blend Directions 1 & 2 (Expert + Helpful neighbor) for authentic positioning

---

### Option C: Three CTA Style Directions

#### CTA Style 1: Action-Oriented & Direct
**Button Copy:** "Get Your Free Estimate"
**Placement Strategy:** Prominent, multiple locations, high contrast color
**Supporting Copy:** "No obligation. Quick assessment. Same-day response."
**Visual:** Bold, confident button with arrow icon

#### CTA Style 2: Consultative & Conversation-Starting
**Button Copy:** "Schedule Free Consultation"
**Placement Strategy:** Friendly, integrated into narrative, secondary button nearby with phone
**Supporting Copy:** "Let's discuss what's possible for your space."
**Visual:** Softer button, warm color, people-focused imagery nearby

#### CTA Style 3: Urgency & Benefit-Focused
**Button Copy:** "Claim Your Free Design Consultation"
**Placement Strategy:** Premium feel, limited time messaging (seasonal)
**Supporting Copy:** "Spring fence projects qualify for free design service—valued at $250."
**Visual:** Elevated button style, scarcity/urgency signals

**Recommendation:** CTA Style 1 (Action-Oriented) on homepage, Style 2 (Consultative) on service pages for balanced conversion approach

---

### Option D: Three Premium Color Palette Options

#### Palette Option 1: "Classic Professional"
- **Primary:** `#2C3E50` (Deep slate blue)
- **Secondary:** `#3498DB` (Bright blue accent)
- **Accent:** `#27AE60` (Forest green)
- **Background:** `#FFFFFF` (White) / `#F8F9FA` (Light gray)
- **Text:** `#2C3E50` (Heading) / `#555555` (Body)

*Impression:* Trust, stability, professionalism. Works well for corporate positioning.

#### Palette Option 2: "Warm & Approachable"
- **Primary:** `#8B6F47` (Warm brown)
- **Secondary:** `#D4A574` (Light tan)
- **Accent:** `#C17A4A` (Terracotta)
- **Background:** `#FFFBF5` (Warm white) / `#F5F1E8` (Soft cream)
- **Text:** `#3D3D3D` (Heading) / `#666666` (Body)

*Impression:* Warm, natural, approachable. Evokes craftsmanship and home.

#### Palette Option 3: "Modern & Clean"
- **Primary:** `#1A1A1A` (Near-black)
- **Secondary:** `#0066CC` (Modern blue)
- **Accent:** `#FF6B35` (Energetic orange)
- **Background:** `#FFFFFF` (White) / `#F0F4F8` (Light blue-gray)
- **Text:** `#1A1A1A` (Heading) / `#404040` (Body)

*Impression:* Contemporary, clean, sophisticated. Positions as modern while remaining professional.

**Recommendation:** Palette Option 1 (Classic Professional) best aligns with target demographic and premium positioning

---

### Option E: Three Font Pairing Options

#### Font Pairing 1: "Classic Professional"
- **Heading Font:** Georgia (serif, web-safe)
- **Body Font:** 'Segoe UI', system stack (clean sans-serif)
- **Rationale:** Time-tested combination. Georgia conveys sophistication; system font ensures performance. Professional law-firm aesthetic.

#### Font Pairing 2: "Modern & Approachable"
- **Heading Font:** Inter (sans-serif, modern)
- **Body Font:** Inter (same font, varied weights)
- **Rationale:** Single-font approach is contemporary and minimalist. Inter is highly legible at all sizes. Used by leading tech companies.

#### Font Pairing 3: "Warm & Crafted"
- **Heading Font:** Merriweather (serif, high contrast)
- **Body Font:** Source Sans Pro (clean sans-serif)
- **Rationale:** Merriweather feels handcrafted and warm; Source Sans Pro provides excellent legibility. Good balance of personality and readability.

**Recommendation:** Font Pairing 1 (Classic Professional) for target demographic appeal and credibility

---

### Option F: 10 Local SEO Page Ideas for Future Expansion

#### Town-Specific Service Pages
1. **Wood Fencing in [Town]** – Local pricing, soil conditions, building codes, examples from that town
2. **Vinyl Fencing in [Town]** – Climate-specific benefits, HOA compliance, local examples
3. **Fence Repair & Maintenance in [Town]** – Seasonal issues common to that area, preventative care

#### Neighborhood & Specific Interest Pages
4. **Fence Styles for [Neighborhood Name]** – Architectural character-appropriate designs, HOA guidelines
5. **Backyard Privacy Fencing Solutions** – Targeted content addressing desire for privacy, security
6. **Curb Appeal Enhancement with Fencing** – Property value increase statistics, before/afters

#### Educational Content
7. **Massachusetts Fence Building Codes Guide** – Comprehensive guide to state/town regulations by area
8. **Wood vs. Vinyl vs. Aluminum Fencing: Complete Comparison** – Comprehensive guide comparing all options
9. **Seasonal Fence Maintenance Checklist** – Comprehensive guides for spring, summer, fall, winter care

#### Problem-Solving Content
10. **Leaning Fence Repair** – Diagnostic guide, repair options, prevention

#### Blog Topic Examples
- "5 Fence Styles That Increase Home Value"
- "How to Prepare Your Property for Fence Installation"
- "Common Fence Problems and How to Avoid Them"
- "Pet-Friendly Fencing Solutions"
- "Privacy Screening Options Beyond Traditional Fencing"

**Implementation Strategy:**
- Launch 3-4 pages per quarter
- Each page: 1,500-2,500 words of comprehensive content
- Include local case studies, testimonials, project images
- Link strategically from service and town pages
- Update Google Business Profile with new service area highlights
- Promote via email to past customers

---

## Appendices

### A. Competitor Analysis Summary
JT Fence Inc. differentiates through:
- Genuine 15+ year track record (vs. newer competitors)
- In-house crew approach (vs. subcontractor-heavy competitors)
- Transparent, fixed pricing (vs. competitors with variable estimates)
- Comprehensive warranty (vs. limited coverage)
- Local knowledge of Massachusetts building codes and soil conditions

### B. Analytics & KPIs to Track
- **Traffic:** Pages/session, bounce rate, time on page
- **Conversions:** Form submissions, phone clicks, estimate requests
- **Engagement:** Scroll depth, video plays, FAQ clicks
- **Local SEO:** Local search impressions, map views, local click-through rate
- **Mobile:** Mobile vs. desktop performance comparison
- **Goals:** Monthly estimate requests, customer acquisition cost

### C. Maintenance & Update Schedule
- **Monthly:** Blog post/content update, project photo rotation
- **Quarterly:** Testimonial/review updates, portfolio refresh
- **Semi-annually:** SEO audit, page performance review, analytics analysis
- **Annually:** Content audit, competitor analysis, tech stack review

### D. Legal & Compliance
- **Accessibility:** WCAG 2.1 AA compliance throughout
- **Privacy:** Clear privacy policy, GDPR/CCPA compliance for form data
- **Testimonials:** Verified customer testimonials only, with permission
- **Claims:** All warranty and guarantee information accurate and disclosed

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | April 2026 | Initial complete specification document |

---

**Document Status:** Implementation-Ready
**Next Steps:** Begin design phase, establish development team, schedule kickoff meeting

This specification is a living document. Updates should be tracked in the Version History section above.
