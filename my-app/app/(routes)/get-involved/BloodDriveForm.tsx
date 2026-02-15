// components/get-involved/BloodDriveForm.tsx
"use client";

import { useState } from "react";
import { Droplet, Send } from "lucide-react";

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export default function BloodDriveForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    location: "Karachi",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Blood drive registration:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", bloodGroup: "", location: "Karachi" });
  };

  if (submitted) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <h3 className="text-xl font-bold text-primary mb-2">Thank You, Hero!</h3>
        <p className="text-gray-600">We'll contact you with the next blood drive details.</p>
        <button onClick={() => setSubmitted(false)} className="text-primary text-sm mt-4">
          Register another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Droplet size={20} className="text-primary" /> Blood Donation
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="bd-name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="bd-name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="bd-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="bd-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="bd-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="bd-phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="bd-blood" className="block text-sm font-medium text-gray-700 mb-1">
            Blood Group *
          </label>
          <select
            id="bd-blood"
            name="bloodGroup"
            required
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select blood group</option>
            {bloodGroups.map((bg) => (
              <option key={bg} value={bg}>
                {bg}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bd-location" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Drive Location
          </label>
          <input
            type="text"
            id="bd-location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Karachi (default)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
          Register <Send size={18} />
        </button>
      </form>
    </div>
  );
}