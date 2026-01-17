import React, { useState, useRef } from 'react';
import { Button } from './Button';
import { CheckCircle2, ShieldCheck, Zap, BarChart3, PlayCircle } from 'lucide-react';
import { ChartSection } from './ChartSection';
import { PlatformTicker } from './PlatformTicker';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (textContainerRef.current) {
      const rect = textContainerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-0 lg:pt-48 overflow-hidden bg-dark-950 text-white min-h-screen flex flex-col justify-center">
      
      {/* --- Ambient Background Effects --- */}
      <div className="absolute inset-0 z-0">
        {/* Deep blue gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 opacity-90"></div>
        
        {/* Animated Neon Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob"></div>
        <div className="absolute bottom-[0%] right-[-5%] w-[600px] h-[600px] bg-accent-dark rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[30%] right-[30%] w-[300px] h-[300px] bg-accent rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* --- Left Column: Copywriting with Torch Effect --- */}
          <div 
            ref={textContainerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative space-y-8 max-w-2xl group rounded-3xl p-4 -m-4 transition-colors duration-500"
          >
            {/* Torch Light Gradient Overlay */}
            <div 
              className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ease-out rounded-3xl"
              style={{
                background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(50, 205, 50, 0.12), transparent 40%)`,
                opacity: isHovering ? 1 : 0,
              }}
            />

            {/* Status Pill */}
            <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 text-white text-sm font-semibold backdrop-blur-md hover:border-accent/50 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="tracking-wide uppercase text-xs text-gray-300">Technical-First Growth Partner</span>
            </div>
            
            {/* Main Headlines */}
            <div className="relative z-10 space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-[1.1] tracking-tight">
                Stop Burning
                </h1>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-[1.1] tracking-tight">
                Start Scaling with <span className="text-accent text-glow">Precision.</span>
                </h1>
            </div>

            <p className="relative z-10 text-lg text-gray-400 leading-relaxed font-light">
              We combine <span className="text-white font-medium">technical account diagnostics</span> with data-driven performance marketing to maximize sales on Facebook, TikTok, and Shopee—with <span className="text-accent border-b border-accent/30 pb-0.5">zero lock-in contracts</span>.
            </p>

            {/* Feature Bullets */}
            <div className="relative z-10 space-y-4 pt-2">
              <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="mt-1 p-2 bg-accent/10 rounded-lg text-accent">
                    <ShieldCheck size={20} />
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm">Forensic Account Health Checks</h4>
                    <p className="text-gray-400 text-sm mt-1">We fix pixel errors & violations before spending.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="mt-1 p-2 bg-accent/10 rounded-lg text-accent">
                    <BarChart3 size={20} />
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm">E-Commerce Centric Strategy</h4>
                    <p className="text-gray-400 text-sm mt-1">Aligned with inventory, margins & real growth.</p>
                </div>
              </div>

               <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="mt-1 p-2 bg-accent/10 rounded-lg text-accent">
                    <Zap size={20} />
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm">Flexible "Creative Credit" System</h4>
                    <p className="text-gray-400 text-sm mt-1">Free professional design & video editing monthly.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="glow" className="text-lg px-8 py-4 w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
                Start Your Audit
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-4 w-full sm:w-auto border-gray-600 text-gray-300 hover:text-white hover:border-white hover:bg-white/5"
              >
                <div className="flex items-center gap-2">
                    <PlayCircle size={20} />
                    View Case Studies
                </div>
              </Button>
            </div>
            
            <p className="relative z-10 text-xs text-gray-500 pt-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span> 
                Limited spots available for this month.
            </p>
          </div>

          {/* --- Right Column: Visuals/Dashboard --- */}
          <div className="relative mt-12 lg:mt-0 perspective-1000">
             {/* Floating Elements Container */}
             <div className="relative z-10 animate-float">
                
                {/* Main Holographic Card */}
                <div className="relative bg-dark-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl ring-1 ring-white/10">
                    {/* Top Bar Decoration */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
                    
                    <ChartSection />

                    {/* Bottom Data Row */}
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        <div className="bg-dark-900/60 p-3 rounded-lg border border-white/5 text-center">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Spend</p>
                            <p className="text-white font-bold font-mono">RM 12.5k</p>
                        </div>
                        <div className="bg-dark-900/60 p-3 rounded-lg border border-white/5 text-center">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Conv.</p>
                            <p className="text-accent font-bold font-mono">482</p>
                        </div>
                        <div className="bg-dark-900/60 p-3 rounded-lg border border-white/5 text-center">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">CPA</p>
                            <p className="text-white font-bold font-mono">RM 25.9</p>
                        </div>
                    </div>
                </div>

                {/* Floating Notification Cards */}
                <div className="absolute -right-8 top-10 glass-panel p-4 rounded-xl shadow-xl max-w-[180px] animate-float animation-delay-1000 hidden md:block border-l-4 border-l-red-500 bg-dark-900/90">
                    <div className="flex items-start gap-3">
                        <div className="bg-red-500/10 p-1.5 rounded text-red-500">
                             <ShieldCheck size={16} />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase font-bold">Alert Detected</p>
                            <p className="text-xs font-medium text-gray-200 mt-1">Pixel Tracking Error: Purchase Event</p>
                        </div>
                    </div>
                </div>

                 <div className="absolute -left-12 bottom-20 glass-panel p-4 rounded-xl shadow-xl max-w-[200px] animate-float animation-delay-2000 hidden md:block border-l-4 border-l-accent bg-dark-900/90">
                    <div className="flex items-start gap-3">
                        <div className="bg-accent/10 p-1.5 rounded text-accent">
                             <CheckCircle2 size={16} />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase font-bold">Millecube Fix</p>
                            <p className="text-xs font-medium text-gray-200 mt-1">API Integration Verified. Tracking Restored.</p>
                        </div>
                    </div>
                </div>
             </div>
             
             {/* Background glow behind the card */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 filter blur-[80px] -z-10 rounded-full"></div>
          </div>

        </div>

        {/* --- Logo Ticker Section --- */}
        <PlatformTicker />
      </div>
      
      {/* Bottom Gradient Fade to White/Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};