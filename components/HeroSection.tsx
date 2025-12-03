import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-full group">
      <img 
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
        alt="Hero" 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
      />
      
      {/* Clean Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

      {/* Minimal Content */}
      <div className="absolute bottom-0 left-0 p-8 w-full max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
            Featured Spot
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
          Borcelle Restaurant
        </h2>
        <p className="text-slate-200 font-medium text-sm md:text-base leading-relaxed opacity-90">
           Award-winning burgers and handcrafted shakes in the heart of Downtown.
        </p>
      </div>
    </div>
  );
};