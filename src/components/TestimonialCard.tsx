import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  serviceType?: string;
}

export default function TestimonialCard({
  name,
  location,
  rating,
  text,
  serviceType,
}: TestimonialCardProps) {
  return (
    <div className="bg-white border border-[#E8E4DF] rounded-lg p-8 hover:shadow-lg transition-shadow">
      {/* Star Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'fill-[#C9A84C] text-[#C9A84C]' : 'text-[#E8E4DF]'}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="font-body text-[#2D3436] mb-6 leading-relaxed italic">
        "{text}"
      </p>

      {/* Service Type Tag */}
      {serviceType && (
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-[#FAF8F5] text-[#1B4332] text-xs font-semibold rounded-full font-body">
            {serviceType}
          </span>
        </div>
      )}

      {/* Author */}
      <div>
        <p className="font-heading font-semibold text-[#1B4332]">{name}</p>
        <p className="font-body text-sm text-[#2D3436]">{location}</p>
      </div>
    </div>
  );
}
