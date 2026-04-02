# JT Fence Inc. - Next.js Website

A premium website for JT Fence Inc., specializing in professional fence installation, repair, and maintenance services throughout Massachusetts.

## Features

- Modern, responsive design with Tailwind CSS
- Custom color scheme (forest green, charcoal, gold, cream, stone)
- Professional typography with Playfair Display headings and Inter body text
- Mobile-first approach
- SEO optimized with metadata and sitemap
- Optimized images with sharp and next/image
- TypeScript for type safety
- Accessibility best practices

## Tech Stack

- **Framework:** Next.js 14
- **React:** 18
- **Styling:** Tailwind CSS 3
- **Language:** TypeScript
- **Fonts:** Playfair Display (headings), Inter (body)
- **Image Optimization:** Sharp
- **Sitemap:** next-sitemap
- **Code Quality:** ESLint

## Color Scheme

- **Primary:** Deep Forest Green (#1B4332) - Main brand color
- **Secondary:** Warm Charcoal (#2D3436) - Text and secondary elements
- **Accent:** Warm Gold (#C9A84C) - Call-to-action and highlights
- **Cream:** #FAF8F5 - Light backgrounds and text
- **Stone:** #E8E4DF - Borders and subtle backgrounds

## Project Structure

```
jt-fence/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Header and Footer
│   │   ├── globals.css         # Global styles and Tailwind directives
│   │   └── page.tsx            # Home page
│   └── components/
│       ├── Header.tsx          # Navigation header
│       └── Footer.tsx          # Footer with links and contact info
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── next-sitemap.config.js
├── postcss.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Navigate to the project directory:
```bash
cd jt-fence
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building

Create an optimized production build:

```bash
npm run build
npm start
```

### Generate Sitemap

```bash
npm run generate-sitemap
```

This generates `public/sitemap.xml` and `public/robots.txt` for SEO optimization.

## Customization

### Colors

Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  primary: { /* forest green */ },
  secondary: { /* charcoal */ },
  accent: { /* gold */ },
  cream: { /* light cream */ },
  stone: { /* subtle stone */ },
}
```

### Fonts

Google Fonts are configured in `src/app/layout.tsx`:
- Playfair Display for headings
- Inter for body text

### Metadata

Update the default metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: { template: '%s | JT Fence Inc...', default: '...' },
  description: '...',
  // ... more metadata
}
```

### Site Configuration

Update the site URL in `next-sitemap.config.js`:

```javascript
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://jtfenceboston.com',
  // ... more config
}
```

## Best Practices

- Use the `@` path alias for imports: `@/components/Header`
- Always include metadata for new pages
- Use semantic HTML elements
- Optimize images with Next.js Image component
- Follow TypeScript strict mode guidelines
- Test responsive design on mobile devices

## Performance

- Image optimization with next/image and sharp
- Automatic code splitting
- Font optimization with next/font
- CSS-in-JS with Tailwind for minimal bundle size
- SEO-friendly URLs and structured metadata

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Proprietary - JT Fence Inc.

## Support

For issues or questions about the website, contact the development team.
