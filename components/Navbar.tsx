import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dynamic classes based on scroll position
  const navBg = isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-6';
  const textColor = isScrolled ? 'text-gray-600 hover:text-primary' : 'text-gray-200 hover:text-white';
  const logoFilter = isScrolled ? '' : 'brightness-0 invert';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="https://millecube.com/wp-content/uploads/2025/09/cropped-image-removebg-preview-2.png" 
              alt="Millecube Digital" 
              className={`h-10 w-auto md:h-12 transition-all duration-300 ${logoFilter}`}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className={`${textColor} font-medium transition-colors text-sm uppercase tracking-wide`}>Why Us</button>
            <button onClick={() => scrollToSection('audience')} className={`${textColor} font-medium transition-colors text-sm uppercase tracking-wide`}>Who We Help</button>
            <button onClick={() => scrollToSection('services')} className={`${textColor} font-medium transition-colors text-sm uppercase tracking-wide`}>Services</button>
            <button onClick={() => scrollToSection('pricing')} className={`${textColor} font-medium transition-colors text-sm uppercase tracking-wide`}>Pricing</button>
            <Button onClick={() => scrollToSection('contact')} variant="bubble" className="px-6 py-2">
              Free Audit
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${textColor} focus:outline-none p-2`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-900 border-t border-gray-800 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-4 text-gray-300 hover:bg-dark-800 hover:text-white font-medium rounded-md">Why Us</button>
            <button onClick={() => scrollToSection('audience')} className="block w-full text-left px-3 py-4 text-gray-300 hover:bg-dark-800 hover:text-white font-medium rounded-md">Who We Help</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-4 text-gray-300 hover:bg-dark-800 hover:text-white font-medium rounded-md">Services</button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-4 text-gray-300 hover:bg-dark-800 hover:text-white font-medium rounded-md">Pricing</button>
            <div className="pt-4">
              <Button onClick={() => scrollToSection('contact')} variant="bubble" fullWidth>
                Get Free Audit
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};