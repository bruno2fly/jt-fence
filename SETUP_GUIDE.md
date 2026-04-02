# JT Fence Inc. Next.js Project Setup Guide

## Project Overview

This is a complete, production-ready Next.js 14 website for JT Fence Inc., a premium fence installation and repair service in Massachusetts.

## Quick Start

### 1. Install Dependencies

```bash
cd /sessions/nifty-jolly-ride/jt-fence
npm install
```

### 2. Set Up Environment Variables

The `.env.local` file is already configured with default values:

```env
NEXT_PUBLIC_SITE_URL=https://jtfenceboston.com
NEXT_PUBLIC_COMPANY_NAME=JT Fence Inc.
NEXT_PUBLIC_PHONE=(617) 555-0123
NEXT_PUBLIC_EMAIL=info@jtfenceboston.com
```

Update these values as needed for your deployment environment.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
jt-fence/
├── src/
│   ├── app/                          # Next.js app directory
│   │   ├── layout.tsx               # Root layout with Header/Footer
│   │   ├── globals.css              # Global styles and Tailwind
│   │   ├── page.tsx                 # Home page
│   │   ├── services/
│   │   │   └── page.tsx            # Services overview page
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   ├── portfolio/
│   │   │   └── page.tsx            # Portfolio/gallery page
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact form page
│   │   ├── privacy/
│   │   │   └── page.tsx            # Privacy policy
│   │   ├── terms/
│   │   │   └── page.tsx            # Terms of service
│   │   └── not-found.tsx           # 404 page
│   │
│   ├── components/                  # React components
│   │   ├── Header.tsx              # Navigation header
│   │   ├── Footer.tsx              # Footer with links
│   │   └── [additional components]
│   │
│   ├── lib/                         # Utilities and types
│   │   ├── utils.ts               # Helper functions
│   │   └── types.ts               # TypeScript interfaces
│   │
│   └── data/                       # Static data and config
│       ├── company.ts
│       ├── services.ts
│       ├── portfolio.ts
│       ├── testimonials.ts
│       └── [other data files]
│
├── public/
│   ├── robots.txt                  # SEO robots file
│   └── [static assets]
│
├── Configuration Files
│   ├── package.json               # Dependencies and scripts
│   ├── tsconfig.json              # TypeScript config
│   ├── tailwind.config.ts         # Tailwind CSS config
│   ├── next.config.js             # Next.js config
│   ├── next-sitemap.config.js    # Sitemap generation config
│   ├── postcss.config.js          # PostCSS config
│   ├── .eslintrc.json            # ESLint rules
│   └── .nvmrc                    # Node version (18.17.0)
│
├── Environment Files
│   ├── .env.local                 # Local environment variables
│   ├── .env.example              # Template for environment variables
│   └── .gitignore                # Git ignore rules
│
└── Documentation
    ├── README.md                  # Project documentation
    └── SETUP_GUIDE.md            # This file
```

## Key Features

### Design & Styling
- Custom Tailwind CSS configuration with brand colors
- Responsive mobile-first design
- Smooth animations and transitions
- Professional typography (Playfair Display + Inter)
- Custom color palette:
  - Primary: Deep forest green (#1B4332)
  - Secondary: Warm charcoal (#2D3436)
  - Accent: Warm gold (#C9A84C)
  - Cream: #FAF8F5
  - Stone: #E8E4DF

### Performance & SEO
- Image optimization with Next.js Image
- Sharp image processing
- Automatic sitemap generation
- Meta tags and Open Graph support
- Mobile-friendly viewport
- Fast page loads and smooth scrolling

### TypeScript
- Strict type checking enabled
- Path aliases configured (@/components, @/lib)
- Type definitions for common interfaces
- Best practices for type safety

### Components
- **Header**: Sticky navigation with mobile menu
- **Footer**: Links, contact info, and social media
- **Custom Pages**: Home, Services, About, Portfolio, Contact, Privacy, Terms

## Customization

### Update Company Information

Edit `src/lib/types.ts` and environment variables:

```env
NEXT_PUBLIC_COMPANY_NAME=JT Fence Inc.
NEXT_PUBLIC_PHONE=(617) 555-0123
NEXT_PUBLIC_EMAIL=info@jtfenceboston.com
```

### Modify Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* your primary color palette */ },
  accent: { /* your accent color */ },
  // ... more colors
}
```

### Update Fonts

Modify `src/app/layout.tsx`:

```typescript
const playfairDisplay = Playfair_Display({ /* config */ })
const inter = Inter({ /* config */ })
```

### Add New Pages

Create new directories under `src/app/`:

```
src/app/new-page/
└── page.tsx
```

### Customize Navigation Links

Update Header and Footer components in `src/components/`

## Scripts

```bash
# Development
npm run dev              # Start development server

# Production
npm run build           # Build for production
npm start              # Start production server

# Code Quality
npm run lint           # Run ESLint

# SEO
npm run generate-sitemap  # Generate sitemap.xml
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. Use Next.js Image component for all images
2. Lazy load components when needed
3. Optimize images before deployment
4. Use appropriate heading hierarchy (h1, h2, h3)
5. Keep bundle size small with dynamic imports
6. Test on multiple devices

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Ensure Node.js 18+ is installed and run:

```bash
npm run build
npm start
```

## Environment Variables

### Required Variables
- `NEXT_PUBLIC_SITE_URL`: Website URL for sitemap
- `NEXT_PUBLIC_COMPANY_NAME`: Company name
- `NEXT_PUBLIC_PHONE`: Contact phone
- `NEXT_PUBLIC_EMAIL`: Contact email

### Optional Variables
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`: Google Analytics
- `NEXT_PUBLIC_FACEBOOK_PIXEL_ID`: Facebook Pixel
- `API_URL`: Backend API URL

## Common Tasks

### Add a New Service
1. Update `src/data/services.ts`
2. Add service description to appropriate page
3. Create service-specific page if needed

### Add Portfolio Project
1. Update `src/data/portfolio.ts`
2. Add images to `public/images/portfolio/`
3. Update portfolio page

### Update Contact Information
1. Edit `.env.local`
2. Update `src/components/Footer.tsx`
3. Update `src/app/contact/page.tsx`

### Generate New Sitemap
```bash
npm run generate-sitemap
```

This creates `public/sitemap.xml` and `public/robots.txt`

## Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### TypeScript Errors
```bash
# Rebuild TypeScript cache
rm -rf .next
npm run build
```

### Styling Issues
```bash
# Rebuild Tailwind cache
npm run dev -- --turbopack
```

## Best Practices

1. Use semantic HTML
2. Follow TypeScript strict mode
3. Test on mobile devices
4. Optimize images before upload
5. Keep components reusable
6. Document custom components
7. Update metadata for each page
8. Test links and forms regularly

## Support & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

Proprietary - JT Fence Inc.

## Notes

- This project uses Next.js 14 with React 18
- All TypeScript strict mode enabled
- Tailwind CSS 3 for styling
- Path aliases configured for clean imports
- SEO optimized with metadata and structured data

---

**Last Updated**: 2026-04-01
