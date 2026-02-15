// components/sections/Partners.tsx
import Image from "next/image";
import { Award, FileCheck } from "lucide-react";

// Placeholder for partner logos. Replace with actual images when available.
const partners = [
  { name: "Government of Pakistan", logo: null },
  { name: "Thalassaemia International Federation", logo: null },
  { name: "Local Health Department", logo: null },
  // Add more as needed
];

export default function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Partners & Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognized and supported by reputable organizations.
          </p>
        </div>

        {/* Registration Badge */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-4 rounded-lg shadow-sm inline-flex items-center gap-3">
            <FileCheck className="text-primary w-8 h-8" />
            <div className="text-left">
              <p className="font-semibold">Registered Non-Profit</p>
              <p className="text-sm text-gray-600">Reg. No. DO/SW/CDD/VA/NF/2003/43</p>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex justify-center grayscale hover:grayscale-0 transition"
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              ) : (
                <div className="h-16 flex items-center justify-center text-gray-400 border rounded-md px-4">
                  {partner.name}
                </div>
              )}
            </div>
          ))}
          {/* Award badge */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 text-primary">
              <Award size={32} />
              <span className="text-sm font-medium">20+ Years of Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}