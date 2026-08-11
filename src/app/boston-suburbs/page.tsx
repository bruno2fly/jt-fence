'use client';

// TODO: Bruno will provide the real conversion label from Google Ads — replace REPLACE_WITH_LABEL
const BOSTON_SUBURBS_CONVERSION = 'AW-18073723056/REPLACE_WITH_LABEL';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { company } from '@/data/company';
import BostonSuburbsQuoteForm from './BostonSuburbsQuoteForm';

const PHONE_HREF = 'tel:+17814205858';

const gtagEvent = (name: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', name, params);
  }
};

const TRUST_BADGES = [
  '✓ Licensed & Insured',
  '✓ 15+ Years Experience',
  '✓ Permits Handled for You',
  '✓ Clean Job Sites, On-Time Crews',
  '✓ Workmanship Warranty',
];

const TESTIMONIALS = [
  { name: 'Alexandra M.', location: 'Newton, MA', type: 'Custom Wood Privacy Fence', quote: 'JT Fence understood that the new fence had to work with our mature landscaping and the architecture of the house. The layout is beautifully considered, the gates operate perfectly, and the crew treated our property with real care.' },
  { name: 'Robert H.', location: 'Weston, MA', type: 'Aluminum Estate Fencing', quote: 'Our property required a long perimeter run and careful work around trees and stonework. Communication was excellent, the crew arrived when promised, and the finished installation is precise without calling attention to itself.' },
  { name: 'Catherine L.', location: 'Wellesley, MA', type: 'Pool Fence + Gates', quote: 'From permitting through the final walkthrough, the process was exceptionally organized. The pool enclosure looks refined, every line is clean, and the team left the site immaculate at the end of each day.' },
];

const FENCE_TYPES = [
  { label: 'Custom Wood', img: '/images/wood/wood-privacy-natural-01.jpg', desc: 'Cedar privacy, picket, and estate-style designs built with careful joinery and clean lines.' },
  { label: 'Premium Vinyl', img: '/images/vinyl/vinyl-privacy-white-01.jpg', desc: 'Polished, low-maintenance privacy and decorative styles selected for lasting curb appeal.' },
  { label: 'Ornamental Aluminum', img: '/images/aluminum/aluminum-driveway-gate-arched.jpg', desc: 'Elegant perimeter fencing and gates that complement refined residential architecture.' },
  { label: 'Pool Enclosures', img: '/images/pool/pool-aluminum-jt-sign-01.jpg', desc: 'Code-compliant safety with precise gate placement and an architectural finish.' },
  { label: 'Estate & Privacy', img: '/images/vinyl/vinyl-post-rail-hydrangeas.jpg', desc: 'Thoughtful layouts for gardens, long property lines, pets, privacy, and security.' },
];

const STEPS = [
  { n: '1', title: 'Private On-Site Consultation', desc: 'We listen to your goals, study the property, and advise on materials, sightlines, gates, grades, and landscaping.' },
  { n: '2', title: 'Detailed Project Planning', desc: 'You receive a clear written proposal. We coordinate Dig Safe, town permitting, materials, and installation scheduling.' },
  { n: '3', title: 'Crafted, Clean Installation', desc: 'Our professional crew arrives on time, protects your property, maintains a clean site, and completes a final walkthrough.' },
];

const GALLERY = [
  '/images/wood/wood-horizontal-stained-gate.jpg',
  '/images/vinyl/vinyl-privacy-white-gate.jpg',
  '/images/pool/pool-aluminum-backyard-01.jpg',
  '/images/aluminum/aluminum-vinyl-mixed-yard.jpg',
  '/images/wood/wood-spindle-top-01.jpg',
  '/images/vinyl/vinyl-post-rail-hydrangeas.jpg',
];

const TOWNS = ['Arlington', 'Bedford', 'Belmont', 'Brookline', 'Burlington', 'Cambridge', 'Canton', 'Concord', 'Dedham', 'Framingham', 'Lexington', 'Lynnfield', 'Milton', 'Natick', 'Needham', 'Newton', 'North Andover', 'North Reading', 'Quincy', 'Reading', 'Stoneham', 'Sudbury', 'Wakefield', 'Waltham', 'Wayland', 'Wellesley', 'Weston', 'Winchester', 'Woburn', 'Andover', 'Sharon'];

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: company.name,
  url: 'https://jtfenceboston.com/boston-suburbs',
  telephone: company.phone,
  email: company.email,
  areaServed: TOWNS.map((town) => ({
    '@type': 'City',
    name: `${town}, Massachusetts`,
  })),
};

const FAQS = [
  { q: 'How do you handle permits in my town?', a: 'We identify the requirements for your municipality, coordinate the permit process, and arrange Dig Safe before installation. You receive clear updates throughout, without having to manage the paperwork yourself.' },
  { q: 'What makes your installation process different?', a: 'Every project is planned around the property rather than forced into a standard layout. We pay close attention to grades, gates, mature landscaping, masonry, sightlines, and architectural context, while keeping the job site orderly from start to finish.' },
  { q: 'Do you work on estate-scale and complex properties?', a: 'Yes. We plan extended perimeter runs, long driveways, pool enclosures, irregular lot lines, slopes, conservation edges, stone walls, and properties with mature trees. Discretion and careful coordination are central to the process.' },
  { q: 'Which fence materials do you install?', a: 'We install wood, vinyl, aluminum, pool, pet, and privacy fencing, plus gates. During your consultation, we recommend materials based on architecture, maintenance preference, privacy, safety, and long-term performance.' },
  { q: 'What areas do you serve?', a: 'This campaign serves 31 MetroWest and Greater Boston communities, including Newton, Weston, Wellesley, Lexington, Winchester, Concord, Brookline, Needham, Sudbury, Wayland, Belmont, and Cambridge.' },
];

function PhoneIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" /></svg>;
}

function FaqItem({ q, a, onOpen }: { q: string; a: string; onOpen: () => void }) {
  const [open, setOpen] = useState(false);
  return <div className="border border-[#E8E4DF] rounded-lg overflow-hidden"><button onClick={() => { setOpen((value) => !value); if (!open) onOpen(); }} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-body font-semibold text-[#1B4332] text-sm sm:text-base bg-white hover:bg-[#FAF8F5] transition-colors" aria-expanded={open}><span>{q}</span>{open ? <ChevronUp className="flex-shrink-0 w-4 h-4 text-[#C9A84C]" /> : <ChevronDown className="flex-shrink-0 w-4 h-4 text-[#C9A84C]" />}</button>{open && <div className="px-5 py-4 font-body text-sm text-[#2D3436] leading-relaxed bg-white border-t border-[#E8E4DF]">{a}</div>}</div>;
}

export default function BostonSuburbsPage() {
  const [mobileBannerVisible, setMobileBannerVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setMobileBannerVisible(!entry.isIntersecting), { threshold: 0 });
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToForm = useCallback((source: string) => {
    gtagEvent(`${source}_cta_click_boston_suburbs`, { source, page: '/boston-suburbs' });
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handlePhoneClick = useCallback((location: string) => {
    gtagEvent('phone_click_boston_suburbs', { location, page: '/boston-suburbs' });
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) (window as any).gtag_report_conversion();
  }, []);

  const handleFormSuccess = useCallback(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', { send_to: BOSTON_SUBURBS_CONVERSION, value: 150, currency: 'USD' });
    }
    gtagEvent('form_submit_boston_suburbs', { page: '/boston-suburbs' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#2D3436] font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
      <header className="sticky top-0 z-50 bg-white border-b border-[#E8E4DF] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <a href="https://jtfenceboston.com" aria-label="JT Fence Boston"><Image src="/images/jtlogo.png" alt="JT Fence Boston" width={130} height={44} className="h-9 w-auto object-contain" priority /></a>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href={PHONE_HREF} onClick={() => handlePhoneClick('header')} className="flex items-center gap-1.5 text-[#C9A84C] font-semibold text-sm sm:text-base"><PhoneIcon /><span className="hidden sm:inline">{company.phone}</span><span className="sm:hidden">Call</span></a>
            <button onClick={() => scrollToForm('header')} className="bg-[#1B4332] text-white font-semibold text-sm px-4 py-2 rounded-lg">Request Consultation</button>
          </div>
        </div>
      </header>

      <section ref={heroRef} className="bg-[#1B4332] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="lg:pt-2">
            <div className="inline-block bg-[#C9A84C] text-[#1B4332] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4">Serving Boston&apos;s Premier Suburbs</div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">Fencing Crafted for Boston&apos;s Most Distinguished Homes</h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">Premium materials, thoughtful site planning, and white-glove installation for estate-scale and refined residential properties in Newton, Weston, Wellesley, Lexington, Winchester, Concord, Brookline, Needham, and beyond.</p>
            <ul className="space-y-3 mb-8">{['15+ years of craftsmanship across MetroWest & Greater Boston', 'Licensed and insured, with Dig Safe and town permits handled for you', 'Professional communication, on-time crews, clean sites, and a workmanship warranty'].map((item) => <li key={item} className="flex items-start gap-2 text-white/90 text-sm sm:text-base"><CheckCircle className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />{item}</li>)}</ul>
            <div className="flex flex-col sm:flex-row gap-3 lg:hidden"><button onClick={() => scrollToForm('hero')} className="bg-[#C9A84C] text-white font-bold px-6 py-4 rounded-lg">Request a Consultation →</button><a href={PHONE_HREF} onClick={() => handlePhoneClick('hero')} className="flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-6 py-4 rounded-lg"><PhoneIcon />Call {company.phone}</a></div>
          </div>
          <div id="quote-form" className="bg-white rounded-xl shadow-2xl overflow-hidden scroll-mt-24">
            <div className="h-1.5 bg-[#C9A84C]" />
            <div className="p-5 sm:p-6"><p className="font-heading text-[#1B4332] font-bold text-xl text-center">Request a Private Consultation</p><p className="text-[#9A9590] text-center text-sm mb-4">Tell us about your property and project goals.</p><BostonSuburbsQuoteForm onSuccess={handleFormSuccess} onFormStart={() => gtagEvent('form_start_boston_suburbs', { page: '/boston-suburbs' })} /></div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B4332] border-t border-white/10 py-4 px-4"><div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-2">{TRUST_BADGES.map((badge) => <span key={badge} className="text-white/90 font-semibold text-xs sm:text-sm">{badge}</span>)}</div></section>

      <section className="py-12 sm:py-16 px-4"><div className="max-w-6xl mx-auto"><div className="text-center mb-8"><p className="text-[#C9A84C] text-2xl">★★★★★</p><h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332]">Trusted on Exceptional Properties</h2><p className="text-[#9A9590] text-sm mt-2">Careful workmanship and dependable service from consultation through final walkthrough.</p></div><div className="grid grid-cols-1 sm:grid-cols-3 gap-5">{TESTIMONIALS.map((testimonial) => <article key={testimonial.name} className="bg-white border border-[#E8E4DF] rounded-xl p-6 shadow-sm"><p className="text-[#C9A84C] mb-3">★★★★★</p><p className="text-sm leading-relaxed italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p><div className="border-t border-[#E8E4DF] pt-3"><p className="font-semibold text-[#1B4332] text-sm">{testimonial.name}</p><p className="text-[#9A9590] text-xs">{testimonial.location} · {testimonial.type}</p></div></article>)}</div></div></section>

      <section className="bg-[#1B4332] py-7 px-4"><div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"><div><p className="text-white font-heading font-bold text-xl">A considered approach for a lasting investment.</p><p className="text-white/70 text-sm">Begin with a private on-site consultation.</p></div><div className="flex gap-3"><button onClick={() => scrollToForm('mid')} className="bg-[#C9A84C] text-white font-bold px-5 py-3 rounded-lg text-sm">Request Consultation →</button><a href={PHONE_HREF} onClick={() => handlePhoneClick('mid')} className="flex items-center gap-2 border border-white/40 text-white font-semibold px-4 py-3 rounded-lg text-sm"><PhoneIcon />Call Now</a></div></div></section>

      <section className="py-12 sm:py-16 px-4 bg-white"><div className="max-w-6xl mx-auto"><div className="text-center mb-8"><h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332]">Materials Selected for Beauty and Longevity</h2><p className="text-[#9A9590] text-sm mt-2">Each design is matched to your home, landscape, and long-term priorities.</p></div><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">{FENCE_TYPES.map((fence) => <button key={fence.label} onClick={() => scrollToForm(`fence_type_${fence.label.toLowerCase().split(' ').join('_')}`)} className="group text-left rounded-xl overflow-hidden border border-[#E8E4DF] hover:border-[#C9A84C] hover:shadow-md transition-all"><div className="relative h-28 sm:h-36 bg-[#E8E4DF]"><Image src={fence.img} alt={`${fence.label} installed by JT Fence Boston`} fill className="object-cover group-hover:scale-105 transition-transform" sizes="(max-width: 640px) 50vw, 20vw" /></div><div className="p-3"><p className="font-heading font-bold text-[#1B4332] text-sm">{fence.label}</p><p className="text-[#9A9590] text-xs leading-tight mt-1">{fence.desc}</p></div></button>)}</div></div></section>

      <section className="py-12 sm:py-16 px-4 border-t border-[#E8E4DF]"><div className="max-w-4xl mx-auto"><h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332] text-center mb-10">A White-Glove Process, Start to Finish</h2><div className="grid sm:grid-cols-3 gap-8">{STEPS.map((step) => <div key={step.n} className="text-center"><div className="w-12 h-12 bg-[#1B4332] text-white rounded-full flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4">{step.n}</div><h3 className="font-heading font-bold text-[#1B4332] text-lg mb-2">{step.title}</h3><p className="text-sm leading-relaxed">{step.desc}</p></div>)}</div><div className="text-center mt-10"><button onClick={() => scrollToForm('process')} className="bg-[#C9A84C] text-white font-bold px-8 py-4 rounded-lg">Plan My Project →</button></div></div></section>

      <section className="py-12 sm:py-16 px-4 bg-white border-t border-[#E8E4DF]"><div className="max-w-6xl mx-auto"><div className="text-center mb-8"><h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332]">Craftsmanship in the Details</h2><p className="text-[#9A9590] text-sm mt-2">Real JT Fence installations across Massachusetts.</p></div><div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">{GALLERY.map((src, index) => <button key={src} onClick={() => { gtagEvent('gallery_click_boston_suburbs', { image: index + 1, page: '/boston-suburbs' }); scrollToForm(`gallery_${index + 1}`); }} className="relative rounded-xl overflow-hidden bg-[#E8E4DF] aspect-[4/3] group"><Image src={src} alt={`Premium JT Fence installation ${index + 1}`} fill className="object-cover group-hover:scale-105 transition-transform" sizes="(max-width: 640px) 50vw, 33vw" /><span className="absolute inset-0 bg-[#1B4332]/0 group-hover:bg-[#1B4332]/20 transition-colors flex items-center justify-center"><span className="opacity-0 group-hover:opacity-100 bg-white text-[#1B4332] text-xs font-bold px-3 py-1.5 rounded-full">Plan a Similar Project →</span></span></button>)}</div></div></section>

      <section className="py-12 sm:py-16 px-4"><div className="max-w-5xl mx-auto text-center"><p className="text-[#C9A84C] font-bold text-xs uppercase tracking-wider mb-2">31 Communities</p><h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332]">Serving MetroWest &amp; Greater Boston</h2><p className="text-[#9A9590] text-sm mt-2 mb-7">Trusted by homeowners in Newton, Weston, Wellesley, Lexington, Winchester, Needham, Concord, and 24 more communities.</p><div className="flex flex-wrap justify-center gap-2">{TOWNS.map((town) => <span key={town} className="bg-white border border-[#E8E4DF] text-[#1B4332] text-xs font-semibold px-3 py-1.5 rounded-full">{town}</span>)}</div></div></section>

      <section className="py-12 sm:py-16 px-4 bg-white border-t border-[#E8E4DF]"><div className="max-w-3xl mx-auto"><h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332] text-center mb-8">Common Questions</h2><div className="space-y-3">{FAQS.map((faq, index) => <FaqItem key={faq.q} q={faq.q} a={faq.a} onOpen={() => gtagEvent('faq_open_boston_suburbs', { question: index + 1, page: '/boston-suburbs' })} />)}</div></div></section>

      <section className="py-14 sm:py-20 px-4 bg-[#1B4332] text-white"><div className="max-w-3xl mx-auto text-center"><h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Your Property Deserves a Fence Built with Intention</h2><p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">From discreet estate-scale enclosures to refined garden, privacy, and pool fencing, JT Fence brings premium workmanship and professional service to every detail.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button onClick={() => scrollToForm('final')} className="bg-[#C9A84C] text-white font-bold px-8 py-4 rounded-lg">Request My Consultation →</button><a href={PHONE_HREF} onClick={() => handlePhoneClick('final')} className="flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-lg"><PhoneIcon />Call {company.phone}</a></div><p className="text-white/50 text-xs mt-6">Licensed &amp; Insured · Permits Coordinated · Workmanship Warranty</p></div></section>

      <footer className="bg-white border-t border-[#E8E4DF] py-5 px-4"><div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"><p className="text-[#9A9590]">© {new Date().getFullYear()} {company.name} All rights reserved.</p><div className="flex gap-3 items-center"><a href={PHONE_HREF} onClick={() => handlePhoneClick('footer')} className="text-[#1B4332] font-semibold">{company.phone}</a><span className="text-[#E8E4DF]">|</span><a href={`mailto:${company.email}`} className="text-[#1B4332]">{company.email}</a><span className="text-[#E8E4DF]">|</span><a href="/privacy" className="text-[#9A9590]">Privacy</a></div></div></footer>

      {mobileBannerVisible && <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-[#E8E4DF] shadow-2xl"><div className="flex"><a href={PHONE_HREF} onClick={() => handlePhoneClick('mobile_bar')} className="flex-1 flex items-center justify-center gap-2 bg-[#1B4332] text-white font-bold text-sm py-4"><PhoneIcon />Call Now</a><button onClick={() => scrollToForm('mobile_bar')} className="flex-1 bg-[#C9A84C] text-white font-bold text-sm py-4">Consultation →</button></div><div className="bg-white" style={{ height: 'env(safe-area-inset-bottom)' }} /></div>}
      <div className="lg:hidden h-16" />
    </div>
  );
}
