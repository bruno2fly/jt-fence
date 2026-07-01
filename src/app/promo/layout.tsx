import type { Metadata } from 'next';

// Noindex/nofollow — Google Ads landing page, not for organic search
export const metadata: Metadata = {
  title: "Free Fence Estimate — We'll Beat Any Quote | JT Fence Boston",
  description:
    'Get a free fence estimate from JT Fence Boston. We beat any competing quote — guaranteed. Serving Boston & South Shore MA.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function PromoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Standalone layout — no global Header/Footer (intentional for ad landing page)
  return <>{children}</>;
}
