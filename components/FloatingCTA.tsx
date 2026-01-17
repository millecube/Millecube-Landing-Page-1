import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling past hero section (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 left-0 right-0 z-40 px-4 md:left-auto md:right-8 md:w-auto transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-md mx-auto md:mx-0">
        <Button 
          variant="bubble" 
          fullWidth
          onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
          className="shadow-[0_4px_15px_rgba(24,99,220,0.5)] border border-accent/20 backdrop-blur-sm flex items-center justify-center gap-2 py-4 md:py-3 md:px-8 text-lg md:text-base font-bold"
        >
          Start Your Audit <ArrowRight size={20} className="hidden md:block" />
        </Button>
      </div>
    </div>
  );
};