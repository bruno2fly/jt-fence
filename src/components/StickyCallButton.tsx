'use client';

import { Phone } from 'lucide-react';
import { company } from '@/data/company';

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <a
        href={`tel:${company.phone}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1B4332] text-white shadow-lg hover:bg-[#0f2118] transition-colors duration-200 hover:shadow-xl"
        aria-label="Call JT Fence Now"
      >
        <Phone className="h-6 w-6" />
      </a>
      <div className="absolute -top-12 right-0 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
        Call Now: {company.phone}
      </div>
    </div>
  );
}