import { useState, useEffect } from 'react';
import { ArrowUp, Phone } from 'lucide-react';
import { HOSTEL } from '../lib/constants';

export default function FloatingActions() {
  const [showBtt, setShowBtt] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBtt(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop: WhatsApp + Back to top */}
      <div className="hidden md:flex fixed bottom-6 right-5 flex-col gap-3 z-50">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${HOSTEL.whatsapp}?text=${encodeURIComponent('Hi! I want to enquire about rooms at Aarambh Hostels.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5b] text-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/40 hover:scale-110 transition-all"
          aria-label="WhatsApp"
          title="Chat on WhatsApp"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
          <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.112 1.523 5.837L.057 23.676a.75.75 0 0 0 .92.921l5.863-1.461A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.946 9.946 0 0 1-5.13-1.424l-.368-.22-3.822.953.972-3.762-.24-.386A9.963 9.963 0 0 1 2 12C2 6.478 6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z"/>
          </svg>
        </a>

        {/* Back to top */}
        {showBtt && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-11 h-11 bg-gray-900 hover:bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        )}
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="mobile-sticky-bar fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-2xl px-3 py-2.5 flex gap-2">
        <a
          href={`tel:${HOSTEL.phones[0]}`}
          className="flex-1 flex items-center justify-center gap-2 bg-orange-50 text-orange-600 font-bold py-3 rounded-xl text-sm border border-orange-100"
        >
          <Phone size={16} /> Call Now
        </a>
        <a
          href={`https://wa.me/${HOSTEL.whatsapp}?text=${encodeURIComponent('Hi! I want to enquire about rooms at Aarambh Hostels.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm"
        >
          💬 WhatsApp
        </a>
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex-1 flex items-center justify-center gap-1 bg-orange-500 text-white font-bold py-3 rounded-xl text-sm"
        >
          📅 Book Visit
        </button>
      </div>
    </>
  );
}
