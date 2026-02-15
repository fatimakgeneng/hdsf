// components/sections/ImpactStats.tsx
"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import CountUp from "./CountUp"; // we'll create a simple CountUp component

const stats = [
  { label: "Patients in Care", value: 60, suffix: "+" },
  { label: "Blood Transfusions Monthly", value: 120, suffix: "+" },
  { label: "Children Awaiting Registration", value: 50, suffix: "+" },
  { label: "Avg. Monthly Cost per Patient", value: 45000, prefix: "Rs. ", format: true },
];

function formatNumber(num: number): string {
  return num.toLocaleString("en-PK");
}

export default function ImpactStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.prefix || ""}
                {hasAnimated ? (
                  <CountUp end={stat.value} duration={2} formatter={formatNumber} />
                ) : (
                  "0"
                )}
                {stat.suffix || ""}
              </div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}