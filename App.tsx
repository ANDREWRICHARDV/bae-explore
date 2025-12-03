
import React, { useState, useEffect } from 'react';
import { Search, Bell, Compass, CheckCircle, X, Trophy } from 'lucide-react';

// Components
import { ExploreGrid } from './components/ExploreGrid';
import { FlashDealLayout } from './components/FlashDealLayout';
import { GeoRewardLayout } from './components/GeoRewardLayout';
import { HomeLanding } from './components/HomeLanding';
import { Login } from './components/Login';

// Data
import { FLASH_PRODUCT, RELATED_DEALS, GEO_REWARD_DATA } from './constants';
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
        // Convert DropItem to FlashProduct format
        const originalPrice = item.originalPrice || item.price * 1.2;
        const discountPercentage = Math.round(((originalPrice - item.price) / originalPrice) * 100);
        
        // StockLeft in DropItem is usually %, in FlashProduct claimedPercentage is %. 
        // If stockLeft is 75%, claimed is 25%.
        const claimedPercentage = item.stockLeft ? (100 - item.stockLeft) : 65; 

        const newProduct: FlashProduct = {
            id: item.id,
            title: item.title,
            brand: item.brand, // Map brand from DropItem
            originalPrice: originalPrice,
            salePrice: item.price,
            discountPercentage: discountPercentage,
            claimedPercentage: claimedPercentage,
            itemsLeft: Math.floor(Math.random() * 50) + 5, // Mock logic
            viewers: Math.floor(Math.random() * 800) + 120, // Mock logic
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

  // Helper to determine if we are in the main app flow (showing nav dock)
  const isMainApp = !['home', 'login'].includes(activeTab);

  return (
    // Enforce Dark Mode
    <div className="dark">
      <div className="min-h-screen bg-[#0B1120] font-sans text-slate-100 pb-24 relative selection:bg-blue-500/30">
        
        {/* Toast Notification */}
        {notification && (
          <div className="fixed top-24 right-6 z-[100] animate-in slide-in-from-right-5 fade-in duration-300">
             <div className="bg-[#151B2B]/90 backdrop-blur text-slate-100 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#2A3241]">
                {notification.type === 'success' ? <CheckCircle className="w-5 h-5 text-blue-500" /> : <Bell className="w-5 h-5 text-blue-500" />}
                <span className="text-sm font-semibold tracking-tight">{notification.message}</span>
                <button onClick={() => setNotification(null)} className="ml-2 hover:bg-white/10 p-1 rounded-full"><X className="w-3 h-3" /></button>
             </div>
          </div>
        )}

        {/* 1. HEADER */}
        <header className="sticky top-0 z-50 bg-[#0B1120]/80 backdrop-blur-xl border-b border-[#2A3241] px-4 md:px-6 py-3 flex items-center justify-between transition-colors duration-300">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer opacity-90 hover:opacity-100 transition-opacity" onClick={() => navigate('explore')}>
             <img 
              src="https://bae-ai-landing-page.vercel.app/assets/bae-logo-BFKDPxMm.png" 
              alt="BAE AI" 
              className="h-9 md:h-10 w-auto object-contain" 
             />
          </div>

          {/* Search Bar - Hidden on Home/Login */}
           {isMainApp && (
             <div className="hidden md:flex flex-1 max-w-md mx-auto relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-[#151B2B] border border-transparent focus:border-blue-500/50 rounded-full py-2 pl-10 pr-4 text-sm font-medium transition-all outline-none text-white placeholder:text-slate-500"
                />
            </div>
           )}

          {/* Icons & Actions */}
          <div className="flex items-center gap-2">
                {activeTab === 'home' ? (
                   <button 
                     onClick={() => navigate('login')}
                     className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-blue-900/20"
                   >
                     Login
                   </button>
                ) : (
                  <>
                    <button 
                    onClick={() => showNotification("No new notifications", "info")}
                    className="p-2 text-slate-400 hover:bg-[#151B2B] rounded-full transition-all relative"
                    >
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-500 rounded-full ring-2 ring-[#0B1120]"></span>
                    </button>
                    
                    <div className="ml-1 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold cursor-default ring-2 ring-transparent transition-all">
                            T
                    </div>
                  </>
                )}
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className={`max-w-7xl mx-auto px-4 md:px-6 py-4 space-y-4 min-h-[80vh] flex flex-col ${!isMainApp ? 'items-center justify-center' : ''}`}>
            
            {activeTab === 'home' && (
              <HomeLanding onNotify={(msg) => showNotification(msg, 'info')} />
            )}

            {activeTab === 'login' && (
              <Login onLogin={() => {
                showNotification("Welcome back, Tony!", "success");
                navigate('explore');
              }} onNotify={(msg) => showNotification(msg, 'info')} />
            )}

            {activeTab === 'explore' && (
                <div className="w-full">
                   <ExploreGrid onNotify={showNotification} />
                </div>
            )}

            {activeTab === 'flash' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
                   <FlashDealLayout product={currentFlashProduct} relatedItems={RELATED_DEALS} />
                </div>
            )}

            {activeTab === 'geo' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
                   <GeoRewardLayout data={GEO_REWARD_DATA} />
                </div>
            )}

        </main>

        {/* 4. FLOATING DOCK NAVIGATION - Only visible in main app */}
        {isMainApp && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto">
          <nav className="bg-[#151B2B]/90 backdrop-blur-xl border border-[#2A3241] p-1.5 rounded-full shadow-2xl flex items-center gap-1 scale-100 transition-transform duration-300">
              <NavPill active={activeTab === 'explore'} onClick={() => navigate('explore')} label="Explore" icon={<Compass className="w-5 h-5" />} />
              <NavPill active={activeTab === 'geo'} onClick={() => navigate('geo')} label="Rewards" icon={<Trophy className="w-5 h-5" />} />
          </nav>
          </div>
        )}

      </div>
    </div>
  );
};

const NavPill = ({ active, onClick, label, icon }: any) => (
  <button 
    onClick={onClick}
    className={`
      flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 font-medium text-sm
      ${active 
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105' 
        : 'text-slate-400 hover:text-white hover:bg-[#0B1120]'
      }
    `}
  >
    {icon}
    <span className={`${active ? 'block' : 'hidden md:block'}`}>{label}</span>
  </button>
);

export default App;
