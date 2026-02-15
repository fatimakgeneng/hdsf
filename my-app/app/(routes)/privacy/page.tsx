// app/privacy/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy – HSDF",
  description: "How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/10 to-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we handle your information.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl prose prose-lg">
          <h2>Introduction</h2>
          <p>
            Help Social Development Foundation (HSDF) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or interact with us.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Make a donation</li>
            <li>Sign up for our newsletter</li>
            <li>Volunteer or register for blood drives</li>
            <li>Contact us via forms or email</li>
          </ul>
          <p>This information may include your name, email address, phone number, mailing address, and payment details (processed securely by third-party payment processors).</p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process donations and send receipts</li>
            <li>Communicate with you about our programs and impact</li>
            <li>Respond to your inquiries and requests</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Sharing Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to others. We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving you, as long as those parties agree to keep this information confidential.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@hsdf.org.pk.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:<br />
            Email: info@hsdf.org.pk<br />
            Phone: 0314-2834582<br />
            Address: R-406, Ahsanabad No.5, Karachi
          </p>

          <p className="text-sm text-gray-500 mt-8">Effective Date: February 15, 2026</p>
        </div>
      </section>
    </>
  );
}