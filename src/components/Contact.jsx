import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, MapPin, MessageCircle, Navigation, Send, CheckCircle, Loader } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { HOSTEL, EMAILJS_CONFIG } from '../lib/constants';

const ROOM_OPTIONS = ['Double Sharing — ₹1,60,000/year', 'Triple Sharing — ₹1,40,000/year', 'Not Sure Yet'];

export default function Contact() {
  const headRef = useScrollReveal();
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: '', phone: '', email: '', room: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())           e.name    = 'Name is required';
    if (!form.phone.trim())          e.phone   = 'Phone number is required';
    else if (!/^\d{10}$/.test(form.phone.trim())) e.phone = 'Enter a valid 10-digit number';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');

    // If EmailJS is configured, use it; otherwise fall back to WhatsApp
    if (EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey) {
      try {
        await emailjs.sendForm(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          formRef.current,
          EMAILJS_CONFIG.publicKey
        );
        setStatus('success');
        setForm({ name: '', phone: '', email: '', room: '', message: '' });
      } catch {
        setStatus('error');
      }
    } else {
      // Fallback: open WhatsApp with prefilled message
      const msg = `Hi Aarambh Hostels! I'm ${form.name} and I'm interested in a *${form.room || 'room'}*. My phone: ${form.phone}. ${form.message}`;
      window.open(`https://wa.me/${HOSTEL.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#FDFAF6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headRef} className="reveal text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-[3px] uppercase text-orange-500 mb-2">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Contact Aarambh Hostels
          </h2>
          <p className="text-gray-500 mt-3 leading-relaxed">
            Ready to visit? Call us, WhatsApp, or fill the form below and we'll get back to you within a few hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left — info + map */}
          <div ref={leftRef} className="reveal lg:col-span-2 flex flex-col gap-4">

            {/* One-tap CTAs */}
            <a
              href={`tel:${HOSTEL.phones[0]}`}
              className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-4 rounded-2xl transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-500/30"
            >
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs opacity-80 font-medium">Call Manager (Manish Kumar)</p>
                <p className="text-lg font-black tracking-wide">{HOSTEL.phones[0]}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${HOSTEL.whatsapp}?text=${encodeURIComponent('Hi! I want to know about rooms at Aarambh Hostels.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold px-5 py-4 rounded-2xl transition-all hover:-translate-y-0.5 shadow-lg shadow-green-500/30"
            >
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-xs opacity-80 font-medium">WhatsApp — quick reply</p>
                <p className="text-lg font-black tracking-wide">{HOSTEL.phones[0]}</p>
              </div>
            </a>

            <a
              href={HOSTEL.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-800 font-bold px-5 py-4 rounded-2xl border border-gray-200 hover:border-orange-300 transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                <Navigation size={20} className="text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Get Directions</p>
                <p className="text-sm font-bold text-gray-800">{HOSTEL.address.line1}, {HOSTEL.address.city}</p>
              </div>
            </a>

            {/* Info cards */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 space-y-3">
              <InfoRow icon={<MapPin size={16} className="text-orange-500" />} label="Address">
                {HOSTEL.address.line1}, {HOSTEL.address.line2},<br />
                {HOSTEL.address.city}, {HOSTEL.address.state} — {HOSTEL.address.pincode}
              </InfoRow>
              <InfoRow icon={<Phone size={16} className="text-orange-500" />} label="Phone">
                <a href={`tel:${HOSTEL.phones[0]}`} className="text-orange-500 font-semibold hover:underline">{HOSTEL.phones[0]}</a>
                {' · '}
                <a href={`tel:${HOSTEL.phones[1]}`} className="text-orange-500 font-semibold hover:underline">{HOSTEL.phones[1]}</a>
              </InfoRow>
              <InfoRow icon={<span className="text-orange-500 text-sm">🕐</span>} label="Office Hours">
                Monday – Sunday, 9:00 AM – 9:00 PM
              </InfoRow>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-44">
              <iframe
                title="Aarambh Hostel location map"
                src={HOSTEL.mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — enquiry form */}
          <div ref={rightRef} className="reveal lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-extrabold text-gray-900 mb-1">Send an Enquiry</h3>
              <p className="text-sm text-gray-400 mb-6">We'll call you back within a few hours.</p>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                  <CheckCircle size={48} className="text-green-500" />
                  <h4 className="text-lg font-bold text-gray-800">Message Sent!</h4>
                  <p className="text-sm text-gray-500 max-w-xs">
                    We'll contact you shortly on the number you provided.
                    For urgent queries, call us directly on{' '}
                    <a href={`tel:${HOSTEL.phones[0]}`} className="text-orange-500 font-semibold">{HOSTEL.phones[0]}</a>.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-sm text-orange-500 hover:text-orange-600 font-semibold underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Your Name *" error={errors.name}>
                      <input
                        name="name" value={form.name} onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={inputCls(errors.name)}
                      />
                    </Field>
                    <Field label="Phone Number *" error={errors.phone}>
                      <input
                        name="phone" value={form.phone} onChange={handleChange}
                        placeholder="10-digit mobile number"
                        type="tel"
                        className={inputCls(errors.phone)}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Email Address">
                      <input
                        name="email" value={form.email} onChange={handleChange}
                        placeholder="you@email.com"
                        type="email"
                        className={inputCls()}
                      />
                    </Field>
                    <Field label="Room Type">
                      <select name="room" value={form.room} onChange={handleChange} className={inputCls()}>
                        <option value="">Select a room type</option>
                        {ROOM_OPTIONS.map((r) => <option key={r}>{r}</option>)}
                      </select>
                    </Field>
                  </div>

                  <Field label="Message">
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="Tell us your move-in date, college, or any questions..."
                      rows={3}
                      className={inputCls()}
                    />
                  </Field>

                  {status === 'error' && (
                    <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                      Something went wrong. Please call us directly on{' '}
                      <a href={`tel:${HOSTEL.phones[0]}`} className="font-semibold underline">{HOSTEL.phones[0]}</a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-orange-500/30"
                  >
                    {status === 'sending' ? (
                      <><Loader size={16} className="animate-spin" /> Sending…</>
                    ) : (
                      <><Send size={16} /> Send Enquiry</>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    Or call us directly:{' '}
                    <a href={`tel:${HOSTEL.phones[0]}`} className="text-orange-500 font-semibold">{HOSTEL.phones[0]}</a>
                    {' · '}
                    <a href={`tel:${HOSTEL.phones[1]}`} className="text-orange-500 font-semibold">{HOSTEL.phones[1]}</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

function inputCls(error) {
  return `w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors font-medium
    ${error
      ? 'border-red-300 bg-red-50 focus:border-red-400'
      : 'border-gray-200 bg-gray-50 focus:border-orange-400 focus:bg-white'
    } placeholder:text-gray-300 text-gray-800`;
}

function InfoRow({ icon, label, children }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="w-7 h-7 bg-orange-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{label}</p>
        <p className="text-sm text-gray-700 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
