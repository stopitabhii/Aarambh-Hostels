import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import About           from './components/About';
import Facilities      from './components/Facilities';
import Rooms           from './components/Rooms';
import Gallery         from './components/Gallery';
import WhyUs           from './components/WhyUs';
import FAQ             from './components/FAQ';
import Contact         from './components/Contact';
import Footer          from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Rooms />
        <Gallery />
        <WhyUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      {/* Bottom padding on mobile for sticky bar */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
