'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface QuoteFormProps {
  onSuccess?: () => void;
}

export default function QuoteForm({ onSuccess }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    serviceType: '',
    projectDetails: '',
    hearAboutUs: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceOptions = [
    'Residential Fencing',
    'Commercial Fencing',
    'Fence Repair',
    'Gate Installation',
  ];

  const hearAboutUsOptions = [
    'Google Search',
    'Google Ads',
    'Referral from friend/family',
    'Social media',
    'Drove by your job site',
    'Other',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length !== 10) {
        newErrors.phone = 'Phone number must be 10 digits';
      } else if (phoneDigits.startsWith('0') || phoneDigits.startsWith('1')) {
        newErrors.phone = 'Please enter a valid US phone number';
      } else if (/^(\d)\1{9}$/.test(phoneDigits)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.serviceType) newErrors.serviceType = 'Service type is required';
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required';
    }
    if (!formData.hearAboutUs) newErrors.hearAboutUs = 'Please tell us how you heard about us';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // reCAPTCHA verification
    try {
      if (typeof window !== 'undefined' && (window as any).grecaptcha) {
        const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LdYourSiteKey_here';
        const token = await (window as any).grecaptcha.execute(siteKey, {action: 'submit_quote'});
        
        // Verify the token on the server
        const verifyResponse = await fetch('/api/verify-recaptcha', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });
        
        if (!verifyResponse.ok) {
          const verifyData = await verifyResponse.json().catch(() => ({}));
          setSubmitError(verifyData.error || 'Security verification failed. Please try again.');
          setIsSubmitting(false);
          return;
        }
      }
    } catch (error) {
      console.error('reCAPTCHA error:', error);
      setSubmitError('Security verification failed. Please try again.');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setSubmitError(
          data.error ||
            'Something went wrong. Please try again or call us directly.'
        );
        return;
      }

      setSubmitted(true);
      if (onSuccess) onSuccess();

      // Fire GA4 generate_lead event
      if (typeof window !== 'undefined' && window.trackQuoteRequest) {
        window.trackQuoteRequest();
      }

      // Fire Google Ads form-submission conversion (correct account ID)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-18073723056/J-ETCL2XttkcELDBnKpD',
          'value': 150,
          'currency': 'USD',
        });
      }

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          serviceType: '',
          projectDetails: '',
          hearAboutUs: '',
        });
        setSubmitted(false);
      }, 5000);
    } catch {
      setSubmitError(
        'Could not reach the server. Check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#FAF8F5] border border-[#E8E4DF] rounded-lg p-8 text-center max-w-2xl mx-auto">
        <CheckCircle size={48} className="text-[#1B4332] mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-[#1B4332] mb-3">
          Thank You!
        </h3>
        <p className="font-body text-[#2D3436] mb-4">
          Your quote request has been received. We'll contact you shortly with a free estimate.
        </p>
        <p className="font-body text-sm text-[#9A9590]">
          The form will reset shortly if you need to send another message.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block font-body font-semibold text-[#1B4332] mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg font-body text-[#2D3436] placeholder-[#9A9590] focus:outline-none focus:border-[#C9A84C] transition-colors ${
              errors.name ? 'border-red-500' : 'border-[#E8E4DF]'
            }`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-red-500 text-sm font-body mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-body font-semibold text-[#1B4332] mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg font-body text-[#2D3436] placeholder-[#9A9590] focus:outline-none focus:border-[#C9A84C] transition-colors ${
              errors.email ? 'border-red-500' : 'border-[#E8E4DF]'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm font-body mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label className="block font-body font-semibold text-[#1B4332] mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg font-body text-[#2D3436] placeholder-[#9A9590] focus:outline-none focus:border-[#C9A84C] transition-colors ${
              errors.phone ? 'border-red-500' : 'border-[#E8E4DF]'
            }`}
            placeholder="(781) 420-5858"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm font-body mt-1">{errors.phone}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label className="block font-body font-semibold text-[#1B4332] mb-2">
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg font-body text-[#2D3436] placeholder-[#9A9590] focus:outline-none focus:border-[#C9A84C] transition-colors ${
              errors.city ? 'border-red-500' : 'border-[#E8E4DF]'
            }`}
            placeholder="Your City"
          />
          {errors.city && (
            <p className="text-red-500 text-sm font-body mt-1">{errors.city}</p>
          )}
        </div>
      </div>

      {/* Service Type */}
      <div>
        <label className="block font-body font-semibold text-[#1B4332] mb-2">
          Service Type
        </label>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg font-body text-[#2D3436] focus:outline-none focus:border-[#C9A84C] transition-colors ${
            errors.serviceType ? 'border-red-500' : 'border-[#E8E4DF]'
          }`}
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="text-red-500 text-sm font-body mt-1">
            {errors.serviceType}
          </p>
        )}
      </div>

      {/* How did you hear about us */}
      <div>
        <label className="block font-body font-semibold text-[#1B4332] mb-2">
          How did you hear about us? *
        </label>
        <select
          name="hearAboutUs"
          value={formData.hearAboutUs}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg font-body text-[#2D3436] focus:outline-none focus:border-[#C9A84C] transition-colors ${
            errors.hearAboutUs ? 'border-red-500' : 'border-[#E8E4DF]'
          }`}
        >
          <option value="">Please select...</option>
          {hearAboutUsOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.hearAboutUs && (
          <p className="text-red-500 text-sm font-body mt-1">
            {errors.hearAboutUs}
          </p>
        )}
      </div>

      {/* Project Details */}
      <div>
        <label className="block font-body font-semibold text-[#1B4332] mb-2">
          Project Details
        </label>
        <textarea
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 border rounded-lg font-body text-[#2D3436] placeholder-[#9A9590] focus:outline-none focus:border-[#C9A84C] transition-colors resize-none ${
            errors.projectDetails ? 'border-red-500' : 'border-[#E8E4DF]'
          }`}
          placeholder="Tell us about your project... dimensions, materials, timeline, etc."
        ></textarea>
        {errors.projectDetails && (
          <p className="text-red-500 text-sm font-body mt-1">
            {errors.projectDetails}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-[#C9A84C] text-white font-body font-semibold rounded-lg hover:bg-[#B8933F] transition-colors text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending…' : 'Get My Free Quote'}
      </button>

      {submitError && (
        <p className="font-body text-sm text-red-600 text-center" role="alert">
          {submitError}
        </p>
      )}

      <p className="font-body text-sm text-[#9A9590] text-center">
        We'll respond within 24 hours with a free estimate
      </p>
    </form>
  );
}
