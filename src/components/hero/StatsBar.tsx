import { AnimatedCounter } from "../ui/AnimatedCounter";

export function StatsBar() {
  const stats = [
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 10, suffix: "M+", label: "Sq. Ft. Constructed" },
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 200, suffix: "+", label: "Team Members" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4 lg:grid-cols-4 w-full">
      {stats.map((stat, i) => (
        <div 
          key={i}
          className="flex flex-col items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-white/70 p-4 sm:p-5 text-center shadow-sm backdrop-blur-xl dark:bg-[var(--surface-dark-elevated)]/60 dark:border-white/10 transition-transform hover:-translate-y-0.5"
        >
          <div className="text-3xl font-black text-slate-900 dark:text-white mb-2">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[var(--brand-gold-muted)]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
