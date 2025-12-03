
import React, { useState } from 'react';
import { USER_PROFILE } from '../constants';
import { ShoppingBag, Plus, CheckSquare, Edit2, CheckCircle } from 'lucide-react';

interface ProfileProps {
    onNotify: (msg: string, type?: 'success' | 'info') => void;
}

export const ProfileLayout: React.FC<ProfileProps> = ({ onNotify }) => {
  const [activeCategory, setActiveCategory] = useState('Fashion');
  const [formData, setFormData] = useState({
      brands: '',
      minPrice: '',
      maxPrice: ''
  });
  
  const handleInputChange = (field: string, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
  }

  const handleSave = () => {
      onNotify(`Preferences updated for ${activeCategory}`);
  }

  return (
    <div className="font-sans">
      
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: User Profile Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#151B2B] rounded-3xl p-6 shadow-sm border border-slate-700 flex flex-col items-center text-center sticky top-24 transition-colors">
              <div className="relative mb-3 group cursor-pointer" onClick={() => onNotify("Upload Photo clicked", "info")}>
                  <div className="w-20 h-20 bg-blue-50 rounded-full overflow-hidden border-4 border-[#0B1120] shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
                      <img src={USER_PROFILE.avatarUrl} alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-7 h-7 bg-blue-500 rounded-full border-2 border-[#151B2B] flex items-center justify-center shadow-sm">
                      <Edit2 className="w-3 h-3 text-white" />
                  </div>
              </div>
              
              <h2 className="text-xl font-bold text-white">{USER_PROFILE.name}</h2>
              <p className="text-sm text-slate-400 font-medium mb-4">{USER_PROFILE.handle}</p>
              
              <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                  <Badge text={USER_PROFILE.pronouns} />
                  <Badge text={USER_PROFILE.location} />
              </div>

              <button 
                onClick={() => onNotify("Entering Edit Mode...")}
                className="w-full py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Header Area */}
            <div className="flex justify-between items-center bg-[#151B2B] p-5 rounded-2xl shadow-sm border border-slate-700">
               <div>
                  <h1 className="text-xl font-bold text-white">BAE Profile</h1>
                  <p className="text-sm text-slate-400">Manage universal shopping preferences.</p>
               </div>
               <div className="flex items-center gap-3">
                   <button onClick={() => onNotify("Logging out...", "info")} className="text-xs font-bold text-slate-400 hover:text-red-500 transition-colors">Logout</button>
               </div>
            </div>

            {/* Passport Card - Blue/Indigo Gradient */}
            <div className="bg-gradient-to-r from-blue-900 to-[#1e2756] rounded-2xl p-6 text-white flex flex-col md:flex-row gap-5 items-start shadow-xl relative overflow-hidden border border-white/10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center shrink-0 border border-white/10">
                    <ShoppingBag className="w-6 h-6 text-blue-200" />
                </div>
                <div className="relative z-10">
                    <h3 className="font-bold text-lg mb-1">Universal Shopping Passport</h3>
                    <p className="text-sm text-blue-100/80 leading-relaxed">
                        Your passport stores your personal profile and universal shopping preferences. 
                    </p>
                </div>
            </div>

            {/* Category Selector */}
            <div className="bg-[#151B2B] rounded-2xl p-5 shadow-sm border border-slate-700">
                <div className="flex flex-wrap gap-2">
                    {['Fashion', 'Electronics', 'Home', 'Beauty', 'Sports'].map(cat => (
                        <button 
                            key={cat} 
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-lg text-sm font-bold border transition-all
                            ${cat === activeCategory
                                ? 'bg-blue-600 border-blue-600 text-white' 
                                : 'bg-transparent text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Two Column Section for Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Preferences */}
                <div className="bg-[#151B2B] rounded-2xl p-6 shadow-sm border border-slate-700">
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="font-bold text-white">{activeCategory} Preferences</h3>
                        <button onClick={handleSave} className="text-blue-400 bg-blue-900/20 p-1.5 rounded-lg hover:bg-blue-900/40 transition-colors border border-blue-900/30">
                            <CheckCircle className="w-4 h-4" />
                        </button>
                    </div>
                    
                    <div className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase">Sizes</label>
                            <div className="flex gap-2">
                                {['S', 'M', 'L', 'XL'].map(size => (
                                    <SizeBtn key={size} label={size} />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase">Brands</label>
                            <input 
                                type="text" 
                                value={formData.brands}
                                onChange={(e) => handleInputChange('brands', e.target.value)}
                                placeholder="e.g., Nike, Adidas" 
                                className="w-full text-sm p-2.5 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 bg-[#0B1120] text-white transition-colors placeholder:text-slate-500" 
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase">Budget</label>
                            <div className="flex gap-3 items-center">
                                <input 
                                    type="number" 
                                    placeholder="Min" 
                                    className="flex-1 text-sm p-2.5 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 bg-[#0B1120] text-white placeholder:text-slate-500" 
                                />
                                <span className="text-xs text-slate-400 font-medium">to</span>
                                <input 
                                    type="number" 
                                    placeholder="Max" 
                                    className="flex-1 text-sm p-2.5 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 bg-[#0B1120] text-white placeholder:text-slate-500" 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Favorite Brands */}
                <div className="bg-[#151B2B] rounded-2xl p-6 shadow-sm border border-slate-700">
                     <div className="flex justify-between items-center mb-5">
                        <h3 className="font-bold text-white">Favorite Brands</h3>
                        <button className="text-slate-400 hover:text-white p-1 hover:bg-slate-800 rounded transition-colors"><Plus className="w-4 h-4" /></button>
                    </div>

                    <div className="space-y-4">
                        <BrandCategory title="Fashion" brands={['Burberry', 'Madewell', 'Moncler']} />
                        <BrandCategory title="Tech" brands={['Apple']} />
                    </div>
                </div>
            </div>

          </div>
        </div>
    </div>
  );
};

const SizeBtn: React.FC<{ label: string }> = ({ label }) => {
    const [selected, setSelected] = useState(false);
    return (
        <button 
            onClick={() => setSelected(!selected)}
            className={`flex-1 py-1.5 text-xs font-bold border rounded-lg transition-colors ${
                selected 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-[#0B1120] text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white'
            }`}
        >
            {label}
        </button>
    )
}

const Badge = ({ text }: { text: string }) => (
    <span className="bg-[#0B1120] text-slate-400 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-700">
        {text}
    </span>
);

const BrandCategory = ({ title, brands }: { title: string, brands: string[] }) => (
    <div className="border-b border-slate-700 last:border-0 pb-3 last:pb-0">
        <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-2">{title}</h4>
        <div className="space-y-2">
                {brands.map(brand => (
                    <div key={brand} className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-3.5 h-3.5 bg-blue-900/30 rounded flex items-center justify-center border border-blue-900/20">
                            <CheckSquare className="w-2.5 h-2.5 text-blue-400" />
                        </div>
                        <span className="text-sm text-slate-300 font-medium group-hover:text-blue-400 transition-colors">{brand}</span>
                    </div>
                ))}
        </div>
    </div>
);
