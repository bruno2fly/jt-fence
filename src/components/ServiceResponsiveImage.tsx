import Image from 'next/image';
import { encodeImageSrc } from '@/data/serviceImages';

type Aspect = 'wide' | 'landscape' | 'squareish';

const aspectClass: Record<Aspect, string> = {
  wide: 'aspect-[16/10] md:aspect-[2/1]',
  landscape: 'aspect-[4/3]',
  squareish: 'aspect-[5/4]',
};

interface ServiceResponsiveImageProps {
  src: string;
  alt: string;
  aspect?: Aspect;
  className?: string;
  priority?: boolean;
}

/**
 * Fence photography with consistent crop, object-fit, and encoded URLs for filenames with spaces.
 */
export default function ServiceResponsiveImage({
  src,
  alt,
  aspect = 'landscape',
  className = '',
  priority = false,
}: ServiceResponsiveImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border border-[#E8E4DF] bg-[#E8E4DF] shadow-sm ${className}`}
    >
      <div className={`relative w-full ${aspectClass[aspect]}`}>
        <Image
          src={encodeImageSrc(src)}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
          priority={priority}
        />
      </div>
    </div>
  );
}
