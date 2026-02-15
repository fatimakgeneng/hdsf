// app/about/page.tsx
import Image from "next/image";
import { FileCheck, Target, Eye, HeartHandshake, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About HSDF – Mission, Vision & History",
  description:
    "Learn about Help Social Development Foundation, our commitment to transparency, and our journey since 2003 serving thalassemia children.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-primary/10 to-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">HSDF</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to serving thalassemia children and vulnerable communities since 2003.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-xl">
              <Eye className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To build a society where every individual has equal access to education, skills, and opportunities, and where communities are empowered to live healthy, productive, and self‑reliant lives.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to improve the quality of life of vulnerable communities by: promoting education and awareness; providing vocational and life‑skills training; supporting health, social welfare, and community development programs; encouraging self‑reliance, inclusion, and long‑term social impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-primary">History</span>
          </h2>
          <div className="max-w-3xl mx-auto prose prose-lg text-gray-700">
            <p>
              Help Social Development Foundation (HSDF) was established in 2003 by a group of dedicated social workers in Karachi, Pakistan. For over two decades, we have worked tirelessly to uplift underserved communities through healthcare, education, and social welfare initiatives.
            </p>
            <p>
              Our flagship <strong>Red Blood Thalassemia Care Unit</strong> was launched to address the urgent needs of children suffering from this genetic disorder. Today, we support 60 registered patients and aim to reach 100 by the end of the year.
            </p>
            <p>
              HSDF is registered with the Government of Pakistan under registration number <strong>DO/SW/CDD/VA/NF/2003/43</strong> and operates with full transparency and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              {/* Placeholder for founder photo */}
              <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                <Users size={64} />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-4">Message from Our Founder</h2>
              <blockquote className="text-xl italic text-gray-700 border-l-4 border-primary pl-6">
                “Every child deserves a healthy start in life. At HSDF, we believe that no family should bear the burden of thalassemia alone. With your support, we can turn hope into healing.”
              </blockquote>
              <p className="mt-4 font-semibold">— [Founder Name], Founder, HSDF</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Commitment */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom text-center">
          <HeartHandshake className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Our Commitment to Transparency</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            We are committed to the highest standards of accountability. 100% of public donations are utilized for patient care, with administrative costs covered by separate funding. Annual audited reports are publicly available.
          </p>
          <Link href="/transparency" className="btn-primary">
            View Our Financial Reports
          </Link>
        </div>
      </section>

      {/* Legal Registration */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">Legal & Registration</h2>
          <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <FileCheck className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Registration Number:</p>
                <p className="text-gray-700">DO/SW/CDD/VA/NF/2003/43</p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <FileCheck className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Year of Establishment:</p>
                <p className="text-gray-700">2003</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FileCheck className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Area of Operation:</p>
                <p className="text-gray-700">Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team (optional) */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Dedicated Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-500">
                <Users size={48} />
              </div>
              <h3 className="font-semibold text-lg">Qualified Doctors</h3>
              <p className="text-sm text-gray-600">Providing medical care and supervision</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-500">
                <Users size={48} />
              </div>
              <h3 className="font-semibold text-lg">Trained Nurses</h3>
              <p className="text-sm text-gray-600">Administering transfusions and care</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-500">
                <Users size={48} />
              </div>
              <h3 className="font-semibold text-lg">Support Staff</h3>
              <p className="text-sm text-gray-600">Administration, housekeeping, security</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}