import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Check, Star } from 'lucide-react';
import { Button } from './Button';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'The Foundation',
    price: 'RM 1,500 - 2,000',
    description: 'For Micro-SMEs entering the digital space.',
    cta: 'Start Foundation',
    features: [
      { text: 'FB/IG Page Setup & Optimization', included: true },
      { text: 'Basic Account Health Check', included: true },
      { text: 'Management of 1-2 Ad Campaigns', included: true },
      { text: 'Monthly Performance Report', included: true },
      { text: 'Creative Credits', included: false },
      { text: 'TikTok Shop Setup', included: false },
    ]
  },
  {
    name: 'The Growth Engine',
    price: 'RM 3,000',
    description: 'For growing SMEs ready to scale revenue.',
    highlight: true,
    cta: 'Ignite Growth',
    features: [
      { text: 'Up to 5 Active Campaigns', included: true },
      { text: '5 Creative Credits (Video/Graphics)', included: true },
      { text: 'Advanced A/B Testing', included: true },
      { text: 'Weekly Reporting & Consultation', included: true },
      { text: 'Audience Segmentation', included: true },
      { text: 'Advanced Pixel Audits', included: true },
    ]
  },
  {
    name: 'E-Commerce Dominator',
    price: 'RM 5,000 - 7,500',
    description: 'Full-funnel integration (Meta + TikTok + Shopee).',
    cta: 'Dominate Market',
    features: [
      { text: 'Everything in Growth Engine', included: true },
      { text: 'TikTok Shop & Ads Management', included: true },
      { text: 'Shopee/Lazada Optimization', included: true },
      { text: 'KOL/Influencer Management', included: true },
      { text: '10+ Creative Credits / Month', included: true },
      { text: 'Priority Support', included: true },
    ]
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Transparent Pricing" 
          subtitle="No hidden fees. No lock-in contracts. Just results."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-2xl transition-all ${
                tier.highlight 
                  ? 'bg-white shadow-2xl border-2 border-primary scale-105 z-10' 
                  : 'bg-white shadow-lg border border-gray-100'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-md">
                  <Star size={14} fill="currentColor" /> MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                <p className="text-sm text-gray-500 mt-2 min-h-[40px]">{tier.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-extrabold text-primary">{tier.price}</span>
                <span className="text-gray-500 font-medium"> /month</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className={`flex items-start gap-3 text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                    <Check size={18} className={`flex-shrink-0 ${feature.included ? 'text-accent' : 'text-gray-300'}`} />
                    {feature.text}
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.highlight ? 'primary' : 'outline'} 
                fullWidth
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
              >
                {tier.cta}
              </Button>
              
              {tier.highlight && (
                 <p className="text-xs text-center text-primary mt-3 font-medium">
                    Bonus: 10% discount for 3-month commitment
                 </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};