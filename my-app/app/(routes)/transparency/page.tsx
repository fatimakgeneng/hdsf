// app/transparency/page.tsx
import Link from "next/link";
import { FileText, Award, Download, PieChart, Shield } from "lucide-react";

export const metadata = {
  title: "Financial Transparency & Annual Reports – HSDF",
  description:
    "Access audited reports and see how your donations are utilized. We are committed to accountability.",
};

// Sample report data – replace with actual PDFs
const reports = [
  { year: "2024", title: "Annual Report 2024", file: "/reports/HSDF-Annual-Report-2024.pdf" },
  { year: "2023", title: "Annual Report 2023", file: "/reports/HSDF-Annual-Report-2023.pdf" },
  { year: "2022", title: "Annual Report 2022", file: "/reports/HSDF-Annual-Report-2022.pdf" },
];

const certificates = [
  { name: "Registration Certificate", icon: Award },
  { name: "Tax Exemption Certificate", icon: Shield },
  { name: "Charity Commission Approval", icon: FileText },
];

export default function TransparencyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transparency & <span className="text-primary">Accountability</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in openness. Every rupee is tracked, reported, and used to save lives.
          </p>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At HSDF, we are committed to the highest standards of financial transparency.
              <strong> 100% of public donations</strong> are utilized directly for patient care.
              Administrative and operational costs are covered by separate funding sources,
              ensuring that your contribution goes exactly where it's needed most.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Utilization */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">How Your Donations Are Used</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <PieChart className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-primary">80%</h3>
              <p className="text-gray-600">Patient Treatment<br/><span className="text-sm">(Transfusions, Medicines, Labs)</span></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <PieChart className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-primary">10%</h3>
              <p className="text-gray-600">Awareness & Prevention<br/><span className="text-sm">(Screening, Education)</span></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <PieChart className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-primary">10%</h3>
              <p className="text-gray-600">Administration<br/><span className="text-sm">(Covered by separate funding)</span></p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            *Based on fiscal year 2024 audited figures.
          </p>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4">Annual Reports</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Download our audited financial reports and annual activity summaries.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {reports.map((report) => (
              <a
                key={report.year}
                href={report.file}
                download
                className="bg-blue-50 p-6 rounded-xl hover:shadow-md transition group"
              >
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                  <Download className="w-5 h-5 text-gray-500 group-hover:text-primary transition" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{report.title}</h3>
                <p className="text-sm text-gray-600">Click to download PDF</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Certificates */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4">Compliance & Certifications</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We are registered and recognized by the relevant authorities.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certificates.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">View certificate</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-700">
              <strong>Registration No.:</strong> DO/SW/CDD/VA/NF/2003/43
            </p>
            <p className="text-gray-600 mt-2">Established 2003 | Karachi, Pakistan</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Our Finances?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            We're happy to provide more details. Contact us for any clarification.
          </p>
          <Link href="/contact" className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}