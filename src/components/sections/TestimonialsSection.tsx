import { motion } from "motion/react";
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
          description="Don't just take our word for it. Hear from the partners and clients who trust us to build their future."
          align="center"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.1}>
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[var(--border-soft)] bg-white p-8 shadow-sm transition-all hover:shadow-md dark:bg-slate-900">
                <div>
                  <Quote className="h-8 w-8 text-[var(--brand-gold)] opacity-50 mb-6" />
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[var(--brand-gold)] text-[var(--brand-gold)]" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 italic text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-[var(--border-soft)]">
                  <p className="font-bold text-slate-900 dark:text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {testimonial.role}, <span className="font-medium">{testimonial.company}</span>
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
