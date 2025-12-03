import React, { useState } from 'react';
import { Deal } from '../types';
import { Clock, ArrowRight, Bookmark, Sparkles } from 'lucide-react';

interface DealsSectionProps {
  deals: Deal[];
  onNotify: (msg: string, type?: 'success' | 'info') => void;
}

export const DealsSection: React.FC<DealsSectionProps> = ({ deals, onNotify }) => {
  const [activeTab, setActiveTab] = useState<'in-store' | 'nearby' | 'trending' | 'saved'>('in-store');

  const tabs = [
      { id: 'in-store', label: 'In-Store' },
      { id: 'nearby', label: 'Nearby' },
      { id: 'trending', label: 'Trending' },
      { id: 'saved', label: 'Saved' },
  ] as const;

  return (
    <div className="space-y-6">
      
      {/* Minimalist Tabs - Best use of space */}
      <div className="flex items-center gap-6 border-b border-slate-200 dark:border-[#2A3241]">
        {tabs.map((tab) => (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 text-sm font-bold transition-all relative ${
                    activeTab === tab.id 
                    ? 'text-blue-600 dark:text-white' 
                    : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
                }`}
            >
                {tab.label}
                {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 dark:bg-white rounded-t-full"></span>
                )}
            </button>
        ))}
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === 'in-store' ? (
           deals.map((deal) => <DealCard key={deal.id} deal={deal} onNotify={onNotify} />)
        ) : (
            <div className="col-span-full py-16 text-center rounded-3xl border border-dashed border-slate-200 dark:border-[#2A3241] bg-slate-50/50 dark:bg-[#151B2B]/50">
                <div className="inline-flex p-3 bg-white dark:bg-[#151B2B] rounded-full mb-3 shadow-sm">
                    <Sparkles className="w-5 h-5 text-slate-300 dark:text-slate-500" />
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-medium">No deals found in <span className="text-slate-900 dark:text-white">{activeTab}</span>.</p>
            </div>
        )}
      </div>
    </div>
  );
};

const DealCard: React.FC<{ deal: Deal, onNotify: (msg: string) => void }> = ({ deal, onNotify }) => {
  const [claimed, setClaimed] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleClaim = () => {
      setClaimed(true);
      onNotify(`Grabbed deal: ${deal.title}`);
  };

  const handleSave = () => {
      setSaved(!saved);
      onNotify(saved ? "Removed from saved" : "Saved for later");
  };

  return (
    <div className={`group relative bg-white dark:bg-[#151B2B] rounded-3xl p-3 shadow-sm border border-slate-100 dark:border-[#2A3241] hover:shadow-xl dark:hover:bg-[#1e293b] transition-all duration-300 flex flex-col h-full`}>
      
      {/* Image */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#0B1120] mb-3">
        <img src={deal.imageUrl} alt={deal.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <button 
            onClick={handleSave}
            className={`absolute top-2 right-2 p-2 backdrop-blur-md rounded-full shadow-sm transition-all ${saved ? 'bg-blue-600 text-white' : 'bg-white/90 dark:bg-[#0B1120]/80 text-slate-400 hover:text-blue-600'}`}
        >
            <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-1">
        <div className="mb-auto">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1 leading-snug">{deal.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{deal.description}</p>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
             <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-md">
                <Clock className="w-3 h-3" />
                <span>Expiring Soon</span>
             </div>
             
             <button 
                onClick={handleClaim}
                disabled={claimed}
                className={`flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-sm active:scale-95 ${
                    claimed 
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 cursor-default' 
                    : 'bg-slate-900 dark:bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500'
                }`}
             >
                {claimed ? 'Claimed' : 'Grab Deal'}
                {!claimed && <ArrowRight className="w-3.5 h-3.5" />}
             </button>
        </div>
      </div>
    </div>
  );
};