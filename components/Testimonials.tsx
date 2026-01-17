import React from 'react';
import { SectionHeader } from './SectionHeader';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from './Button';

const testimonials = [
  {
    name: 'Xu',
    role: 'Founder',
    company: 'Histrong Design',
    industry: 'Interior Design',
    quote: "Millecube's forensic audit found tracking errors we didn't know existed. Lead quality skyrocketed.",
    metrics: ["3.5x Lead Quality", "-20% Cost/Lead"],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=400&h=400',
    logoIcon: 'HD'
  },
  {
    name: 'Dave',
    role: 'Owner',
    company: 'Viking Fitness',
    industry: 'Gym & Fitness',
    quote: "We were burning cash on ads. Their team optimized our funnel and the creative credits mean we always have fresh content.",
    metrics: ["+40% Signups", "2.8x ROAS"],
    image: 'https://images.unsplash.com/photo-1583341610625-f72f5d4719c8?fit=crop&w=400&h=400',
    logoIcon: 'VF'
  },
  {
    name: 'KY',
    role: 'Director',
    company: 'Wood Wood Design',
    industry: 'Interior Design',
    quote: "Visuals matter. Millecube understands aesthetic and brand alignment. The no-contract model gave us confidence.",
    metrics: ["+150% Inquiries", "4x Engagement"],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=400&h=400',
    logoIcon: 'WW'
  },
  {
    name: 'KC',
    role: 'Co-Founder',
    company: 'Vetmomo Petcare',
    industry: 'Pet Supplement',
    quote: "Selling supplements requires trust. Millecube's strategy on Shopee and TikTok helped us scale sales volume significantly.",
    metrics: ["+210% Revenue", "6.5x ROAS"],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=400&h=400',
    logoIcon: 'VP'
  },
  {
    name: 'John',
    role: 'CTO',
    company: 'Bytestraits',
    industry: 'Software',
    quote: "Finally, an agency that understands technical setups. The data transparency allows us to make actual business decisions.",
    metrics: ["100% Accuracy", "-30% Ad Waste"],
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?fit=crop&w=400&h=400',
    logoIcon: 'BS'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-blue-50/40 relative overflow-hidden">
       {/* Background Subtle Liquid Effect */}
       <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title="Trusted by Growth-Focused Brands" 
          subtitle="Real results from Malaysian businesses scaling with Millecube."
          centered
        />

        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            // Bubble Card Variant
            <div 
              key={index} 
              className="group relative p-6 rounded-[2rem] bg-gradient-to-br from-white via-blue-50/50 to-white border border-white/60 shadow-[inset_0_2px_10px_rgba(255,255,255,0.8),inset_0_-2px_10px_rgba(24,99,220,0.05),0_10px_25px_rgba(148,163,184,0.1)] hover:shadow-[inset_0_2px_10px_rgba(255,255,255,0.9),inset_0_-2px_10px_rgba(24,99,220,0.1),0_20px_40px_rgba(24,99,220,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full min-h-[260px]"
            >
                {/* Glossy Highlight (Top) */}
                <div className="absolute top-4 left-6 right-6 h-1/3 bg-gradient-to-b from-white to-transparent opacity-60 rounded-full blur-xl pointer-events-none"></div>

                {/* Header */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div>
                            <h4 className="font-bold text-gray-900 leading-tight text-sm">{item.name}</h4>
                            <p className="text-[10px] text-primary font-bold uppercase tracking-wide">{item.company}</p>
                        </div>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-white rounded-full flex items-center justify-center text-primary text-[10px] font-bold shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_2px_5px_rgba(0,0,0,0.05)]">
                        {item.logoIcon}
                    </div>
                </div>

                {/* Quote */}
                <div className="flex-grow mb-4 relative z-10">
                     <p className="text-gray-600 text-sm leading-relaxed font-medium">
                        "{item.quote}"
                     </p>
                </div>

                {/* Metrics Pills */}
                <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                    {item.metrics.map((metric, i) => (
                        <div key={i} className="px-3 py-1 rounded-full bg-white/80 border border-blue-100 shadow-sm text-[10px] font-bold text-primary flex items-center gap-1">
                            <TrendingUp size={10} /> {metric}
                        </div>
                    ))}
                </div>
            </div>
          ))}
          
          {/* Static CTA Bubble Card (6th Item) */}
          <div className="group relative p-6 rounded-[2rem] bg-gradient-to-br from-primary via-blue-600 to-blue-700 border border-blue-400/30 shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),inset_0_-2px_10px_rgba(0,0,0,0.3),0_15px_30px_rgba(24,99,220,0.4)] flex flex-col items-center justify-center text-center text-white cursor-pointer overflow-hidden min-h-[260px]" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
              
              {/* Internal Gloss */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
              
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform duration-300">
                 <ArrowRight className="text-white" size={24} />
              </div>

              <h3 className="text-xl font-bold mb-2 relative z-10 text-white drop-shadow-md">Your Brand Next</h3>
              <p className="text-blue-100 text-xs mb-6 relative z-10 max-w-[200px] font-medium opacity-90">Join these brands in scaling revenue with precision.</p>
              
              <Button variant="bubble" className="px-6 py-2 text-xs bg-white text-primary border-none shadow-xl hover:bg-blue-50">
                Get Case Studies
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
};