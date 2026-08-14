"use client";

import { useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

interface CapeCodQuoteFormProps {
  onSuccess?: () => void;
  onFormStart?: () => void;
}

const FENCE_TYPES = [
  "Wood Fence",
  "Vinyl Fence",
  "Aluminum Fence",
  "Pool Fence",
  "Privacy Fence",
  "Gate Installation",
];

export default function CapeCodQuoteForm({
  onSuccess,
  onFormStart,
}: CapeCodQuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    serviceType: "",
    projectDetails: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const startedRef = useRef(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    if (!startedRef.current && onFormStart) {
      startedRef.current = true;
      onFormStart();
    }
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (errors[name]) setErrors((previous) => ({ ...previous, [name]: "" }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = "Name required";
    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone required";
    } else if (formData.phone.replace(/\D/g, "").length !== 10) {
      nextErrors.phone = "Enter a 10-digit US number";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "Email required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Invalid email";
    }
    if (!formData.city.trim()) nextErrors.city = "Town or ZIP required";
    if (!formData.serviceType) nextErrors.serviceType = "Select a fence type";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitError(null);
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          projectDetails:
            formData.projectDetails.trim() || "No additional details provided.",
          hearAboutUs: "Google Ads",
        }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!response.ok) {
        setSubmitError(
          data.error || "Something went wrong. Call us at (781) 420-5858.",
        );
        return;
      }
      setSubmitted(true);
      if (typeof window !== "undefined" && (window as any).trackQuoteRequest) {
        (window as any).trackQuoteRequest();
      }
      onSuccess?.();
    } catch {
      setSubmitError(
        "Could not reach the server. Please call us at (781) 420-5858.",
      );
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
          We&apos;ll be in touch same-day (Monday–Saturday) to schedule your
          free on-site estimate. Can&apos;t wait? Call us now:{" "}
          <a href="tel:+17814205858" className="text-[#C9A84C] font-semibold">
            (781) 420-5858
          </a>
        </p>
      </div>
    );
  }

  const field =
    "w-full px-3 py-3 border rounded-lg font-body text-[#2D3436] text-base placeholder-[#9A9590] focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors";
  const fieldClass = (name: string) =>
    `${field} ${errors[name] ? "border-red-400" : "border-[#E8E4DF]"}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            aria-label="Full name"
            className={fieldClass("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            aria-label="Phone number"
            className={fieldClass("phone")}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            aria-label="Email address"
            className={fieldClass("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Town or ZIP code"
            aria-label="Town or ZIP code"
            className={fieldClass("city")}
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city}</p>
          )}
        </div>
      </div>
      <div>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          aria-label="Fence type"
          className={fieldClass("serviceType")}
        >
          <option value="">Fence type / service needed</option>
          {FENCE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>
        )}
      </div>
      <div>
        <textarea
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          rows={3}
          placeholder="Optional — property details, preferred material, gates, or project goals"
          aria-label="Project details (optional)"
          className={`${fieldClass("projectDetails")} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#C9A84C] hover:bg-[#B8933F] active:bg-[#A07830] text-white font-body font-bold text-base rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
      >
        {isSubmitting ? "Sending…" : "Request My Free Estimate →"}
      </button>
      {submitError && (
        <p className="text-red-600 text-sm text-center font-body" role="alert">
          {submitError}
        </p>
      )}
      <p className="text-center text-xs text-[#9A9590] font-body">
        No obligation. Same-day response, Monday–Saturday.
      </p>
    </form>
  );
}
