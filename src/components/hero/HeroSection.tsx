import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Building2, ShieldCheck, Award } from "lucide-react";
import { ButtonLink } from "../ui/ButtonLink";
import { Reveal } from "../ui/Reveal";
import { StatsBar } from "./StatsBar";
import { useRef } from "react";

export function HeroSection() {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const lineVariants = {
    hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
    show: (delay: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay,
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative overflow-hidden bg-[var(--surface-light)] text-slate-900 transition-colors duration-300 dark:bg-[var(--surface-dark)] dark:text-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_12%,rgba(207,156,45,0.09),transparent_32%),radial-gradient(circle_at_88%_18%,rgba(11,37,64,0.07),transparent_34%)] dark:bg-[radial-gradient(circle_at_18%_14%,rgba(228,189,96,0.13),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(28,110,126,0.12),transparent_30%)]" />

      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-4 pb-16 pt-28 sm:gap-12 sm:px-6 sm:pb-20 sm:pt-36 lg:min-h-[100svh] lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-16">

        {/* ── Left: Text Content ── */}
        <div className="relative z-10 flex w-full flex-col justify-center lg:col-span-6 xl:col-span-6">
          <motion.div
            initial={reducedMotion ? false : "hidden"}
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {/* Badge */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-slate-700 shadow-sm backdrop-blur-xl dark:bg-white/5 dark:text-[var(--brand-gold-muted)]"
            >
              <Building2 className="h-3.5 w-3.5 text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)]" />
              Infrastructure &amp; Civil Construction
            </motion.p>

            {/* Headline */}
            <h1
              aria-label="Building Infrastructure. Creating Spaces. Shaping the Future."
              className="mt-6 text-[2rem] font-black leading-[1.18] tracking-tight text-slate-900 sm:text-4xl sm:leading-[1.16] lg:text-5xl xl:text-[3.35rem] dark:text-white"
            >
              <span aria-hidden="true" className="block overflow-visible pb-1 pt-0.5">
                <motion.span
                  variants={lineVariants}
                  custom={reducedMotion ? 0 : 0.1}
                  initial="hidden"
                  animate="show"
                  className="block"
                >
                  Building Infrastructure.
                </motion.span>
              </span>

              <span aria-hidden="true" className="mt-1 block overflow-visible pb-1 pt-0.5">
                <motion.span
                  variants={lineVariants}
                  custom={reducedMotion ? 0 : 0.55}
                  initial="hidden"
                  animate="show"
                  className="block"
                >
                  Creating Spaces.
                </motion.span>
              </span>

              <span aria-hidden="true" className="mt-1 block overflow-visible pb-4 pt-0.5">
                <motion.span
                  variants={lineVariants}
                  custom={reducedMotion ? 0 : 1.15}
                  initial="hidden"
                  animate="show"
                  className="block"
                >
                  Shaping the Future.
                </motion.span>
              </span>
            </h1>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 1.6 } },
              }}
              className="mt-2 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300"
            >
              Diversified civil engineering, government utilities, Jal Jeevan Mission, high-rise towers, road networks, and turnkey interior environments executed with uncompromising precision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.75 } },
              }}
              className="mt-8 flex flex-col w-full gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap"
            >
              <ButtonLink to="/expertise" className="w-full sm:w-auto">Explore Our Expertise</ButtonLink>
              <ButtonLink to="/contact" variant="secondary" className="w-full sm:w-auto">
                Get a Quote
              </ButtonLink>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Right: Visual Photo Showcase & Stats ── */}
        <div className="relative z-10 flex w-full flex-col gap-6 lg:col-span-6 xl:col-span-6">
          <Reveal delay={0.2}>
            <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-3xl border-2 border-[var(--border-soft)] shadow-2xl group bg-slate-950">
              <motion.img
                style={{ y: reducedMotion ? 0 : y }}
                src="/media/infrastructure/highway-interchange-aerial.webp"
                alt="HV Construction Infrastructure Projects"
                className="h-[120%] w-full -mt-[10%] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              
              {/* Overlay Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-md border border-white/10">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  Govt. &amp; Private EPC Contractor
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--brand-gold)] mb-1">
                  <Award className="h-4 w-4" />
                  <span>National Civil Infrastructure Project</span>
                </div>
                <p className="text-sm font-bold text-white drop-shadow">
                  Highways, Water Networks, High-Rise &amp; Turnkey Development
                </p>
              </div>
            </div>
          </Reveal>

          {/* Stats Cards beneath image */}
          <Reveal delay={0.35}>
            <StatsBar />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
