import { useScrollReveal } from '../hooks/useScrollReveal';
import { COLLEGES } from '../lib/constants';

const WHY = [
  { icon: '🛡️', title: 'Safe & Secure',       desc: 'CCTV surveillance, security staff, and strict visitor policy 24/7.' },
  { icon: '💰', title: 'No Security Deposit', desc: 'Move in without paying any advance. Transparent monthly fee only.' },
  { icon: '🤝', title: 'Friendly Community',  desc: 'Live with driven students in a respectful, supportive environment.' },
  { icon: '🛏️', title: 'Fully Furnished',     desc: 'Bed, mattress, wardrobe, study table — everything you need, ready.' },
  { icon: '📍', title: 'Prime Location',       desc: 'H-181, Beta 2 — near colleges, markets, and public transport.' },
  { icon: '🧹', title: 'Daily Cleaning',       desc: 'Professional housekeeping every day so you can focus on studies.' },
];

export default function WhyUs() {
  const headRef  = useScrollReveal();
  const colRef   = useScrollReveal();

  return (
    <>
      {/* Why Choose Us */}
      <section id="why" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div ref={headRef} className="reveal text-center max-w-xl mx-auto mb-12">
            <p className="text-xs font-bold tracking-[3px] uppercase text-orange-500 mb-2">Why Aarambh</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              The Smarter Choice for College Life
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY.map(({ icon, title, desc }, i) => (
              <WhyCard key={title} icon={icon} title={title} desc={desc} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Colleges */}
      <section id="location" className="py-20 bg-[#FDFAF6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div ref={colRef} className="reveal text-center max-w-xl mx-auto mb-12">
            <p className="text-xs font-bold tracking-[3px] uppercase text-orange-500 mb-2">Location</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Minutes from Top Colleges
            </h2>
            <p className="text-gray-500 mt-3 leading-relaxed">
              H-181, Beta 2, Greater Noida puts you within easy reach of the city's best institutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {COLLEGES.map((c, i) => (
              <CollegeCard key={c.name} college={c} delay={i * 50} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function WhyCard({ icon, title, desc, delay }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="reveal group text-center p-6 rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50/60 to-white hover:border-orange-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-250"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-md shadow-orange-500/30">
        {icon}
      </div>
      <h3 className="text-base font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function CollegeCard({ college, delay }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="reveal flex items-center gap-3 bg-white rounded-xl p-3.5 border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all cursor-default"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-lg shrink-0">
        {college.icon}
      </div>
      <div>
        <p className="text-sm font-bold text-gray-800 leading-tight">{college.name}</p>
        <p className="text-xs text-orange-500 font-semibold mt-0.5">{college.dist}</p>
      </div>
    </div>
  );
}
