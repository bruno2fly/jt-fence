'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PoolFenceLandingClient() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', city: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to contact page with pre-filled context
    window.location.href = `/contact?service=pool-fence&name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}&email=${encodeURIComponent(formData.email)}&city=${encodeURIComponent(formData.city)}`;
  };

  return (
    <main style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#1a1a1a' }}>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        color: '#fff',
        padding: '80px 20px 60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', borderRadius: 20, padding: '6px 16px', fontSize: 13, fontWeight: 600, letterSpacing: 1, marginBottom: 20 }}>
            ☀️ SUMMER 2026 — BOOK YOUR INSTALLATION NOW
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 20px' }}>
            Pool Fence Installation<br />
            <span style={{ color: '#7dd3fc' }}>Massachusetts</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)', maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.6 }}>
            Keep your family safe this summer. JT Fence installs code-compliant pool barriers across South Shore, Plymouth County, and Cape Cod.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:7814205858" style={{
              display: 'inline-block', background: '#3b82f6', color: '#fff',
              padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 16,
              textDecoration: 'none', transition: 'background 0.2s'
            }}>
              📞 Call (781) 420-5858
            </a>
            <a href="#quote" style={{
              display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff',
              border: '2px solid rgba(255,255,255,0.4)',
              padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 16,
              textDecoration: 'none'
            }}>
              Get Free Estimate →
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '20px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          {[
            { icon: '⭐', text: '5-Star Rated' },
            { icon: '🏛️', text: 'BBB Accredited' },
            { icon: '🛡️', text: 'Licensed & Insured' },
            { icon: '📋', text: '15+ Years Experience' },
            { icon: '✅', text: '500+ Projects Done' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: '#475569' }}>
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </section>

      {/* WHY NOW */}
      <section style={{ padding: '60px 20px', maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, textAlign: 'center', marginBottom: 40 }}>
          Why Install Before Summer?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {[
            { icon: '👶', title: 'Family Safety', desc: 'Pool barriers are the #1 way to prevent accidental drownings for young children and pets.' },
            { icon: '📅', title: 'Slots Fill Fast', desc: 'Spring is peak season. Book now before summer slots are gone.' },
            { icon: '⚖️', title: 'Code Compliance', desc: 'Many MA towns require fencing around pools. We know the local requirements.' },
            { icon: '🏡', title: 'Property Value', desc: 'A clean, professional pool fence adds immediate curb appeal and resale value.' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: 24, border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OPTIONS */}
      <section style={{ background: '#f0f9ff', padding: '60px 20px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>
            Pool Fence Options
          </h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 40, fontSize: 16 }}>
            We match the fence to your pool, your yard, and your style.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { name: 'Ornamental Aluminum', desc: 'Open sightlines at the water\'s edge. Safety-rated, powder-coated, classic black.', badge: 'Most Popular' },
              { name: 'White Vinyl Privacy', desc: 'Full privacy along property lines. Low maintenance, built for New England winters.', badge: '' },
              { name: 'Mixed System', desc: 'Aluminum at the pool + vinyl along the perimeter. Best of both worlds.', badge: 'Recommended' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 28, border: '1px solid #bae6fd', position: 'relative' }}>
                {item.badge && (
                  <span style={{ position: 'absolute', top: 16, right: 16, background: '#0ea5e9', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>
                    {item.badge}
                  </span>
                )}
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{item.name}</h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: '50px 20px', maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, textAlign: 'center', marginBottom: 16 }}>
          We Serve Your Area
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
          {['Plymouth', 'Duxbury', 'Hingham', 'Scituate', 'Kingston', 'Wareham',
            'Marshfield', 'Norwell', 'Cohasset', 'Falmouth', 'Hyannis', 'Sandwich',
            'Mashpee', 'Osterville', 'Chatham', 'Dennis', 'Brewster'].map((town, i) => (
            <span key={i} style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 20, padding: '6px 14px', fontSize: 13, fontWeight: 500, color: '#475569' }}>
              {town}
            </span>
          ))}
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="quote" style={{ background: 'linear-gradient(135deg, #0f2027, #2c5364)', padding: '70px 20px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', background: '#fff', borderRadius: 16, padding: '40px 36px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>
            Get Your Free Pool Fence Estimate
          </h2>
          <p style={{ color: '#64748b', fontSize: 14, textAlign: 'center', marginBottom: 28 }}>
            No obligation. We respond same day.
          </p>
          <form onSubmit={handleSubmit}>
            {[
              { label: 'Your Name *', key: 'name', type: 'text', placeholder: 'John Smith' },
              { label: 'Phone *', key: 'phone', type: 'tel', placeholder: '(781) 555-0100' },
              { label: 'Email', key: 'email', type: 'email', placeholder: 'john@email.com' },
              { label: 'City / Town *', key: 'city', type: 'text', placeholder: 'Plymouth, Hingham, Falmouth...' },
            ].map((field) => (
              <div key={field.key} style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#374151' }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={(formData as any)[field.key]}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #d1d5db', borderRadius: 8, fontSize: 15, outline: 'none', boxSizing: 'border-box' }}
                  required={field.label.includes('*')}
                />
              </div>
            ))}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#374151' }}>
                Tell us about your project
              </label>
              <textarea
                placeholder="Pool size, existing patio, style preference..."
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
              Request My Free Estimate →
            </button>
            <p style={{ textAlign: 'center', fontSize: 12, color: '#9ca3af', marginTop: 12 }}>
              Or call us directly: <a href="tel:7814205858" style={{ color: '#2563eb', fontWeight: 600 }}>(781) 420-5858</a>
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section style={{ background: '#1e293b', color: '#fff', padding: '40px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 8 }}>
          JT Fence Inc. — Plymouth, MA · Licensed, Insured, BBB Accredited
        </p>
        <p style={{ fontSize: 13, color: '#64748b' }}>
          Serving Plymouth County, Cape Cod, and South Shore since 2008
        </p>
        <Link href="/" style={{ color: '#7dd3fc', fontSize: 13, textDecoration: 'none', marginTop: 8, display: 'inline-block' }}>
          ← Back to JT Fence Home
        </Link>
      </section>
    </main>
  );
}
