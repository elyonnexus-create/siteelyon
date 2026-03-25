import React from 'react';
import Lenis from '@studio-freight/lenis';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ZoomParallaxDemo } from './sections/ZoomParallaxDemo';
import { WhyElyonSection } from './sections/WhyElyonSection';
import { ScrollRevealSection } from './sections/ScrollRevealSection';
import { AIFirstSection } from './sections/AIFirstSection';
import { ValuesSection } from './sections/ValuesSection';
import { ServicesSection } from './sections/ServicesSection';
import { MethodologySection } from './sections/MethodologySection';
import { NumbersSection } from './sections/NumbersSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FAQSection } from './sections/FAQSection';
import { ClosingSection } from './sections/ClosingSection';
import { Footer } from './components/Footer';
import { SmoothCursor } from './components/ui/smooth-cursor';
import './App.css';

function App() {
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      // Lenis doesn't have a built-in destroy in some versions, 
      // but if it did, we'd call it here.
    };
  }, []);

  return (
    <div className="app-wrapper">
      <SmoothCursor />
      <Navbar />
      <main>
        <HeroSection />
        <ZoomParallaxDemo />
        <WhyElyonSection />
        <ScrollRevealSection />
        <AIFirstSection />
        <ValuesSection />
        <ServicesSection />
        <MethodologySection />
        <NumbersSection />
        <TestimonialsSection />
        <FAQSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
