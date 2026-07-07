import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GALLERY_IMAGES } from '../lib/constants';

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const headRef = useScrollReveal();

  // Keyboard navigation
  const handleKey = useCallback((e) => {
    if (lightboxIdx === null) return;
    if (e.key === 'ArrowRight') setLightboxIdx((i) => (i + 1) % GALLERY_IMAGES.length);
    if (e.key === 'ArrowLeft')  setLightboxIdx((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    if (e.key === 'Escape')     setLightboxIdx(null);
  }, [lightboxIdx]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIdx]);

  // Touch swipe for mobile lightbox
  let touchStartX = 0;
  const onTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) setLightboxIdx((i) => (i + 1) % GALLERY_IMAGES.length);
    else         setLightboxIdx((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <section id="gallery" className="py-20 bg-[#FDFAF6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headRef} className="reveal text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-[3px] uppercase text-orange-500 mb-2">Gallery</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            A Closer Look at Aarambh
          </h2>
          <p className="text-gray-500 mt-3">
            From the building exterior to every room and bathroom — see exactly what you're getting.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {GALLERY_IMAGES.map((img, i) => (
            <GalleryItem key={img.src} img={img} index={i} onOpen={setLightboxIdx} />
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Tap any photo to view full screen · Swipe to navigate on mobile
        </p>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxIdx(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
            onClick={() => setLightboxIdx(null)}
          >
            <X size={22} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 sm:left-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Image */}
          <img
            src={GALLERY_IMAGES[lightboxIdx].src}
            alt={GALLERY_IMAGES[lightboxIdx].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-3 sm:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => (i + 1) % GALLERY_IMAGES.length); }}
          >
            <ChevronRight size={22} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
            {lightboxIdx + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryItem({ img, index, onOpen }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="reveal break-inside-avoid mb-3 group relative cursor-pointer rounded-xl overflow-hidden"
      onClick={() => onOpen(index)}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-xl flex items-center justify-center">
        <ZoomIn
          size={28}
          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
        />
      </div>
    </div>
  );
}
