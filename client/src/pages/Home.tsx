import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PricingSimulator from '@/pages/PricingSimulator';
import MarketBasketExplorer from '@/pages/MarketBasketExplorer';
import About from '@/pages/About';
import { BarChart3, ShoppingCart, Info } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('pricing');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent via-secondary to-accent/50 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-accent via-secondary to-accent/80 bg-clip-text text-transparent">
                  Strategic Analytics
                </h1>
                <p className="text-xs text-muted-foreground">Fatma Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-border/50">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-card/50 border border-border/50 rounded-lg">
              <TabsTrigger value="pricing" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span className="hidden sm:inline">Pricing Simulator</span>
                <span className="sm:hidden">Pricing</span>
              </TabsTrigger>
              <TabsTrigger value="basket" className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden sm:inline">Market Basket Explorer</span>
                <span className="sm:hidden">Basket</span>
              </TabsTrigger>
              <TabsTrigger value="about" className="flex items-center gap-2">
                <Info className="w-4 h-4" />
                <span className="hidden sm:inline">About</span>
                <span className="sm:hidden">Info</span>
              </TabsTrigger>
            </TabsList>

            {/* Content */}
            <div className="py-8">
              <TabsContent value="pricing" className="animate-fade-in">
                <PricingSimulator />
              </TabsContent>
              <TabsContent value="basket" className="animate-fade-in">
                <MarketBasketExplorer />
              </TabsContent>
              <TabsContent value="about" className="animate-fade-in">
                <About />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-12 py-6 bg-card/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2026 Fatma Analytics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
