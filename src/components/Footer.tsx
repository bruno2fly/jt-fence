import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

/* lucide-react@1.7.0 does not export Facebook/Instagram — use inline SVGs */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M9.101 23.691v-9.223H6V9.293h3.101V6.527c0-3.071 1.392-4.591 4.102-4.591 1.235 0 2.52.225 2.52.225v2.789H13.86c-1.353 0-1.771.855-1.771 1.729v2.073h3.336l-.532 3.175h-2.804V23.69H9.101z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

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
            <div className="mb-6">
              <img
                src="/images/jtlogo.png"
                alt="JT Fence Inc."
                className="h-10 w-auto brightness-0 invert"
              />
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
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://facebook.com/jtfenceboston"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8E4DF] hover:opacity-80 transition-opacity"
                aria-label="JT Fence Inc. on Facebook"
              >
                <FacebookIcon className="h-[22px] w-[22px]" />
              </a>
              <a
                href="https://instagram.com/jtfenceboston"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8E4DF] hover:opacity-80 transition-opacity"
                aria-label="JT Fence Inc. on Instagram"
              >
                <InstagramIcon className="h-[22px] w-[22px]" />
              </a>
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
              <Link
                href="/services/pool-fence"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Pool Fence & Barriers
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
                Plymouth, MA
              </Link>
              <Link
                href="/service-areas/cape-cod-ma"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Cape Cod, MA
              </Link>
              <Link
                href="/service-areas/wareham-ma"
                className="block font-body text-sm text-[#E8E4DF] hover:text-[#C9A84C] transition-colors"
              >
                Wareham, MA
              </Link>
            </nav>
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
