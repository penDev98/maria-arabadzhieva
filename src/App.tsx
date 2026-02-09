import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Beliefs from './components/Beliefs';
import Testimonials from './components/Testimonials';
import Ecosystem from './components/Ecosystem';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Marquee from './components/Marquee';

function App() {
  return (
    <div className="min-h-screen">
      <Marquee repeat={15}>
        REAL SOCIAL BROKER /// НЕ ПРОСТО БРОКЕР /// DIGITAL ROCKSTAR ///
      </Marquee>
      <Navigation />
      <Hero />
      <Beliefs />
      <Testimonials />
      <Services />
      <Ecosystem />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
