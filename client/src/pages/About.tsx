import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Mail } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card/50 via-card/30 to-card/50 backdrop-blur p-8 md:p-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent via-secondary to-accent/50 flex items-center justify-center flex-shrink-0">
              <span className="text-4xl font-bold text-accent-foreground">FH</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Fatma Hammami</h1>
              <p className="text-lg text-muted-foreground">Data Scientist & Analytics Specialist</p>
              <p className="text-sm text-muted-foreground mt-2">Specialized in AI-driven pricing models and market basket analysis</p>
            </div>
          </div>

          <p className="text-foreground/80 leading-relaxed max-w-2xl">
            Fatma Hammami is a data scientist passionate about transforming business challenges into data-driven solutions. 
            With expertise in machine learning, statistical analysis, and business intelligence, she develops innovative 
            models that help organizations optimize pricing strategies and understand customer purchasing patterns.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project 1: Pricing Model */}
        <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-accent/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              AI-Driven Dynamic Pricing
            </CardTitle>
            <CardDescription>Machine Learning for Optimal Pricing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-foreground/80">
              A sophisticated Random Forest model that predicts optimal pricing for short-term rental properties. 
              The model analyzes multiple features including property characteristics, availability, and guest reviews 
              to recommend competitive prices that maximize revenue.
            </p>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-accent">Key Features:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Random Forest regression model (R² = 0.90)</li>
                <li>✓ Real-time price predictions</li>
                <li>✓ Feature importance analysis</li>
                <li>✓ MAE: 12.32€</li>
              </ul>
            </div>
            <Button 
              variant="outline" 
              className="w-full mt-4 border-accent/50 hover:bg-accent/10"
              onClick={() => window.open('https://github.com/fatma-analytics/AI-Driven-Dynamic-Pricing-Model', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </CardContent>
        </Card>

        {/* Project 2: Market Basket */}
        <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-secondary/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🛒</span>
              Market Basket Analysis
            </CardTitle>
            <CardDescription>Association Rules & Cross-Selling</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-foreground/80">
              An advanced market basket analysis system using the Apriori algorithm to identify product associations 
              and customer purchasing patterns. Enables strategic cross-selling and product placement optimization.
            </p>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-secondary">Key Features:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Apriori algorithm implementation</li>
                <li>✓ Support & confidence metrics</li>
                <li>✓ Association strength visualization</li>
                <li>✓ 5+ high-confidence product pairs</li>
              </ul>
            </div>
            <Button 
              variant="outline" 
              className="w-full mt-4 border-secondary/50 hover:bg-secondary/10"
              onClick={() => window.open('https://github.com/fatma-analytics/Market-Basket-Analysis', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Skills Section */}
      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle>Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-accent mb-3">Machine Learning</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Random Forest & XGBoost</li>
                <li>• Regression & Classification</li>
                <li>• Feature Engineering</li>
                <li>• Model Evaluation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-secondary mb-3">Data Analysis</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• SQL & Database Design</li>
                <li>• Statistical Analysis</li>
                <li>• Association Rules</li>
                <li>• Data Visualization</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-chart-3 mb-3">Tools & Languages</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Python & Pandas</li>
                <li>• SQL & MySQL</li>
                <li>• Scikit-learn & XGBoost</li>
                <li>• Git & GitHub</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <Card className="border-border/50 bg-gradient-to-r from-accent/10 via-secondary/10 to-chart-3/10 backdrop-blur">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>Connect with Fatma on GitHub or via email</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="flex-1 bg-accent hover:bg-accent/90"
              onClick={() => window.open('https://github.com/fatma-analytics', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub Profile
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-accent/50 hover:bg-accent/10"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Dashboard Info */}
      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-base">About This Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-foreground/80">
            This Strategic Analytics Dashboard showcases two powerful AI applications developed by Fatma Hammami:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Pricing Simulator</h4>
                <p className="text-sm text-muted-foreground">
                  An interactive tool demonstrating real-time price predictions using machine learning. 
                  Adjust property parameters and watch the AI recommend optimal pricing strategies.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Market Basket Explorer</h4>
                <p className="text-sm text-muted-foreground">
                  Explore product associations and customer purchasing patterns. Discover which products 
                  are frequently bought together and optimize cross-selling strategies.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
