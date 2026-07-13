import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { HOSTELS } from '../data/hostels';
import { PGS } from '../data/pgs';
import { CAFES } from '../data/cafes';
import {
  MapPin, Phone, BedDouble, Coffee,
  ArrowLeft, ImageOff, Calendar
} from 'lucide-react';

const ALL_DATA = {
  hostel: HOSTELS,
  pg: PGS,
  cafe: CAFES,
};

const TYPE_LABEL = { hostel: 'Hostel', pg: 'PG', cafe: 'Cafe' };

export default function BranchPage({ type }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const branch = ALL_DATA[type]?.find((b) => b.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!branch) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-gray-500 pt-20">
        <p className="text-lg font-bold">Branch not found.</p>
        <button
          onClick={() => navigate('/')}
          className="text-orange-500 font-semibold underline"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const hasImages = branch.images && branch.images.length > 0;
  const coverImage = hasImages ? branch.images[0].src : null;
  const hasPhone  = branch.phone && !branch.phone.startsWith('[');
  const hasMaps   = branch.mapsUrl && branch.mapsUrl.length > 0 && !branch.mapsUrl.startsWith('[');
  const waMsg     = encodeURIComponent('Hi! I am interested in ' + branch.name);
  const waVisit   = encodeURIComponent('Hi! I want to book a visit to ' + branch.name + ' at ' + branch.address);

  return (
    <div className="min-h-screen bg-[#FDFAF6] pt-20">

      {/* Hero */}
      <div className="relative h-72 sm:h-96 bg-gray-100 overflow-hidden">
        {hasImages ? (
          <img
            src={coverImage}
            alt={branch.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-orange-50">
            <ImageOff size={40} className="text-gray-300" />
            <p className="text-sm text-gray-400 font-medium">Photos Coming Soon</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <button
          onClick={() => navigate('/')}
          className="absolute top-6 left-4 sm:left-8 flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold text-sm px-4 py-2 rounded-full transition-colors"
        >
          <ArrowLeft size={15} /> Back
        </button>

        <div className="absolute bottom-6 left-4 sm:left-8 right-4 sm:right-8">
          <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
            {TYPE_LABEL[type]}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            {branch.name}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-8">

        {/* Quick info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-4 border border-gray-100 flex gap-3 items-start sm:col-span-2">
            <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
              <MapPin size={16} className="text-orange-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Address</p>
              <p className="text-sm text-gray-700 leading-relaxed">{branch.address}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-100 flex gap-3 items-start">
            <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
              {type === 'cafe'
                ? <Coffee size={16} className="text-orange-500" />
                : <BedDouble size={16} className="text-orange-500" />
              }
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                {type === 'cafe' ? 'Type' : 'Capacity'}
              </p>
              <p className="text-sm font-bold text-gray-800">
                {type === 'cafe'
                  ? 'Student Cafe'
                  : branch.capacity
                    ? branch.capacity + ' Beds'
                    : 'TBD'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {hasPhone && (
            <a
              href={'tel:' + branch.phone}
              className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md shadow-orange-500/20"
            >
              <Phone size={16} /> Call Now
            </a>
          )}
          {hasMaps && (
            <a
              href={branch.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 border-2 border-orange-200 text-orange-600 hover:bg-orange-50 font-bold py-3.5 rounded-xl transition-colors"
            >
              <MapPin size={16} /> Get Directions
            </a>
          )}
          <a
            href={'https://wa.me/917827024959?text=' + waMsg}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold py-3.5 rounded-xl transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Google Maps embed */}
        {hasMaps && (
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-56">
            <iframe
              title={branch.name + ' location'}
              src={'https://maps.google.com/maps?q=' + encodeURIComponent(branch.address) + '&output=embed'}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}

        {/* Pricing */}
        {branch.pricing && branch.pricing.length > 0 && (
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
           <h2 className="text-lg font-extrabold text-gray-900 mb-1">Pricing</h2>
           <p className="text-xs text-gray-400 mb-4">For academic year 2026–27</p>
           <div className="flex flex-col gap-3">
             {branch.pricing.map((p) => (
                <div
                 key={p.label}
                 className="flex items-center justify-between p-4 bg-orange-50 border border-orange-100 rounded-xl"
                >
                 <div>
                   <p className="text-sm font-bold text-gray-800">{p.label}</p>
                   <p className="text-xs text-gray-400 mt-0.5">{p.period}</p>
                 </div>
                 <div className="text-right">
                   <p className="text-xl font-black text-orange-500">
                     {'Rs.' + p.amount.toLocaleString('en-IN')}
                   </p>
                 </div>
                </div>
              ))}
             </div>
             {branch.pricingNote && (
              <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                * {branch.pricingNote}
              </p>
            )}
     </div>
)}


        {/* Facilities */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h2 className="text-lg font-extrabold text-gray-900 mb-4">Facilities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {(branch.facilities || []).map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-orange-500 font-bold">✓</span> {f}
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
         <h2 className="text-lg font-extrabold text-gray-900 mb-4">Gallery</h2>
         <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
           {hasImages ? (
             branch.images.map((item, i) => (
             <div key={i} className="aspect-square rounded-xl overflow-hidden bg-gray-100 relative">
               <img
                 src={item.src}
                 alt={branch.name +  '-'  + item.label}
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                 loading="lazy"
              />
              <span className ="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                {item.label}  
              </span>
           </div>
         ))
       ) : (
        [1, 2, 3, 4, 5, 6].map((i) => (
           <div
             key={i}
             className="aspect-square rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center gap-2"
           >
             <ImageOff size={20} className="text-gray-300" />
             <p className="text-[10px] text-gray-400 font-medium">Coming Soon</p>
          </div>
        ))
      )}
    </div>
   </div>

        {/* Book a visit CTA */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-center text-white">
          <h2 className="text-xl font-extrabold mb-2">Interested in {branch.name}?</h2>
          <p className="text-white/80 text-sm mb-5">
            Schedule a visit and see it for yourself. No commitment required.
          </p>
          <a
            href={'https://wa.me/917827024959?text=' + waVisit}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-3 rounded-full hover:bg-orange-50 transition-colors shadow-lg"
          >
            <Calendar size={16} /> Book a Visit
          </a>
        </div>

      </div>
    </div>
  );
}