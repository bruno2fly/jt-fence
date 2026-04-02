interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description: string;
  centered?: boolean;
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionIntroProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} max-w-2xl ${centered ? 'mx-auto' : ''}`}>
      {eyebrow && (
        <p className="font-body text-sm font-semibold text-[#C9A84C] uppercase tracking-wider mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1B4332] mb-6 leading-tight">
        {title}
      </h2>
      <p className="font-body text-lg text-[#2D3436] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
