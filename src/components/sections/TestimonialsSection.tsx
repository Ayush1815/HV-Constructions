import { Star, Quote } from "lucide-react";
import { Reveal, SectionHeader } from "../ui/Reveal";
import { testimonials } from "../../data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-[var(--surface-light)] py-16 sm:py-24 dark:bg-[var(--surface-dark)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients Say"
          text="Don't just take our word for it. Hear from the partners and clients who trust us to build their future."
          align="center"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.1}>
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[var(--border-soft)] bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/60 dark:bg-slate-900">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="h-8 w-8 text-[var(--brand-gold)] opacity-50" />
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      Verified Client
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[var(--brand-gold)] text-[var(--brand-gold)]" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 italic text-base leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-[var(--border-soft)] flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-xs text-slate-700 dark:text-slate-200">
                    {testimonial.author.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {testimonial.role}, <span className="font-semibold text-[var(--brand-gold-text)]">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
