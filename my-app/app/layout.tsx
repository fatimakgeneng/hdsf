// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyDonateButton from "@/components/common/StickyDonateButton";
import ExitIntentModal from "@/components/common/ExitIntentModal";
import UrgencyBanner from "@/components/common/UrgencyBanner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ["400", "600", "700"], 
  subsets: ["latin"], 
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: {
    default: "Help Social Development Foundation – Saving Thalassemia Children",
    template: "%s | HSDF",
  },
  description: "Support life-saving treatment for thalassemia children in Pakistan. Donate now to provide blood transfusions and medicines.",
  keywords: ["thalassemia", "donation", "charity", "Pakistan", "health", "NGO"],
  authors: [{ name: "HSDF" }],
  openGraph: {
    title: "Help Social Development Foundation",
    description: "Join us in curing thalassemia. 70-80% of cases can now be cured with 3 years of treatment.",
    url: "https://hsdf.org.pk", //-----------------------------------------------------------
    siteName: "HSDF",
    images: [
      {
        url: "/og-image.jpg", // place in public folder----------------------------------
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <UrgencyBanner />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyDonateButton />
        <ExitIntentModal />
      </body>
    </html>
  );
}