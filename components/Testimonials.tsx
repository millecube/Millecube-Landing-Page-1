import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Quote, TrendingUp, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Xu',
    role: 'Founder',
    company: 'Histrong Design',
    industry: 'Interior Design',
    quote: "Millecube's forensic audit found tracking errors we didn't know existed. Since fixing our pixel events, our lead quality for interior design projects has skyrocketed.",
    metrics: ["3.5x Lead Quality", "-20% Cost Per Lead"],
    // Asian Male Professional
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=400&h=400',
    logoIcon: 'HD'
  },
  {
    name: 'Dave',
    role: 'Owner',
    company: 'Viking Fitness',
    industry: 'Gym & Fitness',
    quote: "We were burning cash on ads that didn't convert. Their team optimized our funnel and the creative credits mean we always have fresh gym content.",
    metrics: ["+40% Signups", "2.8x ROAS"],
    // Asian Male Fitness/Casual
    image: 'https://images.unsplash.com/photo-1583341610625-f72f5d4719c8?fit=crop&w=400&h=400',
    logoIcon: 'VF'
  },
  {
    name: 'KY',
    role: 'Director',
    company: 'Wood Wood Design',
    industry: 'Interior Design',
    quote: "As a design firm, visuals matter. Millecube understands aesthetic and brand alignment. The no-contract model gave us confidence to start.",
    metrics: ["+150% Inquiries", "4x Engagement"],
    // Asian Male Creative
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=400&h=400',
    logoIcon: 'WW'
  },
  {
    name: 'KC',
    role: 'Co-Founder',
    company: 'Vetmomo Petcare',
    industry: 'Pet Supplement',
    quote: "Selling supplements requires trust. Millecube's strategy on Shopee and TikTok helped us build that trust and scale our sales volume significantly.",
    metrics: ["+210% Revenue", "6.5x ROAS"],
    // Asian Female Professional
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=400&h=400',
    logoIcon: 'VP'
  },
  {
    name: 'John',
    role: 'CTO',
    company: 'Bytestraits',
    industry: 'Software',
    quote: "Finally, an agency that understands technical setups. The data transparency and weekly reports help us make actual business decisions.",
    metrics: ["100% Accuracy", "-30% Ad Waste"],
    // Asian Male Tech
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?fit=crop&w=400&h=400',
    logoIcon: 'BS'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-blue-50/50 relative">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#1863DC 1px, transparent 1px), linear-gradient(90deg, #1863DC 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: 'center center', opacity: 0.03 }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title="Trusted by Growth-Focused Brands" 
          subtitle="Real results from Malaysian businesses scaling with Millecube."
        />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            // Flip Card Container
            <div key={index} className="group h-[380px] perspective-[1000px] cursor-pointer">
              
              {/* Inner Card Wrapper (handles rotation) */}
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* --- FRONT SIDE --- */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center justify-center text-center">
                  
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md relative z-10"
                    />
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-[10px] font-bold border-2 border-white z-20">
                      {item.logoIcon}
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{item.role}, {item.company}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{item.industry}</p>

                  {/* Hover Hint */}
                  <div className="mt-8 flex items-center gap-2 text-sm text-gray-400 group-hover:text-accent transition-colors">
                    <span>View Impact</span>
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* --- BACK SIDE --- */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-primary to-blue-900 rounded-2xl shadow-xl p-8 flex flex-col text-white">
                  
                  {/* Quote */}
                  <div className="relative mb-6 flex-grow">
                     <Quote className="text-accent/30 mb-2 transform scale-x-[-1]" size={32} />
                     <p className="text-sm leading-relaxed font-medium text-blue-50 italic">
                        "{item.quote}"
                     </p>
                  </div>

                  {/* Data Metrics */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <p className="text-xs uppercase tracking-widest text-accent font-bold mb-1">Growth Data</p>
                    <div className="flex justify-between items-center gap-2">
                       {item.metrics.map((metric, i) => (
                         <div key={i} className="bg-white/10 rounded-lg p-2 text-center flex-1 backdrop-blur-sm">
                           <span className="block text-sm md:text-xs lg:text-sm font-bold text-white">{metric}</span>
                         </div>
                       ))}
                    </div>
                  </div>

                  {/* Bottom Decoration */}
                  <div className="absolute bottom-0 right-0 p-4 opacity-10">
                    <TrendingUp size={80} />
                  </div>
                </div>

              </div>
            </div>
          ))}
          
          {/* CTA Card (Static, No Flip) */}
          <div className="h-[380px] bg-white rounded-2xl p-8 shadow-lg flex flex-col justify-center items-center text-center relative overflow-hidden group cursor-pointer border-2 border-dashed border-primary/30 hover:border-accent transition-colors" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors"></div>
              
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <ArrowRight className="text-primary group-hover:text-accent" size={32} />
              </div>

              <h3 className="text-2xl font-bold mb-2 relative z-10 text-gray-900">Your Brand Here</h3>
              <p className="text-gray-500 text-sm mb-6 relative z-10 max-w-[200px]">Join these brands in scaling revenue with precision.</p>
              
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-accent hover:shadow-[0_0_20px_rgba(50,205,50,0.4)] transition-all shadow-md">
                Get Case Studies
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};