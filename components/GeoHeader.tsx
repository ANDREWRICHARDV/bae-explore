
import React from 'react';
import { Menu, Trophy } from 'lucide-react';
import { APP_LOGO } from '../constants';

interface GeoHeaderProps {
  points: number;
}

export const GeoHeader: React.FC<GeoHeaderProps> = ({ points }) => {
  return (
    <header className="bg-white dark:bg-[#0B1120] px-4 md:px-8 py-4 flex items-center justify-between border-b border-gray-100 dark:border-[#2A3241] sticky top-0 z-50 transition-colors">
      <div className="flex items-center gap-2">
        <img 
            src={APP_LOGO}
            alt="BAE AI" 
            className="h-10 w-auto object-contain" 
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-[#fbbf24] font-bold">
          <Trophy className="w-5 h-5 fill-current" />
          <span className="text-slate-700 dark:text-slate-200">{points.toLocaleString()} pts</span>
        </div>
        
        <button className="p-1 hover:bg-gray-100 dark:hover:bg-[#151B2B] rounded-md transition-colors">
          <Menu className="w-6 h-6 text-slate-700 dark:text-slate-400" />
        </button>

        <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-[#151B2B] overflow-hidden border border-gray-200 dark:border-[#2A3241]">
                <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" 
                    alt="User" 
                    className="w-full h-full object-cover"
                />
            </div>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 hidden sm:block">User</span>
        </div>
      </div>
    </header>
  );
};