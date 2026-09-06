import { Link } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";
import { expertiseAreas } from "../data/expertise";
import { Reveal, SectionHeader } from "../components/ui/Reveal";
import { CtaBanner } from "../components/sections/CtaBanner";
import { ArrowRight } from "lucide-react";

export default function ExpertisePage() {
  useSeo({
    title: "Our Expertise | HV Construction Pvt. Ltd.",
    description: "Explore our comprehensive construction and infrastructure solutions, from civil engineering to turnkey projects.",
    path: "/expertise",
  });

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-[var(--border-soft)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(207,156,45,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(228,189,96,0.1),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Our Expertise"
            text="Comprehensive construction & infrastructure solutions tailored for excellence, durability, and national impact."
            align="center"
          />
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.id} delay={index * 0.08}>
                  <Link
                    to={`/expertise/${area.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-white dark:bg-slate-900 transition-all hover:-translate-y-1.5 hover:shadow-2xl dark:hover:shadow-black/60"
                  >
                    {/* Image Header with Badge Overlay */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <img
                        src={area.image}
                        alt={area.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                      
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="inline-flex items-center rounded-lg bg-slate-950/70 backdrop-blur-md px-2.5 py-1 text-xs font-black text-[var(--brand-gold)] border border-white/10">
                          {area.number}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 dark:bg-slate-900/90 shadow-md backdrop-blur-md"
                          style={{ color: area.accentColor }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-lg font-bold text-white leading-snug drop-shadow-md">
                          {area.title}
                        </h3>
                      </div>
                    </div>

                    <div className="h-1 w-full" style={{ backgroundColor: area.accentColor }} />
                    
                    <div className="p-6 flex flex-col flex-1">
                      <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
                        {area.tagline}
                      </p>
                      
                      <div className="mt-auto flex items-center font-bold text-sm" style={{ color: area.accentColor }}>
                        Explore capabilities
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
