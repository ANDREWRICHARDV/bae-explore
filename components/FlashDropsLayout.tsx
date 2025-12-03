
import React from 'react';
import { Flame, Clock, Bell, Lock, Zap, ArrowRight, ChevronRight } from 'lucide-react';
import { DropItem } from '../types';
import { LIVE_FLASH_SALES, UPCOMING_DROPS } from '../constants';

interface FlashDropsLayoutProps {
  onNotify: (msg: string) => void;
  onNavigateFlash: () => void;
}

export const FlashDropsLayout: React.FC<FlashDropsLayoutProps> = ({ onNotify, onNavigateFlash }) => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      
      {/* 1. HERO SPOTLIGHT - Cinematic */}
      <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-3xl overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2000&auto=format&fit=crop" 
          alt="Hero Drop" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-md animate-pulse">
            <Flame className="w-3 h-3 fill-white" />
            Hottest Drop
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
            Nike Air Jordan 1 <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">"Lost & Found"</span>
          </h1>
          <p className="text-slate-300 max-w-lg text-sm md:text-base">
            The classic returns with a vintage aesthetic. Limited stock available for the most anticipated release of the year.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <button 
              onClick={() => onNotify("Reminder set for Chicago Drop")}
              className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-200 transition-colors flex items-center gap-2"
            >
              <Bell className="w-4 h-4" />
              Notify Me
            </button>
            <span className="text-white font-mono text-sm tracking-widest flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400" />
              DROPS IN 04:23:12
            </span>
          </div>
        </div>
      </div>

      {/* 2. FLASH SALES - "Live Now" Horizontal Scroll */}
      <section>
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
            <h2 className="text-xl font-bold text-white">Live Flash Sales</h2>
            <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse" />
          </div>
          <button onClick={onNavigateFlash} className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
            See All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          {LIVE_FLASH_SALES.map((item) => (
            <div 
              key={item.id} 
              className="min-w-[280px] md:min-w-[320px] bg-[#151B2B] rounded-2xl p-3 border border-slate-800 hover:border-blue-500/50 transition-all group relative cursor-pointer"
              onClick={onNavigateFlash}
            >
              {/* Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0B1120] mb-3">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
                  LIVE
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md text-white text-xs font-mono px-2 py-1 rounded-md">
                   {item.dropTime.replace("Ends in ", "")} left
                </div>
              </div>

              {/* Info */}
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.brand}</span>
                    <h3 className="font-bold text-white text-base truncate pr-2">{item.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-400">${item.price}</div>
                    <div className="text-xs text-slate-500 line-through decoration-slate-500">${item.originalPrice}</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-3">
                   <div className="flex justify-between text-[10px] font-bold mb-1">
                      <span className="text-orange-500 flex items-center gap-1"><Flame className="w-3 h-3 fill-orange-500" /> Selling Fast</span>
                      <span className="text-slate-400">{item.stockLeft}% Claimed</span>
                   </div>
                   <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full" style={{ width: `${item.stockLeft}%` }}></div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. UPCOMING DROPS - "Coming Soon" */}
      <section>
        <div className="flex items-center gap-2 mb-4 px-1">
          <div className="w-1.5 h-6 bg-purple-500 rounded-full"></div>
          <h2 className="text-xl font-bold text-white">Upcoming Drops</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {UPCOMING_DROPS.map((drop) => (
             <div key={drop.id} className="flex gap-4 p-4 bg-[#151B2B] rounded-2xl border border-slate-800 hover:bg-[#1e293b] transition-colors group">
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-black shrink-0 relative">
                   <img src={drop.imageUrl} alt={drop.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Lock className="w-6 h-6 text-slate-400" />
                   </div>
                </div>
                <div className="flex flex-col justify-between flex-1 py-1">
                   <div>
                      <div className="flex justify-between items-start">
                         <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">{drop.brand}</span>
                         <span className="text-sm font-bold text-white">${drop.price}</span>
                      </div>
                      <h3 className="font-bold text-slate-200">{drop.title}</h3>
                      <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                         <Clock className="w-3 h-3" /> {drop.dropTime}
                      </div>
                   </div>
                   <button 
                    onClick={() => onNotify(`Notify set for ${drop.title}`)}
                    className="mt-2 w-full py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-bold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-2"
                   >
                     <Bell className="w-3 h-3" /> Remind Me
                   </button>
                </div>
             </div>
          ))}
          
          {/* View More Card */}
          <div className="flex flex-col items-center justify-center gap-3 p-4 bg-[#151B2B]/50 rounded-2xl border border-dashed border-slate-700 hover:border-slate-500 cursor-pointer text-slate-500 hover:text-white transition-all">
             <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
             </div>
             <span className="text-sm font-bold">View Full Calendar</span>
          </div>
        </div>
      </section>

    </div>
  );
};
