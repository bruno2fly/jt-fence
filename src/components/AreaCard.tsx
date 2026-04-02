import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface AreaCardProps {
  name: string;
  slug: string;
  description: string;
}

export default function AreaCard({ name, slug, description }: AreaCardProps) {
  return (
    <Link href={`/service-areas/${slug}`}>
      <div className="group bg-white border border-[#E8E4DF] rounded-lg p-8 hover:shadow-lg hover:border-[#C9A84C] transition-all duration-300 cursor-pointer h-full">
        <h3 className="font-heading text-2xl font-semibold text-[#1B4332] mb-3 group-hover:text-[#C9A84C] transition-colors">
          {name}
        </h3>
        <p className="font-body text-[#2D3436] text-sm leading-relaxed mb-6">
          {description}
        </p>
        <div className="flex items-center text-[#C9A84C] font-body font-semibold text-sm group-hover:translate-x-1 transition-transform">
          Learn More
          <ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </Link>
  );
}
