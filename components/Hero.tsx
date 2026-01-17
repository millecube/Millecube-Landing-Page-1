import React, { useState, useRef } from 'react';
import { Button } from './Button';
import { CheckCircle2, ShieldCheck, Zap, BarChart3, ArrowRight } from 'lucide-react';
import { ChartSection } from './ChartSection';
import { PlatformTicker } from './PlatformTicker';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section 
      id="hero" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative pt-32 pb-20 lg:pt-48 overflow-hidden bg-dark-950 text-white min-h-screen flex flex-col items-center"
    >
      
      {/* --- Ambient Background Effects --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep blue gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 opacity-90"></div>
        
        {/* Torch Light Gradient Overlay - Updated to WHITE */}
        <div 
            className="absolute inset-0 z-10 transition-opacity duration-300 ease-out mix-blend-overlay"
            style={{
            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.08), transparent 40%)`,
            opacity: isHovering ? 1 : 0,
            }}
        />

        {/* Animated Neon Blobs */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob"></div>
        <div className="absolute top-[10%] right-[20%] w-[600px] h-[600px] bg-accent-dark rounded-full mix-blend-screen filter blur-[120px] opacity-15 animate-blob animation-delay-2000"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center text-center">
        
        {/* Status Pill - Centered */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-panel border border-white/10 text-white text-sm font-semibold backdrop-blur-md hover:border-accent/50 transition-colors cursor-default animate-float">
            <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="tracking-wide uppercase text-xs text-gray-300">Technical-First Growth Partner</span>
        </div>

        {/* Headlines - Centered */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading leading-[1.1] tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 animate-fade-in-up">
            Stop Burning Ad Budget.<br/>
            Start Scaling with <span className="text-accent text-glow">Precision.</span>
        </h1>

        <p className="text-xl text-gray-400 leading-relaxed font-light max-w-3xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We combine <span className="text-white font-medium">technical account diagnostics</span> with data-driven performance marketing to maximize sales on Facebook, TikTok, and Shopee.
        </p>

        {/* Buttons - Centered & New Bubble Design */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16 w-full justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="bubble" className="px-10 py-4 text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
                Start Your Audit <ArrowRight size={20} className="ml-1" />
            </Button>
            
            <Button 
                variant="outline" 
                className="px-10 py-4 text-lg border-gray-700 text-gray-300 hover:text-white hover:border-white hover:bg-white/5 rounded-full"
                onClick={() => document.getElementById('audience')?.scrollIntoView({behavior:'smooth'})}
            >
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={20} />
                    Is This You?
                </div>
            </Button>
        </div>

        {/* Feature Highlights Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20 text-sm text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
             <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-accent" />
                <span>Forensic Account Health Checks</span>
             </div>
             <div className="flex items-center gap-2">
                <BarChart3 size={18} className="text-accent" />
                <span>E-Commerce Centric Strategy</span>
             </div>
             <div className="flex items-center gap-2">
                <Zap size={18} className="text-accent" />
                <span>Flexible Creative Credits</span>
             </div>
        </div>

        {/* --- Visual Dashboard Section (Now Centered Below) --- */}
        <div className="relative w-full max-w-4xl mx-auto perspective-1000 group animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
             
             {/* Main Dashboard Card with Tilt Effect */}
             <div className="relative bg-dark-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl ring-1 ring-white/5 transform transition-transform duration-700 hover:rotate-x-2">
                
                {/* Glossy Header Reflection */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-70"></div>
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
                
                {/* Header of Fake Dashboard */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="h-6 w-32 bg-white/5 rounded-md"></div>
                    </div>
                    <div className="h-6 w-24 bg-accent/20 rounded-md text-xs flex items-center justify-center text-accent font-mono">Live Data</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Sidebar Placeholder */}
                    <div className="hidden md:block col-span-1 space-y-3">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="h-10 w-full bg-white/5 rounded-lg"></div>
                        ))}
                    </div>

                    {/* Main Chart Area */}
                    <div className="col-span-1 md:col-span-2">
                        <ChartSection />
                        
                        {/* Data Cards below Chart */}
                        <div className="grid grid-cols-3 gap-3 mt-4">
                             <div className="bg-dark-950/50 p-3 rounded-lg border border-white/5">
                                <p className="text-[10px] text-gray-500 uppercase">ROAS</p>
                                <p className="text-accent font-bold">4.8x</p>
                             </div>
                             <div className="bg-dark-950/50 p-3 rounded-lg border border-white/5">
                                <p className="text-[10px] text-gray-500 uppercase">CPA</p>
                                <p className="text-white font-bold">RM 12</p>
                             </div>
                             <div className="bg-dark-950/50 p-3 rounded-lg border border-white/5">
                                <p className="text-[10px] text-gray-500 uppercase">Rev</p>
                                <p className="text-white font-bold">+210%</p>
                             </div>
                        </div>
                    </div>
                </div>
             </div>

             {/* Floating Elements (Decorations) */}
             <div className="absolute -right-8 top-1/4 glass-panel p-3 rounded-xl shadow-xl animate-float hidden lg:block border-l-2 border-accent">
                <CheckCircle2 className="text-accent mb-1" size={20} />
                <div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
                <div className="h-2 w-12 bg-white/10 rounded"></div>
             </div>

             {/* Background Glow behind Dashboard */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/20 filter blur-[100px] -z-10 rounded-full"></div>
        </div>

      </div>

      {/* --- Logo Ticker Section --- */}
      <PlatformTicker />
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};