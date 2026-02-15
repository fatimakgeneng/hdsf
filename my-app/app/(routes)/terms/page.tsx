// app/terms/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions – HSDF",
  description: "Terms of use for our website and donation services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/10 to-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using our website.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl prose prose-lg">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using the HSDF website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our site.
          </p>

          <h2>Donations</h2>
          <p>
            All donations made to HSDF are voluntary and non-refundable. If you believe an error has occurred, please contact us within 7 days, and we will investigate.
          </p>
          <p>
            For recurring donations, you may cancel at any time by contacting us. Refunds for recurring donations will be considered on a case-by-case basis.
          </p>

          <h2>Use of Website</h2>
          <p>
            You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the site.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of HSDF and protected by copyright laws. You may not reproduce, distribute, or transmit any content without our written permission.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not responsible for the content or privacy practices of those sites.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, HSDF shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of this website.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of Pakistan. Any disputes shall be resolved in the courts of Karachi.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the website after changes constitutes acceptance of the new Terms.
          </p>

          <p className="text-sm text-gray-500 mt-8">Effective Date: February 15, 2026</p>
        </div>
      </section>
    </>
  );
}