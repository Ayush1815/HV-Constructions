import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Building2 } from "lucide-react";

type BrandMarkProps = {
  animationKey?: string;
  variant?: "header" | "footer";
};

export function BrandMark({ animationKey = "static", variant = "header" }: BrandMarkProps) {
  return (
    <Link
      to="/"
      className={
        variant === "header"
          ? "navbar-brand flex min-h-12 items-center gap-3"
          : "flex items-center gap-3 bg-slate-200 -mx-4 px-4 py-4 sm:mx-0 sm:rounded-xl sm:px-5"
      }
      aria-label="HV Construction home"
    >
      <motion.span
        key={animationKey}
        className="brand-mark-content flex items-center gap-3"
        initial={{ opacity: 0, y: -7 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="brand-mark-logo-surface flex shrink-0 items-center justify-center rounded-lg bg-[var(--brand-navy)] p-2">
          <Building2 className="h-7 w-7 text-[var(--brand-gold)]" strokeWidth={2.2} />
        </span>
        <span className="leading-none pt-1">
          <span className="block text-[1.25rem] font-extrabold tracking-tight text-slate-950 dark:text-white">
            HV Construction
          </span>
          <span className="block mt-0.5 text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-400 max-[430px]:hidden">
            Building Infrastructure · Creating Spaces
          </span>
        </span>
      </motion.span>
    </Link>
  );
}
