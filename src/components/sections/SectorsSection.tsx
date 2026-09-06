import { sectors } from "../../data/sectors";
import { Reveal, SectionHeader } from "../ui/Reveal";

export function SectorsSection() {
  return (
    <section id="sectors" className="relative overflow-hidden border-t border-[var(--border-soft)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Where We Work"
          title="Industries & Sectors We Serve"
          text="Delivering specialized construction and infrastructure solutions across a wide range of industries."
          align="center"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
          {sectors.map((sector, index) => {
            const Icon = sector.Icon;
            return (
              <Reveal key={sector.name} delay={index * 0.03}>
                <div className="group flex items-center gap-2.5 rounded-full border border-[var(--border-soft)] bg-white/50 px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-md transition-all hover:border-[var(--brand-gold)] hover:bg-white hover:text-slate-950 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white cursor-default">
                  <Icon className="h-4 w-4 text-[var(--brand-gold-muted)] group-hover:text-[var(--brand-gold)] dark:text-slate-400 dark:group-hover:text-[var(--brand-gold)] transition-colors" />
                  <span>{sector.name}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
