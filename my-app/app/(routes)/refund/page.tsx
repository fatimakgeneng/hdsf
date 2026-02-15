// app/refund/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Refund Policy – HSDF",
  description: "Our policy on donation refunds and cancellations.",
};

export default function RefundPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/10 to-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Refund <span className="text-primary">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding our policy on donation refunds.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl prose prose-lg">
          <h2>Donation Refund Policy</h2>
          <p>
            At Help Social Development Foundation (HSDF), we are grateful for your generous support. Donations are generally non-refundable, as they are used immediately to provide life-saving treatment to thalassemia children.
          </p>

          <h2>When Refunds May Be Considered</h2>
          <p>
            We understand that mistakes can happen. If you believe an error was made in your donation (e.g., duplicate transaction, incorrect amount), please contact us within <strong>7 days</strong> of the donation date. We will investigate and may issue a refund at our discretion.
          </p>

          <h2>Recurring Donations</h2>
          <p>
            You may cancel a recurring donation at any time by contacting us. If a recurring donation was processed after you requested cancellation, we will refund that specific transaction.
          </p>

          <h2>How to Request a Refund</h2>
          <p>
            To request a refund or cancellation, please contact us with your donation details:
          </p>
          <ul>
            <li>Email: info@hsdf.org.pk</li>
            <li>Phone: 0314-2834582</li>
            <li>In person: R-406, Ahsanabad No.5, Karachi</li>
          </ul>
          <p>Please include your full name, donation date, amount, and payment method used.</p>

          <h2>Processing Time</h2>
          <p>
            Approved refunds will be processed within 7-10 business days and credited back to the original payment method.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this policy, please reach out to us.
          </p>
        </div>
      </section>
    </>
  );
}