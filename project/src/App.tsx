import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SuccessCases from './components/SuccessCases';
import Testimonials from './components/Testimonials';
import Differentials from './components/Differentials';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <Hero />
      
      <AnimatedSection>
        <About />
      </AnimatedSection>
      
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      
      <AnimatedSection>
        <SuccessCases />
      </AnimatedSection>
      
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      
      <AnimatedSection>
        <Differentials />
      </AnimatedSection>
      
      <Footer />
    </div>
  );
}

export default App;