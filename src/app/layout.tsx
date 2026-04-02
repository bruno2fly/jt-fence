import type { Metadata, Viewport } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light',
}

export const metadata: Metadata = {
  title: {
    template: '%s | JT Fence Inc. - Premium Fence Installation Massachusetts',
    default: 'JT Fence Inc. - Premium Fence Installation & Repair in Massachusetts',
  },
  description:
    'JT Fence Inc. specializes in professional fence installation, repair, and maintenance throughout Massachusetts. Quality craftsmanship, competitive pricing, and exceptional service.',
  keywords: [
    'fence installation',
    'fence repair',
    'fence maintenance',
    'wooden fences',
    'vinyl fences',
    'chain-link fences',
    'Boston',
    'Massachusetts',
    'fence contractor',
    'fencing services',
  ],
  authors: [
    {
      name: 'JT Fence Inc.',
      url: 'https://jtfenceboston.com',
    },
  ],
  creator: 'JT Fence Inc.',
  publisher: 'JT Fence Inc.',
  metadataBase: new URL('https://jtfenceboston.com'),
  alternates: {
    canonical: 'https://jtfenceboston.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jtfenceboston.com',
    siteName: 'JT Fence Inc.',
    title: 'JT Fence Inc. - Premium Fence Installation & Repair in Massachusetts',
    description:
      'Professional fence installation, repair, and maintenance services throughout Massachusetts with quality craftsmanship and competitive pricing.',
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
    title: 'JT Fence Inc. - Premium Fence Installation & Repair in Massachusetts',
    description:
      'Professional fence installation, repair, and maintenance services throughout Massachusetts.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#1B4332" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen font-body">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
