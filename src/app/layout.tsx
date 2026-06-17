import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LocalBusinessJsonLd from '@/components/LocalBusinessJsonLd'
import StickyCallButton from '@/components/StickyCallButton'

import './globals.css'

const GOOGLE_ADS_ID = 'AW-18073723056'
const GA4_MEASUREMENT_ID = 'G-S1K5J1833Q'
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LdYourSiteKey_here'

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
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Ads Global Site Tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        {/* Google Analytics 4 (GA4) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        {/* Google reCAPTCHA v3 */}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Google Ads Configuration
            gtag('config', '${GOOGLE_ADS_ID}');
            
            // Google Analytics 4 Configuration
            gtag('config', '${GA4_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true
            });
            
            // Enhanced Measurement Events
            gtag('config', '${GA4_MEASUREMENT_ID}', {
              custom_map: {
                'dimension1': 'service_area',
                'dimension2': 'fence_type',
                'dimension3': 'lead_source'
              }
            });
            
            // Phone call conversion tracking (Google Ads)
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              
              // Google Ads conversion
              gtag('event', 'conversion', {
                'send_to': 'AW-18073723056/BxqQCLeGm7ccELDBnKpD',
                'value': 1.0,
                'currency': 'USD',
                'event_callback': callback
              });
              
              // GA4 conversion event
              gtag('event', 'phone_call', {
                'event_category': 'engagement',
                'event_label': '(781) 420-5858',
                'value': 100,
                'currency': 'USD'
              });
              
              return false;
            }
            
            // Custom GA4 Events
            function trackQuoteRequest() {
              gtag('event', 'generate_lead', {
                'event_category': 'form',
                'event_label': 'quote_request',
                'value': 150,
                'currency': 'USD'
              });
            }
            
            function trackServiceView(serviceType) {
              gtag('event', 'view_item', {
                'event_category': 'service',
                'event_label': serviceType,
                'content_type': 'service_page'
              });
            }
          `}
        </Script>
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
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyCallButton />

      </body>
    </html>
  )
}
