import Link from 'next/link';
import Image from 'next/image';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { encodeImageSrc } from '@/data/serviceImages';

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  /** When set with imageAlt, shows a photo instead of the icon */
  imageSrc?: string;
  imageAlt?: string;
  icon?: ReactNode | LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  slug,
  imageSrc,
  imageAlt,
  icon: Icon,
}: ServiceCardProps) {
  const showImage = Boolean(imageSrc && imageAlt);

  return (
    <Link href={`/services/${slug}`}>
      <div className="group h-full bg-[#FAF8F5] border border-[#E8E4DF] rounded-lg overflow-hidden hover:shadow-xl hover:border-[#C9A84C] transition-all duration-300 cursor-pointer flex flex-col">
        {showImage && (
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={encodeImageSrc(imageSrc!)}
              alt={imageAlt!}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        )}

        <div className="p-8 flex flex-col flex-1">
          {!showImage && Icon && (
            <div className="mb-6 inline-block p-3 bg-[#1B4332] rounded-lg group-hover:bg-[#C9A84C] transition-colors">
              {typeof Icon === 'function' ? (
                <Icon className="w-6 h-6 text-[#FAF8F5]" />
              ) : (
                <div className="w-6 h-6 text-[#FAF8F5]">{Icon}</div>
              )}
            </div>
          )}

          <h3 className="font-heading text-xl font-semibold text-[#1B4332] mb-3 group-hover:text-[#C9A84C] transition-colors">
            {title}
          </h3>

          <p className="font-body text-[#2D3436] text-sm leading-relaxed mb-6 flex-1">
            {description}
          </p>

          <div className="flex items-center text-[#C9A84C] font-body font-semibold text-sm group-hover:translate-x-1 transition-transform">
            Learn More
            <span className="ml-2">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
