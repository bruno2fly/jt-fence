'use client';

import { useState, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

interface PromoQuoteFormProps {
  onSuccess?: () => void;
  onFormStart?: () => void;
}

const FENCE_TYPES = [
  'Wood Fence',
  'Vinyl Fence',
  'Aluminum Fence',
  'Pool Fence',
  'Privacy Fence',
  'Chain-Link Fence',
  'Gate Installation',
  'Fence Repair',
];

export default function PromoQuoteForm({ onSuccess, onFormStart }: PromoQuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',       // maps to "town/zip" in UI, "city" in API
    serviceType: '',
    projectDetails: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const startedRef = useRef(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Fire form-start tracking once on first interaction
    if (!startedRef.current && onFormStart) {
      startedRef.current = true;
      onFormStart();
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Name required';
    if (!formData.phone.trim()) {
      e.phone = 'Phone required';
    } else {
      const digits = formData.phone.replace(/\D/g, '');
      if (digits.length !== 10) e.phone = 'Enter a 10-digit US number';
    }
    if (!formData.email.trim()) {
      e.email = 'Email required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = 'Invalid email';
    }
    if (!formData.city.trim()) e.city = 'Town or ZIP required';
    if (!formData.serviceType) e.serviceType = 'Select a fence type';
    if (!formData.projectDetails.trim()) e.projectDetails = 'Brief details required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          hearAboutUs: 'Google Ads', // promo page — always Google Ads traffic
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setSubmitError(data.error || 'Something went wrong. Call us at (781) 420-5858.');
        return;
      }

      setSubmitted(true);

      // GA4 generate_lead event
      if (typeof window !== 'undefined' && (window as any).trackQuoteRequest) {
        (window as any).trackQuoteRequest();
      }

      if (onSuccess) onSuccess();
    } catch {
      setSubmitError('Could not reach the server. Please call us at (781) 420-5858.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8 px-4">
        <CheckCircle size={48} className="text-[#1B4332] mx-auto mb-3" />
        <h3 className="font-heading text-xl font-bold text-[#1B4332] mb-2">
          Request Received!
        </h3>
        <p className="font-body text-[#2D3436] text-sm leading-relaxed">
          We'll call you within 2 hours to schedule your free on-site estimate.
          Can't wait? Call us now:{' '}
          <a href="tel:+17814205858" className="text-[#C9A84C] font-semibold">
            (781) 420-5858
          </a>
        </p>
      </div>
    );
  }

  const field =
    'w-full px-3 py-3 border rounded-lg font-body text-[#2D3436] text-base placeholder-[#9A9590] focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors';
  const err = 'border-red-400';
  const ok = 'border-[#E8E4DF]';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      {/* Row 1: Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            aria-label="Full name"
            className={`${field} ${errors.name ? err : ok}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            aria-label="Phone number"
            className={`${field} ${errors.phone ? err : ok}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Row 2: Email + Town/ZIP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            aria-label="Email address"
            className={`${field} ${errors.email ? err : ok}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Town or ZIP code"
            aria-label="Town or ZIP code"
            className={`${field} ${errors.city ? err : ok}`}
          />
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>
      </div>

      {/* Fence Type */}
      <div>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          aria-label="Fence type"
          className={`${field} ${errors.serviceType ? err : ok}`}
        >
          <option value="">Fence type / service needed</option>
          {FENCE_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>
        )}
      </div>

      {/* Project Details */}
      <div>
        <textarea
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          rows={3}
          placeholder="Quick project description — size, material preference, timeline, or competing quote details"
          aria-label="Project details"
          className={`${field} resize-none ${errors.projectDetails ? err : ok}`}
        />
        {errors.projectDetails && (
          <p className="text-red-500 text-xs mt-1">{errors.projectDetails}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#C9A84C] hover:bg-[#B8933F] active:bg-[#A07830] text-white font-body font-bold text-base rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
      >
        {isSubmitting ? 'Sending…' : 'Get My Free Fence Estimate →'}
      </button>

      {submitError && (
        <p className="text-red-600 text-sm text-center font-body" role="alert">
          {submitError}
        </p>
      )}

      <p className="text-center text-xs text-[#9A9590] font-body">
        Takes 30 seconds. No obligation. We respond within 2 hours.
      </p>
    </form>
  );
}
