import { Reveal, SectionHeader } from "../ui/Reveal";
import { AnimatedCounter } from "../ui/AnimatedCounter";

const stats = [
  { label: "Projects Completed", value: 500, suffix: "+" },
  { label: "Sq Ft Built (Millions)", value: 10, suffix: "M+" },
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Team Size", value: 200, suffix: "+" },
];

const storyHighlights = [
  {
    image: "/media/infrastructure/bridge-pier-construction.webp",
    title: "Major Infrastructure & Bridges",
    subtitle: "Public works engineered to endure for decades"
  },
  {
    image: "/media/water/twin-transmission-pipelines.webp",
    title: "Community Water Distribution",
    subtitle: "Pipelines supporting national development schemes"
  },
  {
    image: "/media/high-rise/curved-skyscraper-aerial.webp",
    title: "High-Rise & Modern Buildings",
    subtitle: "Precision structural framing shaping city skylines"
  }
];

export function CompanyStory() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-[var(--border-soft)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <SectionHeader 
              eyebrow="Our Story"
              title="Building foundations for tomorrow."
              text="From our humble beginnings, HV Construction has grown into a premier construction and infrastructure development company. Driven by an unwavering commitment to quality, safety, and precision, we have successfully delivered complex projects across diverse sectors."
              align="left"
            />
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                Our legacy is built on the strong relationships we have forged with our clients, partners, and communities. We continuously innovate to meet the demands of modern infrastructure while staying true to our core values of integrity and excellence.
              </p>
            </Reveal>
          </div>
          
          <div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, idx) => (
                <Reveal key={stat.label} delay={0.2 + idx * 0.08}>
                  <div className="rounded-2xl border border-[var(--border-soft)] bg-white dark:bg-slate-900 p-6 shadow-sm text-center">
                    <div className="text-3xl sm:text-4xl font-black text-[var(--brand-gold)] mb-2">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Real project visual strip */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {storyHighlights.map((item, idx) => (
            <Reveal key={idx} delay={0.3 + idx * 0.1}>
              <div className="group overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-white dark:bg-slate-900 shadow-md">
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
