import { siteConfig } from "../../config/site";
import { faqs } from "../../data/faqs";
import { JsonLd } from "./JsonLd";

export function OrganizationJsonLd() {
  return (
    <JsonLd
      id="organization"
      data={{
        "@context": "https://schema.org",
        "@type": ["Organization", "GeneralContractor"],
        name: siteConfig.name,
        description: siteConfig.tagline,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        areaServed: "IN",
        serviceType: [
          "Civil Construction",
          "Government Infrastructure",
          "Water Infrastructure",
          "Roads & Transportation",
          "Optical Fibre Infrastructure",
          "High-Rise Construction",
          "Building Construction",
          "Interior Design & Execution",
          "Turnkey Project Solutions",
        ],
      }}
    />
  );
}

export function FaqJsonLd() {
  return (
    <JsonLd
      id="faq"
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      }}
    />
  );
}
