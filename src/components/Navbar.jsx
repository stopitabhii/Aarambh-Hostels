import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { HOSTEL } from '../lib/constants';

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Rooms',      href: '#rooms' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Location',   href: '#location' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 60);
      setProgress(docH > 0 ? (scrollY / docH) * 100 : 0);

      // Active section detection
      const sections = NAV_LINKS.map(l => document.querySelector(l.href));
      sections.forEach((sec, i) => {
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 90 && rect.bottom > 90) setActive(NAV_LINKS[i].href);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        id="scroll-progress"
        style={{ width: `${progress}%` }}
      />

      <nav
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            className="flex items-center gap-2.5 group"
          >
            <img
              src="/images/logo-2.jpg"
              alt="Aarambh Hostels logo"
              className="h-8 w-auto rounded"
            />
            <div>
              <div className={`font-extrabold text-base leading-tight tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                <span className="text-orange-500">Aarambh</span>
              </div>
              <div className={`text-[9px] font-medium tracking-widest uppercase transition-colors ${scrolled ? 'text-gray-400' : 'text-white/60'}`}>
                Hostels & PG
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className={`text-sm font-medium transition-colors relative pb-0.5 ${
                    active === href ? 'text-orange-500' : scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white/85 hover:text-white'
                  }`}
                >
                  {label}
                  {active === href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${HOSTEL.phones[0]}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              <Phone size={14} /> {HOSTEL.phones[0]}
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2 rounded-full transition-all hover:-translate-y-0.5 shadow-md shadow-orange-500/30"
            >
              Book a Visit
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-left px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  {label}
                </button>
              ))}
              <div className="pt-2 pb-1 flex gap-2">
                <a
                  href={`tel:${HOSTEL.phones[0]}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-orange-50 text-orange-600 font-bold py-2.5 rounded-xl text-sm"
                >
                  <Phone size={14} /> Call Now
                </a>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="flex-1 bg-orange-500 text-white font-bold py-2.5 rounded-xl text-sm"
                >
                  Book a Visit
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
