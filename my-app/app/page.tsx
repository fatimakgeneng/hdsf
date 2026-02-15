// app/page.tsx
import Hero from "@/components/sections/Hero";
import ImpactStats from "@/components/sections/ImpactStats";
import AboutThalassemiaBrief from "@/components/sections/AboutThalassemiaBrief";
import PatientStoryHighlight from "@/components/sections/PatientStoryHighlight";
import MonthlyDonorCTA from "@/components/sections/MonthlyDonorCTA";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <AboutThalassemiaBrief />
       <PatientStoryHighlight />
       <MonthlyDonorCTA />
       <Testimonials />
       <Partners />
      {/* Other sections will be added here */}
    </>
  );
}