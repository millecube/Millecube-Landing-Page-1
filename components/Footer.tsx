import React from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
             <img 
              src="https://millecube.com/wp-content/uploads/2025/09/cropped-image-removebg-preview-2.png" 
              alt="Millecube" 
              className="h-10 mb-4 brightness-0 invert" 
            />
            <p className="max-w-xs text-sm">
              The "Technical-First" Growth Partner for Malaysian E-Commerce. Stop burning budget, start scaling with precision.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({behavior:'smooth'})} className="hover:text-primary transition-colors">Home</button></li>
              <li><button onClick={() => document.getElementById('features')?.scrollIntoView({behavior:'smooth'})} className="hover:text-primary transition-colors">Why Us</button></li>
              <li><button onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior:'smooth'})} className="hover:text-primary transition-colors">Pricing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:hello@millecube.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
            <p className="mt-4 text-xs">
              © {new Date().getFullYear()} Millecube Digital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};