import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  icon: ReactNode | LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  slug,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`}>
      <div className="group h-full bg-[#FAF8F5] border border-[#E8E4DF] rounded-lg p-8 hover:shadow-xl hover:border-[#C9A84C] transition-all duration-300 cursor-pointer">
        {/* Icon */}
        <div className="mb-6 inline-block p-3 bg-[#1B4332] rounded-lg group-hover:bg-[#C9A84C] transition-colors">
          {typeof Icon === 'function' ? (
            <Icon className="w-6 h-6 text-[#FAF8F5]" />
          ) : (
            <div className="w-6 h-6 text-[#FAF8F5]">{Icon}</div>
          )}
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl font-semibold text-[#1B4332] mb-3 group-hover:text-[#C9A84C] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="font-body text-[#2D3436] text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Learn More Link */}
        <div className="flex items-center text-[#C9A84C] font-body font-semibold text-sm group-hover:translate-x-1 transition-transform">
          Learn More
          <span className="ml-2">→</span>
        </div>
      </div>
    </Link>
  );
}
