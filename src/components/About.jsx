import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin } from 'lucide-react';
import { HOSTEL } from '../lib/constants';

const PILLARS = [
  { icon: '🛡️', title: 'Safe & Secure',    desc: '24/7 CCTV, security staff, and strict visitor policy — your safety is our top priority.' },
  { icon: '🍽️', title: '4 Meals Daily',    desc: 'Fresh, hygienic, home-style food four times a day, cooked in our in-house kitchen.' },
  { icon: '📶', title: 'Full Wi-Fi',        desc: 'High-speed internet in every room and common area — stay connected, stay ahead.' },
  { icon: '🚌', title: 'College Transport', desc: 'Scheduled pickup and drop to colleges — no more missing the first lecture.' },
];

export default function About() {
  const leftRef  = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image stack */}
          <div ref={leftRef} className="reveal relative h-[420px] lg:h-[480px]">
            {/* Main image */}
            <div className="absolute top-0 left-0 right-16 bottom-16 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-building.jpg"
                alt="Aarambh Hostel Facade — Greater Noida"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent image */}
            <div className="absolute bottom-0 right-0 w-[58%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/images/building-side.jpg"
                alt="Aarambh Hostel multi-floor balconies and side elevation"
                className="w-full h-44 object-cover"
                loading="lazy"
              />
            </div>
            {/* Location badge */}
            <div className="absolute top-4 right-20 bg-orange-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg flex items-center gap-1.5">
              <MapPin size={11} />
              Beta 2, Gr. Noida
            </div>
          </div>

          {/* Text */}
          <div ref={rightRef} className="reveal">
            <p className="text-xs font-bold tracking-[3px] uppercase text-orange-500 mb-2">
              About Aarambh
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Your Second Home in<br />Greater Noida
            </h2>
            <p className="text-gray-500 leading-relaxed mb-3">
              Aarambh Hostels & PG was built with one mission — to give college students
              a safe, comfortable, and supportive environment where they can thrive
              academically and personally.
            </p>
            <p className="text-gray-500 leading-relaxed mb-2">
              Located at <strong className="text-gray-700">{HOSTEL.address.line1}, {HOSTEL.address.line2}, {HOSTEL.address.city}</strong>,
              we're within easy reach of Greater Noida's top engineering and
              management colleges.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our motto — <strong className="text-gray-800 italic">"{HOSTEL.tagline}"</strong> — isn't
              just a tagline. Every resident becomes part of the Aarambh family.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PILLARS.map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/40 transition-colors">
                  <span className="text-xl mt-0.5 shrink-0">{icon}</span>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800 mb-0.5">{title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
