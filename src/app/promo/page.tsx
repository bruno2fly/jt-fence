'use client';

// ⚠️  Replace PROMO_QUOTE_LABEL with the actual label from Google Ads → Goals
const PROMO_CONVERSION = 'AW-18073723056/PROMO_QUOTE_LABEL';

import { useState, useCallback, useRef, useEffect } from 'react';
import Image from 'next/image';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import PromoQuoteForm from './PromoQuoteForm';

const PHONE = '(781) 420-5858';
const PHONE_HREF = 'tel:+17814205858';
const EMAIL = 'info@jtfenceboston.com';

// ── Tracking helpers ──────────────────────────────────────────────────────────
const gtagEvent = (name: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', name, params);
  }
};

// ── Data ─────────────────────────────────────────────────────────────────────
const TRUST_BADGES = [
  '✓ Licensed & Insured',
  '✓ Dig Safe Compliant',
  '✓ 15+ Years Experience',
  '✓ Free On-Site Estimates',
  '✓ Workmanship Warranty',
];

const TESTIMONIALS = [
  {
    name: 'Karen M.',
    location: 'Duxbury, MA',
    type: 'Wood Privacy Fence',
    quote:
      "I had three quotes and JT Fence came in $700 lower — and still used better materials. Crew showed up on time, left the yard spotless. I've already referred two neighbors.",
  },
  {
    name: 'Derek S.',
    location: 'Plymouth, MA',
    type: 'Vinyl Fence + Gate',
    quote:
      'Called Monday morning, estimate Tuesday, fence installed by Thursday. That kind of turnaround is unheard of around here. Quality looks great two seasons later.',
  },
  {
    name: 'Linda R.',
    location: 'Hingham, MA',
    type: 'Aluminum Pool Fence',
    quote:
      'They matched the lowest written quote I had and the end result was perfect — clean lines, solid install, no pressure. Exactly what a pool fence job should look like.',
  },
];

const FENCE_TYPES = [
  {
    label: 'Wood',
    img: '/images/wood/wood-privacy-natural-01.jpg',
    desc: 'Privacy, picket, and split-rail in cedar or pressure-treated lumber.',
  },
  {
    label: 'Vinyl',
    img: '/images/vinyl/vinyl-privacy-white-01.jpg',
    desc: 'Low-maintenance privacy and picket styles. Never paint or stain again.',
  },
  {
    label: 'Aluminum',
    img: '/images/aluminum/aluminum-driveway-gate-arched.jpg',
    desc: 'Ornamental fencing and custom driveway gates with long-lasting finish.',
  },
  {
    label: 'Pool',
    img: '/images/pool/pool-aluminum-jt-sign-01.jpg',
    desc: 'Code-compliant pool enclosures for safety and curb appeal.',
  },
  {
    label: 'Privacy',
    img: '/images/vinyl/vinyl-semi-privacy-lattice.jpg',
    desc: 'Full and semi-privacy options in wood, vinyl, or composite materials.',
  },
];

const STEPS = [
  {
    n: '1',
    title: 'Request Your Estimate',
    desc: 'Fill out the form or call us. We confirm within 2 hours and schedule your free on-site visit.',
  },
  {
    n: '2',
    title: 'Get Your On-Site Quote',
    desc: 'We measure, walk the property with you, and deliver a written quote — often same day.',
  },
  {
    n: '3',
    title: 'Installation Scheduled Fast',
    desc: 'Most jobs start within the same week. Clean install, yard left tidy, you sign off on completion.',
  },
];

const GALLERY = [
  '/images/wood/wood-horizontal-stained-gate.jpg',
  '/images/vinyl/vinyl-privacy-white-gate.jpg',
  '/images/pool/pool-aluminum-backyard-01.jpg',
  '/images/aluminum/aluminum-vinyl-mixed-yard.jpg',
  '/images/wood/wood-spindle-top-01.jpg',
  '/images/vinyl/vinyl-post-rail-hydrangeas.jpg',
];

const FAQS = [
  {
    q: 'How fast can you install after I get a quote?',
    a: "Most jobs are scheduled within the same week. We carry full inventory so there's no waiting on materials for standard wood, vinyl, or aluminum fencing.",
  },
  {
    q: 'What does the quote-beat guarantee actually cover?',
    a: "If you have a written quote from another licensed, insured local fence contractor, we'll beat it or match it on the spot. The quote must be for the same materials and scope of work.",
  },
  {
    q: 'Do you handle permits and Dig Safe?',
    a: "Yes. We are fully Dig Safe compliant on every job. For permits, we'll advise you on what your town requires and help coordinate the process.",
  },
  {
    q: 'Do you offer financing or payment plans?',
    a: 'Yes — we offer 0% down payment options on qualifying projects. Ask about it when you request your estimate.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the Greater Boston area and South Shore including Plymouth, Duxbury, Hingham, Marshfield, Scituate, Hanover, Norwell, Pembroke, Kingston, Wareham, and Cape Cod.',
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────
function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 flex-shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#E8E4DF] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-body font-semibold text-[#1B4332] text-sm sm:text-base bg-white hover:bg-[#FAF8F5] transition-colors"
        aria-expanded={open}
      >
        <span>{q}</span>
        {open ? (
          <ChevronUp className="flex-shrink-0 w-4 h-4 text-[#C9A84C]" />
        ) : (
          <ChevronDown className="flex-shrink-0 w-4 h-4 text-[#C9A84C]" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4 font-body text-sm text-[#2D3436] leading-relaxed bg-white border-t border-[#E8E4DF]">
          {a}
        </div>
      )}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PromoPage() {
  const [mobileBannerVisible, setMobileBannerVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Show sticky mobile bar only after hero scrolls out of view
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setMobileBannerVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  const scrollToForm = useCallback((source: string) => {
    gtagEvent('hero_cta_click', { source });
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handlePhoneClick = useCallback((location: string) => {
    gtagEvent('phone_call_click', { location });
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion();
    }
  }, []);

  const handleFormSuccess = useCallback(() => {
    // Promo-specific conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: PROMO_CONVERSION,
        value: 150,
        currency: 'USD',
      });
    }
    gtagEvent('form_submit_promo', { page: '/promo' });
  }, []);

  const handleFormStart = useCallback(() => {
    gtagEvent('form_start_promo', { page: '/promo' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#2D3436] font-body">

      {/* ── STICKY HEADER ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E8E4DF] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <a href="https://jtfenceboston.com" aria-label="JT Fence Boston">
            <Image
              src="/images/jtlogo.png"
              alt="JT Fence Boston"
              width={130}
              height={44}
              className="h-9 w-auto object-contain"
              priority
            />
          </a>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={PHONE_HREF}
              onClick={() => handlePhoneClick('header')}
              className="flex items-center gap-1.5 text-[#C9A84C] font-semibold text-sm sm:text-base hover:text-[#B8933F] transition-colors"
            >
              <PhoneIcon />
              <span className="hidden xs:inline sm:inline">{PHONE}</span>
              <span className="xs:hidden sm:hidden">Call</span>
            </a>
            <button
              onClick={() => scrollToForm('header')}
              className="bg-[#1B4332] hover:bg-[#235749] text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="bg-gradient-to-br from-[#1B4332] via-[#1d4a38] to-[#152e24] text-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left: Copy */}
          <div className="lg:pt-2">
            <div className="inline-block bg-[#C9A84C] text-[#1B4332] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              🗓 Summer slots filling fast
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
              Get a New Fence Installed Fast in Boston &amp; South Shore
            </h1>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-6">
              Free, no-obligation estimate — and we'll beat any written quote
              from another licensed fence contractor.
            </p>

            {/* Bullets */}
            <ul className="space-y-2 mb-8">
              {[
                'Same-week estimates for most areas',
                'Written price-match guarantee — no games',
                '172+ completed projects across MA',
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-white/90 text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Mobile: show CTA buttons (form is below on mobile) */}
            <div className="flex flex-col sm:flex-row gap-3 lg:hidden">
              <button
                onClick={() => scrollToForm('hero_mobile')}
                className="w-full sm:w-auto bg-[#C9A84C] hover:bg-[#B8933F] text-white font-bold px-6 py-4 rounded-lg text-base transition-colors shadow-lg"
              >
                Get My Free Fence Estimate →
              </button>
              <a
                href={PHONE_HREF}
                onClick={() => handlePhoneClick('hero_mobile')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-6 py-4 rounded-lg text-base transition-colors"
              >
                <PhoneIcon />
                Call {PHONE}
              </a>
            </div>
          </div>

          {/* Right: Form card (desktop: visible in hero; mobile: hidden here, shown below) */}
          <div id="quote-form" className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="h-1.5 bg-[#C9A84C]" />
            <div className="p-5 sm:p-6">
              <p className="font-heading text-[#1B4332] font-bold text-lg sm:text-xl text-center mb-0.5">
                Get Your Free Estimate
              </p>
              <p className="text-[#9A9590] text-center text-xs sm:text-sm mb-4">
                We'll beat any written quote from a licensed contractor.
              </p>
              <PromoQuoteForm
                onSuccess={handleFormSuccess}
                onFormStart={handleFormStart}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────────────────── */}
      <section className="bg-[#1B4332] py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-2">
          {TRUST_BADGES.map((b) => (
            <span key={b} className="text-white/90 font-semibold text-xs sm:text-sm">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* ── SOCIAL PROOF ──────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-4 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#C9A84C] text-2xl mb-1">⭐⭐⭐⭐⭐</p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332]">
              What South Shore Homeowners Say
            </h2>
            <p className="text-[#9A9590] text-sm mt-1">172+ projects completed across Massachusetts</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-[#E8E4DF] rounded-xl p-6 shadow-sm"
              >
                <p className="text-[#C9A84C] text-base mb-3">⭐⭐⭐⭐⭐</p>
                <p className="text-[#2D3436] text-sm leading-relaxed italic mb-4">
                  "{t.quote}"
                </p>
                <div className="border-t border-[#E8E4DF] pt-3">
                  <p className="font-semibold text-[#1B4332] text-sm">{t.name}</p>
                  <p className="text-[#9A9590] text-xs">{t.location} · {t.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA REPEAT ───────────────────────────────────────── */}
      <section className="bg-[#1B4332] py-7 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-white font-heading font-bold text-lg sm:text-xl">
              Ready to get started? Your estimate is free.
            </p>
            <p className="text-white/70 text-sm">We'll beat any written quote from a licensed contractor.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => scrollToForm('mid_cta')}
              className="bg-[#C9A84C] hover:bg-[#B8933F] text-white font-bold px-5 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
            >
              Get Free Estimate →
            </button>
            <a
              href={PHONE_HREF}
              onClick={() => handlePhoneClick('mid_cta')}
              className="flex items-center gap-1.5 border border-white/40 hover:border-white text-white font-semibold px-4 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
            >
              <PhoneIcon />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── FENCE TYPES ───────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332]">
              Every Fence Type, One Crew
            </h2>
            <p className="text-[#9A9590] text-sm mt-1">
              Wood · Vinyl · Aluminum · Pool · Privacy — installed and warranted
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {FENCE_TYPES.map((f) => (
              <button
                key={f.label}
                onClick={() => scrollToForm(`fence_type_${f.label}`)}
                className="group text-left rounded-xl overflow-hidden border border-[#E8E4DF] hover:border-[#C9A84C] hover:shadow-md transition-all"
              >
                <div className="relative h-28 sm:h-36 bg-[#E8E4DF]">
                  <Image
                    src={f.img}
                    alt={`${f.label} fence installed by JT Fence Boston`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                </div>
                <div className="p-3">
                  <p className="font-heading font-bold text-[#1B4332] text-sm">{f.label}</p>
                  <p className="text-[#9A9590] text-xs leading-tight mt-0.5">{f.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-4 bg-[#FAF8F5] border-t border-[#E8E4DF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332] text-center mb-10">
            How It Works — Start to Finish
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {STEPS.map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-12 h-12 bg-[#1B4332] text-white rounded-full flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4">
                  {s.n}
                </div>
                <h3 className="font-heading font-bold text-[#1B4332] text-base sm:text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-[#2D3436] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => scrollToForm('how_it_works')}
              className="bg-[#C9A84C] hover:bg-[#B8933F] text-white font-bold px-8 py-4 rounded-lg text-base transition-colors shadow-md"
            >
              Start with Step 1 — Get My Free Estimate →
            </button>
          </div>
        </div>
      </section>

      {/* ── PROJECT GALLERY ───────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-4 bg-white border-t border-[#E8E4DF]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332]">
              Recent Work
            </h2>
            <p className="text-[#9A9590] text-sm mt-1">Real jobs. Real homeowners. All across MA.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {GALLERY.map((src, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden bg-[#E8E4DF] aspect-[4/3] cursor-pointer group"
                onClick={() => scrollToForm(`gallery_${i}`)}
              >
                <Image
                  src={src}
                  alt={`JT Fence Boston project ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#1B4332]/0 group-hover:bg-[#1B4332]/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white text-[#1B4332] text-xs font-bold px-3 py-1.5 rounded-full transition-opacity">
                    Get a Quote Like This →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-4 bg-[#FAF8F5] border-t border-[#E8E4DF]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332] text-center mb-8">
            Common Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BLOCK ───────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 bg-[#1B4332] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Beat Any Quote — Lock In Your Estimate Today
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
            Serving Boston, South Shore &amp; Cape Cod. Free estimate, no pressure, no games.
            Bring us any written quote from a licensed contractor and we'll beat it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToForm('final_cta')}
              className="bg-[#C9A84C] hover:bg-[#B8933F] text-white font-bold px-8 py-4 rounded-lg text-base transition-colors shadow-lg"
            >
              Get My Free Fence Estimate →
            </button>
            <a
              href={PHONE_HREF}
              onClick={() => handlePhoneClick('final_cta')}
              className="flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
            >
              <PhoneIcon />
              Call {PHONE}
            </a>
          </div>
          <p className="text-white/50 text-xs mt-6">
            Licensed &amp; Insured · Dig Safe Compliant · Workmanship Warranty Included
          </p>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────── */}
      <footer className="bg-white border-t border-[#E8E4DF] py-5 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-[#9A9590] text-xs">
            © {new Date().getFullYear()} JT Fence Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-3 items-center justify-center text-xs">
            <a href={PHONE_HREF} onClick={() => handlePhoneClick('footer')} className="text-[#1B4332] font-semibold hover:text-[#C9A84C] transition-colors">
              {PHONE}
            </a>
            <span className="text-[#E8E4DF]">|</span>
            <a href={`mailto:${EMAIL}`} className="text-[#1B4332] hover:text-[#C9A84C] transition-colors">
              {EMAIL}
            </a>
            <span className="text-[#E8E4DF]">|</span>
            <a href="/privacy" className="text-[#9A9590] hover:text-[#1B4332] transition-colors">Privacy</a>
          </div>
        </div>
      </footer>

      {/* ── STICKY MOBILE BOTTOM BAR ──────────────────────────────────── */}
      {mobileBannerVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-[#E8E4DF] shadow-2xl">
          <div className="flex items-stretch">
            <a
              href={PHONE_HREF}
              onClick={() => handlePhoneClick('mobile_bar')}
              className="flex-1 flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#235749] text-white font-bold text-sm py-4 transition-colors"
            >
              <PhoneIcon />
              Call Now
            </a>
            <button
              onClick={() => scrollToForm('mobile_bar')}
              className="flex-1 flex items-center justify-center bg-[#C9A84C] hover:bg-[#B8933F] text-white font-bold text-sm py-4 transition-colors border-l border-[#B8933F]"
            >
              Free Estimate →
            </button>
          </div>
          {/* Safe area spacing for iOS */}
          <div className="h-safe-area-inset-bottom bg-white" style={{ height: 'env(safe-area-inset-bottom)' }} />
        </div>
      )}

      {/* Bottom padding on mobile so sticky bar doesn't cover content */}
      <div className="lg:hidden h-16" />
    </div>
  );
}
