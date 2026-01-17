import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Activity } from 'lucide-react';

const data = [
  { month: 'M1', spend: 2000, revenue: 3000, label: 'Broken Funnel' },
  { month: 'M2', spend: 2200, revenue: 2800, label: 'Declining ROAS' },
  { month: 'M3', spend: 2500, revenue: 3100, label: 'Millecube Fix' },
  { month: 'M4', spend: 2500, revenue: 6500, label: 'Technical Opt.' },
  { month: 'M5', spend: 2500, revenue: 9800, label: 'Scaling' },
  { month: 'M6', spend: 3000, revenue: 14000, label: 'Creative Scale' },
];

export const ChartSection: React.FC = () => {
  return (
    <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
      {/* Decorative gradient behind chart */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-dark-900/50 pointer-events-none"></div>
      
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div>
           <div className="flex items-center gap-2 mb-1">
             <Activity className="text-accent" size={16} />
             <span className="text-accent text-xs font-bold tracking-widest uppercase">Live Simulation</span>
           </div>
           <h3 className="text-lg font-bold text-white">Scale Velocity</h3>
           <p className="text-xs text-gray-400">Post-Diagnostic Performance</p>
        </div>
        <div className="bg-dark-800/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-700">
           <span className="text-accent font-mono text-sm font-bold flex items-center gap-1">
             <TrendingUp size={14} /> +410% ROAS
           </span>
        </div>
      </div>

      <div className="h-[220px] w-full relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#32CD32" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#32CD32" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1863DC" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#1863DC" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis 
                dataKey="month" 
                tick={{fontSize: 10, fill: '#64748b'}} 
                axisLine={false} 
                tickLine={false} 
            />
            <YAxis 
                tick={{fontSize: 10, fill: '#64748b'}} 
                axisLine={false} 
                tickLine={false} 
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#0f172a', 
                borderRadius: '8px', 
                border: '1px solid #334155', 
                color: '#fff',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
              }}
              itemStyle={{ fontSize: '12px' }}
              labelStyle={{ color: '#94a3b8', fontSize: '12px', marginBottom: '4px' }}
            />
            <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#32CD32" 
                fillOpacity={1} 
                fill="url(#colorRevenue)" 
                name="Revenue" 
                strokeWidth={3} 
                activeDot={{ r: 6, fill: '#fff', stroke: '#32CD32', strokeWidth: 2 }}
            />
            <Area 
                type="monotone" 
                dataKey="spend" 
                stroke="#1863DC" 
                fillOpacity={1} 
                fill="url(#colorSpend)" 
                name="Ad Spend" 
                strokeWidth={2} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};