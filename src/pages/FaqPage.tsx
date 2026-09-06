import { useSeo } from "../hooks/useSeo";
import { FaqJsonLd } from "../components/seo/SiteJsonLd";
import { FaqSection } from "../components/sections/FaqSection";
import { CtaBanner } from "../components/sections/CtaBanner";

export default function FaqPage() {
  useSeo({
    title: "FAQ | HV Construction Pvt. Ltd.",
    description:
      "Answers about HV Construction's capabilities, project types, turnkey solutions, safety, quality standards, and how we work with government and private clients.",
    path: "/faq",
  });

  return (
    <div className="pt-24">
      <FaqJsonLd />
      <FaqSection />
      <CtaBanner />
    </div>
  );
}
