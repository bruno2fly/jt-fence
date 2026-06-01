import Link from 'next/link';

interface CTAButton {
  text: string;
  link: string;
}

interface CTABannerProps {
  title: string;
  description: string;
  primaryCta: CTAButton;
  phoneCta?: boolean;
  phoneNumber?: string;
}

export default function CTABanner({
  title,
  description,
  primaryCta,
  phoneCta = false,
  phoneNumber = '(781) 420-5858',
}: CTABannerProps) {
  return (
    <section className="bg-[#1B4332] py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#FAF8F5] mb-6">
          {title}
        </h2>
        <p className="font-body text-lg text-[#E8E4DF] mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCta.link}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C9A84C] text-white font-body font-semibold rounded-lg hover:bg-[#B8933F] transition-colors text-base"
          >
            {primaryCta.text}
          </Link>

          {phoneCta && (
            <a
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#C9A84C] text-[#C9A84C] font-body font-semibold rounded-lg hover:bg-[#C9A84C] hover:text-white transition-colors text-base"
            >
              {phoneNumber}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
