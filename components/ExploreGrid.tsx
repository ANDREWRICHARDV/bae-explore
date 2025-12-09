
import React, { useState, useMemo, useEffect } from 'react';
import { Heart, ShoppingBag, Zap, Flame, Star, TrendingUp, Smartphone, Camera, Headphones, Gamepad, Monitor, Plus, Check, X, ArrowRight, Activity, Trophy, Layers } from 'lucide-react';
import { APP_LOGO } from '../constants';

interface ExploreItem {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  likes: number;
  category: string;
  brand: string;
  isLarge?: boolean;
  rating?: number;
  popularity?: number; // 0-100
}

const INITIAL_ITEMS: ExploreItem[] = [
  {
    id: '1',
    title: 'Cyberpunk Mech Keyboard',
    brand: 'Keychron',
    price: 149,
    likes: 2420,
    category: 'Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1000&auto=format&fit=crop',
    isLarge: true,
    rating: 4.8,
    popularity: 95
  },
  {
    id: '2',
    title: 'Sony XM5 Noise Cancelling',
    brand: 'Sony',
    price: 349,
    likes: 856,
    category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    popularity: 88
  },
  {
    id: '3',
    title: 'Leica M11 Rangefinder',
    brand: 'Leica',
    price: 8995,
    likes: 12500,
    category: 'Cameras',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    popularity: 92
  },
  {
    id: '4',
    title: 'Apple Watch Ultra 2',
    brand: 'Apple',
    price: 799,
    likes: 4100,
    category: 'Wearables',
    imageUrl: 'https://images.unsplash.com/photo-1675789547537-4d193fa798e4?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    popularity: 85
  },
  {
    id: '5',
    title: 'Nothing Phone (2)',
    brand: 'Nothing',
    price: 599,
    likes: 3200,
    category: 'Mobile',
    imageUrl: 'https://images.unsplash.com/photo-1691436660683-11b333799661?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    popularity: 78
  },
  {
    id: '6',
    title: 'DJI Mini 4 Pro',
    brand: 'DJI',
    price: 759,
    likes: 1900,
    category: 'Drones',
    imageUrl: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    popularity: 80
  },
  {
    id: '7',
    title: 'PlayStation 5 Slim',
    brand: 'Sony',
    price: 499,
    likes: 15400,
    category: 'Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
    isLarge: true,
    rating: 4.9,
    popularity: 98
  },
  {
    id: '8',
    title: 'Vision Pro Headset',
    brand: 'Apple',
    price: 3499,
    likes: 22100,
    category: 'VR/AR',
    imageUrl: 'https://images.unsplash.com/photo-1622630998477-20aa696fab05?auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    popularity: 99
  },
  {
    id: '9',
    title: 'Analogue Pocket',
    brand: 'Analogue',
    price: 219,
    likes: 5600,
    category: 'Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1688587348912-19e072957106?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    popularity: 65
  },
  {
    id: '10',
    title: 'Fujifilm X100V',
    brand: 'Fujifilm',
    price: 1399,
    likes: 9800,
    category: 'Cameras',
    imageUrl: 'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    popularity: 94
  },
  {
    id: '11',
    title: 'Teenage Engineering OP-1',
    brand: 'Teenage Engineering',
    price: 1999,
    likes: 3400,
    category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1629828773950-8b09337583a3?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    popularity: 70
  },
  {
    id: '12',
    title: 'Framework Laptop 16',
    brand: 'Framework',
    price: 1399,
    likes: 1200,
    category: 'Computers',
    imageUrl: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    popularity: 60
  }
];

const CATEGORIES = [
  { id: 'trending', label: 'Trending', icon: <TrendingUp className="w-4 h-4" />, color: 'from-pink-500 to-rose-500' },
  { id: 'new', label: 'New', icon: <Zap className="w-4 h-4" />, color: 'from-amber-400 to-orange-500' },
  { id: 'audio', label: 'Audio', icon: <Headphones className="w-4 h-4" />, color: 'from-teal-400 to-emerald-500' },
  { id: 'gaming', label: 'Gaming', icon: <Gamepad className="w-4 h-4" />, color: 'from-purple-500 to-indigo-600' },
  { id: 'cameras', label: 'Cameras', icon: <Camera className="w-4 h-4" />, color: 'from-blue-400 to-cyan-500' },
  { id: 'mobile', label: 'Mobile', icon: <Smartphone className="w-4 h-4" />, color: 'from-sky-400 to-blue-600' },
  { id: 'vr/ar', label: 'VR/AR', icon: <Monitor className="w-4 h-4" />, color: 'from-fuchsia-500 to-purple-600' },
];

const SUGGESTED_BRANDS = [
    { name: 'Apple', followers: '2.5M', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', hasStory: true },
    { name: 'Sony', followers: '1.8M', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg', hasStory: true },
    { name: 'Nike', followers: '4.2M', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg', hasStory: false },
    { name: 'Samsung', followers: '3.1M', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg', hasStory: true },
    { name: 'Razer', followers: '900k', logo: 'https://upload.wikimedia.org/wikipedia/en/4/40/Razer_snake_logo.svg', hasStory: false },
    { name: 'Canon', followers: '1.2M', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Canon_logo_vector.png', hasStory: false },
    { name: 'Leica', followers: '400k', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Leica_Camera_logo.svg', hasStory: false },
    { name: 'DJI', followers: '1.1M', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Dji_Logo.svg', hasStory: true },
];

const TECH_STORIES = [
    { id: 1, title: 'iPhone 16 Leaks', subtitle: 'Exclusive Render', image: 'https://images.unsplash.com/photo-1691436660683-11b333799661?auto=format&fit=crop&w=400&q=80', source: 'MacRumors' },
    { id: 2, title: 'RTX 5090 Reveal', subtitle: 'Performance', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=400&q=80', source: 'NVIDIA' },
    { id: 3, title: 'Switch 2 Delayed', subtitle: 'New Dates', image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=400&q=80', source: 'IGN' },
    { id: 4, title: 'CyberTruck Reviews', subtitle: 'In-Depth Look', image: 'https://images.unsplash.com/photo-1695239510467-318e48350861?auto=format&fit=crop&w=400&q=80', source: 'MKBHD' },
];

interface ExploreGridProps {
  onNotify: (msg: string, type?: 'success' | 'info') => void;
}

export const ExploreGrid: React.FC<ExploreGridProps> = ({ onNotify }) => {
  const [activeCategory, setActiveCategory] = useState('trending');
  const [activeMood, setActiveMood] = useState<string | null>(null);
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [compareList, setCompareList] = useState<Set<string>>(new Set());
  const [animatingHeartId, setAnimatingHeartId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [aiMessage, setAiMessage] = useState<string | null>(null);
  const [headerText, setHeaderText] = useState("BAE is curating trends...");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const messages = [
        "✨ BAE is analyzing top deals for you...",
        "🎧 New trending audio gear updated",
        "🔥 Price drop detected on Gaming items",
        "👀 12 friends viewed this category today"
    ];
    let index = 0;
    const interval = setInterval(() => {
        setAiMessage(messages[index]);
        setTimeout(() => setAiMessage(null), 4000);
        index = (index + 1) % messages.length;
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
      if (activeMood) setHeaderText(`Matching your ${activeMood} vibe...`);
      else if (activeCategory === 'trending') setHeaderText("Trending in the last 24 hours");
      else if (activeCategory === 'deals') setHeaderText("Hot picks for your wallet");
      else setHeaderText(`Top picks in ${CATEGORIES.find(c => c.id === activeCategory)?.label}`);
  }, [activeCategory, activeMood]);

  const filteredItems = useMemo(() => {
    let result = items;
    if (activeMood === 'Chill') result = result.filter(i => i.category === 'Audio' || i.category === 'Mobile');
    if (activeMood === 'Productive') result = result.filter(i => i.category === 'Computers' || i.category === 'Keyboards');
    if (activeMood === 'Active') result = result.filter(i => i.category === 'Wearables' || i.category === 'Drones');

    if (!activeMood) {
        switch (activeCategory) {
        case 'trending': return result;
        case 'new': return result.slice(0, 6);
        case 'deals': return result.filter(item => item.price < 600);
        case 'popular': return result.filter(item => item.likes > 4000);
        default: return result.filter(item => item.category.toLowerCase().includes(activeCategory.toLowerCase()));
        }
    }
    return result;
  }, [items, activeCategory, activeMood]);

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const newLiked = new Set(likedIds);
    if (newLiked.has(id)) {
      newLiked.delete(id);
      setItems(prev => prev.map(i => i.id === id ? { ...i, likes: i.likes - 1 } : i));
    } else {
      newLiked.add(id);
      setItems(prev => prev.map(i => i.id === id ? { ...i, likes: i.likes + 1 } : i));
    }
    setLikedIds(newLiked);
  };

  const handleDoubleTap = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!likedIds.has(id)) {
        const newLiked = new Set(likedIds);
        newLiked.add(id);
        setLikedIds(newLiked);
        setItems(prev => prev.map(i => i.id === id ? { ...i, likes: i.likes + 1 } : i));
    }
    setAnimatingHeartId(id);
    setTimeout(() => setAnimatingHeartId(null), 800);
  };

  const toggleCompare = (e: React.MouseEvent, id: string) => {
      e.stopPropagation();
      const newSet = new Set(compareList);
      if(newSet.has(id)) newSet.delete(id);
      else {
          newSet.add(id);
          onNotify("Added to Compare", "info");
      }
      setCompareList(newSet);
  }

  const SkeletonGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {[...Array(8)].map((_, i) => (
            <div key={i} className={`bg-[#1E293B] rounded-2xl animate-pulse border border-white/5 ${i === 0 ? 'col-span-2 row-span-2 h-full min-h-[380px]' : 'h-[200px] md:h-[280px]'}`}></div>
        ))}
    </div>
  );

  return (
    <div className="w-full pb-24 relative max-w-[1440px] mx-auto px-4 md:px-8">
        
      {/* 1. SMART DISCOVERY HEADER */}
      <div className="hidden md:flex justify-center mt-6 mb-8">
        <div className="inline-flex items-center gap-3 px-5 py-2 bg-[#1E293B]/60 border border-white/10 rounded-full text-blue-100 text-sm font-medium animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <img src={APP_LOGO} alt="BAE" className="w-5 h-5 object-contain" />
            <span>{headerText}</span>
        </div>
      </div>

      {/* 2. STORIES RAIL - Perfectly Aligned */}
      <div className="pt-2 pb-6 flex gap-6 md:gap-8 justify-start md:justify-center border-b border-transparent overflow-x-auto no-scrollbar">
         {/* Add Story Button */}
         <div className="flex flex-col items-center gap-2 min-w-[72px] cursor-pointer group shrink-0">
             <div className="w-[72px] h-[72px] rounded-full border-2 border-dashed border-slate-700 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-all relative">
                 <Plus className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                 <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center border-2 border-[#0F172A]"><Plus className="w-3 h-3 text-white"/></div>
             </div>
             <span className="text-[11px] font-medium text-slate-400 group-hover:text-white transition-colors">Add Story</span>
         </div>
         {/* Brand Stories */}
         {SUGGESTED_BRANDS.map((brand, idx) => (
             <div key={idx} className="flex flex-col items-center gap-2 min-w-[72px] cursor-pointer group shrink-0">
                 <div className={`p-[3px] rounded-full transition-transform duration-300 group-hover:scale-105 ${brand.hasStory ? 'bg-gradient-to-tr from-yellow-400 via-orange-500 to-fuchsia-600 shadow-[0_0_15px_rgba(234,88,12,0.3)]' : 'bg-slate-700'}`}>
                     <div className="w-[66px] h-[66px] rounded-full bg-[#151B2B] p-0.5 border-2 border-[#151B2B] overflow-hidden relative">
                         <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain p-3.5 filter invert opacity-80 group-hover:opacity-100 transition-opacity" />
                     </div>
                 </div>
                 <span className="text-[11px] font-medium text-slate-300 group-hover:text-white transition-colors tracking-wide">{brand.name}</span>
             </div>
         ))}
      </div>

      {/* 3. STICKY FILTER BAR - Glassmorphism */}
      <div className="sticky top-[72px] z-40 bg-[#0F172A]/80 backdrop-blur-xl border-y border-white/5 shadow-2xl shadow-black/20 py-4 mb-8 -mx-4 md:-mx-8 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-3">
            {/* Top Row: Vibe & Hashtags */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                    <span className="text-[10px] font-bold text-slate-500 uppercase shrink-0 mr-2 tracking-wider">Vibe</span>
                    {['Chill', 'Productive', 'Active', 'Travel'].map(mood => (
                        <button 
                            key={mood}
                            onClick={() => setActiveMood(activeMood === mood ? null : mood)}
                            className={`px-4 py-1.5 rounded-full text-[11px] font-bold border transition-all ${activeMood === mood ? 'bg-white text-black border-white shadow-lg shadow-white/10' : 'bg-white/5 text-slate-400 border-transparent hover:bg-white/10 hover:text-white'}`}
                        >
                            {mood}
                        </button>
                    ))}
                </div>
                {/* Hashtags Desktop */}
                <div className="hidden md:flex gap-4 text-[11px] font-medium text-slate-500">
                    <span className="shrink-0 text-blue-400">#NewLaunch</span>
                    <span className="shrink-0 hover:text-white cursor-pointer transition-colors">#TopRated</span>
                    <span className="shrink-0 hover:text-white cursor-pointer transition-colors">#HotDeals</span>
                </div>
            </div>

            {/* Bottom Row: Categories */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar items-center pb-1">
            {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                    <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setActiveMood(null); }}
                    className={`
                        flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 border
                        ${isActive 
                        ? `bg-gradient-to-r ${cat.color} text-white border-transparent shadow-[0_0_15px_rgba(0,0,0,0.3)] scale-[1.02]` 
                        : 'bg-[#1E293B] text-slate-400 hover:bg-[#2A3546] hover:text-white border-transparent'}
                    `}
                    >
                    {React.cloneElement(cat.icon as React.ReactElement, { className: `w-3.5 h-3.5 ${isActive ? 'animate-pulse' : ''}` })}
                    {cat.label}
                    </button>
                )
            })}
            </div>
        </div>
      </div>

      {/* 4. CONTENT SECTIONS */}
      <div className="space-y-8">
          
        {/* A. TECH STORIES & CHALLENGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
             {/* Challenge Card */}
             <div className="col-span-1 h-36 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 p-5 border border-blue-500/20 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                 <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-colors"></div>
                 <div className="flex flex-col justify-between h-full relative z-10">
                    <div className="text-xs font-bold text-blue-300 flex items-center gap-1.5"><Trophy className="w-3.5 h-3.5" /> Weekly Challenge</div>
                    <div>
                        <div className="text-base font-bold text-white mb-2 leading-tight">Explore 5 new <br/>categories</div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden"><div className="w-3/5 h-full bg-blue-400 rounded-full"></div></div>
                    </div>
                 </div>
             </div>

             {/* Tech Stories Cards - Fixed Layout */}
             {TECH_STORIES.slice(0,3).map(story => (
                 <div key={story.id} className="col-span-1 h-36 rounded-2xl relative overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all hover:transform hover:-translate-y-1 hover:shadow-xl">
                     <img src={story.image} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity scale-100 group-hover:scale-110 duration-700" alt={story.title} />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                     <div className="absolute bottom-4 left-4 right-4">
                         <div className="text-[10px] text-red-400 font-bold mb-0.5 uppercase tracking-wider">{story.source}</div>
                         <div className="text-sm font-bold text-white leading-tight">{story.title}</div>
                         <div className="text-[10px] text-slate-300 font-medium mt-0.5">{story.subtitle}</div>
                     </div>
                 </div>
             ))}
        </div>

        {/* B. SECTION DIVIDER */}
        <div className="flex items-center gap-4 opacity-30 py-4">
            <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-full"></div>
            <span className="text-xs font-bold text-slate-400 whitespace-nowrap uppercase tracking-[0.2em]">Discover</span>
            <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-full"></div>
        </div>

        {/* C. MAIN GRID - 8px Spacing, Rounded Corners */}
        {isLoading ? (
            <SkeletonGrid />
        ) : filteredItems.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 auto-rows-[240px] md:auto-rows-[340px]">
            {filteredItems.map((item, index) => {
                const isLiked = likedIds.has(item.id);
                const showBigHeart = animatingHeartId === item.id;
                const inCompare = compareList.has(item.id);
                
                // Special Banner Insert
                const showBanner = index === 4; 

                return (
                <React.Fragment key={item.id}>
                    {showBanner && (
                        <div className="col-span-2 md:col-span-3 lg:col-span-4 h-[180px] md:h-[240px] relative group rounded-2xl overflow-hidden border border-white/10 my-2 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-[#0F172A] animate-pulse"></div>
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="absolute inset-0 flex items-center justify-between px-8 md:px-12">
                                <div className="z-10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="text-[10px] font-bold text-blue-200 uppercase tracking-widest bg-white/10 px-2 py-1 rounded backdrop-blur-md border border-white/5">Personalized Pick</div>
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">Sony Headphones <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">20% Off Today</span></h3>
                                    <button className="text-xs md:text-sm font-bold bg-white text-blue-900 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">Shop Collection</button>
                                </div>
                                <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80" className="h-[140%] object-contain transform rotate-12 translate-y-4 opacity-90 drop-shadow-2xl transition-transform duration-1000 group-hover:rotate-0 group-hover:scale-105 hidden md:block" alt="Banner" />
                            </div>
                        </div>
                    )}

                    <div 
                    className={`
                        relative group overflow-hidden bg-[#1E293B] cursor-pointer select-none rounded-2xl
                        ${item.isLarge ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}
                        transition-all duration-500 ease-out border border-white/5 hover:border-white/20 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]
                    `}
                    onDoubleClick={(e) => handleDoubleTap(e, item.id)}
                    >
                    {/* Hover Glow Border */}
                    <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: 'inset 0 0 0 2px rgba(147, 197, 253, 0.4)' }}></div>

                    {/* Image */}
                    <div className="relative w-full h-full overflow-hidden">
                        <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                        
                        {/* 27. Light Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none z-10"></div>
                    </div>
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
                        {item.popularity && item.popularity > 90 && (
                            <div className="bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 rounded-lg flex items-center gap-1.5 shadow-lg">
                                <Flame className="w-3 h-3 text-orange-400 fill-orange-400" />
                                <span className="text-[10px] font-bold text-white tracking-wide">TOP PICK</span>
                            </div>
                        )}
                        {item.isLarge && (
                            <div className="bg-blue-600/90 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-white shadow-lg border border-blue-400/20">Editor's Choice</div>
                        )}
                    </div>

                    {/* Heart Animation */}
                    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 z-30 ${showBigHeart ? 'opacity-100' : 'opacity-0'}`}>
                        <Heart className={`w-20 h-20 text-white fill-white drop-shadow-2xl transition-transform duration-300 ${showBigHeart ? 'scale-100' : 'scale-50'}`} />
                    </div>

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Top Right Actions */}
                        <div className="flex justify-end gap-2 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                             <button 
                                onClick={(e) => toggleCompare(e, item.id)}
                                className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center border transition-all hover:scale-110 ${inCompare ? 'bg-blue-600 border-blue-500 text-white' : 'bg-black/40 border-white/10 text-white hover:bg-black/60'}`}
                             >
                                 <Layers className="w-4 h-4" />
                             </button>
                             <button 
                                className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-red-500 hover:border-red-500 transition-all hover:scale-110"
                                onClick={(e) => { e.stopPropagation(); /* Remove logic */ }}
                             >
                                 <X className="w-4 h-4" />
                             </button>
                        </div>

                        {/* Center Actions */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 pointer-events-none">
                            <div className="flex gap-3 pointer-events-auto transform scale-90 group-hover:scale-100 transition-transform duration-300 delay-75">
                                <button onClick={(e) => toggleLike(e, item.id)} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white hover:scale-110 transition-all group/btn shadow-xl">
                                    <Heart className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white group-hover/btn:text-black'}`} />
                                </button>
                                <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition-all text-white shadow-xl">
                                    <ShoppingBag className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Info - Always Visible but Enhanced on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent">
                        <div className="flex items-center gap-2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                             <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-bold text-white">
                                <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" /> {item.rating}
                             </div>
                             <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-bold text-white">
                                <Activity className="w-2.5 h-2.5 text-green-400" /> {item.popularity}%
                             </div>
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="flex-1 min-w-0 pr-4">
                                <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-0.5 flex items-center gap-1">
                                {item.brand} 
                                <Check className="w-2.5 h-2.5 bg-blue-500 rounded-full text-black p-[1px]" />
                                </div>
                                <h3 className="text-white font-bold text-sm leading-tight truncate">{item.title}</h3>
                            </div>
                            <div className="text-white font-bold text-lg drop-shadow-lg">${item.price}</div>
                        </div>
                    </div>

                    </div>
                </React.Fragment>
                );
            })}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center min-h-[40vh] text-slate-500 border border-dashed border-slate-800 rounded-3xl bg-[#0F172A]/50">
                <Smartphone className="w-12 h-12 opacity-20 mb-4" />
                <p className="text-sm font-medium">No items found matching your vibe.</p>
                <button onClick={() => { setActiveCategory('trending'); setActiveMood(null); }} className="text-blue-500 text-sm font-bold mt-4 hover:underline">Clear Filters</button>
            </div>
        )}

      </div>

      {/* 5. AI DISCOVERY TOAST - Floating Bottom Right */}
      {aiMessage && (
          <div className="fixed bottom-24 right-6 bg-[#0F172A]/90 backdrop-blur-xl border border-blue-500/30 text-blue-100 px-4 py-3 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.3)] flex items-center gap-3 z-50 animate-in slide-in-from-bottom-5 fade-in duration-500 max-w-xs ring-1 ring-white/10">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              <p className="text-xs font-medium leading-snug">{aiMessage}</p>
          </div>
      )}
      
      {/* COMPARE DRAWER */}
      {compareList.size > 0 && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-[#151B2B] rounded-2xl border border-white/10 p-3 shadow-2xl z-40 animate-in slide-in-from-bottom-10 fade-in flex flex-col gap-2 min-w-[300px]">
              <div className="flex justify-between items-center px-1">
                  <span className="text-xs font-bold text-white flex items-center gap-2"><Layers className="w-3 h-3 text-blue-400" /> Compare ({compareList.size})</span>
                  <button onClick={() => setCompareList(new Set())} className="text-[10px] text-slate-400 hover:text-white transition-colors">Clear All</button>
              </div>
              <div className="flex gap-2">
                  {Array.from(compareList).map((id: string) => {
                      const item = items.find(i => i.id === id);
                      if(!item) return null;
                      return (
                          <div key={id} className="w-12 h-12 rounded-lg bg-slate-800 overflow-hidden shrink-0 border border-white/10 relative group">
                              <img src={item.imageUrl} className="w-full h-full object-cover opacity-80" />
                              <button onClick={(e) => { e.stopPropagation(); toggleCompare(e, id) }} className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity"><X className="w-4 h-4 text-white" /></button>
                          </div>
                      )
                  })}
                  <button className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center shrink-0 hover:bg-blue-500 transition-colors shadow-lg">
                      <ArrowRight className="w-5 h-5 text-white" />
                  </button>
              </div>
          </div>
      )}

    </div>
  );
};
