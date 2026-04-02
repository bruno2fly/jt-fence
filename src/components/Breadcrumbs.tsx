import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.href ? (
              <>
                <Link
                  href={item.href}
                  className="font-body text-sm text-[#C9A84C] hover:text-[#B8933F] transition-colors"
                >
                  {item.label}
                </Link>
                {index < items.length - 1 && (
                  <span className="text-[#E8E4DF]">/</span>
                )}
              </>
            ) : (
              <>
                <span className="font-body text-sm text-[#2D3436]">
                  {item.label}
                </span>
                {index < items.length - 1 && (
                  <span className="text-[#E8E4DF]">/</span>
                )}
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
