// components/sections/MonthlyDonorCTA.tsx
import Link from "next/link";
import { Calendar, Heart, Shield } from "lucide-react";

export default function MonthlyDonorCTA() {
  return (
    <section className="py-16 bg-linear-to-r from-primary/10 to-secondary/10">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Become a <span className="text-primary">Monthly Hero</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Just Rs. 3,750/month covers one week of treatment for a child. 
            Consistent support saves lives and gives families peace of mind.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Calendar className="text-primary w-10 h-10 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-1">Monthly Impact</h3>
              <p className="text-gray-600 text-sm">Your donation every month ensures uninterrupted care.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Heart className="text-secondary w-10 h-10 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-1">Sustain Hope</h3>
              <p className="text-gray-600 text-sm">Join a community of dedicated donors changing lives.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Shield className="text-primary w-10 h-10 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-1">Transparent Impact</h3>
              <p className="text-gray-600 text-sm">We'll update you on how your contributions are used.</p>
            </div>
          </div>

          <Link
            href="/donate?recurring=true"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Join Monthly Giving <Heart size={20} fill="currentColor" />
          </Link>

          <p className="text-sm text-gray-500 mt-4">
            *You can cancel or change your donation anytime.
          </p>
        </div>
      </div>
    </section>
  );
}