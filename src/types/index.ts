/**
 * Central type exports
 */
export * from './auth.types';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  platform: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  category: string;
  inStock: boolean;
}

export interface PriceComparison {
  productId: string;
  platforms: {
    name: string;
    price: number;
    shipping: number;
    rating: number;
    availability: string;
    url: string;
  }[];
}

export interface BusinessMetric {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
}