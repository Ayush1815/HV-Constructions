import { Ruler, HeartHandshake, ShieldCheck, HardHat } from "lucide-react";
import { Reveal, SectionHeader } from "../ui/Reveal";

const features = [
  {
    title: "Engineering Precision",
    text: "Accurate planning, technical supervision, and precision execution to ensure structures meet the highest standards.",
    Icon: Ruler,
  },
  {
    title: "Trusted Partner",
    text: "Long-term relationships built on reliability, transparency, and collaborative project management.",
    Icon: HeartHandshake,
  },
  {
    title: "Quality Driven",
    text: "Using premium materials, skilled workmanship, and systematic quality control for lasting durability.",
    Icon: ShieldCheck,
  },
  {
    title: "Safety First",
    text: "Safety is an integral part of every project, ensuring the well-being of our team and stakeholders.",
    Icon: HardHat,
  },
];

export function CompanyFeatures() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-[var(--border-soft)] bg-[var(--surface-light-alt)] dark:bg-[var(--surface-dark)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          eyebrow="Our Edge"
          title="Why Choose HV Construction?"
          text="We bring technical expertise and a commitment to excellence to every site, ensuring your vision is realized seamlessly."
          align="left"
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.Icon;
            return (
              <Reveal key={feature.title} delay={index * 0.1}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-gold-muted)]/20 text-[var(--brand-gold-muted)] dark:bg-[var(--brand-gold)]/10 dark:text-[var(--brand-gold)]">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
