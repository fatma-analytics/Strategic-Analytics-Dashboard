import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp } from 'lucide-react';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export default function PricingSimulator() {
  // State for sliders
  const [bedrooms, setBedrooms] = useState(2);
  const [accommodates, setAccommodates] = useState(4);
  const [availability, setAvailability] = useState(180);
  const [reviewScore, setReviewScore] = useState(4.5);

  // Simulated pricing model (simplified Random Forest)
  const calculatePrice = useMemo(() => {
    const basePrice = 50;
    const bedroomFactor = bedrooms * 40;
    const accommodateFactor = accommodates * 30;
    const availabilityFactor = availability < 30 ? 50 : availability > 200 ? -20 : 0;
    const reviewFactor = (reviewScore - 3) * 20;
    
    const predictedPrice = basePrice + bedroomFactor + accommodateFactor + availabilityFactor + reviewFactor;
    return Math.max(50, Math.round(predictedPrice));
  }, [bedrooms, accommodates, availability, reviewScore]);

  // Simulated prediction data
  const predictionData = [
    { actual: 280, predicted: calculatePrice, name: 'Current' },
    { actual: 250, predicted: 260, name: 'Similar 1' },
    { actual: 320, predicted: 310, name: 'Similar 2' },
    { actual: 200, predicted: 210, name: 'Similar 3' },
    { actual: 350, predicted: 340, name: 'Similar 4' },
  ];

  const scatterData = predictionData.map((item, idx) => ({
    x: item.actual,
    y: item.predicted,
    name: item.name,
  }));

  return (
    <div className="space-y-8">
      {/* KPI Cards with Animated Counters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-accent/50 transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">MAE Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">
              <AnimatedCounter value={12.32} suffix="€" decimals={2} duration={1200} />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Mean Absolute Error</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-secondary/50 transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">R² Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary">
              <AnimatedCounter value={0.9} decimals={2} duration={1200} />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Model Accuracy</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-chart-3/50 transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Predicted Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-chart-3">
              <AnimatedCounter value={calculatePrice} suffix="€" decimals={0} duration={800} />
            </div>
            <p className="text-xs text-muted-foreground mt-1">AI Recommendation</p>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Sliders */}
      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            Interactive Pricing Simulator
          </CardTitle>
          <CardDescription>Adjust parameters to see real-time price predictions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Bedrooms Slider */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-medium">Number of Bedrooms</label>
              <span className="text-lg font-bold text-accent">{bedrooms}</span>
            </div>
            <Slider
              value={[bedrooms]}
              onValueChange={(value) => setBedrooms(value[0])}
              min={1}
              max={5}
              step={1}
              className="w-full"
            />
          </div>

          {/* Accommodates Slider */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-medium">Accommodates</label>
              <span className="text-lg font-bold text-secondary">{accommodates}</span>
            </div>
            <Slider
              value={[accommodates]}
              onValueChange={(value) => setAccommodates(value[0])}
              min={1}
              max={10}
              step={1}
              className="w-full"
            />
          </div>

          {/* Availability Slider */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-medium">Availability (days/year)</label>
              <span className="text-lg font-bold text-chart-3">{availability}</span>
            </div>
            <Slider
              value={[availability]}
              onValueChange={(value) => setAvailability(value[0])}
              min={0}
              max={365}
              step={10}
              className="w-full"
            />
          </div>

          {/* Review Score Slider */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-medium">Review Score</label>
              <span className="text-lg font-bold text-chart-4">{reviewScore.toFixed(1)}</span>
            </div>
            <Slider
              value={[reviewScore]}
              onValueChange={(value) => setReviewScore(value[0])}
              min={3}
              max={5}
              step={0.1}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Scatter Plot */}
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-base">Predicted vs Actual Price</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="x" name="Actual Price" />
                <YAxis dataKey="y" name="Predicted Price" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="Predictions" data={scatterData} fill="rgb(139, 92, 246)" />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Price Comparison */}
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-base">Price Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={predictionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="actual" fill="rgb(139, 92, 246)" name="Actual" />
                <Bar dataKey="predicted" fill="rgb(34, 197, 94)" name="Predicted" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
