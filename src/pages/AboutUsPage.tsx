import { useSeo } from "../hooks/useSeo";
import { AboutHero } from "../components/about/AboutHero";
import { CompanyStory } from "../components/about/CompanyStory";
import { CoreValues } from "../components/about/CoreValues";
import { CompanyFeatures } from "../components/about/CompanyFeatures";
import { Capabilities } from "../components/about/Capabilities";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { CtaBanner } from "../components/sections/CtaBanner";

export default function AboutUsPage() {
  useSeo({
    title: "About Us | HV Construction Pvt. Ltd.",
    description: "Learn about HV Construction's legacy, our commitment to quality, and how we build foundations for a better tomorrow.",
    path: "/about",
  });

  return (
    <div className="pt-24">
      <AboutHero />
      <CompanyStory />
      <CoreValues />
      <CompanyFeatures />
      <Capabilities />
      <TestimonialsSection />
      <CtaBanner />
    </div>
  );
}
