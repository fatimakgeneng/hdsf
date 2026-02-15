// components/sections/Testimonials.tsx
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed",
    role: "Father of a patient",
    quote: "HSDF gave my son a second chance at life. The care and compassion they provide is unmatched. Without their support, we couldn't afford the treatment.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mrs. Xyz",
    role: "Monthly donor",
    quote: "I've seen firsthand how every rupee is used to help children. They are truly transparent and dedicated to their mission. I'm proud to be a monthly donor.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Khalid",
    role: "Volunteer physician",
    quote: "The team at HSDF works tirelessly to ensure children receive timely transfusions and medications. It's inspiring to see their commitment.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What People <span className="text-primary">Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from those who have experienced our work firsthand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}