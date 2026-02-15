// app/thalassemia/page.tsx
import Link from "next/link";
import { Droplet, Pill, FlaskRound as Flask, AlertCircle, HeartPulse } from "lucide-react";

export const metadata = {
  title: "Thalassemia Information – Causes, Treatment & Hope",
  description:
    "Understand thalassemia, its treatment costs, and the latest research making it 70‑80% curable. Learn about challenges in Pakistan and how you can help.",
};

export default function ThalassemiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-primary/10 to-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Understanding <span className="text-primary">Thalassemia</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A genetic blood disorder that requires lifelong care – but with new research, there is hope.
          </p>
        </div>
      </section>

      {/* What is Thalassemia */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">What is Thalassemia?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Thalassemia is an inherited blood disorder characterized by reduced production of hemoglobin, the protein in red blood cells that carries oxygen. This leads to severe anemia, fatigue, and organ damage.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Patients with thalassemia major require regular blood transfusions every 2–4 weeks to survive. Without treatment, children often fail to thrive and may not survive past early childhood.
              </p>
              <p className="text-lg text-gray-700">
                According to the <strong>World Health Organization (WHO)</strong>, thalassemia is one of the most common genetic disorders worldwide, with a high prevalence in the Mediterranean, Middle East, and South Asia, including Pakistan.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-blue-50 p-8 rounded-xl max-w-md">
                <Droplet size={64} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-center mb-2">Key Facts</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Inherited from both parents</li>
                  <li>• Causes severe anemia</li>
                  <li>• Requires lifelong transfusions</li>
                  <li>• Affects millions globally</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Transfusions? */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">The Role of Blood Transfusions</h3>
                <p className="text-gray-700 mb-4">
                  Regular transfusions provide healthy red blood cells, temporarily alleviating anemia. However, they lead to iron overload, which damages the heart, liver, and endocrine glands.
                </p>
                <h3 className="text-xl font-semibold mb-3 mt-6">Chelation Therapy</h3>
                <p className="text-gray-700">
                  To remove excess iron, patients need chelation therapy – either oral medication or subcutaneous infusions. This is essential for long-term survival.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Why Patients Need Regular Care</h2>
              <p className="text-lg text-gray-700">
                Without consistent transfusions and chelation, children suffer from fatigue, organ failure, and stunted growth. With proper care, they can lead relatively normal lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Cost Breakdown */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Treatment Cost per Patient (Monthly)</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Droplet className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Blood Transfusions</h3>
              <p className="text-2xl font-bold text-primary">Rs. 15,000</p>
              <p className="text-sm text-gray-600">Twice monthly</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Pill className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Chelation Medicines</h3>
              <p className="text-2xl font-bold text-primary">Rs. 20,000</p>
              <p className="text-sm text-gray-600">IV / oral</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Flask className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Lab Tests</h3>
              <p className="text-2xl font-bold text-primary">Rs. 5,000</p>
              <p className="text-sm text-gray-600">Every 3–4 months</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <AlertCircle className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Other Medical</h3>
              <p className="text-2xl font-bold text-primary">Rs. 5,000</p>
              <p className="text-sm text-gray-600">Supplements, etc.</p>
            </div>
          </div>
          <p className="text-center text-xl font-semibold mt-8">
            Total: Rs. 45,000 – 50,000 per child per month
          </p>
        </div>
      </section>

      {/* New Hope */}
      <section className="py-16 bg-linear-to-r from-green-50 to-blue-50">
        <div className="container-custom text-center">
          <HeartPulse className="w-16 h-16 text-secondary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">New Hope: 70–80% Curable</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Recent research indicates that a combination of innovative medicines and continuous treatment can cure 70–80% of thalassemia major patients within three years. HSDF is at the forefront of implementing these protocols in Pakistan, giving children a chance at a normal life.
          </p>
          <Link href="/donate" className="btn-primary">
            Support a Child’s Cure
          </Link>
        </div>
      </section>

      {/* Challenges in Pakistan */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">Challenges in Pakistan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Low Awareness</h3>
              <p className="text-gray-700">Many couples are unaware of carrier status; premarital screening is not widespread.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">High Treatment Cost</h3>
              <p className="text-gray-700">Monthly expenses of Rs. 45,000+ are unaffordable for most families.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Blood Shortages</h3>
              <p className="text-gray-700">Safe blood supplies are often insufficient, especially during emergencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">Prevention & Screening</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
            Thalassemia can be prevented through carrier screening and genetic counseling. The <strong>Thalassaemia International Federation</strong> recommends premarital screening programs, especially in high-risk populations.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/get-involved" className="btn-outline">
              Join Awareness Campaigns
            </Link>
            <Link href="/donate" className="btn-primary">
              Donate for Screening
            </Link>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-8 bg-white border-t">
        <div className="container-custom text-sm text-gray-500">
          <p>Sources: World Health Organization (WHO), Thalassaemia International Federation (TIF), HSDF medical team.</p>
        </div>
      </section>
    </>
  );
}