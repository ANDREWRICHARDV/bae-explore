
import React from 'react';
import { Flame, Clock, Bell, Lock, Zap, ChevronRight, ArrowRight, Play, Plus } from 'lucide-react';
import { LIVE_FLASH_SALES, UPCOMING_DROPS } from '../constants';
import { DropItem } from '../types';

interface DealFinderProps {
    onNotify: (msg: string, type?: 'success' | 'info') => void;
    onNavigateFlash: (item?: DropItem) => void;
}

// Define Hero Item Data for navigation
const HERO_ITEM: DropItem = {
    id: 'hero-air-jordan',
    title: 'Nike Air Jordan 1 "Lost & Found"',
    brand: 'Nike',
    price: 180,
    originalPrice: 250,
    dropTime: 'Ends in 02:45:12',
    imageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2000&auto=format&fit=crop',
    isLive: true,
    stockLeft: 85
};

export const DealFinderLayout: React.FC<DealFinderProps> = ({ onNotify, onNavigateFlash }) => {
  return (
    <div className="flex flex-col gap-5 w-full pb-10">
      
      {/* ================= HERO SPOTLIGHT ================= */}
      <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-3xl overflow-hidden group">
        <img 
          src={HERO_ITEM.imageUrl} 
          alt="Hero Drop" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-md animate-pulse">
            <Flame className="w-3 h-3 fill-white" />
            Live Event
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none">
            {HERO_ITEM.title} <br/> 
          </h1>
          <p className="text-slate-300 max-w-lg text-sm md:text-base line-clamp-2 md:line-clamp-none">
            The classic returns with a vintage aesthetic. Join the live stream now for the official drop reveal.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <button 
              onClick={() => onNavigateFlash(HERO_ITEM)}
              className="bg-red-600 text-white px-6 py-2.5 rounded-full font-bold text-xs md:text-sm hover:bg-red-700 transition-colors flex items-center gap-2 shadow-lg shadow-red-900/30"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Watch Live
            </button>
            <button 
              onClick={() => onNotify("Following Nike")}
              className="bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full font-bold text-xs md:text-sm hover:bg-white/20 transition-colors flex items-center gap-2 border border-white/10"
            >
              <Plus className="w-3.5 h-3.5" />
              Follow Nike
            </button>
          </div>
        </div>
      </div>

      {/* ================= FLASH SALES RAIL ================= */}
      <section>
        <div className="flex items-center justify-between mb-2 px-1">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-blue-500 rounded-full"></div>
            <h2 className="text-lg font-bold text-white">Live Flash Sales</h2>
            <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
          </div>
          <button onClick={() => onNavigateFlash()} className="text-[10px] font-bold text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
            See All <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 md:mx-0 md:px-0">
          {LIVE_FLASH_SALES.map((item) => (
            <div 
              key={item.id} 
              className="min-w-[260px] md:min-w-[300px] bg-[#151B2B] rounded-2xl p-2.5 border border-slate-800 hover:border-blue-500/50 transition-all group relative cursor-pointer"
              onClick={() => onNavigateFlash(item)}
            >
              {/* Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0B1120] mb-2">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md flex items-center gap-1">
                  LIVE
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono px-1.5 py-0.5 rounded-md">
                   {item.dropTime.replace("Ends in ", "")} left
                </div>
              </div>

              {/* Info */}
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.brand}</span>
                    <h3 className="font-bold text-white text-sm truncate pr-2">{item.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-bold text-blue-400">${item.price}</div>
                    <div className="text-[10px] text-slate-500 line-through decoration-slate-500">${item.originalPrice}</div>
                  </div>
                </div>

                {/* Action Row */}
                <div className="mt-2 flex items-center justify-between">
                   <div className="text-[10px] font-bold text-orange-500 flex items-center gap-1">
                      <Flame className="w-3 h-3 fill-orange-500" /> Selling Fast
                   </div>
                   <button 
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold rounded-lg transition-colors shadow-lg shadow-blue-900/20"
                      onClick={(e) => {
                          e.stopPropagation();
                          onNavigateFlash(item);
                      }}
                   >
                      Get Offer
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= UPCOMING DROPS LIST ================= */}
      <section>
        <div className="flex items-center gap-2 mb-2 px-1">
          <div className="w-1 h-5 bg-purple-500 rounded-full"></div>
          <h2 className="text-lg font-bold text-white">Upcoming Drops</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {UPCOMING_DROPS.map((drop) => (
             <div key={drop.id} className="flex gap-3 p-3 bg-[#151B2B] rounded-2xl border border-slate-800 hover:bg-[#1e293b] transition-colors group">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-black shrink-0 relative">
                   <img src={drop.imageUrl} alt={drop.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-slate-400" />
                   </div>
                </div>
                <div className="flex flex-col justify-between flex-1 py-0.5">
                   <div>
                      <div className="flex justify-between items-start">
                         <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">{drop.brand}</span>
                         <span className="text-xs font-bold text-white">${drop.price}</span>
                      </div>
                      <h3 className="font-bold text-slate-200 text-sm leading-tight">{drop.title}</h3>
                      <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                         <Clock className="w-3 h-3" /> {drop.dropTime}
                      </div>
                   </div>
                   <button 
                    onClick={() => onNotify(`Notify set for ${drop.title}`)}
                    className="mt-2 w-full py-1.5 rounded-lg bg-slate-800 text-slate-300 text-[10px] font-bold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-2"
                   >
                     <Bell className="w-3 h-3" /> Remind Me
                   </button>
                </div>
             </div>
          ))}
          
          {/* View More Card */}
          <div className="flex flex-col items-center justify-center gap-3 p-3 bg-[#151B2B]/50 rounded-2xl border border-dashed border-slate-700 hover:border-slate-500 cursor-pointer text-slate-500 hover:text-white transition-all h-[120px]">
             <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
             </div>
             <span className="text-xs font-bold">View Full Calendar</span>
          </div>
        </div>
      </section>

    </div>
  );
};
