import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Gallery from './components/sections/Gallery';
import Booking from './components/sections/Booking';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Gallery />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
