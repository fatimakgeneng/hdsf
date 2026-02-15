// components/sections/AboutThalassemiaBrief.tsx
import Link from "next/link";
import { Droplet, HeartPulse } from "lucide-react";

export default function AboutThalassemiaBrief() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="text-primary">Thalassemia</span>?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Thalassemia is an inherited blood disorder that reduces the production of hemoglobin, causing severe anemia. Patients require lifelong blood transfusions every 2–4 weeks to survive, along with chelation therapy to remove excess iron.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 border-primary">
              <p className="text-xl font-semibold text-primary mb-2">
                🌟 New Hope: 70–80% Curable!
              </p>
              <p className="text-gray-700">
                Recent research shows that a combination of innovative medicines and continuous treatment can cure 70–80% of thalassemia major patients within three years. HSDF is implementing this protocol in Pakistan.
              </p>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              <span className="font-bold">Monthly treatment cost:</span> Rs. 45,000 – 50,000 per child (transfusions, medicines, lab tests).
            </p>
            <Link href="/thalassemia" className="btn-outline inline-flex items-center gap-2">
              Learn More About Thalassemia
              <HeartPulse size={20} />
            </Link>
          </div>

          {/* Right: Icons/Visual */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-6 max-w-md">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Droplet size={48} className="text-primary mx-auto mb-3" />
                <h3 className="font-semibold">Blood Transfusions</h3>
                <p className="text-sm text-gray-600">Every 2–4 weeks</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <HeartPulse size={48} className="text-secondary mx-auto mb-3" />
                <h3 className="font-semibold">Chelation Therapy</h3>
                <p className="text-sm text-gray-600">Removes excess iron</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center col-span-2">
                <span className="text-3xl font-bold text-primary">70-80%</span>
                <p className="text-sm text-gray-600">Curable with 3‑year treatment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}