// components/sections/CountUp.tsx
"use client";

import { useEffect, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number; // in seconds
  formatter?: (value: number) => string;
}

export default function CountUp({ end, duration = 2, formatter }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{formatter ? formatter(count) : count}</>;
}