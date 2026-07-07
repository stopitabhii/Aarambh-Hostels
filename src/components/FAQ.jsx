import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FAQS } from '../lib/constants';

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const headRef = useScrollReveal();

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div ref={headRef} className="reveal text-center mb-12">
          <p className="text-xs font-bold tracking-[3px] uppercase text-orange-500 mb-2">FAQs</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
              delay={i * 40}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, isOpen, onToggle, delay }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="reveal rounded-2xl border overflow-hidden transition-colors duration-200"
      style={{
        transitionDelay: `${delay}ms`,
        borderColor: isOpen ? 'rgb(249 115 22 / 0.35)' : 'rgb(243 244 246)',
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-gray-800 leading-snug">{faq.q}</span>
        <span className={`shrink-0 transition-colors ${isOpen ? 'text-orange-500' : 'text-gray-400'}`}>
          {isOpen ? <Minus size={17} /> : <Plus size={17} />}
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '300px' : '0px' }}
      >
        <div className="px-5 pb-4 pt-0">
          <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}
