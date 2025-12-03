import React from 'react';
import { Tag, QrCode, Search, Filter, X } from 'lucide-react';

export const FilterView: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent font-sans">
      
      {/* Top Header / Navigation */}
      <div className="bg-white dark:bg-[#0B1120] border-b border-gray-200 dark:border-[#2A3241] sticky top-0 z-40 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Filter className="w-5 h-5" />
             </div>
             <h1 className="text-xl font-bold text-slate-900 dark:text-white">Filters</h1>
        </div>
        
        {/* Horizontal Actions (Previously Bottom Nav) */}
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-[#151B2B] p-1 rounded-lg">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-[#0B1120] text-blue-600 dark:text-blue-400 rounded-md shadow-sm text-xs font-bold transition-all">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Explore
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-gray-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-gray-200 dark:hover:bg-[#2A3241] rounded-md text-xs font-bold transition-all">
                <Tag className="w-3 h-3" />
                Deals
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-gray-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-gray-200 dark:hover:bg-[#2A3241] rounded-md text-xs font-bold transition-all">
                <QrCode className="w-3 h-3" />
                QR
            </button>
        </div>

        <button className="p-2 hover:bg-gray-100 dark:hover:bg-[#151B2B] rounded-full text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="bg-white dark:bg-[#151B2B] rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-[#2A3241]">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
                {/* Left Column */}
                <div className="space-y-8">
                    {/* Tops Size - Horizontal Flow */}
                    <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">Tops Size</label>
                        <div className="flex flex-wrap gap-2">
                            {['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', 'AXL'].map((size) => (
                            <button 
                                key={size}
                                className={`w-12 h-10 rounded-lg text-xs font-bold border flex items-center justify-center transition-all
                                ${size === 'XXS' 
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-blue-200 dark:shadow-blue-900/20 shadow-md' 
                                    : 'bg-gray-50 dark:bg-[#0B1120] text-slate-600 dark:text-slate-300 border-gray-200 dark:border-[#2A3241] hover:border-blue-400 hover:bg-white dark:hover:bg-[#1e293b]'}`}
                            >
                                {size}
                            </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <PriceRangeInput label="Tops Price Range" max="150" />
                        <PriceRangeInput label="Bottoms Price Range" max="150" />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <PriceRangeInput label="Suit Jacket Price Range" max="150" />
                        <PriceRangeInput label="Activewear Price Range" max="150" />
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    {/* Suit Jacket Size */}
                    <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">Suit Jacket Size</label>
                        <div className="flex flex-wrap gap-2">
                            {['34', '36', '38', '42', '44', '46', '48', '50'].map((size) => (
                            <button key={size} className="w-12 h-10 rounded-lg bg-gray-50 dark:bg-[#0B1120] text-slate-600 dark:text-slate-300 border border-gray-200 dark:border-[#2A3241] text-xs font-bold hover:border-blue-400 hover:bg-white dark:hover:bg-[#1e293b] flex items-center justify-center transition-all">
                                {size}
                            </button>
                            ))}
                        </div>
                    </div>

                    <PriceRangeInput label="Shoe Price Range" max="150" />

                    {/* Shoe Size */}
                    <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">Shoe Size</label>
                        <div className="flex flex-wrap gap-2">
                            {['6.5', '7', '7.5', '8', '9', '9.5', '10', '10.5'].map((size) => (
                            <button key={size} className="w-12 h-10 rounded-lg bg-gray-50 dark:bg-[#0B1120] text-slate-600 dark:text-slate-300 border border-gray-200 dark:border-[#2A3241] text-xs font-bold hover:border-blue-400 hover:bg-white dark:hover:bg-[#1e293b] flex items-center justify-center transition-all">
                                {size}
                            </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-[#2A3241] flex justify-end gap-4">
                <button className="px-6 py-3 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-[#0B1120] transition-colors">
                    Reset All
                </button>
                <button className="px-8 py-3 rounded-xl text-sm font-bold bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/20 hover:bg-blue-700 transition-all active:scale-95">
                    Apply Filters
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};

const PriceRangeInput = ({ label, max }: { label: string, max: string }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{label}</label>
    <div className="flex gap-4 items-center">
      <div className="flex-1 h-11 border border-gray-200 dark:border-[#2A3241] rounded-xl flex items-center px-4 bg-white dark:bg-[#0B1120] focus-within:ring-2 ring-blue-100 dark:ring-blue-900 transition-shadow">
        <span className="text-xs text-gray-400 font-medium">Min</span>
        <input type="number" className="w-full h-full bg-transparent border-none outline-none text-right text-sm font-semibold text-slate-900 dark:text-white" placeholder="0" />
      </div>
      <span className="text-gray-300 dark:text-slate-600">-</span>
      <div className="flex-1 h-11 border border-gray-200 dark:border-[#2A3241] rounded-xl flex items-center px-4 bg-white dark:bg-[#0B1120] focus-within:ring-2 ring-blue-100 dark:ring-blue-900 transition-shadow">
        <span className="text-xs text-gray-400 font-medium">Max</span>
        <input type="number" className="w-full h-full bg-transparent border-none outline-none text-right text-sm font-semibold text-slate-900 dark:text-white" defaultValue={max} />
      </div>
    </div>
  </div>
);