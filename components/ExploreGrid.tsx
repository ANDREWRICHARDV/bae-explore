
import React, { useState, useMemo } from 'react';
import { Heart, Bookmark, ShoppingBag, Zap, Flame, Star, TrendingUp, Smartphone, Camera, Headphones, Laptop, Gamepad, Monitor, Plus, Check, UserCircle2 } from 'lucide-react';

interface ExploreItem {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  likes: number;
  category: string;
  brand: string;
  isLarge?: boolean;
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
    isLarge: true
  },
  {
    id: '2',
    title: 'Sony XM5 Noise Cancelling',
    brand: 'Sony',
    price: 349,
    likes: 856,
    category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Leica M11 Rangefinder',
    brand: 'Leica',
    price: 8995,
    likes: 12500,
    category: 'Cameras',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Apple Watch Ultra 2',
    brand: 'Apple',
    price: 799,
    likes: 4100,
    category: 'Wearables',
    imageUrl: 'https://images.unsplash.com/photo-1675789547537-4d193fa798e4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'Nothing Phone (2)',
    brand: 'Nothing',
    price: 599,
    likes: 3200,
    category: 'Mobile',
    imageUrl: 'https://images.unsplash.com/photo-1691436660683-11b333799661?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'DJI Mini 4 Pro',
    brand: 'DJI',
    price: 759,
    likes: 1900,
    category: 'Drones',
    imageUrl: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    title: 'PlayStation 5 Slim',
    brand: 'Sony',
    price: 499,
    likes: 15400,
    category: 'Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
    isLarge: true
  },
  {
    id: '8',
    title: 'Vision Pro Headset',
    brand: 'Apple',
    price: 3499,
    likes: 22100,
    category: 'VR/AR',
    imageUrl: 'https://images.unsplash.com/photo-1622630998477-20aa696fab05?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '9',
    title: 'Analogue Pocket',
    brand: 'Analogue',
    price: 219,
    likes: 5600,
    category: 'Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1688587348912-19e072957106?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '10',
    title: 'Fujifilm X100V',
    brand: 'Fujifilm',
    price: 1399,
    likes: 9800,
    category: 'Cameras',
    imageUrl: 'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '11',
    title: 'Teenage Engineering OP-1',
    brand: 'Teenage Engineering',
    price: 1999,
    likes: 3400,
    category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1629828773950-8b09337583a3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '12',
    title: 'Framework Laptop 16',
    brand: 'Framework',
    price: 1399,
    likes: 1200,
    category: 'Computers',
    imageUrl: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80'
  }
];

const CATEGORIES = [
  { id: 'trending', label: 'Trending', icon: <TrendingUp className="w-3 h-3" /> },
  { id: 'new', label: 'New', icon: <Zap className="w-3 h-3" /> },
  { id: 'deals', label: 'Deals', icon: <Flame className="w-3 h-3" /> },
  { id: 'popular', label: 'Popular', icon: <Star className="w-3 h-3" /> },
  { id: 'audio', label: 'Audio', icon: <Headphones className="w-3 h-3" /> },
  { id: 'gaming', label: 'Gaming', icon: <Gamepad className="w-3 h-3" /> },
  { id: 'cameras', label: 'Cameras', icon: <Camera className="w-3 h-3" /> },
  { id: 'mobile', label: 'Mobile', icon: <Smartphone className="w-3 h-3" /> },
  { id: 'computers', label: 'Computers', icon: <Laptop className="w-3 h-3" /> },
  { id: 'vr/ar', label: 'VR/AR', icon: <Monitor className="w-3 h-3" /> },
];

const SUGGESTED_BRANDS = [
    { name: 'Apple', followers: '2.5M' },
    { name: 'Sony', followers: '1.8M' },
    { name: 'Nike', followers: '4.2M' },
    { name: 'Samsung', followers: '3.1M' },
    { name: 'Razer', followers: '900k' },
    { name: 'Canon', followers: '1.2M' },
    { name: 'Bose', followers: '850k' },
];

interface ExploreGridProps {
  onNotify: (msg: string, type?: 'success' | 'info') => void;
}

export const ExploreGrid: React.FC<ExploreGridProps> = ({ onNotify }) => {
  const [activeCategory, setActiveCategory] = useState('trending');
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [followedBrands, setFollowedBrands] = useState<Set<string>>(new Set());

  // Filter Logic
  const filteredItems = useMemo(() => {
    switch (activeCategory) {
      case 'trending':
        return items;
      case 'new':
        return items.slice(0, 6); // Mock subset
      case 'deals':
        return items.filter(item => item.price < 600);
      case 'popular':
        return items.filter(item => item.likes > 4000);
      default:
        return items.filter(item => item.category.toLowerCase() === activeCategory);
    }
  }, [items, activeCategory]);

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const newLiked = new Set(likedIds);
    if (newLiked.has(id)) {
      newLiked.delete(id);
      setItems(prev => prev.map(i => i.id === id ? { ...i, likes: i.likes - 1 } : i));
    } else {
      newLiked.add(id);
      onNotify("Liked!", "success");
      setItems(prev => prev.map(i => i.id === id ? { ...i, likes: i.likes + 1 } : i));
    }
    setLikedIds(newLiked);
  };

  const toggleSave = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const newSaved = new Set(savedIds);
    if (newSaved.has(id)) {
      newSaved.delete(id);
      onNotify("Removed from Saved");
    } else {
      newSaved.add(id);
      onNotify("Saved to Collection", "success");
    }
    setSavedIds(newSaved);
  };

  const toggleFollowBrand = (e: React.MouseEvent, brand: string) => {
    e.stopPropagation();
    const newSet = new Set(followedBrands);
    if (newSet.has(brand)) {
        newSet.delete(brand);
        onNotify(`Unfollowed ${brand}`);
    } else {
        newSet.add(brand);
        onNotify(`You are now following ${brand}!`, 'success');
    }
    setFollowedBrands(newSet);
  }

  const handleAddToCart = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    onNotify(`Added ${title} to Cart`, "success");
  };

  const formatLikes = (num: number) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toString();
  };

  return (
    <div className="w-full pb-20 animate-in fade-in slide-in-from-bottom-2 duration-500">
      
      {/* Category Pills - Sticky */}
      <div className="sticky top-[68px] z-30 bg-[#0B1120]/95 backdrop-blur-md py-3 -mx-4 px-4 md:mx-0 md:px-0 border-b border-white/5 mb-2">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border
                ${activeCategory === cat.id 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25' 
                  : 'bg-[#151B2B] text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white'}
              `}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Suggested Brands Rail */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="text-sm font-bold text-slate-300">Suggested Brands</h3>
            <button className="text-xs font-bold text-blue-500">See All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {SUGGESTED_BRANDS.map((brand) => {
                const isFollowing = followedBrands.has(brand.name);
                return (
                    <div key={brand.name} className="min-w-[140px] p-3 rounded-xl bg-[#151B2B] border border-slate-800 flex flex-col items-center gap-2 relative group hover:border-slate-600 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 font-bold border border-slate-700">
                            {brand.name[0]}
                        </div>
                        <div className="text-center">
                            <h4 className="text-xs font-bold text-white">{brand.name}</h4>
                            <p className="text-[10px] text-slate-500">{brand.followers} followers</p>
                        </div>
                        <button 
                            onClick={(e) => toggleFollowBrand(e, brand.name)}
                            className={`w-full mt-1 py-1 rounded-md text-[10px] font-bold transition-all flex items-center justify-center gap-1
                            ${isFollowing 
                                ? 'bg-slate-800 text-white border border-slate-700' 
                                : 'bg-blue-600 text-white hover:bg-blue-500'}
                            `}
                        >
                            {isFollowing ? 'Following' : 'Follow'}
                        </button>
                    </div>
                )
            })}
        </div>
      </div>

      {/* The Instagram-Style Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 auto-rows-[160px] md:auto-rows-[300px]">
          {filteredItems.map((item) => {
            const isLiked = likedIds.has(item.id);
            const isSaved = savedIds.has(item.id);
            const isFollowingBrand = followedBrands.has(item.brand);

            return (
              <div 
                key={item.id}
                className={`
                  relative group overflow-hidden bg-slate-800 rounded-sm md:rounded-lg cursor-pointer
                  ${item.isLarge ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}
                `}
                onClick={() => onNotify(`Viewing ${item.title}`, 'info')}
              >
                {/* Image */}
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Always Visible Tags */}
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-[-10px] group-hover:translate-y-0 z-10">
                  ${item.price}
                </div>

                {/* Dark Overlay with Interactions */}
                <div className="absolute inset-0 bg-black/40 md:bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-3 md:p-4 backdrop-blur-[2px]">
                  
                  {/* Top: Brand Info & Follow */}
                  <div className="transform translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                             <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[10px] font-bold text-white">
                                {item.brand[0]}
                             </div>
                             <span className="text-white text-xs font-bold shadow-sm">{item.brand}</span>
                        </div>
                        <button 
                            onClick={(e) => toggleFollowBrand(e, item.brand)}
                            className={`px-2 py-1 rounded-full text-[10px] font-bold backdrop-blur-md transition-all flex items-center gap-1
                                ${isFollowingBrand 
                                    ? 'bg-white/20 text-white border border-white/20' 
                                    : 'bg-blue-600 text-white shadow-lg'}
                            `}
                        >
                            {isFollowingBrand ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                            {isFollowingBrand ? 'Following' : 'Follow'}
                        </button>
                    </div>
                  </div>

                  {/* Center: Action Icons */}
                  <div className="flex items-center justify-center gap-6 text-white font-bold transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    {/* Like Button */}
                    <button 
                      onClick={(e) => toggleLike(e, item.id)}
                      className="flex flex-col items-center gap-1 hover:scale-110 transition-transform group/like"
                    >
                      <Heart className={`w-6 h-6 md:w-8 md:h-8 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'fill-white/20 hover:text-red-500'}`} />
                      <span className="text-[10px] md:text-xs font-medium">{formatLikes(item.likes)}</span>
                    </button>
                    
                    {/* Cart Button */}
                    <button 
                      className="flex flex-col items-center gap-1 hover:text-blue-400 hover:scale-110 transition-all"
                      onClick={(e) => handleAddToCart(e, item.title)}
                    >
                      <ShoppingBag className="w-6 h-6 md:w-8 md:h-8" />
                      <span className="text-[10px] md:text-xs font-medium">Buy</span>
                    </button>

                    {/* Save Button */}
                    <button 
                      className="flex flex-col items-center gap-1 hover:scale-110 transition-all"
                      onClick={(e) => toggleSave(e, item.id)}
                    >
                      <Bookmark className={`w-6 h-6 md:w-8 md:h-8 transition-colors ${isSaved ? 'fill-white text-white' : 'hover:text-blue-400'}`} />
                      <span className="text-[10px] md:text-xs font-medium">Save</span>
                    </button>
                  </div>

                  {/* Bottom: Title */}
                  <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/5">
                        <h3 className="text-white font-bold text-xs md:text-sm truncate mb-0.5">{item.title}</h3>
                        <p className="text-blue-200 text-[10px] font-medium flex items-center gap-1">
                            {item.category} • View Details <Zap className="w-3 h-3 fill-current" />
                        </p>
                      </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-slate-500 gap-4">
          <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center">
            <Smartphone className="w-8 h-8 opacity-50" />
          </div>
          <p>No items found in {CATEGORIES.find(c => c.id === activeCategory)?.label}</p>
          <button onClick={() => setActiveCategory('trending')} className="text-blue-400 font-bold hover:underline">View All</button>
        </div>
      )}

      {/* Loading Spinner at Bottom */}
      {filteredItems.length > 0 && (
        <div className="flex justify-center py-8">
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};
