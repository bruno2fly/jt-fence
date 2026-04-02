'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  phoneNumber?: string;
}

export default function Header({ phoneNumber = '(781) 420-5858' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { label: 'Wood Fences', href: '/services/wood-fences' },
    { label: 'Vinyl Fences', href: '/services/vinyl-fences' },
    { label: 'Aluminum Fences', href: '/services/aluminum-fences' },
    { label: 'Pet & Dog Fencing', href: '/services/pet-dog-fencing' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5] shadow-md'
          : 'bg-[#FAF8F5] shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 flex-shrink-0">
            <span className="font-heading text-2xl font-bold text-[#1B4332]">
              JT FENCE
            </span>
            <span className="font-heading text-sm font-semibold text-[#C9A84C] tracking-wide">
              INC.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#2D3436] font-body hover:text-[#C9A84C] transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#2D3436] font-body hover:text-[#C9A84C] transition-colors text-sm"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-[#2D3436] font-body hover:text-[#C9A84C] transition-colors text-sm flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 text-sm text-[#2D3436] hover:bg-[#FAF8F5] hover:text-[#C9A84C] font-body first:rounded-t-lg last:rounded-b-lg"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/portfolio"
              className="text-[#2D3436] font-body hover:text-[#C9A84C] transition-colors text-sm"
            >
              Portfolio
            </Link>
            <Link
              href="/reviews"
              className="text-[#2D3436] font-body hover:text-[#C9A84C] transition-colors text-sm"
            >
              Reviews
            </Link>
            <Link
              href="/process"
              className="text-[#2D3436] font-body hover:text-[#C9A84C] transition-colors text-sm"
            >
              Process
            </Link>
            <Link
              href="/service-areas"
              className="text-[#2D3436] font-body hover:text-[#C9A84C] transition-colors text-sm"
            >
              Service Areas
            </Link>
            <Link
              href="/contact"
              className="text-[#2D3436] font-body hover:text-[#C9A84C] transition-colors text-sm"
            >
              Contact
            </Link>
          </nav>

          {/* Phone Number (Desktop) */}
          <a
            href={`tel:${phoneNumber.replace(/\D/g, '')}`}
            className="hidden lg:flex items-center text-[#1B4332] font-body text-sm hover:text-[#C9A84C] transition-colors"
          >
            <span>{phoneNumber}</span>
          </a>

          {/* CTA Button (Desktop) */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-[#C9A84C] text-white font-body font-medium rounded-lg hover:bg-[#B8933F] transition-colors text-sm"
          >
            Get a Free Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#2D3436] hover:text-[#C9A84C] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-[#E8E4DF]">
            <Link
              href="/"
              className="block px-4 py-2 text-[#2D3436] font-body hover:text-[#C9A84C] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-[#2D3436] font-body hover:text-[#C9A84C] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === 'services' ? null : 'services')
                }
                className="w-full text-left px-4 py-2 text-[#2D3436] font-body hover:text-[#C9A84C] transition-colors flex items-center justify-between"
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openDropdown === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openDropdown === 'services' && (
                <div className="bg-[#FAF8F5] pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-[#2D3436] hover:text-[#C9A84C] font-body"
                      onClick={() => {
                        setIsOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className="block px-4 py-2 text-[#2D3436] font-body hover:text-[#C9A84C] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/reviews"
              className="block px-4 py-2 text-[#2D3436] font-body hover:text-[#C9A84C] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/process"
              className="block px-4 py-2 text-[#2D3436] font-body hover:text-[#C9A84C] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Process
            </Link>
            <Link
              href="/service-areas"
              className="block px-4 py-2 text-[#2D3436] font-body hover:text-[#C9A84C] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Service Areas
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-[#2D3436] font-body hover:text-[#C9A84C] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="block px-4 py-2 text-[#1B4332] font-body hover:text-[#C9A84C] transition-colors"
            >
              {phoneNumber}
            </a>
            <div className="px-4 py-4 border-t border-[#E8E4DF] mt-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center px-6 py-2.5 bg-[#C9A84C] text-white font-body font-medium rounded-lg hover:bg-[#B8933F] transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
