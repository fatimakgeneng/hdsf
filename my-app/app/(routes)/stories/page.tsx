// app/stories/page.tsx
import { patientStories } from "@/lib/data/stories";
import StoryCard from "@/components/stories/StoryCard";
import { Heart } from "lucide-react";

export const metadata = {
  title: "Patient Stories – Thalassemia Warriors | HSDF",
  description:
    "Read inspiring stories of children fighting thalassemia and see how your donations make a difference.",
};

export default function StoriesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/10 to-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Patient <span className="text-primary">Stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the brave children whose lives you can transform.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {patientStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container-custom text-center">
          <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Be a Part of Their Story</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Your donation can rewrite the future for a child with thalassemia.
          </p>
          <a href="/donate" className="btn-primary">
            Donate Now
          </a>
        </div>
      </section>
    </>
  );
}