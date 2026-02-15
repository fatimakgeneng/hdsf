// components/common/StickyDonateButton.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyDonateButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <Link
        href="/donate"
        className="btn-primary flex items-center gap-2 shadow-lg text-lg px-8 py-4"
      >
        Donate Now
      </Link>
    </div>
  );
}