import React from 'react';
import { SectionHeader } from './SectionHeader';

const features = [
  {
    title: 'No-Contract Performance Guarantee',
    description: 'We re-earn your business every 30 days. Unlike established agencies that lock you in with 6-12 month retainers, we operate on results. If we don’t perform, you don’t stay. It’s that simple.',
    // 3D Abstract Shape (Chain/Link metaphor)
    image: 'https://images.unsplash.com/photo-1555580104-5f403e232b7c?q=80&w=800&auto=format&fit=crop', 
    color: 'text-blue-600',
    blobColor: 'bg-blue-300'
  },
  {
    title: 'Forensic Account Health Diagnostics',
    description: 'Most agencies skip straight to spending. We perform deep-dive violation checks, payment method verifications, and pixel audits to "de-risk" your ad account first.',
    // 3D Glass/Magnifier metaphor
    image: 'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?q=80&w=800&auto=format&fit=crop', 
    color: 'text-accent-dark',
    blobColor: 'bg-accent'
  },
  {
    title: 'Integrated Creative Credits',
    description: 'In 2026, ad fatigue is real. Our package includes 5 monthly creative credits (mix-and-match video editing and graphic design) so your campaigns never go stale.',
    // 3D Fluid Art/Creative metaphor
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop', 
    color: 'text-emerald-600',
    blobColor: 'bg-emerald-300'
  },
  {
    title: 'Supply Chain DNA',
    description: 'Co-founded by supply chain specialists. We optimize campaigns with an understanding of inventory flow, margins, and unit economics, not just vanity metrics like clicks.',
    // 3D Cubes/Structure metaphor
    image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800&auto=format&fit=crop', 
    color: 'text-indigo-600',
    blobColor: 'bg-indigo-300'
  },
  {
    title: 'Multi-Platform Ecosystem',
    description: 'We don\'t silo your growth. We manage the full ecosystem—from Facebook conversion campaigns to Shopee/Lazada product listing optimization and TikTok Shop setup.',
    // 3D Connected Nodes metaphor
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop', 
    color: 'text-cyan-600',
    blobColor: 'bg-cyan-300'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-24 overflow-hidden bg-gradient-to-b from-green-50 via-white to-white">
      
      {/* --- Ambient Background Elements --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[5%] right-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[80px]"></div>
         <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title="Why Millecube?" 
          subtitle="Top 5 Reasons E-Commerce Brands Switch to Us"
        />

        <div className="space-y-24 mt-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              
              {/* Image/Icon Side */}
              <div className="flex-1 w-full flex justify-center relative">
                 {/* Decorative Blob */}
                 <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 ${feature.blobColor} rounded-full filter blur-[60px] opacity-40 animate-pulse`}></div>
                 
                 {/* 3D Image Simulation */}
                 <div className="relative z-10 w-56 h-56 md:w-72 md:h-72 transition-transform duration-500 hover:scale-105 hover:-rotate-2">
                    {/* Using mix-blend-multiply to simulate transparency on white/light backgrounds for these assets */}
                    <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-full object-contain mix-blend-multiply drop-shadow-xl" 
                     />
                 </div>
              </div>

              {/* Text/Reason Side */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                 <h3 className={`text-3xl md:text-4xl font-bold ${feature.color} tracking-tight`}>
                    {feature.title}
                 </h3>
                 
                 <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    {feature.description}
                 </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};