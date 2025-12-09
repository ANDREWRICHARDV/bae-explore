
import React, { useState, useEffect } from 'react';
import { Search, Bell, Compass, CheckCircle, X, Trophy, Sparkles, User, Zap } from 'lucide-react';

// Components
import { ExploreGrid } from './components/ExploreGrid';
import { FlashDealLayout } from './components/FlashDealLayout';
import { GeoRewardLayout } from './components/GeoRewardLayout';
import { HomeLanding } from './components/HomeLanding';
import { Login } from './components/Login';

// Data
import { FLASH_PRODUCT, RELATED_DEALS, GEO_REWARD_DATA, APP_LOGO } from './constants';
import { FlashProduct, DropItem } from './types';

const App: React.FC = () => {
  // Set default to 'explore' since deals is removed
  const [activeTab, setActiveTab] = useState<'explore' | 'flash' | 'geo' | 'home' | 'login'>('explore');
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'info' } | null>(null);
  
  // State for the currently selected flash product
  const [currentFlashProduct, setCurrentFlashProduct] = useState<FlashProduct>(FLASH_PRODUCT);

  // Auto-hide notification
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const showNotification = (message: string, type: 'success' | 'info' = 'success') => {
    setNotification({ message, type });
  };

  const navigate = (tab: 'explore' | 'flash' | 'geo' | 'home' | 'login') => {
      setActiveTab(tab);
  };

  const handleNavigateFlash = (item?: DropItem) => {
    if (item) {
        const originalPrice = item.originalPrice || item.price * 1.2;
        const discountPercentage = Math.round(((originalPrice - item.price) / originalPrice) * 100);
        const claimedPercentage = item.stockLeft ? (100 - item.stockLeft) : 65; 

        const newProduct: FlashProduct = {
            id: item.id,
            title: item.title,
            brand: item.brand, 
            originalPrice: originalPrice,
            salePrice: item.price,
            discountPercentage: discountPercentage,
            claimedPercentage: claimedPercentage,
            itemsLeft: Math.floor(Math.random() * 50) + 5,
            viewers: Math.floor(Math.random() * 800) + 120,
            endTime: item.dropTime.includes('Ends in') ? item.dropTime.replace('Ends in ', '') : "02:00:00",
            imageUrl: item.imageUrl,
            highlights: [
                "Official Brand Warranty",
                "Authenticity Verified",
                "Express Shipping Available",
                "Limited Stock Release"
            ]
        };
        setCurrentFlashProduct(newProduct);
    }
    navigate('flash');
  };

  const isMainApp = !['home', 'login'].includes(activeTab);

  return (
    // Enforce Dark Mode
    <div className="dark">
      {/* Dynamic Background Gradient #0F172A → #131E32 */}
      <div className="min-h-screen bg-[#0F172A] font-sans text-slate-100 pb-24 relative selection:bg-blue-500/30 overflow-x-hidden">
        
        {/* 22. Particle Background Animation */}
        <ParticleBackground />

        {/* Toast Notification */}
        {notification && (
          <div className="fixed top-24 right-6 z-[100] animate-in slide-in-from-right-5 fade-in duration-300">
             <div className="bg-[#151B2B]/90 backdrop-blur-xl text-slate-100 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10 ring-1 ring-white/5">
                {notification.type === 'success' ? <CheckCircle className="w-5 h-5 text-blue-500" /> : <Bell className="w-5 h-5 text-blue-500" />}
                <span className="text-sm font-semibold tracking-tight">{notification.message}</span>
                <button onClick={() => setNotification(null)} className="ml-2 hover:bg-white/10 p-1 rounded-full"><X className="w-3 h-3" /></button>
             </div>
          </div>
        )}

        {/* 1. HEADER - Aligned with Grid */}
        <header className="sticky top-0 z-50 bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/5 transition-colors duration-300">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-3 flex items-center justify-between w-full h-[72px]">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer opacity-90 hover:opacity-100 transition-opacity w-[140px]" onClick={() => navigate('explore')}>
               <img 
                src={APP_LOGO}
                alt="BAE AI" 
                className="h-8 md:h-9 w-auto object-contain drop-shadow-lg" 
               />
            </div>

            {/* Search Bar - Hidden on Home/Login */}
             {isMainApp && (
               <div className="hidden md:flex flex-col flex-1 max-w-md mx-auto relative group">
                  <div className="relative w-full transition-transform duration-300 focus-within:scale-105">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                    type="text" 
                    placeholder="Search gadgets, deals, brands..." 
                    className="w-full bg-[#1E293B]/50 border border-white/5 focus:border-blue-500/50 rounded-full py-2.5 pl-10 pr-4 text-sm font-medium transition-all outline-none text-white placeholder:text-slate-500 focus:bg-[#1E293B] shadow-inner"
                    />
                  </div>
              </div>
             )}

            {/* Icons & Actions */}
            <div className="flex items-center justify-end gap-4 w-[140px] md:w-auto">
                  {activeTab === 'home' ? (
                     <button 
                       onClick={() => navigate('login')}
                       className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-blue-900/20"
                     >
                       Login
                     </button>
                  ) : (
                    <>
                      {/* 34. Reward Progress Bar - Premium Pill */}
                      <div className="hidden lg:flex items-center gap-3 bg-[#1E293B]/80 rounded-full px-4 py-1.5 border border-white/5 shadow-sm">
                          <div className="flex flex-col items-end">
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Level 4</span>
                              <div className="w-24 h-1 bg-slate-700 rounded-full overflow-hidden">
                                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[65%] shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
                              </div>
                          </div>
                          <Trophy className="w-4 h-4 text-yellow-500 animate-pulse" />
                      </div>

                      <button 
                      onClick={() => showNotification("No new notifications", "info")}
                      className="p-2.5 text-slate-400 hover:bg-white/5 hover:text-white rounded-full transition-all relative"
                      >
                      <Bell className="w-5 h-5" />
                      <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-blue-500 rounded-full ring-2 ring-[#0B1120]"></span>
                      </button>
                      
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold cursor-default ring-2 ring-white/10 shadow-lg transition-all hover:ring-blue-500/50 relative overflow-hidden group">
                              <span className="relative z-10">T</span>
                              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                      </div>
                    </>
                  )}
            </div>
          </div>
          
          {/* Smart Discovery Header (Mobile Only) */}
          {isMainApp && (
            <div className="flex justify-center pb-2 md:hidden border-t border-white/5 pt-2">
                <div className="flex items-center gap-1.5 text-[10px] font-medium text-blue-300/90 animate-pulse">
                    <Sparkles className="w-3 h-3" />
                    <span>BAE is curating trends...</span>
                </div>
            </div>
          )}
        </header>

        {/* MAIN CONTENT AREA */}
        <main className={`min-h-screen flex flex-col ${!isMainApp ? 'items-center justify-center' : ''}`}>
            
            {activeTab === 'home' && (
               <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
                   <HomeLanding onNotify={(msg) => showNotification(msg, 'info')} />
               </div>
            )}

            {activeTab === 'login' && (
              <div className="max-w-7xl mx-auto px-4 w-full flex justify-center relative z-10">
                  <Login onLogin={() => {
                    showNotification("Welcome back, Tony!", "success");
                    navigate('explore');
                  }} onNotify={(msg) => showNotification(msg, 'info')} />
              </div>
            )}

            {activeTab === 'explore' && (
                <div className="w-full relative z-10">
                   {/* Full width, no padding for Explore Grid */}
                   <ExploreGrid onNotify={showNotification} />
                </div>
            )}

            {activeTab === 'flash' && (
                <div className="max-w-7xl mx-auto px-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-500 pt-4 relative z-10">
                   <FlashDealLayout product={currentFlashProduct} relatedItems={RELATED_DEALS} />
                </div>
            )}

            {activeTab === 'geo' && (
                <div className="max-w-7xl mx-auto px-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-500 pt-4 relative z-10">
                   <GeoRewardLayout data={GEO_REWARD_DATA} />
                </div>
            )}

        </main>

        {/* 4. FLOATING DOCK NAVIGATION */}
        {isMainApp && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto pointer-events-none">
            <nav className="bg-[#0F172A]/90 backdrop-blur-2xl border border-white/10 p-1.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center gap-1 scale-100 transition-transform duration-300 pointer-events-auto ring-1 ring-white/5">
                <NavPill active={activeTab === 'explore'} onClick={() => navigate('explore')} label="Explore" icon={<Compass className="w-5 h-5" />} />
                <div className="w-px h-6 bg-white/10 mx-1"></div>
                <NavPill active={activeTab === 'geo'} onClick={() => navigate('geo')} label="Rewards" icon={<Trophy className="w-5 h-5" />} />
                <div className="w-px h-6 bg-white/10 mx-1"></div>
                <button className="p-2.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors relative group">
                   <User className="w-5 h-5" />
                   <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Profile</span>
                </button>
            </nav>
          </div>
        )}

      </div>
    </div>
  );
};

// 22. Subtle Particle Background
const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-blue-500/5 rounded-full blur-3xl animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 400 + 100}px`,
            height: `${Math.random() * 400 + 100}px`,
            animationDuration: `${Math.random() * 20 + 20}s`,
            animationDelay: `-${Math.random() * 10}s`,
          }}
        />
      ))}
      {/* Tiny sharp particles */}
      {[...Array(20)].map((_, i) => (
        <div
            key={`dot-${i}`}
            className="absolute bg-cyan-400/20 rounded-full w-1 h-1 animate-pulse"
            style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
            }}
        />
      ))}
    </div>
  );
};

const NavPill = ({ active, onClick, label, icon }: any) => (
  <button 
    onClick={onClick}
    className={`
      flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 font-medium text-sm relative overflow-hidden group
      ${active 
        ? 'text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
        : 'text-slate-400 hover:text-white hover:bg-white/5'
      }
    `}
  >
    {/* Active Background Gradient */}
    {active && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-100 rounded-full -z-10"></div>
    )}
    
    {/* Icon Glow */}
    <div className={`relative z-10 flex items-center gap-2 ${active ? 'animate-in zoom-in-50 duration-300' : ''}`}>
        {React.cloneElement(icon, { className: `w-5 h-5 ${active ? 'drop-shadow-lg fill-current' : ''}` })}
        <span className={`${active ? 'block' : 'hidden md:block'}`}>{label}</span>
    </div>
  </button>
);

export default App;
