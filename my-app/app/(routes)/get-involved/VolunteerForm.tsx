// components/get-involved/VolunteerForm.tsx
"use client";

import { useState } from "react";
import { Heart, Send } from "lucide-react";

const interestAreas = [
  "Patient Support",
  "Awareness Campaigns",
  "Fundraising",
  "Administrative Help",
  "Events",
  "Other",
];

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send to server action
    console.log("Volunteer form:", formData);
    setSubmitted(true);
    // Reset form
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
  };

  if (submitted) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
        <p className="text-gray-600">We'll contact you soon about volunteer opportunities.</p>
        <button onClick={() => setSubmitted(false)} className="text-primary text-sm mt-4">
          Submit another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Heart size={20} className="text-primary" /> Volunteer
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="vol-name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="vol-name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="vol-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="vol-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="vol-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="vol-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="vol-interest" className="block text-sm font-medium text-gray-700 mb-1">
            Area of Interest *
          </label>
          <select
            id="vol-interest"
            name="interest"
            required
            value={formData.interest}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select an area</option>
            {interestAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="vol-message" className="block text-sm font-medium text-gray-700 mb-1">
            Message (optional)
          </label>
          <textarea
            id="vol-message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
          Submit <Send size={18} />
        </button>
      </form>
    </div>
  );
}