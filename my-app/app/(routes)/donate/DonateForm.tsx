// components/donate/DonateForm.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Calendar, Shield } from "lucide-react";

const donationTiers = [
  { label: "Sponsor a Blood Transfusion", amount: 15000, description: "Covers one transfusion session" },
  { label: "Sponsor a Month of Medicines", amount: 20000, description: "Provides essential chelation drugs" },
  { label: "Sponsor Full Monthly Treatment", amount: 45000, description: "Covers all treatment for one child" },
  { label: "Sponsor a Year of Treatment", amount: 540000, description: "Gives a child a full year of care" },
];

const impactItems = [
  { amount: 1000, description: "Lab tests for one child" },
  { amount: 3750, description: "One week of treatment" },
  { amount: 15000, description: "One life‑saving transfusion" },
];

export default function DonateForm() {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [recurring, setRecurring] = useState<"one-time" | "monthly" | "yearly">("one-time");
  const [isZakat, setIsZakat] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleTierSelect = (amt: number) => {
    setAmount(amt.toString());
    setCustomAmount("");
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(value);
    setAmount(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate payment gateway
    alert("Payment integration will be added later. Thank you for your intent to donate!");
  };

  return (
    <>
      {/* Form content – identical to previous, but without the <section> wrappers for the overall page */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Donation Type */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Choose Donation Type</h2>
          <div className="flex gap-4 mb-6">
            <button
              type="button"
              onClick={() => setRecurring("one-time")}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                recurring === "one-time"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              One-time
            </button>
            <button
              type="button"
              onClick={() => setRecurring("monthly")}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                recurring === "monthly"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setRecurring("yearly")}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                recurring === "yearly"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Zakat Checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="zakat"
            checked={isZakat}
            onChange={(e) => setIsZakat(e.target.checked)}
            className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
          />
          <label htmlFor="zakat" className="text-gray-700">
            This donation is for <strong>Zakat</strong>
          </label>
        </div>

        {/* Donation Tiers */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Select an Amount</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {donationTiers.map((tier, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleTierSelect(tier.amount)}
                className={`p-4 rounded-lg border-2 text-left transition ${
                  amount === tier.amount.toString()
                    ? "border-primary bg-blue-50"
                    : "border-gray-200 hover:border-primary/50"
                }`}
              >
                <p className="font-semibold text-lg">Rs. {tier.amount.toLocaleString()}</p>
                <p className="text-sm text-gray-600">{tier.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Amount */}
        <div>
          <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-1">
            Or enter a custom amount (PKR)
          </label>
          <input
            type="text"
            id="custom-amount"
            value={customAmount}
            onChange={handleCustomAmount}
            placeholder="e.g., 5000"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Donor Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Your Information</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                id="address"
                rows={2}
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full btn-primary py-4 text-lg">
          Donate {amount && `Rs. ${parseInt(amount).toLocaleString()}`}
        </button>

        <p className="text-sm text-gray-500 text-center">
          🔒 Your information is secure. Payment integration coming soon.
        </p>
      </form>
    </>
  );
}