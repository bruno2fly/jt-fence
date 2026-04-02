import { Award, Shield, Star, Zap } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Award,
      label: '15+ Years Experience',
    },
    {
      icon: Shield,
      label: 'Licensed & Insured',
    },
    {
      icon: Star,
      label: '5-Star Reviews',
    },
    {
      icon: Zap,
      label: 'Free Estimates',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center gap-2 px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm"
          >
            <Icon size={24} className="text-[#C9A84C]" />
            <span className="font-body text-xs md:text-sm font-semibold text-[#FAF8F5] text-center">
              {badge.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
