
export interface Deal {
  id: string;
  title: string;
  description: string;
  expiry: string;
  imageUrl: string;
  tag?: string;
}

export interface RestaurantInfo {
  name: string;
  rating: number;
  reviewCount: number;
  isOpen: boolean;
  closingTime: string;
  address: string;
  phone: string;
  hours: string;
}

// New Types for Flash Deal Page
export interface FlashProduct {
  id: string;
  title: string;
  brand: string; // Added brand
  originalPrice: number;
  salePrice: number;
  discountPercentage: number;
  claimedPercentage: number;
  itemsLeft: number;
  viewers: number;
  endTime: string; // ISO string or relevant format
  imageUrl: string;
  highlights: string[];
}

export interface RelatedItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

// New Types for GeoRewards Page
export interface GeoReward {
  id: string;
  title: string;
  merchant: string;
  points: number;
  userPoints: number;
  image: string;
  logo: string;
  expiresIn: string;
  distance: number; // meters
  progress: number; // percentage
  xpReward: number;
}

// New Types for DealFinder Page
export interface FeedDeal {
  id: string;
  brandName: string;
  brandLocation: string;
  discountBadge: string;
  description: string;
  imageUrl: string;
  expiresIn?: string;
  tags: string[];
  likes: number;
  comments: number;
  bgColor: string; // For the card background vibe
}

export interface TrendingHashtag {
  tag: string;
  count?: string;
}

// New Types for Profile Page
export interface UserProfile {
  name: string;
  handle: string;
  pronouns: string;
  ageRange: string;
  location: string;
  avatarUrl: string;
  shoppingPassportId: string;
}

// New Types for Drops Page
export interface DropItem {
  id: string;
  title: string;
  brand: string;
  price: number;
  dropTime: string; // "Live Now" or specific date
  imageUrl: string;
  isLive: boolean;
  originalPrice?: number;
  stockLeft?: number; // Percentage for progress bar
}
