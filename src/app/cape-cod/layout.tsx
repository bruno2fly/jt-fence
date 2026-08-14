import type { Metadata } from "next";

// Noindex/nofollow — Google Ads landing page, not for organic search
export const metadata: Metadata = {
  title: "Cape Cod Fence Installation | JT Fence Boston",
  description:
    "Coastal fence installation for seasonal homes and year-round residences across Cape Cod. Materials selected for salt air, sandy soil, and Atlantic winds.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function CapeCodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
