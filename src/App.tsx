import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyContact from './components/StickyContact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <ValueProposition />
      <Menu />
      <Gallery />
      <Events />
      <Testimonials />
      <Location />
      <FAQ />
      <Footer />
      <StickyContact />
    </div>
  );
}

export default App;
