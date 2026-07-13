import { MapPin, Phone, BedDouble, Coffee, ImageOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { HOSTELS } from '../data/hostels';
import { PGS } from '../data/pgs';
import { CAFES } from '../data/cafes';

const ICON_MAP = { hostels: '🏨', pgs: '🏠', cafes: '☕' };

const CATEGORIES = [
  { key: 'hostels', label: 'Hostels', data: HOSTELS, color: 'orange' },
  { key: 'pgs',     label: 'PGs',     data: PGS,     color: 'blue'   },
  { key: 'cafes',   label: 'Cafes',   data: CAFES,   color: 'amber'  },
];

const COLOR_MAP = {
  orange: {
    section: 'bg-orange-50 border-orange-100',
    badge:   'bg-orange-100 text-orange-700',
    tag:     'bg-orange-500 text-white',
    icon:    'text-orange-500',
    button:  'bg-orange-500 hover:bg-orange-600 text-white',
    outline: 'border-orange-200 text-orange-600 hover:bg-orange-50',
    heading: 'text-orange-500',
    divider: 'bg-orange-200',
  },
  blue: {
    section: 'bg-blue-50 border-blue-100',
    badge:   'bg-blue-100 text-blue-700',
    tag:     'bg-blue-600 text-white',
    icon:    'text-blue-500',
    button:  'bg-blue-600 hover:bg-blue-700 text-white',
    outline: 'border-blue-200 text-blue-600 hover:bg-blue-50',
    heading: 'text-blue-600',
    divider: 'bg-blue-200',
  },
  amber: {
    section: 'bg-amber-50 border-amber-100',
    badge:   'bg-amber-100 text-amber-700',
    tag:     'bg-amber-500 text-white',
    icon:    'text-amber-500',
    button:  'bg-amber-500 hover:bg-amber-600 text-white',
    outline: 'border-amber-200 text-amber-600 hover:bg-amber-50',
    heading: 'text-amber-600',
    divider: 'bg-amber-200',
  },
};

const TYPE_LABEL = { hostel: 'Hostel', pg: 'PG', cafe: 'Cafe' };
const TYPE_ICON  = { hostel: '🏨', pg: '🏠', cafe: '☕' };

export default function Branches() {
  const headRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const handler = (e) => {
      setActiveTab(e.detail);
      document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' });
    };
    window.addEventListener('aarambh:tab', handler);
    return () => window.removeEventListener('aarambh:tab', handler);
  }, []);

  const visibleCategories = CATEGORIES.filter(
    (cat) => activeTab === 'all' || cat.key === activeTab
  );

  return (
    <section id="branches" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div ref={headRef} className="reveal text-center max-w-xl mx-auto mb-10">
          <p className="text-xs font-bold tracking-[3px] uppercase text-orange-500 mb-2">
            Expanding Network
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Our Branches
          </h2>
          <p className="text-gray-500 mt-3 leading-relaxed">
            2 Hostels · 5 PGs · 2 Cafes across Greater Noida — one trusted brand, multiple locations.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 bg-orange-50 border border-orange-100 text-orange-700 text-xs font-semibold px-4 py-2 rounded-full">
            <BedDouble size={13} />
            730+ Students Accommodated Across All Branches
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {[
            { key: 'all',     label: 'All'     },
            { key: 'hostels', label: 'Hostels' },
            { key: 'pgs',     label: 'PGs'     },
            { key: 'cafes',   label: 'Cafes'   },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={
                'px-5 py-2 rounded-full text-sm font-bold transition-all border ' +
                (activeTab === tab.key
                  ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/20'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-orange-300 hover:text-orange-500')
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-14">
          {visibleCategories.map((cat, i) => (
            <CategorySection
              key={cat.key}
              category={cat}
              showDivider={i < visibleCategories.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategorySection({ category, showDivider }) {
  const ref = useScrollReveal();
  const c = COLOR_MAP[category.color];
  const emoji = ICON_MAP[category.key];
  return (
    <>
      <div ref={ref} className="reveal">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">{emoji}</span>
          <h3 className={'text-xl font-extrabold ' + c.heading}>{category.label}</h3>
          <span className={'text-xs font-bold px-2.5 py-1 rounded-full ' + c.badge}>
            {category.data.length}
          </span>
          <div className={'flex-1 h-px ' + c.divider} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {category.data.map((branch, i) => (
            <BranchCard
              key={branch.id}
              branch={branch}
              color={category.color}
              delay={i * 70}
            />
          ))}
        </div>
      </div>
      {showDivider && (
        <div className="border-t border-dashed border-gray-200" />
      )}
    </>
  );
}

function BranchCard({ branch, color, delay }) {
  const ref = useScrollReveal();
  const c = COLOR_MAP[color];

  const hasPhone  = branch.phone && !branch.phone.startsWith('[');
  const hasMaps   = branch.mapsUrl && branch.mapsUrl.length > 0 && !branch.mapsUrl.startsWith('[');
  const hasImages = branch.images && branch.images.length > 0;

  const detailPath = '/' + branch.type + 's/' + branch.id;

  return (
    <div
      ref={ref}
      className="reveal flex flex-col rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
      style={{ transitionDelay: delay + 'ms' }}
    >
      {/* Image / Placeholder */}
      <div className={'relative h-44 flex flex-col items-center justify-center gap-2 ' + c.section + ' border-b border-gray-100'}>
        {hasImages ? (
          <img
            src={branch.images[0].src}
            alt={branch.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <>
            <ImageOff size={28} className="text-gray-300" />
            <p className="text-xs text-gray-400 font-medium">Photos Coming Soon</p>
          </>
        )}
        {branch.tag ? (
          <span className={'absolute top-3 left-3 text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full ' + c.tag}>
            {branch.tag}
          </span>
        ) : null}
        <span className={'absolute top-3 right-3 text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full ' + c.badge}>
          {TYPE_ICON[branch.type]} {TYPE_LABEL[branch.type]}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h4 className="text-base font-extrabold text-gray-900 leading-snug">{branch.name}</h4>

        <div className="flex gap-2 items-start">
          <MapPin size={13} className={c.icon + ' mt-0.5 shrink-0'} />
          <p className="text-xs text-gray-500 leading-relaxed">{branch.address}</p>
        </div>

        {branch.type !== 'cafe' ? (
          <div className="flex gap-2 items-center">
            <BedDouble size={13} className={c.icon + ' shrink-0'} />
            {branch.capacity ? (
              <p className="text-xs font-semibold text-gray-700">{branch.capacity} Beds Available</p>
            ) : (
              <p className="text-xs text-gray-400">Capacity TBD</p>
            )}
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <Coffee size={13} className={c.icon + ' shrink-0'} />
            <p className="text-xs font-semibold text-gray-700">Open for Hostel Residents</p>
          </div>
        )}

        {hasPhone ? (
          <div className="flex gap-2 items-center">
            <Phone size={13} className={c.icon + ' shrink-0'} />
            <div className="flex gap-2 flex-wrap">
              <a
                href={'tel:' + branch.phone}
                className="text-xs font-semibold text-gray-700 hover:text-orange-500 transition-colors"
              >
                {branch.phone}
              </a>
              {branch.phone2 ? (
                <>
                  <span className="text-gray-300 text-xs">·</span>
                  <a
                    href={'tel:' + branch.phone2}
                    className="text-xs font-semibold text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    {branch.phone2}
                  </a>
                </>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="flex-1" />

        {/* Action buttons */}
        <div className="flex gap-2 pt-1">
          {hasMaps ? (
            <a
              href={branch.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={'flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-3 rounded-xl border transition-colors ' + c.outline}
            >
              <MapPin size={12} /> Directions
            </a>
          ) : null}
          {hasPhone ? (
            <a
              href={'tel:' + branch.phone}
              className={'flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-3 rounded-xl transition-colors ' + c.button}
            >
              <Phone size={12} /> Call
            </a>
          ) : null}
          <Link
            to={detailPath}
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-3 rounded-xl border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}