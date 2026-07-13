// ─── Hostel Info ─────────────────────────────────────────────────────────────
export const HOSTEL = {
  name: 'Aarambh Hostels & PG',
  tagline: 'Feel Like Home, Stay Like Family',
  type: 'Boys Hostel',
  phones: ['7827024959', '7827124959'],
  whatsapp: '917827024959',
  email: 'aarambhhostels@gmail.com',
  address: {
    line1: 'H-181, Beta 2',
    line2: 'Block H',
    city: 'Greater Noida',
    state: 'Uttar Pradesh',
    pincode: '201310',
  },
  manager: 'Manish Kumar',
  googleMapsUrl: 'https://maps.google.com/?q=H-181+Beta+2+Greater+Noida+Uttar+Pradesh',
  mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14027.140377004005!2d77.513029!3d28.486018!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cebaf38c1e955%3A0x1ab78f463b8c4757!2sAarambh%20Hostel%20And%20PG!5e0!3m2!1sen!2sin!4v1783711172582!5m2!1sen!2sin",
};

// ─── Trust Badges ─────────────────────────────────────────────────────────────
export const TRUST_BADGES = [
  '2 Hostels',
  '5 PGs',
  '730+ Students',
  '24×7 Security',
  '4 Meals / Day',
  'No Hidden Charges',
  'Near Top Colleges',
  'Friendly Environment',
  'No Security Deposit',
];

// ─── Facilities ───────────────────────────────────────────────────────────────
export const FACILITIES = [
  { icon: '📶', title: 'High-Speed Wi-Fi',     desc: 'Broadband internet with full coverage across all rooms and common areas.' },
  { icon: '📷', title: '24/7 CCTV Security',   desc: 'Surveillance cameras at every entry point and common area — always on.' },
  { icon: '🍱', title: '4 Meals a Day',         desc: 'Hygienic home-style food 4 times daily. Weekly rotating menu.' },
  { icon: '💧', title: 'RO Water',              desc: 'Purified RO drinking water available round-the-clock on all floors.' },
  { icon: '🧹', title: 'Daily Housekeeping',    desc: 'Professional room cleaning and common area maintenance every day.' },
  { icon: '⚡', title: 'Power Backup',          desc: '24/7 electricity with inverter backup — your studies never stop.' },
  { icon: '🏍️', title: 'Two-Wheeler Parking',  desc: 'Secure covered parking for bikes and scooters, accessible 24/7.' },
  { icon: '📚', title: 'Study Area',            desc: 'Dedicated quiet zones with proper lighting designed for focused study.' },
  { icon: '🎮', title: 'Common Room',           desc: 'Recreation lounge to relax, socialise, and unwind after college.' },
  { icon: '🏥', title: 'Medical Aid',           desc: 'First-aid facility on-site and rapid assistance for emergencies.' },
  { icon: '👕', title: 'Laundry Service',       desc: 'Regular laundry facility available for all residents.' },
  { icon: '🚌', title: 'College Transport',     desc: 'Scheduled pickup and drop to nearby colleges — no more missed buses.' },
];

// ─── Room Types ───────────────────────────────────────────────────────────────
export const ROOMS = [
  {
    id: 'double',
    label: 'Best Value',
    labelColor: 'bg-amber-600',
    title: 'Double Sharing',
    occupancy: '2 Persons',
    price: 160000,
    images: ['/images/room-double.jpg', '/images/room-double-3.jpg', '/images/room-double-4.jpg', '/images/room-double-5.jpg'],
    features: [
      '2 person occupancy (AC room)',
      'Attached bathroom with geyser',
      '2 beds with mattresses & Almirah',
      'Study table included',
      'Transport to & from colleges',
      'Lunch delivery at institute',
      'Laundry service available',
      'Housekeeping & unlimited Wi-Fi',
    ],
  },
  {
    id: 'triple',
    label: 'Most Affordable',
    labelColor: 'bg-green-700',
    title: 'Triple Sharing',
    occupancy: '3 Persons',
    price: 140000,
    images: ['/images/room-triple.jpg', '/images/room-triple-2.jpg'],
    features: [
      '3 person occupancy (AC room)',
      'Attached bathroom with geyser',
      '3 beds with mattresses & Almirah',
      'Study table included',
      'Transport to & from colleges',
      'Lunch delivery at institute',
      'Laundry service available',
      'Housekeeping & unlimited Wi-Fi',
    ],
  },
];

// ─── Gallery ──────────────────────────────────────────────────────────────────
export const GALLERY_IMAGES = [
  { src: '/images/Hostel-Beta-2/hero-building.jpg',   alt: 'Aarambh Hostel main building exterior — Beta 2, Greater Noida' },
  { src: '/images/Hostel-Beta-2/building-back.jpg',   alt: 'Aarambh Hostel building back view with lush green trees' },
  { src: '/images/Hostel-Beta-2/building-side.jpg',   alt: 'Aarambh Hostel multi-floor balconies and side elevation' },
  { src: '/images/Hostel-Beta-2/corridor.jpg',        alt: 'Bright spacious hostel corridor with artwork and garden view' },
  { src: '/images/Hostel-Beta-2/room-double.jpg',     alt: 'Double sharing room with AC, wardrobe and study table' },
  { src: '/images/Hostel-Beta-2/room-double-3.jpg',   alt: 'Double sharing room with blue bedsheets and wardrobe' },
  { src: '/images/Hostel-Beta-2/room-double-4.jpg',   alt: 'Double sharing room with gold stripe accent wall' },
  { src: '/images/Hostel-Beta-2/room-triple.jpg',     alt: 'Triple sharing room with green accent wall and ceiling fan' },
  { src: '/images/Hostel-Beta-2/room-triple-2.jpg',   alt: 'Triple sharing room with gold stripe wall and study desk' },
  { src: '/images/Hostel-Beta-2/bathroom.jpg',        alt: 'Clean hostel bathroom with shower, WC and washbasin' },
  { src: '/images/Hostel-Beta-2/bathroom-2.jpg',      alt: 'Hostel bathroom with grey tiles, shower and modern fittings' },
];

// ─── Nearby Colleges ──────────────────────────────────────────────────────────
export const COLLEGES = [
  { name: 'GL Bajaj Institute',          dist: '~3.5 km', icon: '🎓' },
  { name: 'GNIOT Greater Noida',         dist: '~5.5 km', icon: '🏛️' },
  { name: 'Sharda University',           dist: '~5.2 km', icon: '🔬' },
  { name: 'Galgotias College of Engineering & technology',     dist: '~5.5 km', icon: '⚙️' },
  { name: 'KCC Institute of Technology',  dist: '~5 km', icon: '📐' },
  { name: 'IIMT College of Engineering',       dist: '~3.6 km', icon: '🏫' },
  { name: 'Galgotias University',     dist: '~15 km', icon: '🎯' },
  { name: 'Benett University',        dist: '~12 km', icon: '💡' },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
export const FAQS = [
  { q: 'Is food included in the hostel fee?',
    a: 'Yes — 4 meals daily: Breakfast (8–9 AM), Lunch (1–2 PM), Evening Snacks (5:30–6 PM) and Dinner (8–9 PM). The weekly menu rotates and is shared every Monday. Lunch is also delivered to your college.', },
  { q: 'Is Wi-Fi available in all rooms?',
    a: 'Yes. High-speed Wi-Fi covers every room, corridor, and common area — included in the hostel fee at no extra charge.' },
  { q: 'Is there a security deposit required?',
    a: 'No security deposit is required. You simply pay the monthly fee and move in — no advance, no hidden charges.' },
  { q: 'Are visitors allowed?',
    a: 'Visitors are welcome in the common reception area during specified hours. Entry to resident floors requires prior approval for security reasons.' },
  { q: 'What are the hostel gate timings?',
    a: 'The hostel operates 24/7 with managed gate timings to ensure resident safety. Contact the manager for specific curfew details.' },
  { q: 'Is laundry service available?',
    a: 'Yes, laundry service is available for residents. Contact the hostel office for the weekly schedule and any applicable charges.' },
  { q: 'How do I book a room or schedule a visit?',
    a: 'Call us on 7827024959, send a WhatsApp message using the button below, or fill the enquiry form. A site visit can be arranged at your convenience.' },
  { q: 'What room types are available and what is the pricing?',
    a: 'We offer Double Sharing at ₹1,60,000/year and Triple Sharing at ₹1,40,000/year — per person, all-inclusive (meals, Wi-Fi, housekeeping, RO water). This works out to roughly ₹13,333 and ₹11,667 per month respectively.' },
  { q: 'Which colleges are close to the hostel?',
    a: 'GL Bajaj, GNIOT, Sharda University, KCC Institute of Technology, and more — most within 2–5 km from H-181, Beta 2.' },
];

// ─── EmailJS config ───────────────────────────────────────────────────────────
// Values come from .env — never hardcode real keys here
export const EMAILJS_CONFIG = {
  serviceId:  import.meta.env.VITE_EMAILJS_SERVICE_ID  || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || '',
};
