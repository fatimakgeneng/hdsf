// components/common/UrgencyBanner.tsx
"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-accent text-white py-2 px-4 text-center relative">
      <p className="text-sm md:text-base">
        ⚠️ <strong>Urgent:</strong> 50 children are awaiting registration.{" "}
        <Link href="/donate" className="underline font-semibold hover:no-underline">
          Sponsor a child today
        </Link>
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white"
        aria-label="Close"
      >
        <X size={18} />
      </button>
    </div>
  );
}