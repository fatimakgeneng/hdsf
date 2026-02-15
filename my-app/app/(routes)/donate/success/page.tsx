// app/donate/success/page.tsx
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function DonationSuccessPage() {
  return (
    <section className="py-16 bg-white min-h-[60vh] flex items-center">
      <div className="container-custom text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Thank You for Your Donation!</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your generosity will help provide life-saving treatment to thalassemia children. A receipt has been sent to your email.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/" className="btn-outline">Return Home</Link>
          <Link href="/stories" className="btn-primary">Read Patient Stories</Link>
        </div>
      </div>
    </section>
  );
}