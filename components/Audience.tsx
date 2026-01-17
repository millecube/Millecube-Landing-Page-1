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
            <div className="bg-gray-800 p-1 rounded-lg inline-flex">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Dynamic Content Area */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gray-700 rounded-lg text-white">
                        {activeTab === 'sme' ? <Store size={32} /> : <ShoppingBag size={32} />}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">
                            {activeTab === 'sme' ? 'Fashion, Interiors, Supplements' : 'Shopee & Lazada Top Sellers'}
                        </h3>
                        <p className="text-gray-400 text-sm">
                            {activeTab === 'sme' ? 'Running ads but seeing declining ROAS.' : 'Reliant on algorithms, seeking independence.'}
                        </p>
                    </div>
                 </div>

                 <h4 className="text-lg font-bold text-accent mb-4 border-b border-gray-700 pb-2">Top Pain Points</h4>
                 
                 <ul className="space-y-4">
                    {activeTab === 'sme' ? (
                        <>
                            <li className="flex items-start gap-3">
                                <TrendingDown className="text-red-400 flex-shrink-0 mt-1" size={20} />
                                <span className="text-gray-300">CPC up 12% in Malaysia, but sales are flatlining.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <AlertOctagon className="text-red-400 flex-shrink-0 mt-1" size={20} />
                                <span className="text-gray-300">Lack technical skills to fix "backend" issues like pixel tracking.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Lock className="text-red-400 flex-shrink-0 mt-1" size={20} />
                                <span className="text-gray-300">Frustrated by 6-12 month agency lock-in contracts.</span>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="flex items-start gap-3">
                                <MousePointer2 className="text-red-400 flex-shrink-0 mt-1" size={20} />
                                <span className="text-gray-300">Need to diversify traffic beyond marketplace search.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Video className="text-red-400 flex-shrink-0 mt-1" size={20} />
                                <span className="text-gray-300">Struggling to produce "short-form video" for TikTok.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <AlertOctagon className="text-red-400 flex-shrink-0 mt-1" size={20} />
                                <span className="text-gray-300">Find Facebook/TikTok Ads Manager too complex.</span>
                            </li>
                        </>
                    )}
                 </ul>
            </div>

            {/* Solution Side */}
            <div className="space-y-6">
                <h3 className="text-3xl font-bold">How Millecube Fixes This</h3>
                <p className="text-gray-300 text-lg">
                    We bridge the gap between technical execution and creative performance. Whether you are stalling or just starting to branch out, we build the infrastructure first.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h5 className="font-bold text-white mb-2">Technical Repair</h5>
                        <p className="text-sm text-gray-400">We fix the pixel, API, and catalog issues causing you to lose data.</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
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