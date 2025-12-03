import React from 'react';
import { GeoReward } from '../types';
import { Camera, Share2, Lock, MapPin, Trophy } from 'lucide-react';

interface GeoRewardLayoutProps {
  data: GeoReward;
}

export const GeoRewardLayout: React.FC<GeoRewardLayoutProps> = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Reward Details */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Reward Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
             {/* Background Image */}
            <div className="relative aspect-[16/9] w-full">
                <img 
                    src={data.image} 
                    alt={data.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Top Actions */}
                <div className="absolute top-4 left-4">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <Camera className="w-5 h-5 text-white" />
                    </button>
                </div>
                <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <Share2 className="w-5 h-5 text-white" />
                    </button>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 flex items-end justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-white mb-1">{data.title}</h1>
                        <p className="text-gray-200 text-sm font-medium">{data.merchant}</p>
                    </div>
                    {/* Logo Circle */}
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-white overflow-hidden shrink-0">
                        <img src={data.logo} alt="Brand" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
          </div>

          {/* Expiry Banner */}
          <div className="bg-blue-600 text-white py-3 px-4 rounded-xl text-center font-medium shadow-md">
            Expires in {data.expiresIn}
          </div>

          {/* Proximity Challenge Card */}
          <div className="bg-white dark:bg-[#151B2B] rounded-2xl p-6 shadow-md border border-slate-100 dark:border-[#2A3241]">
            <div className="flex justify-between items-start mb-6">
                <h3 className="font-bold text-[#1e293b] dark:text-white">Proximity Challenge</h3>
                <div className="flex items-center gap-1.5 text-[#1e293b] dark:text-white font-bold text-sm">
                    <Trophy className="w-4 h-4 fill-[#1e293b] dark:fill-white" />
                    <span>+{data.xpReward} XP</span>
                </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-100 dark:bg-[#0B1120] rounded-xl overflow-hidden shrink-0 relative">
                     {/* Mini Map Thumbnail */}
                    <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                        alt="Map thumbnail" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="font-bold text-[#1e293b] dark:text-white text-sm mb-1">Almost there!</h4>
                    <p className="text-sm text-gray-500 dark:text-slate-400 leading-snug">
                        You're just {data.distance}m away from unlocking this reward.
                    </p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="relative mb-2">
                <div className="w-full bg-gray-100 dark:bg-[#0B1120] rounded-full h-3">
                    <div 
                        className="bg-gradient-to-r from-blue-400 to-indigo-600 h-full rounded-full relative" 
                        style={{ width: `${data.progress}%` }}
                    >
                        {/* Star Indicator at end of progress */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-white dark:bg-[#151B2B] rounded-full shadow-sm border border-gray-100 dark:border-[#2A3241] flex items-center justify-center">
                             <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-right">
                <span className="text-xs font-bold text-slate-400">{data.progress}%</span>
            </div>
          </div>

          {/* Unlock Button */}
          <button 
            disabled
            className="w-full py-4 bg-white/20 text-white font-bold rounded-2xl flex items-center justify-center gap-2 cursor-not-allowed border border-white/20 backdrop-blur-sm"
          >
            <Lock className="w-5 h-5" />
            <span>Unlock Reward</span>
          </button>
          
          <div className="text-center">
            <a href="#" className="text-white font-semibold text-sm hover:underline">How to Get There</a>
          </div>

        </div>

        {/* Right Column: Map */}
        <div className="lg:col-span-7 h-[500px] lg:h-auto min-h-[500px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-[#2A3241] relative group bg-gray-50 dark:bg-[#0B1120]">
           {/* Standard Street Map Image */}
           <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Street Map" 
              className="w-full h-full object-cover dark:opacity-80"
           />
           
           {/* SVG Path Overlay */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600" preserveAspectRatio="none" style={{ zIndex: 10 }}>
              <defs>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                  <feOffset dx="1" dy="1" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.5" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode in="offsetblur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Traveled Path (Black Line) */}
              <path 
                d="M 120 520 C 180 500, 200 450, 220 400 S 300 350, 350 320" 
                stroke="#1e293b" 
                strokeWidth="4" 
                fill="none" 
                strokeLinecap="round"
                filter="url(#shadow)"
                className="opacity-90 dark:stroke-slate-900"
              />

              {/* Remaining Path (Blue Dashed) */}
              <path 
                d="M 350 320 C 400 290, 450 300, 500 250 S 580 200, 620 180" 
                stroke="#3b82f6" 
                strokeWidth="4" 
                strokeDasharray="8 8"
                fill="none" 
                strokeLinecap="round"
                filter="url(#shadow)"
                className="drop-shadow-sm"
              />
           </svg>

           {/* Markers Container */}
           <div className="absolute inset-0 z-20 pointer-events-none">
              {/* Current Location Marker */}
              <div className="absolute top-[53.33%] left-[43.75%] -translate-x-1/2 -translate-y-full transform transition-transform hover:scale-110 cursor-pointer pointer-events-auto">
                 <div className="relative">
                    <div className="w-8 h-8 bg-red-600 rounded-full border-2 border-white shadow-xl flex items-center justify-center">
                        <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                    </div>
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-600 rotate-45 border-r border-b border-white/0"></div>
                 </div>
                 <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-black/20 rounded-full blur-sm"></div>
              </div>

              {/* Destination Marker - Changed to Blue */}
              <div className="absolute top-[30%] left-[77.5%] -translate-x-1/2 -translate-y-full transform transition-transform hover:scale-110 cursor-pointer pointer-events-auto">
                 <div className="relative">
                    <div className="w-10 h-10 bg-blue-700 rounded-full border-2 border-white shadow-xl flex items-center justify-center text-white">
                        <MapPin className="w-5 h-5 fill-white text-white" />
                    </div>
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-700 rotate-45"></div>
                 </div>
                 <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-black/20 rounded-full blur-sm"></div>
              </div>
           </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="mt-12 space-y-6 border-t border-white/10 pt-8">
        <div>
            <h3 className="font-bold text-white mb-2">Terms & Conditions</h3>
            <p className="text-sm text-blue-100 leading-relaxed max-w-3xl">
                This reward is valid for one free coffee at participating locations. Offer expires on December 31, 2024. 
                Cannot be combined with other offers. See full terms for details. 
                Proximity challenges require location services to be enabled.
            </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
            <div className="flex items-center gap-2">
                 <MapPinIcon className="w-5 h-5 text-white" />
                 <span className="font-bold text-white">GeoRewards</span>
            </div>
            <div className="flex gap-6 text-sm text-blue-200">
                <a href="#" className="hover:text-white">Terms of Service</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Contact Us</a>
            </div>
        </div>
      </div>
    </div>
  );
};

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);