import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Audience } from './components/Audience';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Audience />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;