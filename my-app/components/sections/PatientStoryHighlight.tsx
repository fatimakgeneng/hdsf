// components/sections/PatientStoryHighlight.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
import ProgressBar from "@/components/ui/ProgressBar";

export default function PatientStoryHighlight() {
  // Example data from PDFs
  const patient = {
    name: "Xyz",
    age: 7,
    story: "Xyz dreams of becoming a doctor. Diagnosed with thalassemia major at 6 months, she needs bi-weekly blood transfusions and daily chelation therapy. Her father is a daily wage worker and struggles to afford the treatment. With your support, Xyz can stay healthy and continue her education.",
    goal: 540000, // Rs. 540,000 for one year
    current: 120000,
    imageUrl: null, // No image provided yet, will use placeholder
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Patient <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the brave children fighting thalassemia. Your donations give them hope and a chance at a healthy life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-blue-50 rounded-2xl p-6 md:p-8">
          {/* Left: Image */}
          <div className="flex justify-center">
            {patient.imageUrl ? (
              <Image
                src={patient.imageUrl}
                alt={patient.name}
                width={400}
                height={400}
                className="rounded-lg object-cover shadow-lg"
              />
            ) : (
              <div className="w-full max-w-md aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                <Heart size={64} className="text-primary/30" />
              </div>
            )}
          </div>

          {/* Right: Story */}
          <div>
            <h3 className="text-2xl font-bold mb-2">{patient.name}, {patient.age} years old</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">{patient.story}</p>

            <div className="mb-6">
              <ProgressBar
                current={patient.current}
                goal={patient.goal}
                showPercentage={true}
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/stories/xyz"
                className="btn-outline inline-flex items-center gap-2"
              >
                Read Full Story <ArrowRight size={18} />
              </Link>
              <Link
                href="/donate"
                className="btn-primary inline-flex items-center gap-2"
              >
                Donate to Xyz <Heart size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Link to all stories */}
        <div className="text-center mt-12">
          <Link href="/stories" className="text-primary font-semibold hover:underline">
            View All Patient Stories →
          </Link>
        </div>
      </div>
    </section>
  );
}