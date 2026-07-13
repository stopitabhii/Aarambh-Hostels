import { useScrollReveal } from '../hooks/useScrollReveal';
import { BedDouble, Home, Coffee, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Home,
    emoji: '🏨',
    tab: 'hostels',
    title: 'Hostels',
    tagline: 'Full-year residential living',
    color: 'orange',
    stats: '2 Branches · 280 Beds',
    features: [
      'AC rooms with attached bathroom',
      '4 meals daily + lunch at college',
      'Transport to & fro institute',
      'Unlimited laundry included',
      'No security deposit',
      'Payment in 3 installments',
    ],
    pricing: 'From Rs.1,40,000 / year',
  },
  {
    icon: BedDouble,
    emoji: '🏠',
    tab: 'pgs',
    title: 'PGs',
    tagline: 'Flexible monthly accommodation',
    color: 'blue',
    stats: '5 Branches · 450 Beds',
    features: [
      'AC rooms with attached bathroom',
      '4 meals daily with weekly menu',
      'Daily housekeeping',
      'Unlimited Wi-Fi internet',
      'Prepaid electricity meter',
      'Flexible monthly payment',
    ],
    pricing: 'From Rs.11,000 / month',
  },
  {
    icon: Coffee,
    emoji: '☕',
    tab: 'cafes',
    title: 'Cafes',
    tagline: 'Your community hangout',
    color: 'amber',
    stats: '2 Branches',
    features: [
      'Fresh food & beverages',
      'Weekly rotating menu',
      'Open for hostel residents',
      'Hygienic kitchen',
      'Comfortable seating',
      'Study-friendly environment',
    ],
    pricing: 'Open for residents',
  },
];

const COLOR = {
  orange: {
    bg:      'bg-orange-50',
    border:  'border-orange-100',
    icon:    'bg-orange-500',
    badge:   'bg-orange-100 text-orange-700',
    check:   'text-orange-500',
    button:  'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/20',
    pricing: 'text-orange-500',
    heading: 'text-orange-500',
  },
  blue: {
    bg:      'bg-blue-50',
    border:  'border-blue-100',
    icon:    'bg-blue-500',
    badge:   'bg-blue-100 text-blue-700',
    check:   'text-blue-500',
    button:  'bg-blue-500 hover:bg-blue-700 text-white shadow-blue-500/20',
    pricing: 'text-blue-400',
    heading: 'text-blue-500',
  },
  amber: {
    bg:      'bg-amber-50',
    border:  'border-amber-100',
    icon:    'bg-amber-500',
    badge:   'bg-amber-100 text-amber-700',
    check:   'text-amber-500',
    button:  'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/20',
    pricing: 'text-amber-600',
    heading: 'text-amber-600',
  },
};

const scrollToBranches = (tab) => {
  window.dispatchEvent(new CustomEvent('aarambh:tab', { detail: tab }));
};

export default function ServiceSection() {
  const headRef = useScrollReveal();

  return (
    <section id="services" className="py-20 bg-[#FDFAF6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div ref={headRef} className="reveal text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-[3px] uppercase text-orange-500 mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            One Brand, Three Services
          </h2>
          <p className="text-gray-500 mt-3 leading-relaxed">
            Whether you need a full-year hostel, a flexible PG, or just a great
            place to eat — Aarambh has you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.tab} service={s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }) {
  const ref = useScrollReveal();
  const c = COLOR[service.color];
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={'reveal flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white ' + c.border}
      style={{ transitionDelay: delay + 'ms' }}
    >
      {/* Header */}
      <div className={'p-6 ' + c.bg}>
        <div className="flex items-start justify-between mb-4">
          <div className={'w-12 h-12 rounded-xl flex items-center justify-center shadow-md ' + c.icon}>
            <Icon size={22} className="text-white" />
          </div>
          <span className={'text-xs font-bold px-2.5 py-1 rounded-full ' + c.badge}>
            {service.stats}
          </span>
        </div>
        <h3 className={'text-2xl font-black mb-1 ' + c.heading}>{service.title}</h3>
        <p className="text-sm text-gray-500">{service.tagline}</p>
      </div>

      {/* Features */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <ul className="flex flex-col gap-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
              <span className={'font-black mt-0.5 shrink-0 ' + c.check}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="flex-1" />

        {/* Pricing */}
        <div className="pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-400 mb-0.5">Starting price</p>
          <p className={'text-base font-black ' + c.pricing}>{service.pricing}</p>
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollToBranches(service.tab)}
          className={'w-full flex items-center justify-center gap-2 font-bold text-sm py-3 rounded-xl transition-all shadow-md ' + c.button}
        >
          View {service.title} <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}