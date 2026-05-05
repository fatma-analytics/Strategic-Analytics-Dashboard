import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

interface HeatmapDataPoint {
  product_a: string;
  product_b: string;
  support: number;
  confidence: number;
}

interface HeatmapChartProps {
  data: HeatmapDataPoint[];
}

export function HeatmapChart({ data }: HeatmapChartProps) {
  // Créer une matrice pour la heatmap
  const products = Array.from(new Set([...data.map(d => d.product_a), ...data.map(d => d.product_b)]));
  
  // Mapper les données pour le scatter plot
  const heatmapData = data.map((item, idx) => ({
    x: products.indexOf(item.product_a),
    y: products.indexOf(item.product_b),
    value: item.confidence,
    name: `${item.product_a} → ${item.product_b}`,
  }));

  // Fonction pour obtenir la couleur basée sur la confiance
  const getColor = (value: number) => {
    if (value >= 75) return 'rgb(139, 92, 246)'; // Violet - très fort
    if (value >= 60) return 'rgb(34, 197, 94)'; // Vert - fort
    if (value >= 45) return 'rgb(34, 197, 94)'; // Vert clair - moyen
    return 'rgb(100, 116, 139)'; // Gris - faible
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
        <XAxis 
          dataKey="x" 
          name="Product A" 
          type="number"
          domain={[0, products.length - 1]}
        />
        <YAxis 
          dataKey="y" 
          name="Product B" 
          type="number"
          domain={[0, products.length - 1]}
        />
        <Tooltip 
          cursor={{ strokeDasharray: '3 3' }}
          content={({ active, payload }) => {
            if (active && payload && payload[0]) {
              const data = payload[0].payload;
              return (
                <div className="bg-card border border-border rounded p-2 text-sm">
                  <p className="text-foreground">{data.name}</p>
                  <p className="text-accent">Confidence: {data.value}%</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Scatter name="Associations" data={heatmapData}>
          {heatmapData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.value)} />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
}
