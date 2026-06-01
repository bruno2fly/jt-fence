import Link from 'next/link';
import { Phone } from 'lucide-react';
import TrustBadges from './TrustBadges';
import { company } from '@/data/company';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  /** Overlay strength: default = solid gradient only; photo = lighter (service pages); home = photo + strong tint for main marketing hero */
  overlayVariant?: 'default' | 'photo' | 'home';
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  overlayVariant = 'default',
}: HeroProps) {
  const overlayClass =
    overlayVariant === 'photo'
      ? 'bg-gradient-to-r from-[#1B4332]/72 to-[#2D3436]/62'
      : overlayVariant === 'home'
        ? 'bg-gradient-to-br from-black/55 via-[#0a1810]/88 to-[#1a2220]/92'
        : 'bg-gradient-to-r from-[#1B4332]/95 to-[#2D3436]/85';

  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 768;
  const backgroundPosition = isSmallScreen ? 'center 30%' : 'center center';

  return (
    <section
      className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center pt-20 pb-16 overflow-hidden"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : 'linear-gradient(135deg, #1B4332 0%, #2D3436 100%)',
        backgroundSize: 'cover',
        backgroundPosition,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Photo darkening + brand tint so headline and CTAs stay readable */}
      <div className={`absolute inset-0 ${overlayClass}`} aria-hidden />
      {overlayVariant === 'home' && (
        <div className="absolute inset-0 bg-black/25" aria-hidden />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAF8F5] mb-6 leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg md:text-xl text-[#E8E4DF] mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href={ctaLink}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C9A84C] text-white font-body font-semibold rounded-lg hover:bg-[#B8933F] transition-colors text-base"
          >
            {ctaText}
          </Link>
          <a
            href={`tel:${company.phone}`}
            onClick={() => { if (typeof window !== 'undefined' && window.gtag_report_conversion) window.gtag_report_conversion(`tel:${company.phone}`); return false; }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1B4332] text-white font-body font-semibold rounded-lg hover:bg-[#0f2118] transition-colors text-base"
          >
            <Phone className="h-5 w-5" />
            Call {company.phone}
          </a>
          {secondaryCtaText && secondaryCtaLink && (
            <Link
              href={secondaryCtaLink}
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#FAF8F5] text-[#FAF8F5] font-body font-semibold rounded-lg hover:bg-[#FAF8F5] hover:text-[#1B4332] transition-colors text-base"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center">
          <TrustBadges />
        </div>
      </div>
    </section>
  );
}
