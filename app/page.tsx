import Navbar from './components/Navbar';
import FloatingButtons from './components/FloatingButtons';
import Hero from './sections/Hero';
import About from './sections/About';
import Stats from './sections/Stats';
import Services from './sections/Services';
// import WhyChooseUs from './sections/WhyChooseUs';
import Courses from './sections/Courses';
import Vehicles from './sections/Vehicles';
import TrainingProcess from './sections/TrainingProcess';
import Maintenance from './sections/Maintenance';
import Gallery from './sections/Gallery';
// import Blogs from './sections/Blogs';/
import Testimonials from './sections/Testimonials';
import Documents from './sections/Documents';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      {/* <WhyChooseUs /> */}
      <TrainingProcess />
      <Maintenance />
      <Gallery />
      {/* <Blogs /> */}
      <Testimonials />
      <Documents />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
//test
