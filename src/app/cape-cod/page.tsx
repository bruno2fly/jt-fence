"use client";

// TODO: Bruno will provide the real conversion label from Google Ads — replace REPLACE_WITH_LABEL
const CAPE_COD_CONVERSION = "AW-18073723056/nq2pCOX92eEcELDBnKpD";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { company } from "@/data/company";
import CapeCodQuoteForm from "./CapeCodQuoteForm";

const PHONE_HREF = "tel:+17814205858";

const gtagEvent = (name: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", name, params);
  }
};

const TRUST_BADGES = [
  "✓ Licensed & Insured",
  "✓ 14+ Years Experience",
  "✓ Permits Handled for You",
  "✓ Clean Job Sites, On-Time Crews",
  "✓ Workmanship Warranty",
];

// Real, independently-verifiable reviews only — no in-house fabricated quotes.
// Google rating (4.9) confirmed live via Google Maps business profile (Place/CID 5353793838333946389).
// Yelp review below confirmed cross-referenced via MapQuest's synced Yelp review feed (published 9/23/2019).
const GOOGLE_PLACE_URL = "https://www.google.com/maps?cid=5353793838333946389";
const GOOGLE_RATING = "4.9";

const TESTIMONIALS = [
  {
    name: "Justin G.",
    location: "Yelp Review",
    type: "Cedar Fence Replacement",
    quote:
      "We hired Tiago to take away our existing fence and replace it with a new cedar one. Excellent communication from initial contact thru to the end. Was very prompt and did a great job installing the new fence.",
    date: "9/23/2019",
  },
];

const FENCE_TYPES = [
  {
    label: "Custom Wood",
    img: "/images/wood/wood-privacy-natural-01.jpg",
    desc: "Cedar privacy and picket designs planned for Cape landscapes, grades, and sandy soil conditions.",
  },
  {
    label: "Premium Vinyl",
    img: "/images/vinyl/vinyl-privacy-white-01.jpg",
    desc: "Low-maintenance privacy and decorative styles well suited to salt-air exposure and coastal living.",
  },
  {
    label: "Ornamental Aluminum",
    img: "/images/aluminum/aluminum-driveway-gate-arched.jpg",
    desc: "Durable, low-maintenance perimeter fencing and gates selected for the Cape’s coastal environment.",
  },
  {
    label: "Pool Enclosures",
    img: "/images/pool/pool-aluminum-jt-sign-01.jpg",
    desc: "Code-compliant pool safety with precise gate placement and coastal-ready material options.",
  },
  {
    label: "Estate & Privacy",
    img: "/images/vinyl/vinyl-post-rail-hydrangeas.jpg",
    desc: "Privacy-focused layouts for seasonal homes, year-round residences, pets, gardens, and security.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Free On-Site Estimate",
    desc: "We listen to your goals, study the property, and advise on materials, salt-air exposure, sandy soil, gates, grades, and landscaping.",
  },
  {
    n: "2",
    title: "Detailed Project Planning",
    desc: "You receive a clear written proposal. We coordinate Dig Safe, town permitting, materials, and installation scheduling.",
  },
  {
    n: "3",
    title: "Coastal-Ready Installation",
    desc: "Our professional crew installs for the property conditions, protects your home, maintains a clean site, and completes a final walkthrough.",
  },
];

const GALLERY = [
  {
    src: "/images/wood/wood-horizontal-stained-gate.jpg",
    caption: "Horizontal wood fence with a stained gate entry",
  },
  {
    src: "/images/vinyl/vinyl-privacy-white-gate.jpg",
    caption: "White vinyl privacy fence with matching gate",
  },
  {
    src: "/images/pool/pool-aluminum-backyard-01.jpg",
    caption: "Code-compliant aluminum pool enclosure",
  },
  {
    src: "/images/aluminum/aluminum-vinyl-mixed-yard.jpg",
    caption: "Mixed aluminum and vinyl perimeter fencing",
  },
  {
    src: "/images/wood/wood-spindle-top-01.jpg",
    caption: "Wood fence with a decorative spindle-top design",
  },
  {
    src: "/images/vinyl/vinyl-privacy-white-02.jpg",
    caption: "Semi-privacy vinyl fence along a landscaped yard",
  },
];

const TOWNS = [
  "Barnstable",
  "Bourne",
  "Brewster",
  "Chatham",
  "Dennis",
  "Eastham",
  "Falmouth",
  "Harwich",
  "Mashpee",
  "Orleans",
  "Provincetown",
  "Sandwich",
  "Truro",
  "Wellfleet",
  "Yarmouth",
];

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: company.name,
  url: "https://jtfenceboston.com/cape-cod",
  telephone: company.phone,
  email: company.email,
  areaServed: TOWNS.map((town) => ({
    "@type": "City",
    name: `${town}, Massachusetts`,
  })),
};

const FAQS = [
  {
    q: "How do you handle permits in my town?",
    a: "We identify the requirements for your municipality, coordinate the permit process, and arrange Dig Safe before installation. You receive clear updates throughout, without having to manage the paperwork yourself.",
  },
  {
    q: "How do you plan fencing for Cape Cod conditions?",
    a: "Every project is planned around the property. We consider salt-air exposure, sandy soil conditions, Atlantic winds, grades, gates, landscaping, and the maintenance level you want before recommending a design and material.",
  },
  {
    q: "Can you work with seasonal and vacation homeowners?",
    a: "Yes. We serve seasonal homes, vacation properties, and year-round residences across Cape Cod. We provide clear communication and coordinate the installation schedule around the needs of the property and homeowner.",
  },
  {
    q: "Which fence materials do you install?",
    a: "We install wood, vinyl, aluminum, pool, pet, and privacy fencing, plus gates. During your estimate, we recommend materials based on coastal exposure, maintenance preference, privacy, safety, and long-term performance.",
  },
  {
    q: "What areas do you serve?",
    a: "This campaign serves all 15 Barnstable County towns: Barnstable, Bourne, Brewster, Chatham, Dennis, Eastham, Falmouth, Harwich, Mashpee, Orleans, Provincetown, Sandwich, Truro, Wellfleet, and Yarmouth.",
  },
];

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

function FaqItem({
  q,
  a,
  onOpen,
}: {
  q: string;
  a: string;
  onOpen: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#E8E4DF] rounded-lg overflow-hidden">
      <button
        onClick={() => {
          setOpen((value) => !value);
          if (!open) onOpen();
        }}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-body font-semibold text-[#1B4332] text-sm sm:text-base bg-white hover:bg-[#FAF8F5] transition-colors"
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
        <div className="px-5 py-4 font-body text-sm text-[#2D3436] leading-relaxed bg-white border-t border-[#E8E4DF]">
          {a}
        </div>
      )}
    </div>
  );
}

export default function CapeCodPage() {
  const [mobileBannerVisible, setMobileBannerVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setMobileBannerVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToForm = useCallback((source: string) => {
    gtagEvent(`${source}_cta_click_cape_cod`, { source, page: "/cape-cod" });
    document
      .getElementById("quote-form")
      ?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handlePhoneClick = useCallback((location: string) => {
    gtagEvent("phone_click_cape_cod", { location, page: "/cape-cod" });
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion)
      (window as any).gtag_report_conversion();
  }, []);

  const handleFormSuccess = useCallback(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: CAPE_COD_CONVERSION,
        value: 150,
        currency: "USD",
      });
    }
    gtagEvent("form_submit_cape_cod", { page: "/cape-cod" });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#2D3436] font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA),
        }}
      />
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
              onClick={() => handlePhoneClick("header")}
              className="flex items-center gap-1.5 text-[#C9A84C] font-semibold text-sm sm:text-base"
            >
              <PhoneIcon />
              <span className="hidden sm:inline">{company.phone}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <button
              onClick={() => scrollToForm("header")}
              className="bg-[#1B4332] text-white font-semibold text-sm px-4 py-2 rounded-lg"
            >
              Request My Free Estimate
            </button>
          </div>
        </div>
      </header>

      <section ref={heroRef} className="relative overflow-hidden text-white">
        <Image
          src="/images/boston-suburbs/hero-colonial-fence.png"
          alt="White vinyl fence installed by JT Fence Boston"
          fill
          priority
          className="object-cover"
        />
        {/* Scrim only over the left copy column so the photo reads clearly on the right/overall */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2818]/92 via-[#1B4332]/70 to-transparent lg:from-[#0d2818]/95 lg:via-[#1B4332]/60 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="lg:pt-2">
            <div className="inline-block bg-[#C9A84C] text-[#1B4332] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Serving All 15 Cape Cod Towns
            </div>
            <h1 className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              Fencing Built for Cape Cod&apos;s Coastal Life
            </h1>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              Coastal-grade materials and professional installation for
              year-round residents and seasonal homeowners across the Cape—with
              free estimates and a fast response.
            </p>
            <a
              href={GOOGLE_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg px-3 py-2 mb-6 transition-colors"
            >
              <span className="text-[#C9A84C] text-sm">★★★★★</span>
              <span className="text-white font-bold text-sm">
                {GOOGLE_RATING}
              </span>
              <span className="text-white/70 text-xs">
                on Google — view profile →
              </span>
            </a>
            <ul className="space-y-3 mb-8">
              {[
                "14+ years of craftsmanship for Massachusetts homes",
                "Materials and layouts selected for salt air, sandy soil, and Atlantic winds",
                "Licensed and insured, with Dig Safe and town permits handled for you",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-white text-sm sm:text-base drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
                >
                  <CheckCircle className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 lg:hidden">
              <button
                onClick={() => scrollToForm("hero")}
                className="bg-[#C9A84C] text-white font-bold px-6 py-4 rounded-lg"
              >
                Request My Free Estimate →
              </button>
              <a
                href={PHONE_HREF}
                onClick={() => handlePhoneClick("hero")}
                className="flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-6 py-4 rounded-lg"
              >
                <PhoneIcon />
                Call {company.phone}
              </a>
            </div>
          </div>
          <div
            id="quote-form"
            className="bg-white rounded-xl shadow-2xl overflow-hidden scroll-mt-24"
          >
            <div className="h-1.5 bg-[#C9A84C]" />
            <div className="p-5 sm:p-6">
              <p className="font-heading text-[#1B4332] font-bold text-xl text-center">
                Request Your Free Estimate
              </p>
              <p className="text-[#9A9590] text-center text-sm mb-4">
                Tell us about your Cape property and project goals.
              </p>
              <CapeCodQuoteForm
                onSuccess={handleFormSuccess}
                onFormStart={() =>
                  gtagEvent("form_start_cape_cod", { page: "/cape-cod" })
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B4332] border-t border-white/10 py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-2">
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="text-white/90 font-semibold text-xs sm:text-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <a
              href={GOOGLE_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <p className="text-[#C9A84C] text-2xl">★★★★★</p>
              <p className="font-heading text-[#1B4332] font-bold text-lg">
                {GOOGLE_RATING} on Google
              </p>
            </a>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332] mt-1">
              Trusted Craftsmanship, Verified Feedback
            </h2>
            <p className="text-[#9A9590] text-sm mt-2">
              Real feedback — careful workmanship and dependable service from
              the first conversation through final walkthrough.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <article
                key={testimonial.name}
                className="bg-white border border-[#E8E4DF] rounded-xl p-6 shadow-sm"
              >
                <p className="text-[#C9A84C] mb-3">★★★★★</p>
                <p className="text-sm leading-relaxed italic mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-[#E8E4DF] pt-3 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#1B4332] text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-[#9A9590] text-xs">
                      {testimonial.type} · {testimonial.date}
                    </p>
                  </div>
                  <span className="text-[#9A9590] text-xs font-semibold">
                    via {testimonial.location}
                  </span>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center text-xs text-[#9A9590] mt-6">
            Verified review — sourced from JT Fence Boston&apos;s public Yelp
            listing.
          </p>
        </div>
      </section>

      <section className="bg-[#1B4332] py-7 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-white font-heading font-bold text-xl">
              Coastal craftsmanship built for the Cape.
            </p>
            <p className="text-white/70 text-sm">
              Begin with a free on-site estimate.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scrollToForm("mid")}
              className="bg-[#C9A84C] text-white font-bold px-5 py-3 rounded-lg text-sm"
            >
              Request My Free Estimate →
            </button>
            <a
              href={PHONE_HREF}
              onClick={() => handlePhoneClick("mid")}
              className="flex items-center gap-2 border border-white/40 text-white font-semibold px-4 py-3 rounded-lg text-sm"
            >
              <PhoneIcon />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332]">
              Materials Selected for Coastal Performance
            </h2>
            <p className="text-[#9A9590] text-sm mt-2">
              Each design is matched to your property, coastal exposure,
              maintenance goals, and long-term priorities.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {FENCE_TYPES.map((fence) => (
              <button
                key={fence.label}
                onClick={() =>
                  scrollToForm(
                    `fence_type_${fence.label.toLowerCase().split(" ").join("_")}`,
                  )
                }
                className="group text-left rounded-xl overflow-hidden border border-[#E8E4DF] hover:border-[#C9A84C] hover:shadow-md transition-all"
              >
                <div className="relative h-28 sm:h-36 bg-[#E8E4DF]">
                  <Image
                    src={fence.img}
                    alt={`${fence.label} installed by JT Fence Boston`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                </div>
                <div className="p-3">
                  <p className="font-heading font-bold text-[#1B4332] text-sm">
                    {fence.label}
                  </p>
                  <p className="text-[#9A9590] text-xs leading-tight mt-1">
                    {fence.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 px-4 bg-white border-t border-[#E8E4DF]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-20 h-20 rounded-full bg-[#1B4332] text-white flex items-center justify-center font-heading font-bold text-2xl flex-shrink-0">
            TS
          </div>
          <div>
            <p className="font-heading font-bold text-[#1B4332] text-lg">
              Tiago Silva, Owner
            </p>
            <p className="text-[#2D3436] text-sm leading-relaxed mt-1">
              &ldquo;Every property I work on gets the same attention I&apos;d
              want for my own home — I&apos;m personally involved from the first
              walkthrough to the final gate hinge.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 border-t border-[#E8E4DF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332] text-center mb-10">
            A Clear Process, Start to Finish
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-12 h-12 bg-[#1B4332] text-white rounded-full flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4">
                  {step.n}
                </div>
                <h3 className="font-heading font-bold text-[#1B4332] text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => scrollToForm("process")}
              className="bg-[#C9A84C] text-white font-bold px-8 py-4 rounded-lg"
            >
              Plan My Project →
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 bg-white border-t border-[#E8E4DF]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332]">
              Craftsmanship in the Details
            </h2>
            <p className="text-[#9A9590] text-sm mt-2">
              Real JT Fence installations across Massachusetts.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {GALLERY.map((item, index) => (
              <button
                key={item.src}
                onClick={() => {
                  gtagEvent("gallery_click_cape_cod", {
                    image: index + 1,
                    page: "/cape-cod",
                  });
                  scrollToForm(`gallery_${index + 1}`);
                }}
                className="relative rounded-xl overflow-hidden bg-[#E8E4DF] aspect-[4/3] group"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/70 via-[#1B4332]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-xs font-semibold leading-snug">
                    {item.caption}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#C9A84C] font-bold text-xs uppercase tracking-wider mb-2">
            15 Communities
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332]">
            Serving Cape Cod
          </h2>
          <p className="text-[#9A9590] text-sm mt-2 mb-7">
            Fence installation for seasonal homes and year-round residences in
            every Barnstable County town.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {TOWNS.map((town) => (
              <span
                key={town}
                className="bg-white border border-[#E8E4DF] text-[#1B4332] text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                {town}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 bg-white border-t border-[#E8E4DF]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B4332] text-center mb-8">
            Common Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <FaqItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                onOpen={() =>
                  gtagEvent("faq_open_cape_cod", {
                    question: index + 1,
                    page: "/cape-cod",
                  })
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 bg-[#1B4332] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Your Cape Property Deserves a Fence Built for the Coast
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
            From privacy and garden fencing to pool enclosures and gates, JT
            Fence brings coastal-aware planning, quality workmanship, and
            professional service to every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToForm("final")}
              className="bg-[#C9A84C] text-white font-bold px-8 py-4 rounded-lg"
            >
              Request My Free Estimate →
            </button>
            <a
              href={PHONE_HREF}
              onClick={() => handlePhoneClick("final")}
              className="flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-lg"
            >
              <PhoneIcon />
              Call {company.phone}
            </a>
          </div>
          <p className="text-white/50 text-xs mt-6">
            Licensed &amp; Insured · Permits Coordinated · Workmanship Warranty
          </p>
        </div>
      </section>

      <footer className="bg-white border-t border-[#E8E4DF] py-5 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p className="text-[#9A9590]">
            © {new Date().getFullYear()} {company.name} All rights reserved.
          </p>
          <div className="flex gap-3 items-center">
            <a
              href={PHONE_HREF}
              onClick={() => handlePhoneClick("footer")}
              className="text-[#1B4332] font-semibold"
            >
              {company.phone}
            </a>
            <span className="text-[#E8E4DF]">|</span>
            <a href={`mailto:${company.email}`} className="text-[#1B4332]">
              {company.email}
            </a>
            <span className="text-[#E8E4DF]">|</span>
            <a href="/privacy" className="text-[#9A9590]">
              Privacy
            </a>
          </div>
        </div>
      </footer>

      {mobileBannerVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-[#E8E4DF] shadow-2xl">
          <div className="flex">
            <a
              href={PHONE_HREF}
              onClick={() => handlePhoneClick("mobile_bar")}
              className="flex-1 flex items-center justify-center gap-2 bg-[#1B4332] text-white font-bold text-sm py-4"
            >
              <PhoneIcon />
              Call Now
            </a>
            <button
              onClick={() => scrollToForm("mobile_bar")}
              className="flex-1 bg-[#C9A84C] text-white font-bold text-sm py-4"
            >
              Free Estimate →
            </button>
          </div>
          <div
            className="bg-white"
            style={{ height: "env(safe-area-inset-bottom)" }}
          />
        </div>
      )}
      <div className="lg:hidden h-16" />
    </div>
  );
}
