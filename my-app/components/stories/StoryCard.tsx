// components/stories/StoryCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import ProgressBar from "@/components/ui/ProgressBar";
import type { PatientStory } from "@/lib/data/stories";

interface StoryCardProps {
  story: PatientStory;
}

export default function StoryCard({ story }: StoryCardProps) {
  const percentage = Math.min(Math.round((story.currentFunding / story.fundingGoal) * 100), 100);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative h-48 bg-gray-200">
        {story.imageUrl ? (
          <Image src={story.imageUrl} alt={story.name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <Heart size={48} />
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-1">{story.name}, {story.age}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{story.story}</p>
        <div className="mb-3">
          <ProgressBar current={story.currentFunding} goal={story.fundingGoal} showPercentage />
        </div>
        <Link
          href={`/stories/${story.slug}`}
          className="text-primary font-medium hover:underline inline-flex items-center gap-1"
        >
          Read Full Story →
        </Link>
      </div>
    </div>
  );
}