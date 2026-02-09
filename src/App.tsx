import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Beliefs from './components/Beliefs';
import Testimonials from './components/Testimonials';
import Ecosystem from './components/Ecosystem';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
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
