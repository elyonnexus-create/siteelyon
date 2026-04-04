import React from 'react';
import Lenis from '@studio-freight/lenis';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';

import { ScrollRevealSection } from './sections/ScrollRevealSection';
import { WhyElyonSection } from './sections/WhyElyonSection';
import { ServicesSection } from './sections/ServicesSection';
import { AIFirstSection } from './sections/AIFirstSection';
import { MethodologySection } from './sections/MethodologySection';
import { NumbersSection } from './sections/NumbersSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { ValuesSection } from './sections/ValuesSection';
import { ForWhoSection } from './sections/ForWhoSection';
import { FAQSection } from './sections/FAQSection';
import { ClosingSection } from './sections/ClosingSection';
import { Footer } from './components/Footer';
import { SmoothCursor } from './components/ui/smooth-cursor';
import ApresentacaoPage from './pages/ApresentacaoPage';
import './App.css';

function MainSite() {
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      // Lenis cleanup if needed
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        {/* Bloco 1: Conscientização */}
        <ScrollRevealSection />
        <WhyElyonSection />

        {/* Bloco 2: Desejo */}
        <ServicesSection />
        <AIFirstSection />
        <MethodologySection />

        {/* Bloco 3: Confiança */}
        <NumbersSection />
        <TestimonialsSection />
        <ValuesSection />

        {/* Bloco 4: Ação */}
        <ForWhoSection />
        <FAQSection />
        <ClosingSection />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <SmoothCursor />
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/apresentacao" element={<ApresentacaoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
