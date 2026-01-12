import { useState } from 'react';
import { mockProducts, mockPriceComparisons, mockRecommendations } from '../data/mockData';
import type { Product } from '../types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Search,
  Star,
  Sparkles,
  ExternalLink,
  Bookmark,
  CheckCircle2,
  XCircle,
  Package,
  TrendingDown,
  SlidersHorizontal,
  ArrowRight,
  History
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { LoginSessionsTable } from '@/components/LoginSessionsTable';

export default function UserDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showPriceComparison, setShowPriceComparison] = useState(false);

  const categories = ['All', 'Laptops', 'Audio', 'Smartphones', 'Electronics'];

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const filtered = mockProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const filteredProducts = selectedCategory === 'All'
    ? mockProducts
    : mockProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen mesh-gradient">
      {/* Hero Header */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-2xl">
            <Badge className="mb-4 px-3 py-1 rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300 border-0">
              <Search className="h-3 w-3 mr-1" />
              Product Search
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find the <span className="gradient-text">best deals</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Compare prices across platforms and save money with AI-powered recommendations.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 space-y-12">
        {/* Search Bar */}
        <div className="relative -mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl blur-xl opacity-20" />
          <div className="relative p-8 rounded-3xl bg-white dark:bg-gray-900/80 backdrop-blur-sm border border-gray-100 dark:border-white/10 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for products, brands, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="pl-12 h-14 text-lg rounded-2xl border-gray-200 dark:border-gray-700"
                />
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="h-14 w-14 rounded-2xl">
                  <SlidersHorizontal className="h-5 w-5" />
                </Button>
                <Button onClick={handleSearch} className="h-14 px-8 rounded-2xl text-base gap-2">
                  Search
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                    selectedCategory === category
                      ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-800 text-muted-foreground hover:bg-gray-200 dark:hover:bg-gray-700"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Search Results</h2>
              <Badge variant="secondary" className="rounded-full px-4">{searchResults.length} found</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map(product => (
                <ProductCard key={product.id} product={product} onComparePrice={() => setShowPriceComparison(true)} />
              ))}
            </div>
          </section>
        )}

        {/* AI Recommendations */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold">AI Picks for You</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {mockRecommendations.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                isRecommendation
                onComparePrice={() => setShowPriceComparison(true)}
              />
            ))}
          </div>
        </section>

        {/* All Products */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h2>
            <Badge variant="outline" className="rounded-full px-4">{filteredProducts.length} items</Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onComparePrice={() => setShowPriceComparison(true)} />
            ))}
          </div>
        </section>

        {/* Login Sessions */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
              <History className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Login Activity</h2>
          </div>
          <div className="p-6 rounded-3xl bg-white dark:bg-gray-900/80 backdrop-blur-sm border border-gray-100 dark:border-white/10">
            <LoginSessionsTable />
          </div>
        </section>

        <PriceComparisonDialog open={showPriceComparison} onOpenChange={setShowPriceComparison} />
      </div>
    </div>
  );
}

function ProductCard({ product, isRecommendation = false, onComparePrice }: {
  product: Product;
  isRecommendation?: boolean;
  onComparePrice: () => void;
}) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className={cn(
      "group relative rounded-3xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-white/10 overflow-hidden hover-lift",
      isRecommendation && "ring-2 ring-violet-500/20"
    )}>
      {/* Image Area */}
      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
        <Package className="h-16 w-16 text-gray-300 dark:text-gray-600" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isRecommendation && (
            <Badge className="bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0 gap-1 shadow-lg">
              <Sparkles className="h-3 w-3" />
              AI Pick
            </Badge>
          )}
        </div>

        {discount > 0 && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-rose-500 to-pink-500 border-0 shadow-lg">
              -{discount}%
            </Badge>
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="rounded-full h-10 w-10 shadow-lg">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold line-clamp-2 leading-snug">{product.name}</h3>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-1 mb-4">{product.description}</p>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm mb-5">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-medium text-foreground">{product.rating}</span>
            <span>({product.reviews})</span>
          </div>
          <Badge
            variant="outline"
            className={cn(
              "rounded-full",
              product.inStock ? "text-emerald-600 border-emerald-200 bg-emerald-50" : "text-gray-500"
            )}
          >
            {product.inStock ? <CheckCircle2 className="h-3 w-3 mr-1" /> : <XCircle className="h-3 w-3 mr-1" />}
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </Badge>
        </div>

        <div className="text-xs text-muted-foreground mb-4">
          via <span className="font-medium text-foreground">{product.platform}</span>
        </div>

        {/* Action */}
        <Button className="w-full h-11 rounded-2xl gap-2" onClick={onComparePrice}>
          Compare Prices
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function PriceComparisonDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const comparison = mockPriceComparisons[0];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Price Comparison</DialogTitle>
          <DialogDescription>
            Find the best deal across all platforms
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-2xl border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Platform</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Shipping</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.platforms.map((platform, index) => {
                const isLowest = index === 0;
                return (
                  <TableRow key={index} className={isLowest ? "bg-emerald-50/50 dark:bg-emerald-950/20" : ""}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {platform.name}
                        {isLowest && (
                          <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 border-0 text-xs">
                            Best
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>${platform.price}</TableCell>
                    <TableCell>
                      {platform.shipping === 0 ? (
                        <span className="text-emerald-600 font-medium">Free</span>
                      ) : `$${platform.shipping}`}
                    </TableCell>
                    <TableCell className="font-bold">${platform.price + platform.shipping}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        {platform.rating}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="rounded-full">
                        {platform.availability}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="ghost" className="gap-1 rounded-full">
                        Visit <ExternalLink className="h-3 w-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border border-emerald-200 dark:border-emerald-800">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-500 text-white">
              <TrendingDown className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-1">Best Deal Found!</h4>
              <p className="text-sm text-emerald-700 dark:text-emerald-300">
                Amazon offers the lowest total price with free shipping. You'll save $50 compared to other platforms.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
