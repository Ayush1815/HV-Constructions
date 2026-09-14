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
          streetAddress: "House No. 1 Vedic Enclave, Near Amity University, Nijampur, Malhaur",
          addressLocality: "Lucknow",
          addressRegion: "Uttar Pradesh",
          postalCode: "226028",
          addressCountry: "IN",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.phone,
            contactType: "customer service",
            availableLanguage: ["English", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            telephone: siteConfig.secondaryPhone,
            contactType: "executive sales",
            availableLanguage: ["English", "Hindi"],
          },
        ],
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
