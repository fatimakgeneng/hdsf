// app/stories/[slug]/page.tsx
import { notFound } from "next/navigation";
import { patientStories } from "@/lib/data/stories";
import Image from "next/image";
import Link from "next/link";
import { Heart, Calendar, Droplet } from "lucide-react";
import ProgressBar from "@/components/ui/ProgressBar";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const story = patientStories.find((s) => s.slug === slug);
  if (!story) return { title: "Story Not Found" };
  return {
    title: `${story.name}'s Story – Thalassemia Warrior | HSDF`,
    description: story.story.substring(0, 160),
  };
}

export default async function StoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const story = patientStories.find((s) => s.slug === slug);
  if (!story) notFound();

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Link href="/stories" className="text-primary hover:underline mb-6 inline-block">
            ← Back to all stories
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Image & Details */}
            <div>
              <div className="relative aspect-square bg-gray-200 rounded-xl overflow-hidden mb-6">
                {story.imageUrl ? (
                  <Image src={story.imageUrl} alt={story.name} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Heart size={64} />
                  </div>
                )}
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Treatment Details</h3>
                <ul className="space-y-2 text-gray-700">
                  {story.diagnosisAge && (
                    <li className="flex items-start gap-2">
                      <Calendar size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Diagnosed at:</strong> {story.diagnosisAge}</span>
                    </li>
                  )}
                  {story.treatmentNeeds && (
                    <li className="flex items-start gap-2">
                      <Droplet size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Treatment needs:</strong> {story.treatmentNeeds}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Right: Story & Funding */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {story.name}, {story.age}
              </h1>
              <p className="text-gray-600 mb-6">{story.location}</p>

              <div className="prose max-w-none text-gray-700 mb-8">
                <p>{story.fullStory || story.story}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Funding Progress</h3>
                <ProgressBar current={story.currentFunding} goal={story.fundingGoal} showPercentage className="mb-4" />
                <p className="text-gray-600 mb-6">
                  <span className="font-bold">Rs. {story.currentFunding.toLocaleString()}</span> raised of{" "}
                  <span className="font-bold">Rs. {story.fundingGoal.toLocaleString()}</span> goal
                </p>
                <Link href="/donate" className="btn-primary w-full text-center">
                  Donate to {story.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}