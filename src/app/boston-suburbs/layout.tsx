import type { Metadata } from 'next';

// Noindex/nofollow — Google Ads landing page, not for organic search
export const metadata: Metadata = {
  title: 'Premium Fence Installation for Boston Suburbs | JT Fence Boston',
  description:
    'Premium fence design and installation for distinguished homes across MetroWest and Greater Boston. Expert craftsmanship, careful planning, and white-glove service.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function BostonSuburbsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
