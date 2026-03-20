import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function StatBox({ value, label, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    if (!isInView) return;
    
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    const suffix = value.replace(/[0-9]/g, '');
    
    let start = 0;
    const duration = 1500;
    const increment = numericValue / (duration / 16);
    
    const timer = setTimeout(() => {
      const animate = () => {
        start += increment;
        if (start < numericValue) {
          setDisplayValue(Math.floor(start).toLocaleString() + suffix);
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(numericValue.toLocaleString() + suffix);
        }
      };
      animate();
    }, delay);
    
    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <div 
      ref={ref}
      className="bg-bg-secondary border border-border rounded-xl p-6 text-center"
    >
      <div className="font-mono text-3xl font-bold text-accent-primary mb-1">
        {displayValue}
      </div>
      <div className="text-sm text-text-muted uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
