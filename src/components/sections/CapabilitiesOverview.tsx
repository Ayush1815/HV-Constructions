import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeader } from "../ui/Reveal";

const columns = [
  {
    title: "Infrastructure",
    items: ["Government Projects", "Water & Jal Jeevan", "Roads & Highways", "Telecom & Optical Fibre", "Bridges & Tunnels"],
  },
  {
    title: "Buildings",
    items: ["High-Rise Construction", "Commercial Complexes", "Residential Towers", "Institutional Buildings", "Industrial Sheds"],
  },
  {
    title: "Private Development",
    items: ["Luxury Villas", "Independent Houses", "Apartment Buildings", "Real Estate Projects", "Property Redevelopment"],
  },
  {
    title: "Interiors & Finishes",
    items: ["Turnkey Interiors", "Corporate Offices", "Retail Spaces", "Hospitality Interiors", "Custom Fit-outs"],
  },
];

export function CapabilitiesOverview() {
  return (
    <section id="capabilities" className="relative py-16 sm:py-24 border-t border-[var(--border-soft)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Our Scope"
            title="Our Project Capabilities"
            text="Comprehensive solutions spanning from ground-up civil engineering to specialized interior fit-outs."
            className="mb-0 max-w-2xl"
          />
          <Reveal delay={0.2}>
            <Link 
              to="/expertise" 
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-gold-muted)] hover:text-[var(--brand-gold-hover)] dark:text-[var(--brand-gold)] dark:hover:text-amber-300 transition-colors"
            >
              View Full Expertise <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {columns.map((col, i) => (
            <Reveal key={col.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-[var(--border-soft)] bg-white/50 p-6 shadow-sm dark:bg-[var(--surface-dark-elevated)]/50 dark:border-white/10">
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-5">{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                      <span className="mr-2.5 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-gold-muted)] dark:bg-[var(--brand-gold)] opacity-80" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
