import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Gallery from '@/components/Gallery/Gallery';
import Reviews from '@/components/Reviews/Reviews';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}