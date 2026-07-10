import { motion } from 'framer-motion';
import { Phone, MapPin, ChevronDown, Home, BedDouble, Coffee, BadgeCheck } from 'lucide-react';
import { HOSTEL, TRUST_BADGES } from '../lib/constants';

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

// Service types — Hostel · PG · Café
const SERVICES = [
  { icon: Home,      label: 'Hostel' },
  { icon: BedDouble, label: 'PG'     },
  { icon: Coffee,    label: 'Café'   },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Real building photo as background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-building.jpg"
          alt="Aarambh Hostel building exterior — Beta 2, Greater Noida"
          className="w-full h-full object-cover object-center"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/82" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-24 pb-16">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
          className="mb-5"
        >
          <img
            src="/images/logo-2.jpg"
            alt="Aarambh Hostels & PG logo"
            className="h-14 w-auto mx-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-200 text-xs font-semibold tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm"
        >
          <MapPin size={11} /> Boys Hostel · Beta 2, Greater Noida
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.08] tracking-tight mb-4"
        >
          Feel Like <span className="text-amber-400">Home,</span>
          <br />Stay Like Family
        </motion.h1>

        {/* Service type pills — Hostel · PG · Café */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          {SERVICES.map(({ icon: Icon, label }, i) => (
            <span
              key={label}
              className="flex items-center gap-1.5 bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-xs font-semibold px-3.5 py-1.5 rounded-full"
            >
              <Icon size={12} className="text-amber-400" />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.38 }}
          className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-7"
        >
          Premium boys hostel in Greater Noida — safe, affordable, and built
          for college students who want to focus on what matters most.
        </motion.p>

        {/* ── No Deposit badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.46 }}
          className="inline-flex items-center gap-3 bg-white/[0.08] border border-white/20 backdrop-blur-md rounded-2xl px-5 py-3 mb-7 mx-auto"
        >
          <BadgeCheck size={20} className="text-green-400 shrink-0" />
          <div className="text-left">
            <p className="text-white text-sm font-bold leading-tight">
              No Security Deposit &nbsp;·&nbsp; No Hidden Charges
            </p>
            <p className="text-white/50 text-xs mt-0.5">
              Move in by paying the first month only
            </p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.54 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full text-base transition-all hover:-translate-y-0.5 shadow-xl shadow-orange-500/40"
          >
            📅 Book a Visit
          </button>
          <a
            href={`tel:${HOSTEL.phones[0]}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full text-base transition-all hover:bg-white/10 backdrop-blur-sm"
          >
            <Phone size={16} /> {HOSTEL.phones[0]}
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.64 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white/85 text-xs font-medium px-3 py-1.5 rounded-full"
            >
              <span className="text-green-400 font-bold">✓</span> {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors flex flex-col items-center gap-1"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
