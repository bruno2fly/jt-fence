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
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceOptions = [
    'Residential Fencing',
    'Commercial Fencing',
    'Fence Repair',
    'Gate Installation',
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
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.serviceType) newErrors.serviceType = 'Service type is required';
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required';
    }

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log('Form submitted:', formData);
    setSubmitted(true);
    if (onSuccess) onSuccess();

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        serviceType: '',
        projectDetails: '',
      });
      setSubmitted(false);
    }, 5000);
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
          Redirecting in a moment...
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
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg font-body text-[#2D3436] placeholder-[#9A9590] focus:outline-none focus:border-[#C9A84C] transition-colors ${
              errors.phone ? 'border-red-500' : 'border-[#E8E4DF]'
            }`}
            placeholder="(555) 123-4567"
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
        className="w-full px-6 py-3 bg-[#C9A84C] text-white font-body font-semibold rounded-lg hover:bg-[#B8933F] transition-colors text-base"
      >
        Get My Free Quote
      </button>

      <p className="font-body text-sm text-[#9A9590] text-center">
        We'll respond within 24 hours with a free estimate
      </p>
    </form>
  );
}
