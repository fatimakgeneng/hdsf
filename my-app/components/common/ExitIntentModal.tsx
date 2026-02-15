// components/common/ExitIntentModal.tsx
"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export default function ExitIntentModal() {
  const [showModal, setShowModal] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShowModal(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      {/* Close button – placed outside the image, using primary color */}
      <button
        onClick={() => setShowModal(false)}
        className="fixed top-4 right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Close"
      >
        <X size={28} className="text-primary" />
      </button>

      {/* Image only – no container, no extra button */}
      <div className="relative max-w-4xl w-full h-auto flex items-center justify-center">
        <Image
          src="/exit-intent-modal.jpg"
          alt="Thalassemia Care Unit Information"
          width={1000}
          height={1414} // approximate aspect ratio; Next.js will optimize
          className="rounded-lg object-contain w-full h-auto max-h-[90vh]"
          priority
        />
      </div>
    </div>
  );
}