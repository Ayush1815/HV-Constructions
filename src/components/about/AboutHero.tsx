import { Reveal } from "../ui/Reveal";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-36 sm:pb-24 border-b border-[var(--border-soft)]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(30,58,138,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(30,58,138,0.1),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Mission copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)] mb-4">
                Our Mission &amp; Vision
              </p>
              <h1 className="text-balance text-4xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
                Engineering Excellence. Reliable Execution. Built to Last.
              </h1>
              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
                At HV Construction Private Limited, we believe every project is more than a structure—it is an investment in the future. Our expertise encompasses infrastructure development, civil construction, utility projects, government works, residential and commercial construction, high-rise buildings, optical fibre infrastructure and interior execution.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Visual Photo */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2} className="relative aspect-square w-full max-w-[460px] mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-navy)]/20 to-[var(--brand-gold)]/20 rounded-[2.5rem] -z-10 blur-xl" />
              <div className="w-full h-full rounded-[2.5rem] border-2 border-[var(--border-soft)] shadow-2xl overflow-hidden relative group">
                <img
                  src="/media/turnkey/turnkey-epc-project-management.webp"
                  alt="HV Construction Engineers on site"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-gold)]/90 px-3 py-1 text-xs font-black text-slate-950 mb-2">
                    15+ Years of Trust
                  </div>
                  <p className="text-sm font-bold text-white drop-shadow">
                    Disciplined Civil Engineering &amp; Turnkey Management
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
