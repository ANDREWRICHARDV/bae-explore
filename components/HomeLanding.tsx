
import React from 'react';
import { Send, Search } from 'lucide-react';
import { APP_LOGO } from '../constants';

interface HomeLandingProps {
  onNotify: (msg: string) => void;
}

export const HomeLanding: React.FC<HomeLandingProps> = ({ onNotify }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full px-4 animate-in fade-in zoom-in duration-500">
      
      {/* 1. Logo Section */}
      <div className="mb-8 relative group">
        <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700"></div>
        <img 
          src={APP_LOGO} 
          alt="BAE Logo" 
          className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10 drop-shadow-2xl"
        />
      </div>

      {/* 2. Headline */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 text-center tracking-tight">
        Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">BAE</span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-300 mb-10 text-center font-medium">
        Shop in <span className="font-bold text-white">Hindi</span>. Discover <span className="font-bold text-white">Shop.</span>
      </p>

      {/* 3. Search Bar - Increased Visibility */}
      <div className="w-full max-w-2xl relative group z-20">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
        <div className="relative flex items-center bg-[#151B2B] border border-slate-600 rounded-2xl shadow-xl shadow-black/50 p-2 transition-colors duration-300">
          <div className="pl-4 text-slate-400">
             <Search className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            placeholder="Find me running shoes under Rs.1000" 
            className="w-full bg-transparent border-none outline-none py-3 px-4 text-white placeholder:text-slate-400 font-medium"
          />
          <button 
            onClick={() => onNotify("Searching...")}
            className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 border border-white/10"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 4. Quick Prompts - Distinct Boxes */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <QuickPrompt label="Find me phones between 10000 and 20000" onClick={() => onNotify("Searching Phones...")} />
        <QuickPrompt label="I have 50k budget, show me options" onClick={() => onNotify("Searching Options...")} />
        <QuickPrompt label="Show me iphones under 100k" onClick={() => onNotify("Searching iPhones...")} />
      </div>

    </div>
  );
};

const QuickPrompt = ({ label, onClick }: { label: string, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="px-5 py-2.5 bg-[#151B2B] text-slate-200 border border-slate-700 rounded-full text-sm font-semibold hover:border-blue-500 hover:text-blue-400 transition-all shadow-sm hover:shadow-md hover:bg-[#1e293b]"
  >
    {label}
  </button>
);