import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Store, ShoppingBag, TrendingDown, AlertOctagon, Lock, Video, MousePointer2 } from 'lucide-react';

export const Audience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sme' | 'marketplace'>('sme');

  return (
    <section id="audience" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title="Is This You?" 
          subtitle="We solve specific problems for two types of ambitious businesses."
          light
        />

        <div className="flex justify-center mb-12">
            <div className="bg-gray-800 p-1 rounded-lg inline-flex z-20 relative">
                <button 
                    onClick={() => setActiveTab('sme')}
                    className={`px-6 py-3 rounded-md text-sm font-bold transition-all ${activeTab === 'sme' ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                >
                    The Stalled E-Commerce SME
                </button>
                <button 
                    onClick={() => setActiveTab('marketplace')}
                    className={`px-6 py-3 rounded-md text-sm font-bold transition-all ${activeTab === 'marketplace' ? 'bg-accent text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                >
                    The Marketplace Merchant
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Dynamic Content Area with Background Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 min-h-[500px] flex flex-col justify-center group">
                 
                 {/* Background Layer */}
                 <div className="absolute inset-0 z-0">
                    {/* SME Image: Stressed/Focused owner in fashion context */}
                    <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeTab === 'sme' ? 'opacity-100' : 'opacity-0'}`}>
                        <img 
                            src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80" 
                            alt="Stressed E-Commerce Owner" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    {/* Marketplace Image: Warehouse/Logistics context */}
                    <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeTab === 'marketplace' ? 'opacity-100' : 'opacity-0'}`}>
                        <img 
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" 
                            alt="Marketplace Warehouse" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
                 </div>

                 {/* Content Layer */}
                 <div className="relative z-10 p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-lg text-white border border-gray-600">
                            {activeTab === 'sme' ? <Store size={32} /> : <ShoppingBag size={32} />}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white shadow-black drop-shadow-md">
                                {activeTab === 'sme' ? 'Fashion, Interiors, Supplements' : 'Shopee & Lazada Top Sellers'}
                            </h3>
                            <p className="text-gray-300 text-sm font-medium">
                                {activeTab === 'sme' ? 'Running ads but seeing declining ROAS.' : 'Reliant on algorithms, seeking independence.'}
                            </p>
                        </div>
                     </div>

                     <h4 className="text-lg font-bold text-accent mb-4 border-b border-gray-700 pb-2 inline-block">Top Pain Points</h4>
                     
                     <ul className="space-y-4">
                        {activeTab === 'sme' ? (
                            <>
                                <li className="flex items-start gap-3">
                                    <TrendingDown className="text-red-400 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-200 font-medium">CPC up 12% in Malaysia, but sales are flatlining.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <AlertOctagon className="text-red-400 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-200 font-medium">Lack technical skills to fix "backend" issues like pixel tracking.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Lock className="text-red-400 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-200 font-medium">Frustrated by 6-12 month agency lock-in contracts.</span>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="flex items-start gap-3">
                                    <MousePointer2 className="text-red-400 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-200 font-medium">Need to diversify traffic beyond marketplace search.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Video className="text-red-400 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-200 font-medium">Struggling to produce "short-form video" for TikTok.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <AlertOctagon className="text-red-400 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-200 font-medium">Find Facebook/TikTok Ads Manager too complex.</span>
                                </li>
                            </>
                        )}
                     </ul>
                 </div>
            </div>

            {/* Solution Side */}
            <div className="space-y-6 flex flex-col justify-center">
                <h3 className="text-3xl font-bold">How Millecube Fixes This</h3>
                <p className="text-gray-300 text-lg">
                    We bridge the gap between technical execution and creative performance. Whether you are stalling or just starting to branch out, we build the infrastructure first.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary transition-colors">
                        <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                             <AlertOctagon className="text-primary" size={20}/>
                        </div>
                        <h5 className="font-bold text-white mb-2">Technical Repair</h5>
                        <p className="text-sm text-gray-400">We fix the pixel, API, and catalog issues causing you to lose data.</p>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-accent transition-colors">
                        <div className="bg-accent/20 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                             <Video className="text-accent" size={20}/>
                        </div>
                        <h5 className="font-bold text-white mb-2">Creative Fuel</h5>
                        <p className="text-sm text-gray-400">We produce the visuals and videos needed to convert cold traffic.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};