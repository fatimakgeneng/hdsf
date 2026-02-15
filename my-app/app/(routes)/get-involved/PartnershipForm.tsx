// components/get-involved/PartnershipForm.tsx
"use client";

import { useState } from "react";
import { Briefcase, Send } from "lucide-react";

const partnershipTypes = ["Financial Support", "In-kind Donations", "Employee Engagement", "Sponsorship", "Other"];

export default function PartnershipForm() {
  const [formData, setFormData] = useState({
    company: "",
    contactPerson: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partnership inquiry:", formData);
    setSubmitted(true);
    setFormData({
      company: "",
      contactPerson: "",
      email: "",
      phone: "",
      partnershipType: "",
      message: "",
    });
  };

  if (submitted) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
        <p className="text-gray-600">Our partnerships team will reach out shortly.</p>
        <button onClick={() => setSubmitted(false)} className="text-primary text-sm mt-4">
          Submit another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Briefcase size={20} className="text-primary" /> Corporate Partnership
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="cp-company" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name *
          </label>
          <input
            type="text"
            id="cp-company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="cp-contact" className="block text-sm font-medium text-gray-700 mb-1">
            Contact Person *
          </label>
          <input
            type="text"
            id="cp-contact"
            name="contactPerson"
            required
            value={formData.contactPerson}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="cp-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="cp-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="cp-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="cp-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="cp-type" className="block text-sm font-medium text-gray-700 mb-1">
            Partnership Type *
          </label>
          <select
            id="cp-type"
            name="partnershipType"
            required
            value={formData.partnershipType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select type</option>
            {partnershipTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cp-message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="cp-message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
          Submit Inquiry <Send size={18} />
        </button>
      </form>
    </div>
  );
}