import React from 'react';
import { SectionHeader } from './SectionHeader';
import { FileCheck, Activity, Palette, PackageSearch, Layers, CalendarOff } from 'lucide-react';

const features = [
  {
    icon: CalendarOff,
    title: 'No-Contract Guarantee',
    description: 'We re-earn your business every 30 days. Unlike agencies that lock you in, we operate on results, not paper handcuffs.'
  },
  {
    icon: Activity,
    title: 'Forensic Health Diagnostics',
    description: 'We perform deep-dive violation checks, payment audits, and pixel fixes to "de-risk" your account before spending a cent.'
  },
  {
    icon: Palette,
    title: 'Integrated Creative Credits',
    description: 'Ad fatigue is real. Our packages include monthly creative credits for video editing and graphics so campaigns never go stale.',
    highlight: true
  },
  {
    icon: PackageSearch,
    title: 'Supply Chain DNA',
    description: 'Co-founded by supply chain experts. We optimize for inventory flow and unit economics, not just vanity metrics like clicks.'
  },
  {
    icon: Layers,
    title: 'Multi-Platform Ecosystem',
    description: 'From Facebook conversion campaigns to Shopee product listing optimization. We don\'t silo your growth.'
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    description: 'Weekly strategy consultations and clear reports. Know exactly where every Ringgit of your budget goes.'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Why Millecube?" 
          subtitle="Top 5 Reasons E-Commerce Brands Switch to Us"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border ${feature.highlight ? 'bg-blue-50 border-blue-100 ring-1 ring-blue-200' : 'bg-white border-gray-100 hover:border-gray-200'}`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${feature.highlight ? 'bg-primary text-white' : 'bg-green-50 text-accent-dark'}`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};