import Link from 'next/link';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  phoneNumber?: string;
  email?: string;
  address?: string;
}

export default function Footer({
  phoneNumber = '(781) 420-5858',
  email = 'contact@jtfenceboston.com',
  address = 'Plymouth, MA',
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D3436] text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-1 mb-6">
              <span className="font-heading text-xl font-bold text-[#FAF8F5]">
                JT FENCE
              </span>
              <span className="font-heading text-xs font-semibold text-[#C9A84C] tracking-wide">
                INC.
              </span>
            </div>
            <p className="font-body text-sm text-[#E8E4DF] mb-6 leading-relaxed">
              Premium fencing solutions for residential and commercial properties. Licensed, insured, and committed to excellence.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                className="flex items-center space-x-2 text-[#E8E4DF] hover:text-[#C9A84C] transition-colors font-body text-sm"
              >
                <Phone size={16} />
                <span>{phoneNumber}</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center space-x-2 text-[#E8E4DF] hover:text-[#C9A84C] transition-colors font-body text-sm"
              >
                <Mail size={16} />
                <span>{email}</span>
              </a>
              <div className="flex items-center space-x-2 text-[#E8E4DF] font-body text-sm">
                <MapPin size={16} />
                <span>{address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-[#FAF8F5] mb-6">
              Quick Links
            </h3>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/portfolio"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/reviews"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Reviews
              </Link>
              <Link
                href="/process"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Our Process
              </Link>
              <Link
                href="/contact"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-[#FAF8F5] mb-6">
              Services
            </h3>
            <nav className="space-y-3">
              <Link
                href="/services/wood-fences"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Wood Fences
              </Link>
              <Link
                href="/services/vinyl-fences"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Vinyl Fences
              </Link>
              <Link
                href="/services/aluminum-fences"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Aluminum Fences
              </Link>
              <Link
                href="/services/pet-dog-fencing"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Pet & Dog Fencing
              </Link>
            </nav>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-[#FAF8F5] mb-6">
              Service Areas
            </h3>
            <nav className="space-y-3">
              <Link
                href="/service-areas"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                All Service Areas
              </Link>
              <Link
                href="/service-areas/plymouth-ma"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Plymouth
              </Link>
              <Link
                href="/service-areas/cape-cod-ma"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Cape Cod
              </Link>
              <Link
                href="/service-areas/duxbury-ma"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Duxbury
              </Link>
              <Link
                href="/service-areas/kingston-ma"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Kingston
              </Link>
              <Link
                href="/service-areas/wareham-ma"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Wareham
              </Link>
            </nav>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-[#1B4332] pt-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-heading text-sm font-semibold text-[#FAF8F5] mb-4">
                Follow Us
              </h4>
              <div className="flex items-center space-x-4">
                <a
                  href="https://facebook.com/jtfenceboston"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com/jtfenceboston"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1B4332] pt-8 text-center">
          <p className="font-body text-sm text-[#E8E4DF]">
            &copy; {currentYear} JT Fence Inc. All rights reserved. | 
            <Link href="/privacy" className="hover:text-[#C9A84C] transition-colors ml-1">
              Privacy Policy
            </Link>
            {' '}| 
            <Link href="/terms" className="hover:text-[#C9A84C] transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
