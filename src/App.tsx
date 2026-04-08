import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import Trust from './components/Trust';
import About from './components/About';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Training from './components/Training';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FormPage from './pages/FormPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'form'>('home');

  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      if (path === '/form') {
        setCurrentPage('form');
      } else {
        setCurrentPage('home');
      }
    };

    handleNavigation();

    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  useEffect(() => {
    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      window.dispatchEvent(new Event('popstate'));
    };

    return () => {
      window.history.pushState = originalPushState;
    };
  }, []);

  if (currentPage === 'form') {
    return <FormPage />;
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <About />
        <Services />
        <Expertise />
        <Training />
         {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
