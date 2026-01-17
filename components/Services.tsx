import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Button } from './Button';
import { Search, Shield, MousePointer2, Truck, Share2, Layers, BarChart2, Video, TrendingUp, Play, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Paid Advertising Management",
      tabLabel: "Paid Advertising",
      description: "Forensic diagnostics and risk-free scaling on major social platforms.",
      points: [
        {
          head: "Forensic Account Diagnostics",
          body: "We diagnose and fix pixel errors, payment verifications, and policy violations before spending a cent.",
          icon: Search
        },
        {
          head: "Risk-Free Flexibility",
          body: "No lock-in contracts. We re-earn your trust every 30 days through performance.",
          icon: Shield
        },
        {
          head: "Conversion-First Setup",
          body: "Technical QA on page and funnel to ensure links and tracking are perfect.",
          icon: MousePointer2
        }
      ],
      visual: (
        <div className="relative w-full h-[400px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-6 flex flex-col">
            {/* Mock Ad Manager UI */}
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><TrendingUp size={16}/></div>
                    <div>
                        <div className="h-2 w-24 bg-gray-200 rounded mb-1"></div>
                        <div className="h-2 w-16 bg-gray-100 rounded"></div>
                    </div>
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Active</div>
            </div>
            <div className="flex-1 space-y-4">
                 <div className="flex gap-4">
                     <div className="w-1/2 p-4 rounded-xl bg-gray-50 border border-gray-100">
                         <div className="text-gray-400 text-xs uppercase mb-1">Spend</div>
                         <div className="text-2xl font-bold text-gray-900">RM 12,450</div>
                     </div>
                     <div className="w-1/2 p-4 rounded-xl bg-gray-50 border border-gray-100">
                         <div className="text-gray-400 text-xs uppercase mb-1">ROAS</div>
                         <div className="text-2xl font-bold text-green-600">4.2x</div>
                     </div>
                 </div>
                 {/* Mock Chart Area */}
                 <div className="h-32 bg-blue-50/50 rounded-xl w-full relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                      {/* CSS Line graph simulation */}
                      <svg className="absolute bottom-0 w-full h-full text-blue-500" preserveAspectRatio="none">
                           <path d="M0,100 C20,90 50,50 100,60 C150,70 200,30 250,40 C300,50 350,20 400,10 V128 H0 Z" fill="currentColor" opacity="0.1" />
                           <path d="M0,100 C20,90 50,50 100,60 C150,70 200,30 250,40 C300,50 350,20 400,10" fill="none" stroke="currentColor" strokeWidth="3" />
                      </svg>
                 </div>
                 {/* Audit Passed Tag */}
                 <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg border border-green-100">
                    <CheckCircle2 size={16} className="text-green-600" />
                    <span className="text-sm text-green-800 font-medium">Account Health Check: Passed</span>
                 </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -right-6 top-20 bg-white p-3 rounded-lg shadow-lg border border-gray-100 animate-float">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-xs font-bold text-gray-700">Pixel Fixed</span>
                </div>
            </div>
        </div>
      )
    },
    {
      title: "Marketplace Optimization",
      tabLabel: "Marketplace Ops",
      description: "Supply chain-centric growth strategies for Shopee & Lazada.",
      points: [
        {
          head: "Supply Chain DNA",
          body: "We align campaigns with inventory logic and unit economics, not just vanity metrics.",
          icon: Truck
        },
        {
          head: "Cross-Platform Integration",
          body: "Integrating Marketplace management with external traffic (CPAS) to drive sales.",
          icon: Share2
        }
      ],
      visual: (
        <div className="relative w-full h-[400px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-6 flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-sm">
                {/* Product Card 1 */}
                <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100 flex flex-col gap-2 transform translate-y-4">
                    <div className="h-20 bg-orange-100 rounded-lg w-full flex items-center justify-center text-orange-500"><Truck size={24}/></div>
                    <div className="h-2 w-16 bg-gray-200 rounded"></div>
                    <div className="flex justify-between items-center">
                        <div className="h-2 w-8 bg-gray-200 rounded"></div>
                        <div className="text-xs font-bold text-orange-500">+24% Sales</div>
                    </div>
                </div>
                {/* Product Card 2 */}
                <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100 flex flex-col gap-2 transform -translate-y-4">
                    <div className="h-20 bg-blue-100 rounded-lg w-full flex items-center justify-center text-blue-500"><Share2 size={24}/></div>
                    <div className="h-2 w-16 bg-gray-200 rounded"></div>
                    <div className="flex justify-between items-center">
                        <div className="h-2 w-8 bg-gray-200 rounded"></div>
                        <div className="text-xs font-bold text-blue-500">CPAS Active</div>
                    </div>
                </div>
            </div>
            
            {/* Central Connector */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center z-20">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white">
                    <Share2 size={20} />
                </div>
            </div>
        </div>
      )
    },
    {
      title: "Creative Content Production",
      tabLabel: "Creative Studio",
      description: "Data-driven visuals included in your retainer.",
      points: [
        {
          head: "Integrated 'Creative Credits'",
          body: "5 Credits included monthly. Mix and match video editing and graphic design.",
          icon: Layers
        },
        {
          head: "Performance-Led Design",
          body: "A/B testing driven creatives designed to lower CPL and improve CTR.",
          icon: BarChart2
        }
      ],
      visual: (
        <div className="relative w-full h-[400px] bg-gray-900 rounded-2xl shadow-xl border border-gray-800 overflow-hidden flex flex-col">
            {/* Video Player UI */}
            <div className="flex-1 relative">
                <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Video Content" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                        <Play size={24} className="text-white fill-current ml-1" />
                    </div>
                </div>
                {/* Floating Tags */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="bg-black/60 backdrop-blur text-white px-3 py-1 rounded-full text-xs">
                        Credit Used: 1/5
                    </div>
                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white -ml-4"></div>
                    </div>
                </div>
            </div>
            {/* Timeline UI */}
            <div className="h-16 bg-gray-800 border-t border-gray-700 p-3 flex items-center gap-3">
                 <div className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center text-gray-400"><Video size={14}/></div>
                 <div className="flex-1 space-y-1">
                     <div className="h-1.5 bg-gray-600 rounded-full w-full overflow-hidden">
                         <div className="h-full bg-accent w-1/3"></div>
                     </div>
                     <div className="flex justify-between text-[10px] text-gray-500">
                         <span>0:00</span>
                         <span>0:15</span>
                     </div>
                 </div>
            </div>
        </div>
      )
    }
  ];

  const currentService = services[activeTab];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <SectionHeader 
                title="Our Core Expertise" 
                subtitle="Technical precision across the entire growth funnel."
                centered
            />

            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-16 border-b border-gray-200">
                {services.map((service, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`px-8 py-4 text-lg font-medium transition-all relative ${
                            activeTab === idx 
                            ? 'text-primary' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        {service.tabLabel}
                        {activeTab === idx && (
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full transition-all duration-300"></div>
                        )}
                    </button>
                ))}
            </div>

            {/* Content Area - 2 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[500px]">
                
                {/* Left: Text Content */}
                <div key={`text-${activeTab}`} className="animate-fade-in-up space-y-8">
                     <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary text-sm font-bold tracking-wide uppercase mb-2">
                        {currentService.tabLabel}
                     </div>
                     
                     <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        {currentService.title}
                     </h3>
                     
                     <p className="text-lg text-gray-600 leading-relaxed">
                        {currentService.description}
                     </p>

                     <div className="space-y-6 pt-4">
                        {currentService.points.map((point, idx) => (
                            <div key={idx} className="flex gap-4 group">
                                <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <point.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-bold text-lg mb-1">{point.head}</h4>
                                    <p className="text-gray-500 leading-relaxed">{point.body}</p>
                                </div>
                            </div>
                        ))}
                     </div>

                     <div className="pt-6">
                        <Button 
                            variant="bubble" 
                            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                            className="px-8"
                        >
                            Explore {currentService.tabLabel}
                        </Button>
                     </div>
                </div>

                {/* Right: Visual Content */}
                <div key={`visual-${activeTab}`} className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <div className="relative">
                        {/* Background Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-50 to-green-50 rounded-full blur-3xl -z-10 opacity-60"></div>
                        
                        {currentService.visual}
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};