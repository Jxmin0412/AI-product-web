import { mockBusinessMetrics, mockTrendData } from '../data/mockData';
import type { BusinessMetric } from '../types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Minus,
  Clock,
  ShoppingCart,
  ThumbsUp,
  ThumbsDown,
  Search,
  Download,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BusinessDashboard() {
  return (
    <div className="min-h-screen mesh-gradient">
      {/* Hero Header */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <Badge className="mb-4 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300 border-0">
                <BarChart3 className="h-3 w-3 mr-1" />
                Analytics
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Business <span className="gradient-text">Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Real-time metrics and competitive intelligence at your fingertips.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="rounded-2xl gap-2 h-11">
                <Calendar className="h-4 w-4" />
                Last 30 days
              </Button>
              <Button variant="outline" className="rounded-2xl gap-2 h-11">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 space-y-8">
        {/* Key Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-4">
          {mockBusinessMetrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Price Trends */}
          <div className="rounded-3xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-white/10 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-1">Price Trends</h3>
                <p className="text-sm text-muted-foreground">Average prices over time</p>
              </div>
              <Badge className="rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 border-0 gap-1">
                <TrendingDown className="h-3 w-3" />
                -8.2%
              </Badge>
            </div>
            <div className="h-[200px] flex items-end gap-3">
              {mockTrendData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2 group">
                  <div
                    className="w-full bg-gradient-to-t from-violet-500 to-fuchsia-400 rounded-xl group-hover:from-violet-400 group-hover:to-fuchsia-300 transition-colors cursor-pointer relative overflow-hidden"
                    style={{ height: `${(data.avgPrice / 1000) * 160}px` }}
                  >
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{data.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Search Volume */}
          <div className="rounded-3xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-white/10 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-1">Search Volume</h3>
                <p className="text-sm text-muted-foreground">User engagement trends</p>
              </div>
              <Badge className="rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 border-0 gap-1">
                <TrendingUp className="h-3 w-3" />
                +12.5%
              </Badge>
            </div>
            <div className="h-[200px] flex items-end gap-3">
              {mockTrendData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2 group">
                  <div
                    className="w-full bg-gradient-to-t from-cyan-500 to-blue-400 rounded-xl group-hover:from-cyan-400 group-hover:to-blue-300 transition-colors cursor-pointer relative overflow-hidden"
                    style={{ height: `${(data.searches / 3000) * 160}px` }}
                  >
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitor Analysis */}
        <div className="rounded-3xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-white/10 overflow-hidden shadow-xl">
          <div className="p-6 border-b border-gray-100 dark:border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">Competitor Analysis</h3>
                <p className="text-sm text-muted-foreground">Market share and positioning</p>
              </div>
              <Button variant="ghost" className="rounded-full">View All</Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead>Platform</TableHead>
                <TableHead>Market Share</TableHead>
                <TableHead>Price Position</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Coverage</TableHead>
                <TableHead className="text-right">Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: 'Amazon', share: 45, gradient: 'from-violet-500 to-purple-500', position: 'Competitive', rating: '4.2', coverage: 'High', trend: '+2.3%', up: true },
                { name: 'Best Buy', share: 25, gradient: 'from-fuchsia-500 to-pink-500', position: 'Premium', rating: '4.1', coverage: 'Medium', trend: '-1.1%', up: false },
                { name: 'Newegg', share: 15, gradient: 'from-cyan-500 to-blue-500', position: 'Variable', rating: '3.9', coverage: 'Medium', trend: '+0.8%', up: true },
                { name: 'Others', share: 15, gradient: 'from-gray-400 to-gray-500', position: 'Mixed', rating: '3.7', coverage: 'Low', trend: '0.0%', up: null },
              ].map((item, i) => (
                <TableRow key={i} className="group hover:bg-muted/30 transition-colors">
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={cn("h-full rounded-full bg-gradient-to-r", item.gradient)}
                          style={{ width: `${item.share}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{item.share}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="rounded-full">{item.position}</Badge>
                  </TableCell>
                  <TableCell>{item.rating}/5</TableCell>
                  <TableCell>
                    <Badge
                      className={cn(
                        "rounded-full border-0",
                        item.coverage === 'High' ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300" :
                        item.coverage === 'Medium' ? "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300" :
                        "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                      )}
                    >
                      {item.coverage}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className={cn(
                      "inline-flex items-center gap-1 font-medium",
                      item.up === true && "text-emerald-600",
                      item.up === false && "text-rose-500",
                      item.up === null && "text-muted-foreground"
                    )}>
                      {item.up === true && <ArrowUpRight className="h-4 w-4" />}
                      {item.up === false && <ArrowDownRight className="h-4 w-4" />}
                      {item.trend}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Bottom Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Customer Journey */}
          <div className="rounded-3xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-white/10 p-6 shadow-xl">
            <h3 className="text-lg font-semibold mb-1">Customer Journey</h3>
            <p className="text-sm text-muted-foreground mb-6">Time and conversion by stage</p>

            <div className="space-y-5">
              {[
                { label: 'Discovery', value: '2.3 min', icon: Search, progress: 100, gradient: 'from-violet-500 to-purple-500' },
                { label: 'Comparison', value: '1.8 min', icon: BarChart3, progress: 78, gradient: 'from-cyan-500 to-blue-500' },
                { label: 'Decision', value: '3.2 min', icon: Clock, progress: 65, gradient: 'from-fuchsia-500 to-pink-500' },
                { label: 'Purchase', value: '73%', icon: ShoppingCart, progress: 73, gradient: 'from-emerald-500 to-green-500' },
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={cn("p-2 rounded-xl bg-gradient-to-br text-white", item.gradient)}>
                        <item.icon className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <span className="text-sm font-semibold">{item.value}</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-500", item.gradient)}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sentiment Analysis */}
          <div className="rounded-3xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-white/10 p-6 shadow-xl">
            <h3 className="text-lg font-semibold mb-1">Sentiment Analysis</h3>
            <p className="text-sm text-muted-foreground mb-6">Customer review breakdown</p>

            <div className="space-y-5 mb-6">
              {[
                { label: 'Positive', value: 68, color: 'bg-emerald-500' },
                { label: 'Neutral', value: 22, color: 'bg-amber-500' },
                { label: 'Negative', value: 10, color: 'bg-rose-500' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold">{item.value}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full", item.color)} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-950/30 dark:to-fuchsia-950/30 border border-violet-200 dark:border-violet-800">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-violet-500" />
                <span className="font-semibold text-sm">Key Insights</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <ThumbsUp className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Price competitiveness highly rated</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <ThumbsUp className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>AI recommendations praised</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <ThumbsDown className="h-4 w-4 text-rose-500 mt-0.5 shrink-0" />
                  <span>Shipping speed concerns noted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ metric, index }: { metric: BusinessMetric; index: number }) {
  const isUp = metric.trend === 'up';
  const isDown = metric.trend === 'down';

  const gradients = [
    'from-violet-500 to-purple-600',
    'from-cyan-500 to-blue-600',
    'from-fuchsia-500 to-pink-600',
    'from-emerald-500 to-green-600',
  ];

  return (
    <div className="relative group rounded-3xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-white/10 p-6 shadow-xl hover-lift overflow-hidden">
      {/* Gradient accent */}
      <div className={cn("absolute top-0 left-0 right-0 h-1 bg-gradient-to-r", gradients[index % gradients.length])} />

      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-muted-foreground">{metric.label}</span>
        <div className={cn(
          "flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full",
          isUp && "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
          isDown && "bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300",
          !isUp && !isDown && "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
        )}>
          {isUp && <ArrowUpRight className="h-3 w-3" />}
          {isDown && <ArrowDownRight className="h-3 w-3" />}
          {!isUp && !isDown && <Minus className="h-3 w-3" />}
          {metric.change > 0 ? '+' : ''}{metric.change}%
        </div>
      </div>
      <div className="text-3xl font-bold">{metric.value}</div>
    </div>
  );
}
