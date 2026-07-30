'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const JT_FENCE_PHONE = '(781) 420-5858';
const JT_FENCE_WEBSITE = 'https://jtfenceboston.com';

export default function ZeroDownPromoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Suppress popup entirely on mobile — it's the #1 mobile bounce driver
    if (window.innerWidth < 768) return undefined;

    // Check if user has already seen the popup today
    const lastSeen = localStorage.getItem('jt-fence-zero-down-popup-seen');
    const today = new Date().toDateString();

    if (lastSeen !== today) {
      // Show popup after 6 seconds on desktop (was 2s — too aggressive)
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 6000);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Remember that user saw popup today
    localStorage.setItem('jt-fence-zero-down-popup-seen', new Date().toDateString());
  };

  const handleCallNow = () => {
    // Track the conversion event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18073723056/VYRkCLXSrdkcELDBnKpD'
      });
    }
    
    // Initiate the phone call
    window.location.href = `tel:${JT_FENCE_PHONE.replace(/\D/g, '')}`;
    
    // Close the popup
    handleClose();
  };

  const handleGetQuote = () => {
    // Track the conversion event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18073723056/xzXvCOaottkcELDBnKpD'
      });
    }
    
    // Navigate to contact form
    window.location.href = '/contact';
    
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
            className="absolute top-4 right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 shadow-lg"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>

          {/* Promo Image */}
          <div className="relative">
            <Image
              src="/promo/zero-down-payment.png"
              alt="JT Fence 0% Down Payment - Start Your Cape Cod Fence Project Today"
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
              className="w-full bg-[#F4B942] hover:bg-[#E5A832] text-[#1B365D] font-bold py-4 px-6 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#F4B942]/30"
            >
              CALL NOW: {JT_FENCE_PHONE}
            </button>

            {/* Get Quote Button - Secondary CTA */}
            <button
              onClick={handleGetQuote}
              className="w-full bg-[#1B365D] hover:bg-[#0F2847] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#1B365D]/30"
            >
              Get FREE Quote Online
            </button>

            {/* Fine Print */}
            <p className="text-xs text-gray-500 text-center mt-4">
              *0% Down Payment offer. Licensed & Insured. Cape Cod area. 
              Subject to credit approval and project terms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}