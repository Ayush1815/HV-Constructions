import { company } from "../../data/company";
import { Reveal, SectionHeader } from "../ui/Reveal";
import { ShieldCheck, HardHat, Scale, Clock, Activity, Map, Wrench } from "lucide-react";

const icons = [
  Map, // Diverse Construction Expertise
  Wrench, // Integrated Execution
  ShieldCheck, // Quality Focus
  HardHat, // Safety First
  Activity, // Project Management
  Scale, // Client-Centric Approach
  Clock, // Built for the Long Term
];

export function WhyHVSection() {
  return (
    <section id="why-hv" className="relative overflow-hidden border-t border-[var(--border-soft)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The HV Advantage"
          title="Why HV Construction?"
          text="We combine deep engineering expertise with a commitment to quality and safety to deliver exceptional results."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {company.differentiators.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={item.title} delay={index * 0.05} className="flex h-full">
                <div className="flex flex-col h-full rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface-light-elevated)] p-6 shadow-sm dark:bg-white/5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
