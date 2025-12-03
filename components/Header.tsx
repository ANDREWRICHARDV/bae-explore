
import React from 'react';
import { ChevronLeft, CheckCircle, Star, Clock, Bell } from 'lucide-react';
import { RestaurantInfo } from '../types';

interface HeaderProps {
  info: RestaurantInfo;
}

export const Header: React.FC<HeaderProps> = ({ info }) => {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between py-4 mb-6 gap-4">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold text-white">{info.name}</h1>
            <CheckCircle className="w-5 h-5 text-blue-400 fill-white" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-blue-100 pl-12 md:pl-0">
        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="font-semibold text-white">{info.rating}</span>
          <span className="text-blue-200">({info.reviewCount.toLocaleString()} reviews)</span>
        </div>
        
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-blue-200" />
          <span>Open until {info.closingTime}</span>
        </div>

        <button className="p-2 hover:bg-white/10 rounded-full transition-colors ml-auto md:ml-0">
          <Bell className="w-5 h-5 text-white" />
        </button>
      </div>
    </header>
  );
};
