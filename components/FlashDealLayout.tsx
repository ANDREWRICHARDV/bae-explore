
import React, { useState } from 'react';
import { FlashProduct, RelatedItem } from '../types';
import { Check, ChevronDown, MapPin, Eye, Timer, Plus, CheckCircle, ArrowRight } from 'lucide-react';

interface FlashDealLayoutProps {
  product: FlashProduct;
  relatedItems: RelatedItem[];
}

export const FlashDealLayout: React.FC<FlashDealLayoutProps> = ({ product, relatedItems }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  // Mock sub-brands data based on brand context or generic
  const subBrands = [
      { name: 'Label', count: '12 items' },
      { name: 'Originals', count: '45 items' },
      { name: 'Limited', count: '8 items' },
      { name: 'SB', count: '24 items' },
      { name: 'Pro', count: '15 items' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 pb-12">
      {/* Main Product Section */}
      <div className="bg-white dark:bg-[#151B2B] rounded-3xl p-5 shadow-xl border border-slate-100 dark:border-[#2A3241] mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* Left Column: Image & Highlights */}
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-slate-100 dark:bg-[#0B1120] group">
              <div className="absolute inset-0 bg-[#0f172a]/20"></div>
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="absolute inset-0 w-full h-full object-contain mix-blend-normal p-6 transform group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Timer Badge */}
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg">
                <Timer className="w-3.5 h-3.5" />
                <span>{product.endTime} Left</span>
              </div>

              {/* Brand Logo/Icon Overlay (Top Left) */}
               <div className="absolute top-4 left-4 w-9 h-9 bg-white dark:bg-[#151B2B] rounded-full flex items-center justify-center shadow-md border border-white/10">
                 <div className="w-5 h-5 bg-blue-500 rounded-md transform rotate-12"></div>
               </div>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">Deal Highlights</h3>
              <div className="grid grid-cols-2 gap-y-1.5 gap-x-3">
                {product.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-1.5 text-xs md:text-sm text-gray-600 dark:text-slate-400">
                    <Check className="w-3.5 h-3.5 text-blue-500" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 dark:border-[#2A3241] rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-[#1e293b] transition-colors">
              <span className="font-semibold text-slate-900 dark:text-white text-sm">Terms & Conditions</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Right Column: Details & Actions */}
          <div className="flex flex-col h-full">
            {/* Brand & Follow Row */}
            <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{product.brand}</div>
                <button 
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`text-[10px] font-bold rounded-full px-3 py-1 transition-all flex items-center gap-1 ${
                    isFollowing 
                    ? 'bg-blue-600 text-white shadow-blue-500/30 shadow-lg' 
                    : 'text-blue-500 border border-blue-500/30 hover:bg-blue-500/10'
                  }`}
                >
                    {isFollowing ? <CheckCircle className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                    {isFollowing ? 'Following' : `Follow ${product.brand}`}
                </button>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">{product.title}</h1>
            
            {/* Price Row */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide">
                {product.discountPercentage}% OFF
              </span>
              <span className="text-gray-400 line-through text-base">${product.originalPrice.toFixed(2)}</span>
              <span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">${product.salePrice.toFixed(2)}</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-medium text-xs md:text-sm">Save ${(product.originalPrice - product.salePrice).toFixed(2)}</span>
            </div>

            {/* Progress Bar */}
            <div className="mb-2">
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="text-slate-900 dark:text-slate-200">{product.claimedPercentage}% Claimed</span>
                <span className="text-slate-900 dark:text-slate-200">Only {product.itemsLeft} Left!</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-[#0B1120] rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-blue-600 h-full rounded-full" 
                  style={{ width: `${product.claimedPercentage}%` }}
                ></div>
              </div>
            </div>
            
            <div className="mb-6 flex items-center gap-2">
               <Eye className="w-3.5 h-3.5 text-red-500" />
               <span className="text-[10px] font-medium text-red-500">{product.viewers} people are viewing this deal right now</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-blue-200 dark:shadow-blue-900/20 shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm">
                 Grab Now
              </button>
              <button className="flex-1 bg-white dark:bg-[#0B1120] hover:bg-gray-50 dark:hover:bg-[#1e293b] text-slate-900 dark:text-white font-semibold py-3 px-6 rounded-xl border border-gray-200 dark:border-[#2A3241] active:scale-[0.98] transition-all text-sm">
                Save for Later
              </button>
            </div>

            {/* Redemption & Map */}
            <div className="mt-auto">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-base">Redemption</h3>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs">Buy & Redeem</h4>
                      <p className="text-[10px] text-gray-500 dark:text-slate-400 mt-0.5">Purchase deal & get code via email.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs">Enjoy!</h4>
                      <p className="text-[10px] text-gray-500 dark:text-slate-400 mt-0.5">Present code at any valid location.</p>
                    </div>
                  </div>
                </div>
                
                {/* Map Thumbnail */}
                <div className="w-full md:w-28 shrink-0">
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-[#2A3241] group cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Map" 
                      className="w-full h-20 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 dark:bg-[#0B1120]/90 p-1 rounded-full shadow-sm">
                            <MapPin className="w-3.5 h-3.5 text-blue-600" />
                        </div>
                    </div>
                  </div>
                  <div className="text-center mt-1.5">
                    <span className="text-[10px] font-semibold text-slate-900 dark:text-white cursor-pointer hover:underline">View Locations</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Related Deals Section */}
      <div className="mb-8">
        <h2 className="text-base font-bold text-slate-900 dark:text-white mb-4">Related Flash Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {relatedItems.map((item) => (
            <div key={item.id} className="bg-white dark:bg-[#151B2B] rounded-xl p-3 border border-slate-100 dark:border-[#2A3241] shadow-sm hover:shadow-lg transition-shadow cursor-pointer flex gap-3 items-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-[#0B1120] rounded-lg overflow-hidden shrink-0">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-0.5 line-clamp-1">{item.title}</h4>
                <p className="font-bold text-blue-600 dark:text-blue-400 text-sm">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-Brands Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
             <h2 className="text-base font-bold text-slate-900 dark:text-white">Shop {product.brand} Sub-Brands</h2>
             <button className="text-[10px] font-bold text-blue-500 hover:text-blue-400 flex items-center gap-1">View All <ArrowRight className="w-3 h-3" /></button>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 md:mx-0 md:px-0">
             {subBrands.map((brand, idx) => (
                 <div key={idx} className="min-w-[120px] bg-white dark:bg-[#151B2B] p-3 rounded-xl border border-slate-100 dark:border-[#2A3241] flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-blue-500 transition-colors group">
                     <div className="w-10 h-10 bg-gray-100 dark:bg-[#0B1120] rounded-full flex items-center justify-center font-bold text-slate-400 group-hover:text-blue-500 group-hover:bg-blue-500/10 transition-colors text-sm">
                        {brand.name[0]}
                     </div>
                     <div className="text-center">
                         <div className="text-sm font-bold text-slate-900 dark:text-white">{product.brand} {brand.name}</div>
                         <div className="text-[10px] text-slate-500 font-medium">{brand.count}</div>
                     </div>
                 </div>
             ))}
        </div>
      </div>

    </div>
  );
};
