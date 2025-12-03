import React, { useState } from 'react';
import { MapPin, Star, Heart, Navigation, ShoppingBag, Bell, Clock } from 'lucide-react';
import { RestaurantInfo } from '../types';

interface InfoCardsProps {
  info: RestaurantInfo;
  onNotify: (msg: string, type?: 'success' | 'info') => void;
}

export const InfoCards: React.FC<InfoCardsProps> = ({ info, onNotify }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleFollow = () => {
      setIsFollowing(!isFollowing);
      onNotify(isFollowing ? "Unfollowed" : "Following!");
  };

  const handleSave = () => {
      setIsSaved(!isSaved);
      onNotify(isSaved ? "Removed from saved" : "Saved to favorites");
  };

  return (
    <div className="bg-white dark:bg-[#151B2B] rounded-3xl p-6 h-full flex flex-col justify-between shadow-sm border border-slate-100 dark:border-[#2A3241] transition-colors duration-300">
      
      {/* Header Info - Clean & Dense */}
      <div>
        <div className="flex justify-between items-start mb-2">
           <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">{info.name}</h1>
           <div className="flex items-center gap-1 bg-slate-100 dark:bg-[#0B1120] px-2.5 py-1 rounded-lg">
                 <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                 <span className="text-sm font-bold text-slate-700 dark:text-white">{info.rating}</span>
           </div>
        </div>

        <div className="flex flex-col gap-2 mb-4">
             <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors" onClick={() => onNotify("Opening Maps...", "info")}>
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="truncate">{info.address}</span>
             </div>
             <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                <Clock className="w-4 h-4" />
                <span>Open until {info.closingTime}</span>
             </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Experience premium dining with fresh ingredients and bold flavors. 
            Rated #1 for Burgers in Downtown. A perfect spot for casual meets.
        </p>
      </div>

      {/* Action Grid - Compact & Icon Driven - BLUE Accents */}
      <div className="mt-6">
         <div className="grid grid-cols-4 gap-3">
            <ActionButton 
                active={isFollowing} 
                icon={<Heart className={`w-5 h-5 ${isFollowing ? 'fill-current' : ''}`} />} 
                label={isFollowing ? "Following" : "Follow"} 
                onClick={handleFollow}
            />
            <ActionButton 
                icon={<Navigation className="w-5 h-5" />} 
                label="Locate" 
                onClick={() => onNotify("Directions sent", "success")}
            />
            <ActionButton 
                icon={<ShoppingBag className="w-5 h-5" />} 
                label="Order" 
                onClick={() => onNotify("Opening Menu...", "info")}
            />
            <ActionButton 
                active={isSaved}
                icon={<Bell className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />} 
                label={isSaved ? "Saved" : "Save"} 
                onClick={handleSave}
            />
         </div>
      </div>

    </div>
  );
};

const ActionButton = ({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) => (
    <button 
        onClick={onClick}
        className={`
        group flex flex-col items-center justify-center gap-2 py-3.5 rounded-2xl transition-all duration-300 active:scale-95 border
        ${active 
            ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25' 
            : 'bg-slate-50 dark:bg-[#0B1120] text-slate-500 dark:text-slate-400 border-transparent hover:bg-white dark:hover:bg-[#1e293b] hover:text-blue-600 dark:hover:text-white'}
    `}>
        {icon}
        <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </button>
);