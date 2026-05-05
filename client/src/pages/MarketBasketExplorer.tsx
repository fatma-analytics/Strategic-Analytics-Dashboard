import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';
import { ShoppingCart } from 'lucide-react';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { HeatmapChart } from '@/components/HeatmapChart';

export default function MarketBasketExplorer() {
  const [selectedProduct, setSelectedProduct] = useState('Vin');

  // Top associations data
  const topAssociations = [
    { product_a: 'Vin', product_b: 'Fromage', pair_count: 3745, support: 74.9, confidence: 75 },
    { product_a: 'Couches', product_b: 'Biere', pair_count: 3495, support: 69.9, confidence: 70 },
    { product_a: 'Cafe', product_b: 'Chocolat', pair_count: 3245, support: 64.9, confidence: 65 },
    { product_a: 'Pates', product_b: 'Fromage', pair_count: 2995, support: 59.9, confidence: 60 },
    { product_a: 'Lait', product_b: 'Oeufs', pair_count: 1990, support: 39.8, confidence: 40 },
  ];

  // Top products
  const topProducts = [
    { name: 'Pain', sales: 4500 },
    { name: 'Lait', sales: 4200 },
    { name: 'Oeufs', sales: 3900 },
    { name: 'Fromage', sales: 3700 },
    { name: 'Vin', sales: 3500 },
    { name: 'Biere', sales: 3200 },
    { name: 'Couches', sales: 2800 },
    { name: 'Chocolat', sales: 2600 },
  ];

  // Filtered associations for selected product
  const relatedProducts = topAssociations
    .filter(a => a.product_a === selectedProduct || a.product_b === selectedProduct)
    .map(a => ({
      product: a.product_a === selectedProduct ? a.product_b : a.product_a,
      confidence: a.confidence,
      support: a.support,
    }));

  const avgConfidence = (topAssociations.reduce((a, b) => a + b.confidence, 0) / topAssociations.length).toFixed(1);

  return (
    <div className="space-y-8">
      {/* KPI Cards with Animated Counters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-accent/50 transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Associations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">
              <AnimatedCounter value={topAssociations.length} decimals={0} duration={1000} />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Product Pairs Identified</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-secondary/50 transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Confidence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary">
              <AnimatedCounter value={parseFloat(avgConfidence)} suffix="%" decimals={1} duration={1200} />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Association Strength</p>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Product Selector */}
      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-accent" />
            Product Association Explorer
          </CardTitle>
          <CardDescription>Select a product to see what customers buy together</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Product Selection */}
          <div>
            <label className="text-sm font-medium mb-3 block">Select Product</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {['Vin', 'Fromage', 'Couches', 'Biere', 'Cafe', 'Chocolat', 'Pates', 'Lait'].map((product) => (
                <button
                  key={product}
                  onClick={() => setSelectedProduct(product)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedProduct === product
                      ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/50'
                      : 'bg-card border border-border/50 text-foreground hover:border-accent/50'
                  }`}
                >
                  {product}
                </button>
              ))}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-3">Customers who buy {selectedProduct} also buy:</h3>
              <div className="space-y-3">
                {relatedProducts.map((item) => (
                  <div key={item.product} className="flex items-center justify-between p-3 bg-card/50 rounded-lg border border-border/50 hover:border-accent/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="font-medium">{item.product}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Confidence</p>
                        <p className="text-sm font-bold text-secondary">
                          <AnimatedCounter value={item.confidence} suffix="%" decimals={0} duration={600} />
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Support</p>
                        <p className="text-sm font-bold text-chart-3">
                          <AnimatedCounter value={item.support} suffix="%" decimals={1} duration={600} />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-base">Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topProducts} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={80} />
                <Tooltip />
                <Bar dataKey="sales" fill="rgb(139, 92, 246)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Association Strength Heatmap */}
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-base">Association Heatmap</CardTitle>
          </CardHeader>
          <CardContent>
            <HeatmapChart data={topAssociations} />
          </CardContent>
        </Card>
      </div>

      {/* Association Confidence Chart */}
      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-base">Top Associations Confidence</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="support" name="Support %" />
              <YAxis dataKey="confidence" name="Confidence %" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter
                name="Product Pairs"
                data={topAssociations.map((a) => ({
                  support: a.support,
                  confidence: a.confidence,
                  name: `${a.product_a} + ${a.product_b}`,
                }))}
                fill="rgb(34, 197, 94)"
              />
            </ScatterChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Association Table */}
      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-base">All Associations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-3 px-4 font-medium">Product A</th>
                  <th className="text-left py-3 px-4 font-medium">Product B</th>
                  <th className="text-right py-3 px-4 font-medium">Count</th>
                  <th className="text-right py-3 px-4 font-medium">Support</th>
                  <th className="text-right py-3 px-4 font-medium">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {topAssociations.map((assoc, idx) => (
                  <tr key={idx} className="border-b border-border/50 hover:bg-card/50 transition-colors">
                    <td className="py-3 px-4">{assoc.product_a}</td>
                    <td className="py-3 px-4">{assoc.product_b}</td>
                    <td className="text-right py-3 px-4 text-accent font-medium">{assoc.pair_count}</td>
                    <td className="text-right py-3 px-4 text-secondary font-medium">{assoc.support}%</td>
                    <td className="text-right py-3 px-4 text-chart-3 font-medium">{assoc.confidence}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
