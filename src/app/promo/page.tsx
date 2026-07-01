'use client';

// ⚠️  PROMO CONVERSION LABEL — replace PROMO_QUOTE_LABEL below with the label
//     from your Google Ads Goals for this specific campaign conversion action.
//     Account ID is already correct: AW-18073723056
const PROMO_CONVERSION_SEND_TO = 'AW-18073723056/PROMO_QUOTE_LABEL';

import { useCallback } from 'react';
import Image from 'next/image';
import { ShieldCheck, FileCheck, Zap } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

// Noindex — ad landing page, not for organic SEO
// (metadata export is handled in a separate metadata.ts in the same dir)

const PHONE = '(781) 420-5858';
const PHONE_HREF = 'tel:+17814205858';

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Plymouth, MA',
    text: 'They beat the quote I had by $600 and had the fence up in three days. No surprises, no nonsense — exactly what they promised.',
  },
  {
    name: 'Derek T.',
    location: 'Duxbury, MA',
    text: 'Called Monday, estimate on Tuesday, fence installed by Friday. Crew was clean, fast, and professional. Would hire again in a heartbeat.',
  },
  {
    name: 'Linda R.',
    location: 'Hingham, MA',
    text: 'I had two other quotes before JT Fence. They matched the lowest and threw in the gate for free. Five stars doesn\'t feel like enough.',
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: 'Price Match Promise',
    desc: 'Got a lower quote? We\'ll beat it — or the estimate is free. No fine print.',
  },
  {
    icon: FileCheck,
    title: 'No Hidden Fees',
    desc: 'The number we quote is the number you pay. Full materials and labor, period.',
  },
  {
    icon: Zap,
    title: 'Same-Week Estimates',
    desc: 'We come to you fast. Most estimates scheduled within 48 hours.',
  },
];

export default function PromoPage() {
  const handleFormSuccess = useCallback(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: PROMO_CONVERSION_SEND_TO,
        value: 150,
        currency: 'USD',
      });
    }
  }, []);

  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] font-body text-[#2D3436]">

      {/* ── STRIPPED HEADER ─────────────────────────────────────────── */}
      <header className="bg-white border-b border-[#E8E4DF] sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="https://jtfenceboston.com" aria-label="JT Fence Boston — home">
            <Image
              src="/images/jtlogo.png"
              alt="JT Fence Boston"
              width={140}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 font-body font-semibold text-[#C9A84C] text-base sm:text-lg hover:text-[#B8933F] transition-colors"
            aria-label={`Call us at ${PHONE}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 flex-shrink-0"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <span>{PHONE}</span>
          </a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1B4332] via-[#235749] to-[#1B4332] text-white py-14 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-[#C9A84C] text-[#1B4332] font-body font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Limited Summer Availability
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold leading-tight mb-5">
            We'll Beat Any Fence Quote —{' '}
            <span className="text-[#C9A84C]">Guaranteed</span>
          </h1>
          <p className="font-body text-base sm:text-xl text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed">
            Got a competing estimate? Bring it. We'll beat their price or match it on the
            spot. Serving Boston &amp; South Shore MA — free estimates, fast response.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto bg-[#C9A84C] hover:bg-[#B8933F] text-white font-body font-semibold px-8 py-4 rounded-lg text-base transition-colors shadow-lg"
            >
              Get My Free Estimate →
            </button>
            <a
              href={PHONE_HREF}
              className="w-full sm:w-auto border-2 border-white/50 hover:border-white text-white font-body font-semibold px-8 py-4 rounded-lg text-base transition-colors text-center"
            >
              Call {PHONE}
            </a>
          </div>
          <p className="font-body text-white/60 text-sm mt-4">
            We respond within 2 hours · No obligation · 100% free
          </p>
        </div>
      </section>

      {/* ── QUOTE FORM ──────────────────────────────────────────────── */}
      <section
        id="quote-form"
        className="py-12 sm:py-16 px-4 bg-[#FAF8F5]"
        aria-label="Get a free fence estimate"
      >
        <div className="max-w-2xl mx-auto">
          {/* Card wrapper with gold top accent */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#E8E4DF]">
            <div className="h-1.5 bg-[#C9A84C] w-full" />
            <div className="p-6 sm:p-8">
              <p className="font-body text-[#1B4332] font-semibold text-center text-base sm:text-lg mb-1">
                Get Your Free Estimate — We'll Beat Any Quote
              </p>
              <p className="font-body text-[#9A9590] text-center text-sm mb-6">
                Fill out below and we'll call you within 2 hours.
              </p>
              <QuoteForm onSuccess={handleFormSuccess} />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ────────────────────────────────────────────── */}
      <section className="bg-white border-y border-[#E8E4DF] py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            '✓ Licensed & Insured',
            '✓ 15+ Years Experience',
            '✓ Free Estimates',
            '✓ 5-Star Rated',
          ].map((badge) => (
            <span
              key={badge}
              className="font-body font-semibold text-[#1B4332] text-sm sm:text-base"
            >
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-4 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-[#C9A84C] text-2xl mb-1" aria-hidden="true">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="font-body font-semibold text-[#2D3436] text-sm">
              5.0 — Homeowners across Boston &amp; South Shore
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-white border border-[#E8E4DF] rounded-xl p-6 shadow-sm"
              >
                <div className="text-[#C9A84C] text-lg mb-3" aria-label="5 stars">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="font-body text-[#2D3436] text-sm leading-relaxed mb-4 italic">
                  "{r.text}"
                </p>
                <div>
                  <p className="font-body font-semibold text-[#1B4332] text-sm">
                    {r.name}
                  </p>
                  <p className="font-body text-[#9A9590] text-xs">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3-COLUMN FEATURES ───────────────────────────────────────── */}
      <section className="bg-[#FAF8F5] border-t border-[#E8E4DF] py-12 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332] text-center mb-10">
            Why Homeowners Choose JT Fence
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-[#E8E4DF] rounded-xl p-6 text-center shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1B4332]/10 rounded-full mb-4">
                  <Icon className="w-6 h-6 text-[#1B4332]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1B4332] mb-2">
                  {title}
                </h3>
                <p className="font-body text-[#2D3436] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── URGENCY BANNER ──────────────────────────────────────────── */}
      <section className="bg-[#1B4332] py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-body font-semibold text-white text-base sm:text-lg">
            🗓 Summer booking is filling fast. Lock in your estimate now.
          </p>
          <button
            onClick={scrollToForm}
            className="flex-shrink-0 bg-[#C9A84C] hover:bg-[#B8933F] text-white font-body font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
          >
            Claim My Free Estimate →
          </button>
        </div>
      </section>

      {/* ── STRIPPED FOOTER ─────────────────────────────────────────── */}
      <footer className="bg-white border-t border-[#E8E4DF] py-6 px-4 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="font-body text-[#9A9590] text-sm">
            © {new Date().getFullYear()} JT Fence Inc. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            <a
              href={PHONE_HREF}
              className="font-body text-[#1B4332] font-semibold text-sm hover:text-[#C9A84C] transition-colors"
            >
              {PHONE}
            </a>
            <span className="text-[#E8E4DF]">|</span>
            <a
              href="mailto:info@jtfenceboston.com"
              className="font-body text-[#1B4332] text-sm hover:text-[#C9A84C] transition-colors"
            >
              info@jtfenceboston.com
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
