import { useScrollReveal } from '../hooks/useScrollReveal';
import { Phone } from 'lucide-react';
import { ROOMS, HOSTEL } from '../lib/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

export default function Rooms() {
  const headRef = useScrollReveal();

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={headRef} className="reveal text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-[3px] uppercase text-orange-500 mb-2">Room Types</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Comfortable Rooms, Honest Pricing
          </h2>
          <p className="text-gray-500 mt-3 leading-relaxed">
            All rooms are fully furnished, well-ventilated, and kept clean daily.
            Meals, Wi-Fi, and housekeeping are included.
          </p>
        </div>

        {/* 2-column grid — centered, max-width capped so cards don't stretch too wide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {ROOMS.map((room, i) => (
            <RoomCard key={room.id} room={room} delay={i * 100} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Annual tariff per person · All-inclusive (meals, Wi-Fi, housekeeping, RO water)
        </p>
      </div>
    </section>
  );
}

function RoomCard({ room, delay }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="reveal group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Swipeable image gallery */}
<div className="relative h-56 bg-gray-100">
  <span className={`absolute top-3 left-3 z-10 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${room.labelColor}`}>
    {room.label}
  </span>
  <Swiper
    modules={[Pagination]}
    pagination={{ clickable: true }}
    loop={room.images.length > 1}
    className="h-full w-full"
  >
    {room.images.map((src, i) => (
      <SwiperSlide key={i}>
        <img
          src={src}
          alt={`${room.title} at Aarambh Hostel Greater Noida — photo ${i + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-xl font-extrabold text-gray-900">{room.title}</h3>
          <span className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-lg mt-0.5">
            {room.occupancy}
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black text-orange-500">
              ₹{room.price.toLocaleString('en-IN')}
            </span>
            <span className="text-sm text-gray-400 font-medium">/ person / year</span>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">
            ≈ ₹{Math.round(room.price / 12).toLocaleString('en-IN')} per month
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-1.5 mb-5">
          {room.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">✓</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Inclusive note */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl px-3.5 py-2.5 mb-4">
          <p className="text-xs text-amber-700 font-semibold text-center">
            ✅ Includes meals · Wi-Fi · housekeeping · RO water
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => scrollTo('#contact')}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-3 rounded-xl transition-colors shadow-md shadow-orange-500/20"
          >
            Book a Visit
          </button>
          <a
            href={`https://wa.me/${HOSTEL.whatsapp}?text=${encodeURIComponent(
              `Hi! I'm interested in the ${room.title} (₹${room.price.toLocaleString('en-IN')}/year) at Aarambh Hostels.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 bg-[#25D366] hover:bg-[#1ebe5b] text-white rounded-xl transition-colors"
            aria-label="WhatsApp enquiry"
          >
            💬
          </a>
          <a
            href={`tel:${HOSTEL.phones[0]}`}
            className="flex items-center justify-center w-12 bg-orange-50 hover:bg-orange-100 text-orange-600 rounded-xl transition-colors"
            aria-label="Call us"
          >
            <Phone size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
