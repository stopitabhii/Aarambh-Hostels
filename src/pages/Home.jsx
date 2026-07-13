import Hero           from '../components/Hero';
import About          from '../components/About';
import Facilities     from '../components/Facilities';
import ServiceSection from '../components/ServiceSection';
import Branches       from '../components/Branches';
import WhyUs          from '../components/WhyUs';
import FAQ            from '../components/FAQ';
import Contact        from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Facilities />
      <ServiceSection />
      <Branches />
      <WhyUs />
      <FAQ />
      <Contact />
    </main>
  );
}