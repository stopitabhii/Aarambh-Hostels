import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { HOSTEL } from '../lib/constants';

const PILLARS = [
  { icon: '🏨', title: '2 Hostels',     desc: 'Full-year AC accommodation with meals, transport and laundry.' },
  { icon: '🏠', title: '5 PGs',         desc: 'Flexible monthly PGs with meals, Wi-Fi and housekeeping.' },
  { icon: '☕', title: '2 Cafes',       desc: 'Student cafes serving fresh food with weekly rotating menus.' },
  { icon: '🎓', title: '730+ Students', desc: 'A thriving community across all branches in Greater Noida.' },
];

const ABOUT_IMAGES = [
  { src: '/images/Hostel-Beta-2/hero-building.jpg',                 label: 'Hostel — Beta 2'      },
  { src: '/images/Hostel-Beta-2/building-back.jpg',                 label: 'Hostel — Beta 2'      },
  { src: '/images/Hostel-Beta-2/corridor.jpg',                      label: 'Hostel — Beta 2'      },
  { src: '/images/office.PNG',                                      label: 'Director - office'    },
  { src: '/images/warden-office.PNG',                               label: 'warden - office'      },
  { src: '/images/Hostel-Beta-2/students-with-building.PNG',        label: 'Aarambh-Residents'    },
  { src: '/images/social-cause.PNG',                                label: 'Social - Cause'       },
  { src: '/images/Hostel-Beta-2/building-side.jpg',                 label: 'Hostel — Beta 2'      },
  { src: '/images/PG-A-42-Beta-1/hero-building.jpg',                label: 'PG — A-42, Beta 1'    },
  { src: '/images/students.PNG',                                    label: 'Aarambh-Residents'    },
  { src: '/images/mess.PNG',                                        label: 'Life at Aarambh'      },
];

export default function About() {
 const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ABOUT_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
 }, []);
  const leftRef  = useScrollReveal();
  const rightRef = useScrollReveal();


  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <div ref={leftRef} className="reveal relative h-[420px] lg:h-[480px]">
         {/* Rotating main image */}
         <div className="absolute top-0 left-0 right-16 bottom-16 rounded-2xl overflow-hidden shadow-2xl">
          {ABOUT_IMAGES.map((img, i) => (
           <img
            key={img.src}
            src={img.src}
            alt={img.label}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
             i === current ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
         ))}
         {/* Branch label */}
         <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-500">
           {ABOUT_IMAGES[current].label}
         </div>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-20 right-0 flex flex-col gap-1.5">
         {ABOUT_IMAGES.map((_, i) => (
          <button
           key={i}
           onClick={() => setCurrent(i)}
           className={`w-1.5 rounded-full transition-all duration-300 ${
            i === current ? 'h-4 bg-orange-500' : 'h-1.5 bg-gray-300'
           }`}
        />
       ))}
  </div>

        {/* Location badge */}
        <div className="absolute top-4 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg flex items-center gap-1.5">
         <MapPin size={11} />
         Greater Noida
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
            Aarambh started with one hostel and a simple belief — that students deserve
            better than a bare room. Today we operate 2 Hostels, 5 PGs, and 2 Cafés
            across Greater Noida, serving 730+ students every day.
            </p>
            <p className="text-gray-500 leading-relaxed mb-2">
            Every Aarambh property is built around the same values — safety, comfort,
            and a community that feels like family. From AC rooms and 4 daily meals to
            college transport and unlimited laundry, we handle the essentials so
            students can focus on what matters.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our motto — <strong className="text-gray-800 italic">"Feel Like Home, Stay Like Family"</strong> — guides
              every decision we make across every branch.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PILLARS.map(({ title, desc }) => (
                <div
                  key={title}
                  className="flex gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/40 transition-colors"
                >
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
