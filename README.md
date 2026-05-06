# Strategic Analytics Dashboard

An elegant, interactive web application showcasing **AI-powered Dynamic Pricing** and **Market Basket Analysis** with real-time visualizations and smooth animations.

## 🎯 Overview

This dashboard demonstrates advanced analytics capabilities through two main modules:

1. **Pricing Simulator** - Interactive dynamic pricing model with real-time predictions
2. **Market Basket Explorer** - Association analysis with confidence and support metrics

Built with modern web technologies and a premium dark mode design.

## ✨ Features

### Pricing Simulator
- **Interactive Sliders** - Adjust parameters (bedrooms, accommodates, availability, review score)
- **Real-time Predictions** - AI-powered price recommendations update instantly
- **Animated KPIs** - Smooth counter animations for MAE, R² Score, and predicted price
- **Visualizations** - Scatter plots and bar charts comparing predicted vs actual prices

### Market Basket Explorer
- **Product Association Heatmap** - Visual representation of product relationships
- **Interactive Product Selector** - Click to explore related products
- **Confidence & Support Metrics** - Understand association strength
- **Top Products Chart** - Bar chart of best-selling items
- **Association Table** - Detailed view of all product pairs

### Dashboard
- **Animated KPI Cards** - Beautiful counter animations for key metrics
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Premium Dark Mode** - Violet, cyan, and gold color palette
- **Smooth Transitions** - Fluid animations between sections

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + Custom CSS animations
- **Charts**: Recharts for interactive visualizations
- **UI Components**: shadcn/ui + Radix UI
- **Backend**: Express.js + tRPC
- **Database**: MySQL with Drizzle ORM
- **Deployment**: Manus Platform

## 🚀 Getting Started

### Prerequisites
- Node.js 22+
- pnpm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/fatma-analytics/Strategic-Analytics-Dashboard.git
cd Strategic-Analytics-Dashboard

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
strategic-analytics-dashboard/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AnimatedCounter.tsx      # Animated number counter component
│   │   │   ├── HeatmapChart.tsx         # Association heatmap visualization
│   │   │   └── ui/                      # shadcn/ui components
│   │   ├── pages/
│   │   │   ├── Home.tsx                 # Main layout with tab navigation
│   │   │   ├── PricingSimulator.tsx     # Pricing module
│   │   │   ├── MarketBasketExplorer.tsx # Market Basket module
│   │   │   └── About.tsx                # About section
│   │   ├── App.tsx                      # Router configuration
│   │   ├── index.css                    # Global styles & animations
│   │   └── main.tsx                     # React entry point
│   └── index.html
├── server/
│   ├── routers.ts                       # tRPC procedures
│   ├── db.ts                            # Database queries
│   └── _core/                           # Framework internals
├── drizzle/
│   └── schema.ts                        # Database schema
└── package.json
```

## 🎨 Design System

### Color Palette
- **Primary**: Violet (`#8B5CF6`) - Accent color
- **Secondary**: Green (`#22C55E`) - Success/Positive
- **Tertiary**: Cyan (`#06B6D4`) - Info
- **Gold**: `#FBBF24` - Highlights
- **Background**: Dark (`#0F172A`)

### Typography
- **Headings**: Sora (Google Fonts)
- **Body**: Inter (Google Fonts)

### Animations
- **Fade In**: 500ms ease-out
- **Slide Up**: 600ms ease-out
- **Glow**: 2s infinite ease-in-out
- **Counter**: 800-1200ms depending on value

## 📊 Key Metrics

### Pricing Model
- **MAE Score**: 12.32€ (Mean Absolute Error)
- **R² Score**: 0.90 (Model Accuracy)
- **Prediction Range**: €50 - €500+

### Market Basket Analysis
- **Total Associations**: 5 product pairs
- **Average Confidence**: ~62%
- **Support Range**: 40% - 75%

## 🔄 Data Flow

```
User Interaction (Sliders/Clicks)
    ↓
React State Update
    ↓
Real-time Calculation/Filtering
    ↓
Animated Counter Updates
    ↓
Chart Re-render (Recharts)
    ↓
Smooth Visual Feedback
```

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch
```

## 📦 Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 🎯 Next Steps

1. **Real Data Integration** - Connect to actual pricing and MBA datasets via APIs
2. **Theme Toggle** - Add dark/light mode switcher
3. **Network Graph** - Interactive force-directed graph for product associations
4. **Export Features** - Download reports and visualizations as PDF/CSV
5. **Advanced Filtering** - Filter associations by confidence/support thresholds

## 👨‍💼 About

**Author**: Fatma Hammami  
**Portfolio**: [GitHub - Fatma Analytics](https://github.com/fatma-analytics)

### Related Projects
- [AI-Driven Dynamic Pricing Model](https://github.com/fatma-analytics/AI-Driven-Dynamic-Pricing-Model)
- [Market Basket Analysis](https://github.com/fatma-analytics/Market-Basket-Analysis)

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests

## 📞 Contact

For questions or collaboration inquiries, reach out via GitHub.

---

**Built with ❤️ using React, Recharts, and Tailwind CSS**
