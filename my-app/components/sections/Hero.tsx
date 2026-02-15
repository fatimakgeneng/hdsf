// components/sections/Hero.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Give the Gift of Life –{" "}
            <span className="text-primary">Help Thalassemia Children Thrive</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            With new research, 70–80% of thalassemia major cases can now be cured through a 3‑year treatment protocol. Your support makes it possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/donate" className="btn-primary text-center">
              Donate Now <ArrowRight className="inline ml-2" size={20} />
            </Link>
            <Link href="/thalassemia" className="btn-outline text-center">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      {/* Optional background image */}
      <div className="absolute inset-0 -z-10 opacity-10" style={{ backgroundImage: "url('/images/hero-bg.jpg')", backgroundSize: "cover" }} />
    </section>
  );
}