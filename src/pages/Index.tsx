import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const Index = () => {
  const activeSection = useScrollSpy(['hero', 'about', 'portfolio', 'skills', 'contact']);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
