import type { Product, PriceComparison, BusinessMetric } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'MacBook Air M2',
    price: 999,
    originalPrice: 1199,
    platform: 'Amazon',
    rating: 4.8,
    reviews: 2847,
    image: '/api/placeholder/300/200',
    description: 'Apple MacBook Air 13-inch with M2 chip, 8GB RAM, 256GB SSD',
    category: 'Laptops',
    inStock: true
  },
  {
    id: '2',
    name: 'Sony WH-1000XM4',
    price: 279,
    originalPrice: 349,
    platform: 'Best Buy',
    rating: 4.7,
    reviews: 1523,
    image: '/api/placeholder/300/200',
    description: 'Wireless Noise Canceling Headphones',
    category: 'Audio',
    inStock: true
  },
  {
    id: '3',
    name: 'iPhone 15 Pro',
    price: 999,
    platform: 'Apple Store',
    rating: 4.9,
    reviews: 3421,
    image: '/api/placeholder/300/200',
    description: 'Latest iPhone with A17 Pro chip and titanium design',
    category: 'Smartphones',
    inStock: false
  },
  {
    id: '4',
    name: 'Samsung 4K Smart TV',
    price: 599,
    originalPrice: 799,
    platform: 'Samsung',
    rating: 4.6,
    reviews: 892,
    image: '/api/placeholder/300/200',
    description: '55-inch 4K UHD Smart TV with HDR',
    category: 'Electronics',
    inStock: true
  }
];

export const mockPriceComparisons: PriceComparison[] = [
  {
    productId: '1',
    platforms: [
      { name: 'Amazon', price: 999, shipping: 0, rating: 4.8, availability: 'In Stock', url: '#' },
      { name: 'Best Buy', price: 1049, shipping: 0, rating: 4.7, availability: 'In Stock', url: '#' },
      { name: 'Apple Store', price: 1099, shipping: 0, rating: 4.9, availability: 'In Stock', url: '#' },
      { name: 'Newegg', price: 1029, shipping: 15, rating: 4.6, availability: 'Limited Stock', url: '#' }
    ]
  }
];

export const mockBusinessMetrics: BusinessMetric[] = [
  { label: 'Total Products Tracked', value: '24,847', change: 12.5, trend: 'up' },
  { label: 'Price Comparisons Today', value: '3,291', change: 8.2, trend: 'up' },
  { label: 'User Satisfaction', value: '94.8%', change: 2.1, trend: 'up' },
  { label: 'Cost Savings Generated', value: '$187K', change: 15.3, trend: 'up' }
];

export const mockTrendData = [
  { month: 'Jan', avgPrice: 850, searches: 1200 },
  { month: 'Feb', avgPrice: 820, searches: 1450 },
  { month: 'Mar', avgPrice: 780, searches: 1680 },
  { month: 'Apr', avgPrice: 760, searches: 1920 },
  { month: 'May', avgPrice: 720, searches: 2150 },
  { month: 'Jun', avgPrice: 690, searches: 2380 }
];

export const mockRecommendations: Product[] = [
  {
    id: '5',
    name: 'Dell XPS 13',
    price: 899,
    originalPrice: 1099,
    platform: 'Dell',
    rating: 4.6,
    reviews: 1847,
    image: '/api/placeholder/300/200',
    description: 'Ultrabook with Intel Core i7, perfect for productivity',
    category: 'Laptops',
    inStock: true
  },
  {
    id: '6',
    name: 'Bose QuietComfort 45',
    price: 329,
    platform: 'Bose',
    rating: 4.8,
    reviews: 2103,
    image: '/api/placeholder/300/200',
    description: 'Premium noise cancelling headphones',
    category: 'Audio',
    inStock: true
  }
];