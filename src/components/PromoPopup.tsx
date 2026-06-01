'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds, but only if user hasn't seen it recently
    const hasSeenPromo = localStorage.getItem('jt-fence-promo-seen');
    const lastSeen = localStorage.getItem('jt-fence-promo-timestamp');
    
    // Show if never seen, or if it's been more than 24 hours
    const shouldShow = !hasSeenPromo || 
      (lastSeen && Date.now() - parseInt(lastSeen) > 24 * 60 * 60 * 1000);

    if (shouldShow) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('jt-fence-promo-seen', 'true');
    localStorage.setItem('jt-fence-promo-timestamp', Date.now().toString());
  };

  const handleCallNow = () => {
    // Track the conversion event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18073723056/pool_fence_popup_call'
      });
    }
    
    // Initiate the phone call
    window.location.href = 'tel:+17814205858';
    
    // Close the popup
    handleClose();
  };

  const handleGetEstimate = () => {
    // Track the conversion event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18073723056/pool_fence_popup_estimate'
      });
    }
    
    // Navigate to contact form or pool fence quote page
    window.location.href = '/pool-fence-quote';
    
    // Close the popup
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        {/* Modal */}
        <div 
          className="relative max-w-lg w-full bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 ease-out scale-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
            aria-label="Close popup"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Promo Image */}
          <div className="relative">
            <Image
              src="/pool-fence-promo.jpg"
              alt="20% OFF Pool Fence in Cape Cod Area - JT Fence Inc."
              width={600}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Action Buttons */}
          <div className="p-6 bg-white space-y-3">
            {/* Call Now Button - Primary CTA */}
            <button
              onClick={handleCallNow}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              CALL NOW: (781) 420-5858
            </button>

            {/* Get Free Estimate Button - Secondary CTA */}
            <button
              onClick={handleGetEstimate}
              className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-300"
            >
              Get FREE Estimate
            </button>

            {/* Fine Print */}
            <p className="text-xs text-gray-500 text-center mt-4">
              *Limited time offer. Cape Cod area only. Cannot be combined with other offers. 
              Valid for new pool fence installations only.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}