import { ArrowRight, Star } from "lucide-react";
import { Reveal } from "../ui/Reveal";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_80%,rgba(207,156,45,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(207,156,45,0.1),transparent_40%)]" />
      
      <Reveal className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          Let's Build the Future <span className="text-[var(--brand-gold)]">Together.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          From water infrastructure to high-rise buildings — bring us your vision. We deliver with engineering excellence and unyielding quality.
        </p>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/contact"
            className="shine-button relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--brand-gold)] px-8 py-4 text-sm font-black text-[#071122] shadow-[0_12px_32px_-12px_rgba(207,156,45,0.6)] transition hover:bg-amber-400 sm:w-auto hover:-translate-y-0.5"
          >
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight className="relative z-10 h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-400">
          <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-[var(--brand-gold)]" /> Engineering Expertise</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-[var(--brand-gold)]" /> Quality Execution</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-[var(--brand-gold)]" /> Timely Delivery</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-[var(--brand-gold)]" /> Complete Solutions</span>
        </div>
      </Reveal>
    </section>
  );
}
