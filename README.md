# Aarambh Hostels & PG — Website

Production website for Aarambh Hostels & PG, H-181 Beta 2, Greater Noida.

## Tech Stack
- **Frontend:** React + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Contact Form:** EmailJS (serverless) with WhatsApp fallback
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Copy env file and fill in EmailJS keys
cp .env.example .env

# Start dev server
npm run dev

# Build for production
npm run build
```

## EmailJS Setup (Contact Form)
1. Sign up at https://emailjs.com (free: 200 emails/month)
2. Create a **Service** (connect Gmail or any SMTP)
3. Create a **Template** — use these variables in the template body:
   - `{{name}}` — sender's name
   - `{{phone}}` — sender's phone
   - `{{email}}` — sender's email
   - `{{room}}` — room type selected
   - `{{message}}` — message body
4. Copy **Service ID**, **Template ID**, **Public Key** → paste into `.env`

> **Without .env configured:** the form automatically falls back to
> opening a pre-filled WhatsApp message. The site always works.

## Adding a Backend Later
All data constants live in `src/lib/constants.js`.
All API calls should be abstracted in `src/lib/api.js` (create this file when needed).
Components call `lib/api.js` — so swapping EmailJS for a real backend
only requires changing `api.js`, not any component.

## Deployment — Vercel 
```bash
npm install -g vercel
vercel --prod
```
Add your `.env` variables in the Vercel dashboard under Project → Settings → Environment Variables.

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Facilities.jsx
│   ├── Rooms.jsx
│   ├── Gallery.jsx
│   ├── WhyUs.jsx
│   ├── FAQ.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── FloatingActions.jsx
├── hooks/
│   └── useScrollReveal.js
├── lib/
│   └── constants.js      ← single source of truth for all content
├── App.jsx
├── main.jsx
└── index.css
public/
└── images/               ← all hostel photos
```

## Content Updates
All text, phone numbers, addresses, FAQs, facilities, and room info
are in **`src/lib/constants.js`** — one file to update everything.
