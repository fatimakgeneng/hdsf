// app/(routes)/get-involved/page.tsx
import { Heart, Droplet, Briefcase } from "lucide-react";
import VolunteerForm from "./VolunteerForm";
import BloodDriveForm from "./BloodDriveForm";
import PartnershipForm from "./PartnershipForm";

export const metadata = {
  title: "Get Involved – Volunteer, Donate Blood, or Partner | HSDF",
  description:
    "Join us in the fight against thalassemia. Volunteer, register for blood drives, or become a corporate partner.",
};

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get <span className="text-primary">Involved</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            There are many ways to make a difference. Join us in saving lives.
          </p>
        </div>
      </section>

      {/* Options Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Volunteer */}
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Volunteer</h2>
              <p className="text-gray-600 mb-4">
                Donate your time and skills to support our patients and operations.
              </p>
            </div>

            {/* Blood Donation */}
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Droplet className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Donate Blood</h2>
              <p className="text-gray-600 mb-4">
                Regular blood donations ensure our children receive transfusions on time.
              </p>
            </div>

            {/* Corporate Partnership */}
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Corporate Partnership</h2>
              <p className="text-gray-600 mb-4">
                Partner with us to create sustainable impact and fulfill CSR goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Sign Up Today</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <VolunteerForm />
            <BloodDriveForm />
            <PartnershipForm />
          </div>
        </div>
      </section>
    </>
  );
}