import { useScrollReveal } from '../hooks/useScrollReveal';
import { FACILITIES } from '../lib/constants';

export default function Facilities() {
  const headRef = useScrollReveal();

  return (
    <section id="facilities" className="py-20 bg-[#FDFAF6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headRef} className="reveal text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-[3px] uppercase text-orange-500 mb-2">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Everything a Student Needs
          </h2>
          <p className="text-gray-500 mt-3 leading-relaxed">
            Every facility is designed to let you focus on studies — not logistics.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {FACILITIES.map(({ icon, title, desc }, i) => (
            <FacilityCard key={title} icon={icon} title={title} desc={desc} delay={i * 40} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilityCard({ icon, title, desc, delay }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="reveal group bg-white rounded-2xl p-4 border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-250 cursor-default relative overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center text-2xl mb-3 group-hover:bg-orange-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-sm font-bold text-gray-800 mb-1 leading-snug">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}
