import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhatIsKangoo from './components/WhatIsKangoo';
import Programs from './components/Programs';
import Schedule from './components/Schedule';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="relative min-h-screen bg-primary-white font-sans">
      <Header />
      <Hero />
      <About />
      <WhatIsKangoo />
      <Programs />
      <Schedule />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingElements />
      <BackToTop />
    </div>
  );
}

export default App;