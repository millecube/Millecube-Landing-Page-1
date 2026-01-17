import React from 'react';

const logos = [
  { 
    name: 'Shopee', 
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg',
    type: 'text'
  },
  { 
    name: 'Lazada', 
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Lazada_%282019%29.svg',
    type: 'text'
  },
  { 
    name: 'TikTok', 
    url: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg',
    type: 'text'
  },
  { 
    name: 'Facebook', 
    // Uses the Square "f" icon as requested
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg',
    type: 'solid'
  },
  { 
    name: 'Instagram', 
    // Uses the Standard Gradient Camera icon
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
    type: 'solid'
  },
];

export const PlatformTicker: React.FC = () => {
  return (
    <div className="w-full mt-20 md:mt-24 border-t border-white/5 pt-8">
      <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-8 font-bold">Trusted Compatibility</p>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {logos.map((logo, index) => (
            <div key={index} className="mx-8 md:mx-12 w-24 md:w-32 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300">
              <img 
                src={logo.url} 
                alt={logo.name} 
                className={`h-8 md:h-10 w-auto object-contain transition-all duration-300 ${
                  logo.type === 'solid' 
                    ? 'grayscale opacity-70 brightness-125 hover:grayscale-0 hover:opacity-100 hover:brightness-100' // Make solid logos (FB/Insta) gray but visible, then color on hover
                    : 'grayscale brightness-0 invert opacity-70 hover:opacity-100'   // Text/Shape logos remain white silhouette
                }`}
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center hidden">
           {/* Duplicate for seamless loop */}
        </div>
        
        {/* Render a second set of logos for the infinite loop effect */}
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {logos.map((logo, index) => (
            <div key={`dup-${index}`} className="mx-8 md:mx-12 w-24 md:w-32 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300">
              <img 
                src={logo.url} 
                alt={logo.name} 
                className={`h-8 md:h-10 w-auto object-contain transition-all duration-300 ${
                  logo.type === 'solid' 
                    ? 'grayscale opacity-70 brightness-125 hover:grayscale-0 hover:opacity-100 hover:brightness-100'
                    : 'grayscale brightness-0 invert opacity-70 hover:opacity-100'
                }`}
              />
            </div>
          ))}
        </div>
        
         <div className="animate-marquee whitespace-nowrap flex items-center">
          {logos.map((logo, index) => (
            <div key={`dup-2-${index}`} className="mx-8 md:mx-12 w-24 md:w-32 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300">
              <img 
                src={logo.url} 
                alt={logo.name} 
                className={`h-8 md:h-10 w-auto object-contain transition-all duration-300 ${
                  logo.type === 'solid' 
                    ? 'grayscale opacity-70 brightness-125 hover:grayscale-0 hover:opacity-100 hover:brightness-100'
                    : 'grayscale brightness-0 invert opacity-70 hover:opacity-100'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradient masks for edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-950 to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-950 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};