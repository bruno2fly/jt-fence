import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LocalBusinessJsonLd from '@/components/LocalBusinessJsonLd'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light',
}

export const metadata: Metadata = {
  title: {
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
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#1B4332" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="flex flex-col min-h-screen">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
