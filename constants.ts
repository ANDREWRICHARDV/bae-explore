
import { Deal, RestaurantInfo, FlashProduct, RelatedItem, GeoReward, FeedDeal, TrendingHashtag, UserProfile, DropItem } from './types';

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "Borcelle Restaurant",
  rating: 4.8,
  reviewCount: 2341,
  isOpen: true,
  closingTime: "11:00 PM",
  address: "123 Main Street, Downtown",
  phone: "(555) 123-4567",
  hours: "Mon-Sun: 11:00 AM - 11:00 PM"
};

export const DEALS: Deal[] = [
  {
    id: '1',
    title: "Buy One Get One Free Milkshake",
    description: "Valid on all milkshake flavors. Offer ends July 31st.",
    expiry: "Expires: July 31, 2024",
    imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: '2',
    title: "Free Drink with Purchase",
    description: "Get a complimentary large soda or iced tea.",
    expiry: "Expires: August 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: '3',
    title: "50% Off Big Fries",
    description: "Enjoy our signature Big Fries at half price.",
    expiry: "Expires: July 20, 2024",
    imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const FLASH_PRODUCT: FlashProduct = {
  id: 'fp-1',
  title: "Smart Blender Pro",
  brand: "KitchenAid",
  originalPrice: 200.00,
  salePrice: 100.00,
  discountPercentage: 50,
  claimedPercentage: 78,
  itemsLeft: 12,
  viewers: 12,
  endTime: "02:14:36",
  imageUrl: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=1000&auto=format&fit=crop", 
  highlights: [
    "High-speed blending",
    "Durable construction",
    "Easy to clean",
    "Multi-functional"
  ]
};

export const RELATED_DEALS: RelatedItem[] = [
  {
    id: 'r-1',
    title: "Nike Dunk Low Retro",
    price: 110,
    imageUrl: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 'r-2',
    title: "Xbox Wireless Controller",
    price: 59,
    imageUrl: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 'r-3',
    title: "Samsung Galaxy Buds2 Pro",
    price: 189,
    imageUrl: "https://images.unsplash.com/photo-1610461622359-db356a42a033?auto=format&fit=crop&w=400&q=80"
  }
];

export const GEO_REWARD_DATA: GeoReward = {
  id: 'geo-1',
  title: "Free Artisanal Coffee",
  merchant: "The Daily Grind",
  points: 1250,
  userPoints: 1250,
  image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  expiresIn: "2:34:15",
  distance: 80,
  progress: 80,
  xpReward: 50
};

// DealFinder Data
export const FEED_DEALS: FeedDeal[] = [
  {
    id: 'df-1',
    brandName: "Brand X",
    brandLocation: "San Francisco, CA",
    discountBadge: "20% OFF",
    description: "Get 20% off on all items at Brand X. #deals #discounts #BrandX",
    // Image matching: Orange background, bottle, plant
    imageUrl: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=1000&q=80", 
    expiresIn: "Ends in 3 hrs",
    tags: ["#deals", "#discounts", "#BrandX"],
    likes: 124,
    comments: 45,
    bgColor: "#fcecdb" // Soft Orangeish
  },
  {
    id: 'df-2',
    brandName: "Brand Y",
    brandLocation: "New York, NY",
    discountBadge: "Buy 1 Get 1",
    description: "Buy one get one free at Brand Y. #deals #bogo #BrandY",
    // Image matching: Green background, white bottle
    imageUrl: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1000&q=80", 
    expiresIn: "Expires in 2 hrs",
    tags: ["#deals", "#bogo", "#BrandY"],
    likes: 89,
    comments: 12,
    bgColor: "#e6f4ea" // Soft Greenish
  }
];

export const TRENDING_TAGS: TrendingHashtag[] = [
  { tag: "#summerdeals" },
  { tag: "#fashion" },
  { tag: "#techdiscounts" },
  { tag: "#foodie" }
];

// Profile Data
export const USER_PROFILE: UserProfile = {
  name: "Tony",
  handle: "@constantly_funky_monkfish",
  pronouns: "he/her",
  ageRange: "25-34",
  location: "London, UK",
  // Using an illustration/sketch style avatar
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tony&backgroundColor=e6dcc8",
  shoppingPassportId: "Daydream"
};

// Drops Data
export const LIVE_FLASH_SALES: DropItem[] = [
  {
    id: 'f1',
    title: "Air Max Pulse",
    brand: "Nike",
    price: 119,
    originalPrice: 180,
    dropTime: "Ends in 02:45:12",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    isLive: true,
    stockLeft: 75
  },
  {
    id: 'f2',
    title: "WH-1000XM5",
    brand: "Sony",
    price: 298,
    originalPrice: 399,
    dropTime: "Ends in 05:12:00",
    imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80",
    isLive: true,
    stockLeft: 45
  },
  {
    id: 'f3',
    title: "Series 9 Watch",
    brand: "Apple",
    price: 349,
    originalPrice: 429,
    dropTime: "Ends in 01:20:00",
    imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
    isLive: true,
    stockLeft: 15
  },
  {
    id: 'f4',
    title: "PlayStation 5 Pro",
    brand: "Sony",
    price: 649,
    originalPrice: 699,
    dropTime: "Ends in 00:45:00",
    imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    isLive: true,
    stockLeft: 92
  }
];

export const UPCOMING_DROPS: DropItem[] = [
  {
    id: 'd1',
    title: "Yeezy Slide Bone",
    brand: "Adidas",
    price: 70,
    dropTime: "Tomorrow, 10:00 AM",
    imageUrl: "https://images.unsplash.com/photo-1617614838633-2895b9589d82?auto=format&fit=crop&w=800&q=80",
    isLive: false
  },
  {
    id: 'd2',
    title: "CyberTruck Diecast",
    brand: "Tesla",
    price: 45,
    dropTime: "Fri, 12:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1695239510467-318e48350861?auto=format&fit=crop&w=800&q=80",
    isLive: false
  },
  {
    id: 'd3',
    title: "RTX 5090 Founders",
    brand: "NVIDIA",
    price: 1599,
    dropTime: "Oct 15, 9:00 AM",
    imageUrl: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    isLive: false
  }
];
