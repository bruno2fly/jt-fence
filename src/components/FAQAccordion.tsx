'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: AccordionItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-[#E8E4DF] rounded-lg overflow-hidden hover:border-[#C9A84C] transition-colors"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-4 flex items-center justify-between bg-[#FAF8F5] hover:bg-[#F5F1ED] transition-colors text-left"
          >
            <h3 className="font-heading font-semibold text-[#1B4332] text-lg">
              {item.question}
            </h3>
            <ChevronDown
              size={20}
              className={`text-[#C9A84C] flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openIndex === index && (
            <div className="px-6 py-4 bg-white border-t border-[#E8E4DF]">
              <p className="font-body text-[#2D3436] leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
