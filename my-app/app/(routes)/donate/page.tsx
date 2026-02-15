// app/donate/page.tsx (or app/(routes)/donate/page.tsx)
import DonateForm from "./DonateForm";
import { Heart, Calendar, Shield } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Donate to Thalassemia Patients – HSDF",
  description:
    "Make a secure donation to support thalassemia children. One‑time, monthly, or Zakat options available.",
};

const impactItems = [
  { amount: 1000, description: "Lab tests for one child" },
  { amount: 3750, description: "One week of treatment" },
  { amount: 15000, description: "One life‑saving transfusion" },
];

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Donation <span className="text-primary">Saves Lives</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every contribution brings a child closer to a healthy, hopeful future.
          </p>
        </div>
      </section>

      {/* Main Donation Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Form */}
            <div className="lg:col-span-2">
              <DonateForm />
            </div>

            {/* Right: Impact Calculator & Info */}
            <div className="lg:col-span-1">
              <div className="bg-blue-50 p-6 rounded-xl sticky top-24">
                <h3 className="text-xl font-bold mb-4">Your Impact</h3>
                <div className="space-y-4 mb-6">
                  {impactItems.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700">{item.description}</span>
                      <span className="font-bold text-primary">Rs. {item.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  With your donation, you're not just giving money – you're giving a child a chance at life.
                </p>

                <hr className="my-6" />

                <h4 className="font-semibold mb-2">Why Donate to HSDF?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Shield size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>100% transparent – see how funds are used</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Directly helps children in need</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Recurring options for sustained impact</span>
                  </li>
                </ul>

                <Link href="/transparency" className="text-primary text-sm font-medium hover:underline mt-4 inline-block">
                  View our financial reports →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Give</h2>
          <p className="text-gray-600 mb-6">
            You can also donate via bank transfer or JazzCash/Easypaisa.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold">Bank Transfer</p>
              <p className="text-sm text-gray-600">IBAN: PK... (coming soon)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold">JazzCash</p>
              <p className="text-sm text-gray-600">Account: 0314-2834582</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}