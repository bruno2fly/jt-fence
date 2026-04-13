'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PoolFenceLandingClient() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', city: '', message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/contact?service=pool-fence&name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}&email=${encodeURIComponent(formData.email)}&city=${encodeURIComponent(formData.city)}`;
  };

  return (
    <main style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#1a1a1a' }}>

      {/* HERO with real photo */}
      <section style={{ position: 'relative', height: '520px', overflow: 'hidden' }}>
        <Image
          src="/images/pool/pool-aluminum-patio-umbrella.jpg"
          alt="Pool fence installation Massachusetts"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 100%)',
          display: 'flex', alignItems: 'center', padding: '0 40px'
        }}>
          <div style={{ maxWidth: 560, color: '#fff' }}>
            <div style={{ display: 'inline-block', background: 'rgba(59,130,246,0.9)', borderRadius: 4, padding: '5px 14px', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 20, textTransform: 'uppercase' }}>
              Summer 2026 — Book Your Installation Now
            </div>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 18px' }}>
              Pool Fence Installation<br />
              <span style={{ color: '#93c5fd' }}>Massachusetts</span>
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.88)', lineHeight: 1.65, marginBottom: 32, maxWidth: 480 }}>
              Code-compliant pool barriers installed across South Shore, Plymouth County, and Cape Cod. Licensed, insured, and BBB accredited since 2008.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="tel:7814205858" style={{
                background: '#2563eb', color: '#fff', padding: '14px 28px',
                borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none'
              }}>
                Call (781) 420-5858
              </a>
              <a href="#quote" style={{
                background: 'rgba(255,255,255,0.15)', color: '#fff',
                border: '2px solid rgba(255,255,255,0.5)',
                padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none'
              }}>
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '18px 20px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 36, flexWrap: 'wrap' }}>
          {['5-Star Rated', 'BBB Accredited', 'Licensed & Insured', '15+ Years Experience', '500+ Projects Completed'].map((item, i) => (
            <span key={i} style={{ fontSize: 13, fontWeight: 600, color: '#475569' }}>{item}</span>
          ))}
        </div>
      </section>

      {/* PHOTO GALLERY STRIP */}
      <section style={{ padding: '60px 20px', maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>
          Our Pool Fence Work
        </h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 36, fontSize: 16 }}>
          Real installations across South Shore and Cape Cod
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {[
            { src: '/images/pool/pool-aluminum-jt-sign-01.jpg', alt: 'Aluminum pool fence with JT Fence sign' },
            { src: '/images/pool/pool-02-pavers-install.png', alt: 'Pool fence installed on pavers' },
            { src: '/images/pool/pool-aluminum-backyard-01.jpg', alt: 'Aluminum pool fence backyard' },
            { src: '/images/pool/pool-04-pool-spa-wide.png', alt: 'Pool and spa wide view fence' },
            { src: '/images/pool/pool-aluminum-wooded-new.jpg', alt: 'Aluminum fence wooded property' },
            { src: '/images/pool/pool-03-metal-vinyl.png', alt: 'Metal and vinyl pool fence combination' },
          ].map((img, i) => (
            <div key={i} style={{ borderRadius: 10, overflow: 'hidden', aspectRatio: '4/3', position: 'relative', boxShadow: '0 2px 12px rgba(0,0,0,0.12)' }}>
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* WHY NOW */}
      <section style={{ background: '#f0f9ff', padding: '60px 20px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, textAlign: 'center', marginBottom: 40 }}>
            Why Install Before Summer?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {[
              { title: 'Family Safety', desc: 'Pool barriers are the most effective way to protect young children and pets around water.' },
              { title: 'Slots Fill Fast', desc: 'Spring is peak season. Installations book weeks out — schedule now before summer slots are gone.' },
              { title: 'Code Compliance', desc: 'Many Massachusetts towns require fencing around pools. We know the local requirements.' },
              { title: 'Property Value', desc: 'A professional pool fence adds immediate curb appeal and resale value to your home.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #bae6fd' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FENCE OPTIONS with photos */}
      <section style={{ padding: '60px 20px', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>
          Pool Fence Options
        </h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 40, fontSize: 16 }}>
          We match the fence to your pool, your yard, and your vision.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {[
            {
              img: '/images/pool/pool-aluminum-jt-sign-02.jpg',
              name: 'Ornamental Aluminum',
              desc: 'Open sightlines at the water\'s edge. Safety-rated, powder-coated, classic black. The most requested option for pool barriers.',
              badge: 'Most Popular'
            },
            {
              img: '/images/pool/pool-05-wooded-pool.png',
              name: 'White Vinyl Privacy',
              desc: 'Full privacy along property lines. Low maintenance, built for New England winters. Pairs perfectly with aluminum at the pool edge.',
              badge: ''
            },
            {
              img: '/images/pool/pool-03-metal-vinyl.png',
              name: 'Mixed System',
              desc: 'Aluminum at the pool for visibility, vinyl along the perimeter for privacy. Best of both — the complete solution for most backyards.',
              badge: 'Recommended'
            },
          ].map((item, i) => (
            <div key={i} style={{ background: '#f8fafc', borderRadius: 12, overflow: 'hidden', border: '1px solid #e2e8f0', position: 'relative' }}>
              {item.badge && (
                <span style={{ position: 'absolute', top: 12, right: 12, background: '#2563eb', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, zIndex: 1 }}>
                  {item.badge}
                </span>
              )}
              <div style={{ height: 200, position: 'relative' }}>
                <Image src={item.img} alt={item.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 20 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{item.name}</h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ background: '#f8fafc', padding: '40px 20px', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20 }}>Service Areas</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {['Plymouth', 'Duxbury', 'Hingham', 'Scituate', 'Kingston', 'Wareham',
              'Marshfield', 'Norwell', 'Cohasset', 'Falmouth', 'Hyannis', 'Sandwich',
              'Mashpee', 'Osterville', 'Chatham', 'Dennis', 'Brewster', 'Harwich'].map((town, i) => (
              <span key={i} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 20, padding: '5px 14px', fontSize: 13, fontWeight: 500, color: '#475569' }}>
                {town}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="quote" style={{ background: 'linear-gradient(135deg, #0f2027, #2c5364)', padding: '70px 20px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', background: '#fff', borderRadius: 16, padding: '40px 36px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>
            Get Your Free Pool Fence Estimate
          </h2>
          <p style={{ color: '#64748b', fontSize: 14, textAlign: 'center', marginBottom: 28 }}>
            No obligation. We respond the same day.
          </p>
          <form onSubmit={handleSubmit}>
            {[
              { label: 'Your Name', key: 'name', type: 'text', placeholder: 'John Smith', required: true },
              { label: 'Phone', key: 'phone', type: 'tel', placeholder: '(781) 555-0100', required: true },
              { label: 'Email', key: 'email', type: 'email', placeholder: 'john@email.com', required: false },
              { label: 'City / Town', key: 'city', type: 'text', placeholder: 'Plymouth, Hingham, Falmouth...', required: true },
            ].map((field) => (
              <div key={field.key} style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#374151' }}>
                  {field.label}{field.required ? ' *' : ''}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={(formData as any)[field.key]}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  required={field.required}
                  style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #d1d5db', borderRadius: 8, fontSize: 15, boxSizing: 'border-box' }}
                />
              </div>
            ))}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#374151' }}>
                Tell us about your project
              </label>
              <textarea
                placeholder="Pool size, patio type, style preference..."
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #d1d5db', borderRadius: 8, fontSize: 15, resize: 'vertical', boxSizing: 'border-box' }}
              />
            </div>
            <button type="submit" style={{
              width: '100%', background: '#2563eb', color: '#fff',
              border: 'none', borderRadius: 8, padding: '14px',
              fontSize: 16, fontWeight: 700, cursor: 'pointer'
            }}>
              Request My Free Estimate
            </button>
            <p style={{ textAlign: 'center', fontSize: 12, color: '#9ca3af', marginTop: 12 }}>
              Or call us: <a href="tel:7814205858" style={{ color: '#2563eb', fontWeight: 600 }}>(781) 420-5858</a>
            </p>
          </form>
        </div>
      </section>

      <section style={{ background: '#1e293b', color: '#fff', padding: '30px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#64748b', marginBottom: 8 }}>
          JT Fence Inc. — Plymouth, MA. Licensed, Insured, BBB Accredited since 2008.
        </p>
        <Link href="/" style={{ color: '#7dd3fc', fontSize: 13, textDecoration: 'none' }}>
          Back to JT Fence Home
        </Link>
      </section>
    </main>
  );
}
