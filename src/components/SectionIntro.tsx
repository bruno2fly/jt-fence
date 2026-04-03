interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description: string;
  centered?: boolean;
  /** Use on dark green backgrounds (e.g. #1B4332) for readable contrast */
  variant?: 'default' | 'dark';
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  centered = true,
  variant = 'default',
}: SectionIntroProps) {
  const isDark = variant === 'dark';

  return (
    <div className={`${centered ? 'text-center' : ''} max-w-2xl ${centered ? 'mx-auto' : ''}`}>
      {eyebrow && (
        <p className="font-body text-sm font-semibold text-[#C9A84C] uppercase tracking-wider mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl font-bold mb-6 leading-tight ${
          isDark ? 'text-[#FAF8F5]' : 'text-[#1B4332]'
        }`}
      >
        {title}
      </h2>
      <p
        className={`font-body text-lg leading-relaxed ${
          isDark ? 'text-[#E8E4DF]' : 'text-[#2D3436]'
        }`}
      >
        {description}
      </p>
    </div>
  );
}
