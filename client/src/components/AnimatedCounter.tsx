import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: number | string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1000,
  decimals = 2,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Si la valeur est une string, afficher directement
    if (typeof value === 'string') {
      setDisplayValue(value as any);
      return;
    }

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = value;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const current = startValue + (endValue - startValue) * progress;
      setDisplayValue(parseFloat(current.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, decimals]);

  return (
    <span className="font-bold">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
