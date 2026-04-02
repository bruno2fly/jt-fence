import { MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface PortfolioCardProps {
  title: string;
  description: string;
  serviceType: string;
  location: string;
  imageAlt: string;
  image?: string;
  href?: string;
}

export default function PortfolioCard({
  title,
  description,
  serviceType,
  location,
  imageAlt,
  image,
  href = '#',
}: PortfolioCardProps) {
  return (
    <div className="group rounded-lg overflow-hidden border border-[#E8E4DF] hover:shadow-lg transition-shadow h-full flex flex-col bg-white">
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#E8E4DF] to-[#D4CEC5] flex items-center justify-center">
            <div className="text-center">
              <div className="text-[#9A9590] text-sm font-body">{imageAlt}</div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-heading text-xl font-semibold text-[#1B4332] mb-2 group-hover:text-[#C9A84C] transition-colors">
          {title}
        </h3>

        <p className="font-body text-sm text-[#2D3436] mb-4 leading-relaxed flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="inline-block px-3 py-1 bg-[#FAF8F5] text-[#1B4332] text-xs font-semibold rounded-full font-body">
            {serviceType}
          </span>
          <span className="inline-block px-3 py-1 bg-[#FAF8F5] text-[#1B4332] text-xs font-semibold rounded-full font-body flex items-center gap-1">
            <MapPin size={12} />
            {location}
          </span>
        </div>


      </div>
    </div>
  );
}
