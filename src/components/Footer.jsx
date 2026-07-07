import { Phone, MapPin } from 'lucide-react';
import { HOSTEL } from '../lib/constants';

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const QUICK_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Facilities',   href: '#facilities' },
  { label: 'Rooms',        href: '#rooms' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Location',     href: '#location' },
  { label: 'FAQ',          href: '#faq' },
  { label: 'Contact',      href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-800">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/images/logo-2.jpg"
              alt="Aarambh Hostels logo"
              className="h-8 w-auto rounded mb-3"
            />
            <p className="text-sm font-bold text-white mb-0.5">{HOSTEL.name}</p>
            <p className="text-xs text-orange-400 italic mb-4">{HOSTEL.tagline}</p>
            <p className="text-xs leading-relaxed">
              Premium boys hostel in Greater Noida offering safe, affordable, and comfortable
              living for college students. Safe · Comfortable · Affordable.
            </p>
            {/* Social placeholders */}
            <div className="flex gap-2 mt-5">
              {['f', '📸', '▶️'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center text-xs transition-colors"
                  aria-label="Social link"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Rooms */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Rooms</h4>
            <ul className="space-y-2">
              {['Double Sharing', 'Triple Sharing'].map((r) => (
                <li key={r}>
                  <button
                    onClick={() => scrollTo('#rooms')}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors text-left"
                  >
                    {r}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="text-sm text-orange-400 hover:text-orange-300 font-semibold transition-colors text-left"
                >
                  Book a Visit →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex gap-2 items-start">
                <MapPin size={13} className="text-orange-500 mt-0.5 shrink-0" />
                <p className="text-xs leading-relaxed">
                  {HOSTEL.address.line1}, {HOSTEL.address.line2},<br />
                  {HOSTEL.address.city}, {HOSTEL.address.state}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Phone size={13} className="text-orange-500 shrink-0" />
                <div>
                  <a href={`tel:${HOSTEL.phones[0]}`} className="text-xs hover:text-orange-400 transition-colors block">{HOSTEL.phones[0]}</a>
                  <a href={`tel:${HOSTEL.phones[1]}`} className="text-xs hover:text-orange-400 transition-colors block">{HOSTEL.phones[1]}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-5 text-xs text-gray-600">
          <p>© {year} {HOSTEL.name}. All rights reserved.</p>
          <p>
            Designed for{' '}
            <span className="text-orange-500 font-semibold">college students of Greater Noida</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
