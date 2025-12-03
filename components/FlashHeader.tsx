
import React from 'react';
import { Bell } from 'lucide-react';

export const FlashHeader: React.FC = () => {
  return (
    <header className="bg-white dark:bg-[#0B1120] px-4 md:px-8 py-4 flex items-center justify-between border-b border-gray-100 dark:border-[#2A3241] shadow-sm sticky top-0 z-50 transition-colors">
      <div className="flex items-center gap-2">
        <img 
            src="https://bae-ai-landing-page.vercel.app/assets/bae-logo-BFKDPxMm.png" 
            alt="BAE AI" 
            className="h-10 w-auto object-contain" 
        />
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-slate-400">
        <a href="#" className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Categories</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">My Deals</a>
      </nav>

      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-[#151B2B] rounded-full transition-colors">
          <Bell className="w-5 h-5 text-gray-600 dark:text-slate-400" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-[#0B1120]"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-[#151B2B] overflow-hidden border border-gray-200 dark:border-[#2A3241]">
            <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
            />
        </div>
      </div>
    </header>
  );
};
