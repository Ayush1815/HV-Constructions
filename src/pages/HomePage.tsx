import { useSeo } from "../hooks/useSeo";
import { HeroSection } from "../components/hero/HeroSection";
import { ServiceCarousel } from "../components/service-carousel/ServiceCarousel";
import { ApproachSection } from "../components/sections/ApproachSection";
import { CapabilitiesOverview } from "../components/sections/CapabilitiesOverview";
import { WhyHVSection } from "../components/sections/WhyHVSection";
import { CoreValues } from "../components/about/CoreValues";
import { SectorsSection } from "../components/sections/SectorsSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { FaqSection } from "../components/sections/FaqSection";
import { InquiryFormSection } from "../components/sections/InquiryFormSection";
import { InteriorSpotlightSection } from "../components/sections/InteriorSpotlightSection";
import { CtaBanner } from "../components/sections/CtaBanner";

export default function HomePage() {
  useSeo({
    title: "HV Construction | Building Infrastructure. Creating Spaces.",
    description:
      "Diversified construction & infrastructure solutions across civil, government, high-rise, utility & interior projects.",
    path: "/",
  });

  return (
    <>
      <HeroSection />
      <ServiceCarousel 
        title="Our Expertise" 
        copy="Comprehensive construction & infrastructure solutions" 
      />
      <InteriorSpotlightSection />
      <ApproachSection />
      <CapabilitiesOverview />
      <WhyHVSection />
      <CoreValues />
      <SectorsSection />
      <TestimonialsSection />
      <FaqSection />
      <InquiryFormSection />
      <CtaBanner />
    </>
  );
}
