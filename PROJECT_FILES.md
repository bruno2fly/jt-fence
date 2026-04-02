# JT Fence Inc. - Complete File Listing

## Project Root Files

### Configuration Files
- **package.json** - Dependencies and npm scripts (Next.js 14, React 18, Tailwind CSS, TypeScript, Sharp, next-sitemap)
- **tsconfig.json** - TypeScript configuration with path aliases (@/ -> ./src)
- **tailwind.config.ts** - Tailwind CSS configuration with custom colors and fonts
- **next.config.js** - Next.js configuration with image optimization
- **next-sitemap.config.js** - Sitemap generation config for jtfenceboston.com
- **postcss.config.js** - PostCSS configuration for Tailwind

### Code Quality & Version Management
- **.eslintrc.json** - ESLint configuration
- **.nvmrc** - Node version specification (18.17.0)
- **.gitignore** - Git ignore patterns

### Environment Files
- **.env.local** - Local environment variables (configured)
- **.env.example** - Environment template for documentation

### Documentation
- **README.md** - Project overview and usage instructions
- **SETUP_GUIDE.md** - Comprehensive setup and customization guide
- **PROJECT_FILES.md** - This file - complete file listing

## Application Files (src/app/)

### Core Layout & Styling
- **layout.tsx** - Root layout with:
  - HTML lang="en"
  - Google Fonts (Playfair Display + Inter)
  - Header and Footer components
  - Complete metadata configuration
  - Viewport settings
  - Theme color configuration

- **globals.css** - Global styles including:
  - Tailwind directives (@tailwind)
  - CSS custom properties (--color-*, --font-*)
  - Smooth scroll behavior
  - Custom typography
  - Utility classes
  - Print styles
  - Custom scrollbar styling

### Pages
- **page.tsx** - Home page with:
  - Hero section with CTA
  - Services overview (4 services)
  - Why Choose Us section
  - Testimonials section
  - Final CTA

- **not-found.tsx** - 404 error page

### Dynamic Pages
- **services/page.tsx** - Services overview:
  - All services with features
  - Material options grid
  - Service details
  - CTA section

- **about/page.tsx** - About page:
  - Company mission and values
  - Why Choose Us section
  - Team member profiles

- **portfolio/page.tsx** - Portfolio gallery:
  - Project showcase grid
  - Project categories
  - Location information
  - CTA section

- **contact/page.tsx** - Contact page:
  - Contact form (name, email, phone, service, message)
  - Contact information cards
  - Business hours
  - Service areas list

- **privacy/page.tsx** - Privacy Policy page
- **terms/page.tsx** - Terms of Service page

## Components (src/components/)

### Main Components
- **Header.tsx** - Navigation header with:
  - Logo and branding
  - Desktop navigation
  - Mobile hamburger menu
  - CTA button
  - Sticky positioning

- **Footer.tsx** - Footer with:
  - Brand section
  - Service links
  - Company links
  - Legal links
  - Contact information
  - Business hours
  - Social media links
  - Copyright notice

### Additional Auto-Generated Components
- **Hero.tsx** - Reusable hero section
- **ServiceCard.tsx** - Service card component
- **TestimonialCard.tsx** - Testimonial card
- **PortfolioCard.tsx** - Portfolio project card
- **CTABanner.tsx** - Call-to-action banner
- **QuoteForm.tsx** - Quote request form
- **ProcessSteps.tsx** - Process visualization
- **FAQAccordion.tsx** - FAQ accordion component
- **TrustBadges.tsx** - Trust badges/certifications
- **Breadcrumbs.tsx** - Breadcrumb navigation
- **SectionIntro.tsx** - Section introduction component
- **AreaCard.tsx** - Service area card
- **JsonLd.tsx** - Structured data generator
- **index.ts** - Component exports

## Data Files (src/data/)

- **company.ts** - Company information
- **services.ts** - Services data
- **portfolio.ts** - Portfolio projects
- **testimonials.ts** - Customer testimonials
- **faqs.ts** - FAQ content
- **serviceAreas.ts** - Service area information
- **navigation.ts** - Navigation structure
- **metadata.ts** - SEO metadata

## Libraries (src/lib/)

- **utils.ts** - Utility functions:
  - Class name combining (cn)
  - Phone number formatting
  - Date formatting
  - Text truncation
  - Email validation
  - Debounce/throttle functions

- **types.ts** - TypeScript interfaces:
  - Service, Project, Testimonial types
  - NavLink, ContactFormData types
  - QuoteRequest, TeamMember types
  - BlogPost, SEOMetadata types
  - SiteConfig, API response types
  - Form errors type

## Public Assets (public/)

- **robots.txt** - SEO robots file with sitemap reference

## Color Palette

### Primary Colors (Forest Green)
- primary-50: #f0f7f3
- primary-100: #deeee6
- primary-200: #bdddd2
- primary-300: #8cc1b3
- primary-400: #5aa594
- primary-500: #3a8975
- primary-600: #2d6f5d
- primary-700: #235749
- primary-800: #1d453c
- primary-900: #1B4332 (Brand color)

### Secondary Colors (Charcoal)
- secondary-50: #f9f9f9
- secondary-100: #f3f3f3
- secondary-200: #e7e7e7
- secondary-300: #d1d1d1
- secondary-400: #ababab
- secondary-500: #858585
- secondary-600: #5e5e5e
- secondary-700: #454545
- secondary-800: #3a3a3a
- secondary-900: #2D3436 (Brand text)

### Accent Color (Gold)
- accent-50: #fffaf0
- accent-100: #fef4e0
- accent-200: #fce8c1
- accent-300: #f9d9a1
- accent-400: #f5c180
- accent-500: #f0a960
- accent-600: #e59140
- accent-700: #d67a2a
- accent-800: #c26a1a
- accent-900: #C9A84C (Brand accent)

### Neutral Colors
- cream-50: #fffbf9
- cream-100: #faf8f5 (Brand background)
- cream-200: #f5f2ed
- cream-300: #f0ebe4

- stone-50: #fafaf8
- stone-100: #f5f3f0
- stone-200: #f0ebe6
- stone-300: #ebe6df
- stone-400: #e8e4df (Brand border)

## Typography

### Fonts
- **Heading Font**: Playfair Display (serif)
  - Weights: 400, 500, 600, 700, 800, 900
  - Usage: h1-h6, branded text

- **Body Font**: Inter (sans-serif)
  - Weights: 300, 400, 500, 600, 700
  - Usage: paragraph text, general content

### Font Sizes
- h1: clamp(2.5rem, 5vw, 4rem)
- h2: clamp(2rem, 4vw, 3rem)
- h3: clamp(1.5rem, 3vw, 2rem)
- h4: clamp(1.25rem, 2.5vw, 1.5rem)
- h5: 1.125rem
- h6: 1rem
- body: 1rem

## Key Features

### Next.js Configuration
- Image optimization with multiple formats (AVIF, WebP)
- Responsive device sizes (640px - 3840px)
- 1-year cache TTL for optimized images
- SWC minification enabled
- Security headers configured
- Strict type checking

### Tailwind CSS Features
- Extended color scheme (50-900 range for each color)
- Custom font families with CSS variables
- Spacing extensions (128, 144)
- Typography extensions
- Interactive states and transitions

### TypeScript Strict Mode
- `strict: true`
- `noImplicitAny: true`
- `strictNullChecks: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noImplicitReturns: true`

### SEO Optimization
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter card tags
- Robots meta tags
- Sitemap generation
- Robots.txt file
- Structured data support (JSON-LD)
- Mobile viewport configuration

## File Statistics

- **Total Configuration Files**: 7 (package.json, tsconfig.json, tailwind.config.ts, next.config.js, next-sitemap.config.js, postcss.config.js, .eslintrc.json)
- **Core App Files**: 12 (layout.tsx, globals.css, home page, 6 dynamic pages, 404 page)
- **Components**: 14+ (Header, Footer, and additional specialized components)
- **Data Files**: 8
- **Library Files**: 2 (utils.ts, types.ts)
- **Documentation Files**: 3 (README.md, SETUP_GUIDE.md, PROJECT_FILES.md)
- **Environment Files**: 2 (.env.local, .env.example)
- **Version/Quality Files**: 3 (.gitignore, .eslintrc.json, .nvmrc)

**Total Files Created: 50+**

## Development Workflow

1. **Development**: `npm run dev`
2. **Type Checking**: TypeScript enabled by default
3. **Linting**: `npm run lint`
4. **Building**: `npm run build`
5. **Production**: `npm start`
6. **Sitemap Generation**: `npm run generate-sitemap`

All files are production-ready and follow industry best practices.
