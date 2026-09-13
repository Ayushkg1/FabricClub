import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import FeaturedServices from "@/components/FeaturedServices";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import GarmentCareProcess from "@/components/GarmentCareProcess";
import SpecialCare from "@/components/SpecialCare";
import Offers from "@/components/Offers";
import Pricing from "@/components/Pricing";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <FeaturedServices />
      <HowItWorks />
      <About />
      <WhyChooseUs />
      <GarmentCareProcess />
      <SpecialCare />
      <Offers />
      <Pricing />
      <WhatsAppCTA message="Send your pickup request on WhatsApp — we'll take it from there." />
      <Locations />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
